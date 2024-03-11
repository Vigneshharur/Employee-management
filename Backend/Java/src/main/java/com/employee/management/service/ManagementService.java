package com.employee.management.service;

import com.employee.management.entity.*;
import com.employee.management.exceptions.ServiceException;
import com.employee.management.model.DepartmentsDetails;
import com.employee.management.model.JobDetails;
import com.employee.management.model.LocationDetails;
import com.employee.management.model.ProjectDetails;
import com.employee.management.repository.*;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class ManagementService {

    @Autowired
    DepartmentsRepository departmentsRepository;

    @Autowired
    EmployeeMainRepository employeeMainRepository;

    @Autowired
    HRManagersRepository hrManagersRepository;

    @Autowired
    ReportingManagersRepository reportingManagersRepository;

    @Autowired
    LocationsRepository locationsRepository;

    @Autowired
    ProjectsRepository projectsRepository;

    @Autowired
    JobTitlesRepository jobTitlesRepository;

    @Autowired
    EmployeeBaseRepository employeeBaseRepository;

    @SneakyThrows
    public void saveDepartmentDetails(DepartmentsDetails departmentsDetails){
        int departmentId = departmentsDetails.getDepartmentId();
        if(departmentId == 0) {
            Integer lastDepartmentId = departmentsRepository.getLastDepartmentId();
            departmentId = (lastDepartmentId == null ? 0 : lastDepartmentId) + 1;
        }
        DepartmentsEntity departmentsEntity = DepartmentsEntity.builder()
                .departmentId(departmentId)
                .departmentCode(departmentsDetails.getDepartmentCode())
                .departmentName(departmentsDetails.getDepartmentName())
                .build();
        departmentsRepository.save(departmentsEntity);
        log.info("ManagementService Departments details saved successfully");
    }

    @SneakyThrows
    public void addNewHR(int employeeId){
        EmployeeMainEntity employeeMainEntity = employeeMainRepository.findFirstByEmployeeId(employeeId);
        HRManagersEntity hrManagersEntity = HRManagersEntity.builder()
                .employeeId(employeeId)
                .firstName(employeeMainEntity.getFirstName())
                .middleName(employeeMainEntity.getMiddleName())
                .lastName(employeeMainEntity.getLastName())
                .build();
        hrManagersRepository.save(hrManagersEntity);
        log.info("ManagementService HR added successfully");
    }

    @SneakyThrows
    public void addNewReportingManagers(int employeeId){
        EmployeeMainEntity employeeMainEntity = employeeMainRepository.findFirstByEmployeeId(employeeId);
        ReportingManagersEntity reportingManagersEntity = ReportingManagersEntity.builder()
                .employeeId(employeeId)
                .firstName(employeeMainEntity.getFirstName())
                .middleName(employeeMainEntity.getMiddleName())
                .lastName(employeeMainEntity.getLastName())
                .build();
        reportingManagersRepository.save(reportingManagersEntity);
        log.info("ManagementService Reporting manager added successfully");
    }

    @SneakyThrows
    public void saveLocationDetails(LocationDetails locationDetails){
        int locationId = locationDetails.getLocationId();
        if(locationId == 0) {
            Integer lastLocationId = locationsRepository.getLastLocationId();
            locationId =  (Optional.ofNullable(lastLocationId).isPresent() ? lastLocationId : 0) + 1;
        }
        LocationsEntity locationsEntity = LocationsEntity.builder()
                .locationId(locationId)
                .city(locationDetails.getCity())
                .country(locationDetails.getCountry())
                .state(locationDetails.getState())
                .zipCode(locationDetails.getZipCode())
                .address1(locationDetails.getAddress1())
                .address2(locationDetails.getAddress2())
                .build();
        locationsRepository.save(locationsEntity);
        log.info("ManagementService Departments details saved successfully");
    }

    @SneakyThrows
    public void saveProjectDetails(ProjectDetails projectDetails){
        int projectId = projectDetails.getProjectId();
        if(projectId == 0){
            Integer lastProjectId = projectsRepository.getLastProjectId();
            projectId = (lastProjectId == null ? 0 : lastProjectId) + 1;
        }
        ProjectsEntity projectsEntity = ProjectsEntity.builder()
                .projectId(projectId)
                .projectTitle(projectDetails.getProjectTitle())
                .client(projectDetails.getClient())
                .build();
        projectsRepository.save(projectsEntity);
        log.info("ManagementService project details saved successfully");
    }

    @SneakyThrows
    public void saveJobDetails(JobDetails jobDetails){
        int jobId = jobDetails.getJobId();
        if(jobId == 0){
            Integer lastJobId = jobTitlesRepository.getLastJobId();
            jobId = (lastJobId == null ? 0 : lastJobId) + 1;
        }
        JobTitlesEntity jobTitlesEntity = JobTitlesEntity.builder()
                .jobId(jobId)
                .jobTitle(jobDetails.getJobTitle())
                .build();
        jobTitlesRepository.save(jobTitlesEntity);
        log.info("ManagementService job details saved successfully");
    }

    public void removeReportingManager(int employeeId){
        try {
            reportingManagersRepository.deleteById(employeeId);
        }catch (Exception e){
            List<Integer> employeesReporting = employeeBaseRepository.getAllEmployeesReporting(employeeId);
            throw new ServiceException("These employees still reporting to this manager employees "+employeesReporting);
        }
        log.info("Reporting manager removed successfully");
    }

    public void removeHrManager(int employeeId){
        hrManagersRepository.deleteById(employeeId);
        log.info("HR removed successfully");
    }

    public void removeProject(int projectId){
        try {
            projectsRepository.deleteById(projectId);
        }catch (Exception e){
            List<Integer> employeesReporting = employeeBaseRepository.getAllEmployeesForProject(projectId);
            throw new ServiceException("These employees still belongs to this project "+employeesReporting);
        }
        log.info("Project removed successfully");
    }

    public void removeLocation(int locationId){
        try {
            locationsRepository.deleteById(locationId);
        }catch (Exception e){
            List<Integer> employees = employeeBaseRepository.getAllEmployeesForLocation(locationId);
            throw new ServiceException("These employees still belongs to this location "+employees);
        }
        log.info("Location removed successfully");
    }

    public void removeJobTitle(int jobId){
        try {
            jobTitlesRepository.deleteById(jobId);
        }catch (Exception e){
            List<Integer> employeesReporting = employeeBaseRepository.getAllEmployeesForRole(jobId);
            throw new ServiceException("These employees still belongs to this job title "+employeesReporting);
        }
        log.info("Job title removed successfully");
    }

    public void removeDepartment(int departmentId){
        try {
            departmentsRepository.deleteById(departmentId);
        }catch (Exception e){
            List<Integer> employees = employeeBaseRepository.getAllEmployeesForDepartment(departmentId);
            throw new ServiceException("These employees still belongs to this department. "+employees);
        }
        log.info("Department removed successfully");
    }
}
