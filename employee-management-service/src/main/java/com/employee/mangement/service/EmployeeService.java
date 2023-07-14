package com.employee.mangement.service;

import com.employee.mangement.exceptions.ServiceException;
import com.employee.mangement.model.EducationDetails;
import com.employee.mangement.model.EmployeeBaseDetails;
import com.employee.mangement.model.EmployeeMainDetails;
import com.employee.mangement.model.builder.EmployeeBuilder;
import com.employee.mangement.repository.*;
import com.employee.mangement.repository.persistence.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
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
    public EmployeeMainDetails createNewEmployeeId(EmployeeMainDetails employeeMainDetails){
        int employeeId = employeeMainDetails.getEmployeeId();
        if (employeeId == 0) {
            Integer lastEmployeeId = employeeMainRepository.getLastEmployeeId();
            employeeId = (lastEmployeeId == null ? 0 : lastEmployeeId) + 1;
        }
        EmployeeMainEntity employeeMainEntity = EmployeeMainEntity.builder()
                .employeeId(employeeId)
                .firstName(employeeMainDetails.getFirstName())
                .middleName(employeeMainDetails.getMiddleName())
                .lastName(employeeMainDetails.getLastName())
                .build();
        employeeMainDetails.setEmployeeId(employeeId);
        employeeMainRepository.save(employeeMainEntity);
        log.info("EmployeeService createNewEmployeeId completed");
        return employeeMainDetails;
    }

    @SneakyThrows
    public void saveEmployeeDetails(EmployeeBaseDetails employeeBaseDetails){
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

    private void saveEducationDetails(EducationDetails educationDetails, int employeeId) throws JsonProcessingException {
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
        HRManagersEntity hrManagersEntity = hrManagersRepository.findFirstByEmployeeId(employeeId);
        ReportingManagersEntity reportingManagersEntity = reportingManagersRepository.findFirstByEmployeeId(employeeId);
        EmployeeMainEntity employeeMainEntity = employeeMainRepository.findFirstByEmployeeId(employeeId);
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

    private void updateTotalEmployees(EmployeeBaseEntity employeeBaseEntity, int changeValue){

        jobTitlesRepository.updateTotalEmployees(employeeBaseEntity.getRoleId(), changeValue);
        departmentsRepository.updateTotalEmployees(employeeBaseEntity.getDepartmentId(), changeValue);
        locationsRepository.updateTotalEmployees(employeeBaseEntity.getLocationId(), changeValue);
        projectsRepository.updateTotalEmployees(employeeBaseEntity.getProjectId(), changeValue);
        log.info("Total employee values updated successfully");
    }

}
