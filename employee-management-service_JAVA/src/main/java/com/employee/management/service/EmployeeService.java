package com.employee.management.service;

import com.employee.management.entity.*;
import com.employee.management.exceptions.ServiceException;
import com.employee.management.model.EducationDetails;
import com.employee.management.model.EmployeeBaseDetails;
import com.employee.management.builder.EmployeeBuilder;
import com.employee.management.repository.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@Slf4j
public class EmployeeService {

    @Autowired
    EmployeeMainRepository employeeMainRepository;

    @Autowired
    EmployeeBaseRepository employeeBaseRepository;

    @Autowired
    EmployeeBuilder employeeBuilder;

    @Autowired
    JobTitlesRepository jobTitlesRepository;

    @Autowired
    DepartmentsRepository departmentsRepository;

    @Autowired
    LocationsRepository locationsRepository;

    @Autowired
    ProjectsRepository projectsRepository;

    @Autowired
    EducationDetailsRepository educationDetailsRepository;

    @Autowired
    HRManagersRepository hrManagersRepository;

    @Autowired
    ReportingManagersRepository reportingManagersRepository;

    @SneakyThrows
    public EmployeeMainEntity createNewEmployeeId(@NotNull EmployeeMainEntity employee){
        employeeMainRepository.save(employee);
        log.info("EmployeeService createNewEmployeeId completed");
        return employee;
    }

    @SneakyThrows
    public void saveEmployeeDetails(@NotNull EmployeeBaseDetails employeeBaseDetails){
        int employeeId = employeeBaseDetails.getEmployeeId();

        EmployeeMainEntity employeeMainEntity = employeeMainRepository.findFirstByEmployeeId(employeeId);
        if(Optional.ofNullable(employeeMainEntity).isEmpty()){
            throw new ServiceException("Invalid EmployeeId");
        }
        int age = employeeBuilder.calculateAge(employeeBaseDetails.getDateOfBirth());
        employeeBaseDetails.setAge(age);

        ModelMapper modelMapper = new ModelMapper();
        EmployeeBaseEntity employeeBaseEntity = modelMapper.map(employeeBaseDetails,EmployeeBaseEntity.class);

        employeeBuilder.setEmployeeName(employeeBaseEntity,employeeMainEntity);
        Integer employeePresent = employeeBaseRepository.isEmployeePresent(employeeId);

        saveEducationDetails(employeeBaseDetails.getEducationDetails(), employeeId);
        employeeBaseRepository.save(employeeBaseEntity);
        if(employeePresent == null || employeePresent != employeeId){
            updateTotalEmployees(employeeBaseEntity, 1);
        }
    }

    private void saveEducationDetails(@NotNull EducationDetails educationDetails, int employeeId) throws JsonProcessingException {
        Map<String,Map<String,String>> primaryEducation = educationDetails.getPrimaryEducation();
        if(primaryEducation.size() < 3){
            throw new ServiceException("Employee doesn't have required education level");
        }

        for(Map.Entry<String,Map<String,String>> education : primaryEducation.entrySet()){
            String educationLevel = education.getKey();
            for(Map.Entry<String,String> dataType : education.getValue().entrySet()){
                EducationDetailsEntity educationDetailsEntity = EducationDetailsEntity.builder()
                        .employeeId(employeeId)
                        .educationLevel(educationLevel)
                        .dataType(dataType.getKey())
                        .dataValue(dataType.getValue())
                        .build();
                educationDetailsRepository.save(educationDetailsEntity);

            }
        }

        Map<String,Map<String,String>> higherEducation = educationDetails.getHigherEducation();
        String json = new ObjectMapper().writeValueAsString(higherEducation);
        EducationDetailsEntity educationDetailsEntity = EducationDetailsEntity.builder()
                .employeeId(employeeId)
                .educationLevel("OTHERS")
                .dataType("OTHERS")
                .dataValue(json)
                .build();
        educationDetailsRepository.save(educationDetailsEntity);
    }

