package com.employee.management.service;

import com.employee.management.builder.EmployeeBuilder;
import com.employee.management.entity.EducationDetailsEntity;
import com.employee.management.entity.EmployeeBaseEntity;
import com.employee.management.entity.EmployeeMainEntity;
import com.employee.management.exceptions.ServiceException;
import com.employee.management.model.EducationDetails;
import com.employee.management.model.EmployeeBaseDetails;
import com.employee.management.repository.EducationDetailsRepository;
import com.employee.management.repository.EmployeeBaseRepository;
import com.employee.management.repository.EmployeeMainRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

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
    EducationDetailsRepository educationDetailsRepository;

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

        ModelMapper modelMapper = new ModelMapper();
        EmployeeBaseEntity employeeBaseEntity = modelMapper.map(employeeBaseDetails,EmployeeBaseEntity.class);

        employeeBuilder.setEmployeeName(employeeBaseEntity,employeeMainEntity);
        EducationDetails educationDetails = employeeBaseDetails.getEducationDetails();
        if(Optional.ofNullable(educationDetails).isPresent()) {
            employeeBaseEntity.setEducationDetails(saveEducationDetails(educationDetails, employeeId));
        }

        employeeBaseRepository.saveAndFlush(employeeBaseEntity);
    }

    private List<EducationDetailsEntity> saveEducationDetails(@NotNull EducationDetails educationDetails, int employeeId) throws JsonProcessingException {
        Map<String,Map<String,String>> primaryEducation = educationDetails.getPrimaryEducation();
        if(primaryEducation.size() < 3){
            throw new ServiceException("Employee doesn't have required education level");
        }
        List<EducationDetailsEntity> educationDetailsEntities = new ArrayList<>();
        for(Map.Entry<String,Map<String,String>> education : primaryEducation.entrySet()){
            String educationLevel = education.getKey();
            for(Map.Entry<String,String> dataType : education.getValue().entrySet()) {
                EducationDetailsEntity educationDetailsEntity = EducationDetailsEntity.builder()
                        .employeeId(employeeId)
                        .educationLevel(educationLevel)
                        .dataType(dataType.getKey())
                        .dataValue(dataType.getValue())
                        .build();
                educationDetailsEntities.add(educationDetailsEntity);
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
        educationDetailsEntities.add(educationDetailsEntity);

        return educationDetailsEntities;
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

        try {
            employeeBaseRepository.deleteById(employeeId);
            educationDetailsRepository.removeEmployeeEduDetails(employeeId);
            employeeMainRepository.deleteById(employeeId);
        }catch (Exception e) {
            throw new ServiceException("Employee removal is unsuccessful due to " + e.getMessage());
        }
        log.info("Employee removed successfully");
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
