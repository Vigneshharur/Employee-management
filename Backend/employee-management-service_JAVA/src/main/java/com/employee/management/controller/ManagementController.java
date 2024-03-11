package com.employee.management.controller;

import com.employee.management.model.DepartmentsDetails;
import com.employee.management.model.JobDetails;
import com.employee.management.model.LocationDetails;
import com.employee.management.model.ProjectDetails;
import com.employee.management.service.ManagementService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@Slf4j
public class ManagementController {

    @Autowired
    ManagementService managementService;

    @PostMapping("/department")
    public ResponseEntity<String> saveDepartmentDetails(@RequestBody DepartmentsDetails departmentsDetails){
        log.info("DepartmentsController addNewDepartment incoming request");
        managementService.saveDepartmentDetails(departmentsDetails);
        return ResponseEntity.ok("Department details Successfully saved");
    }

    @PostMapping("/hr/{employeeId}")
    public String addNewHR(@PathVariable int employeeId){
        log.info("Request to add new HR in ManagementController");
        managementService.addNewHR(employeeId);
        return "HR added Successfully";
    }

    @PostMapping("/rm/{employeeId}")
    public String addNewReportingManager(@PathVariable int employeeId){
        log.info("Request to add new Reporting Manager in ManagementController");
        managementService.addNewReportingManagers(employeeId);
        return "Reporting Manager added Successfully";
    }

    @PostMapping("/location")
    public ResponseEntity<String> saveLocationsDetails(@RequestBody LocationDetails locationDetails){
        log.info("DepartmentsController saveLocationsDetails incoming request");
        managementService.saveLocationDetails(locationDetails);
        return ResponseEntity.ok("location details Successfully saved");
    }

    @PostMapping("/project")
    public ResponseEntity<String> saveProjectDetails(@RequestBody ProjectDetails projectDetails){
        log.info("DepartmentsController saveProjectDetails incoming request");
        managementService.saveProjectDetails(projectDetails);
        return ResponseEntity.ok("Project details Successfully saved");
    }

    @PostMapping("/job-title")
    public ResponseEntity<String> saveJobDetails(@RequestBody JobDetails jobDetails){
        log.info("DepartmentsController saveJobDetails incoming request");
        managementService.saveJobDetails(jobDetails);
        return ResponseEntity.ok("Job details Successfully saved");
    }

    @DeleteMapping("/hr/{employeeId}")
    public String deleteHR(@PathVariable int employeeId){
        log.info("deleteHR incoming request for employeeId {}",employeeId);
        managementService.removeHrManager(employeeId);
        return "HR removed";
    }

    @DeleteMapping("/rm/{employeeId}")
    public String deleteReportingManager(@PathVariable int employeeId){
        log.info("deleteReportingManager incoming request for employeeId {}",employeeId);
        managementService.removeReportingManager(employeeId);
        return "Reporting manager removed";
    }

    @DeleteMapping("/project/{projectId}")
    public String deleteProject(@PathVariable int projectId){
        log.info("deleteProject incoming request for projectId {}",projectId);
        managementService.removeProject(projectId);
        return "Project removed";
    }

    @DeleteMapping("/location/{locationId}")
    public String deleteLocation(@PathVariable int locationId){
        log.info("deleteLocation incoming request for locationId {}",locationId);
        managementService.removeLocation(locationId);
        return "Location removed";
    }

    @DeleteMapping("/job-title/{jobId}")
    public String deleteJobTitle(@PathVariable int jobId){
        log.info("deleteJobTitle incoming request for jobId {}",jobId);
        managementService.removeJobTitle(jobId);
        return "Job title removed";
    }

    @DeleteMapping("/department/{departmentId}")
    public String deleteDepartment(@PathVariable int departmentId){
        log.info("deleteDepartment incoming request for departmentId {}",departmentId);
        managementService.removeDepartment(departmentId);
        return "Department removed";
    }

}