    public void removeEmployee(int employeeId){
        EmployeeBaseEntity employeeBaseEntity = employeeBaseRepository.findFirstByEmployeeId(employeeId);
        EmployeeMainEntity employeeMainEntity = employeeMainRepository.findFirstByEmployeeId(employeeId);
        if(employeeBaseEntity == null){
            if(employeeMainEntity == null )
            {
                throw new ServiceException("No employee present with this id");
            }
            employeeMainRepository.deleteById(employeeId);
            return;
        }

        HRManagersEntity hrManagersEntity = hrManagersRepository.findFirstByEmployeeId(employeeId);
        ReportingManagersEntity reportingManagersEntity = reportingManagersRepository.findFirstByEmployeeId(employeeId);
        updateTotalEmployees(employeeBaseEntity, -1);

        try {
            employeeBaseRepository.deleteById(employeeId);
            hrManagersRepository.deleteById(employeeId);
            reportingManagersRepository.deleteById(employeeId);
            educationDetailsRepository.removeEmployeeEduDetails(employeeId);
            employeeMainRepository.deleteById(employeeId);
        }catch (Exception e) {
            employeeMainRepository.save(employeeMainEntity);
            if(reportingManagersEntity != null){
                reportingManagersRepository.save(reportingManagersEntity);
            }
            if(hrManagersEntity != null){
                hrManagersRepository.save(hrManagersEntity);
            }
            employeeBaseRepository.save(employeeBaseEntity);
            updateTotalEmployees(employeeBaseEntity, 1);
            throw new ServiceException("Employee removal is unsuccessful due to " + e.getMessage());
        }
        log.info("Employee removed successfully");
    }

    private void updateTotalEmployees(@NotNull EmployeeBaseEntity employeeBaseEntity, int changeValue){

        jobTitlesRepository.updateTotalEmployees(employeeBaseEntity.getRoleId(), changeValue);
        departmentsRepository.updateTotalEmployees(employeeBaseEntity.getDepartmentId(), changeValue);
        locationsRepository.updateTotalEmployees(employeeBaseEntity.getLocationId(), changeValue);
        projectsRepository.updateTotalEmployees(employeeBaseEntity.getProjectId(), changeValue);
        log.info("Total employee values updated successfully");
    }

    @SneakyThrows
    public EmployeeBaseDetails getEmployeeDetails(int employeeId){
        EmployeeBaseEntity employeeBaseEntity = employeeBaseRepository.findFirstByEmployeeId(employeeId);
        if(employeeBaseEntity == null){
            throw new ServiceException("Invalid EmployeeId");
        }
        ModelMapper modelMapper = new ModelMapper();
        EmployeeBaseDetails employeeBaseDetails = modelMapper.map(employeeBaseEntity,EmployeeBaseDetails.class);
        getEducationDetails(employeeBaseDetails);
        return employeeBaseDetails;
    }

    @SneakyThrows
    private void getEducationDetails(EmployeeBaseDetails employeeBaseDetails) {
        List<EducationDetailsEntity> educationDetailsEntities = educationDetailsRepository.findAllByEmployeeId(employeeBaseDetails.getEmployeeId());
        Map<String,Map<String,String>> primaryEducation = new HashMap<>(3);
        Map<String,String> classX = new HashMap<>(4,1.0f);
        Map<String,String> classXII = new HashMap<>(4, 1.0f);
        Map<String,String> bachelorCollege = new HashMap<>(4, 1.0f);
        Map<String,Map<String,String>> higherEducation = null;
        for(EducationDetailsEntity educationDetails : educationDetailsEntities){
            String educationLevel = educationDetails.getEducationLevel();
            switch (educationLevel) {
                case "CLASS-X" -> {
                    classX.put(educationDetails.getDataType(), educationDetails.getDataValue());
                    if (classX.size() == 4) {
                        primaryEducation.put(educationLevel, classX);
                    }
                }
                case "CLASS-XII" -> {
                    classXII.put(educationDetails.getDataType(), educationDetails.getDataValue());
                    if (classX.size() == 4) {
                        primaryEducation.put(educationLevel, classXII);
                    }
                }
                case "BCLR-CLG" -> {
                    bachelorCollege.put(educationDetails.getDataType(), educationDetails.getDataValue());
                    if (classX.size() == 4) {
                        primaryEducation.put(educationLevel, bachelorCollege);
                    }
                }
                default ->
                        higherEducation = new ObjectMapper().readValue(educationDetails.getDataValue(), Map.class);
            }
        }
        EducationDetails educationDetails = EducationDetails.builder()
                .primaryEducation(primaryEducation)
                .higherEducation(higherEducation).build();
        employeeBaseDetails.setEducationDetails(educationDetails);
    }
}
