package com.employee.mangement.controller;

import com.employee.mangement.model.DepartmentsDetails;
import com.employee.mangement.model.JobDetails;
import com.employee.mangement.model.LocationDetails;
import com.employee.mangement.model.ProjectDetails;
import com.employee.mangement.service.ManagementService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/management")
@Slf4j
public class ManagementController {

    @Autowired
    ManagementService managementService;

    @PostMapping("/department/add")
    public ResponseEntity<String> saveDepartmentDetails(@RequestBody DepartmentsDetails departmentsDetails){
        log.info("DepartmentsController addNewDepartment incoming request");
        managementService.saveDepartmentDetails(departmentsDetails);
        return ResponseEntity.ok("Department details Successfully saved");
    }

    @GetMapping("/hr/add/{employeeId}")
    public String addNewHR(@PathVariable int employeeId){
        log.info("Request to add new HR in ManagementController");
        managementService.addNewHR(employeeId);
        return "HR added Successfully";
    }

    @GetMapping("/rm/add/{employeeId}")
    public String addNewReportingManager(@PathVariable int employeeId){
        log.info("Request to add new Reporting Manager in ManagementController");
        managementService.addNewReportingManagers(employeeId);
        return "Reporting Manager added Successfully";
    }

    @PostMapping("/location/add")
    public ResponseEntity<String> saveLocationsDetails(@RequestBody LocationDetails locationDetails){
        log.info("DepartmentsController saveLocationsDetails incoming request");
        managementService.saveLocationDetails(locationDetails);
        return ResponseEntity.ok("location details Successfully saved");
    }

    @PostMapping("/project/add")
    public ResponseEntity<String> saveProjectDetails(@RequestBody ProjectDetails projectDetails){
        log.info("DepartmentsController saveProjectDetails incoming request");
        managementService.saveProjectDetails(projectDetails);
        return ResponseEntity.ok("Project details Successfully saved");
    }

    @PostMapping("/job-title/add")
    public ResponseEntity<String> saveJobDetails(@RequestBody JobDetails jobDetails){
        log.info("DepartmentsController saveJobDetails incoming request");
        managementService.saveJobDetails(jobDetails);
        return ResponseEntity.ok("Job details Successfully saved");
    }

    @DeleteMapping("/hr/delete/{employeeId}")
    public String deleteHR(@PathVariable int employeeId){
        log.info("deleteHR incoming request for employeeId {}",employeeId);
        managementService.removeHrManager(employeeId);
        return "HR removed";
    }

    @DeleteMapping("/rm/delete/{employeeId}")
    public String deleteReportingManager(@PathVariable int employeeId){
        log.info("deleteReportingManager incoming request for employeeId {}",employeeId);
        managementService.removeReportingManager(employeeId);
        return "Reporting manager removed";
    }

    @DeleteMapping("/project/delete/{projectId}")
    public String deleteProject(@PathVariable int projectId){
        log.info("deleteProject incoming request for projectId {}",projectId);
        managementService.removeProject(projectId);
        return "Project removed";
    }

    @DeleteMapping("/location/delete/{locationId}")
    public String deleteLocation(@PathVariable int locationId){
        log.info("deleteLocation incoming request for locationId {}",locationId);
        managementService.removeLocation(locationId);
        return "Location removed";
    }

    @DeleteMapping("/job-title/delete/{jobId}")
    public String deleteJobTitle(@PathVariable int jobId){
        log.info("deleteJobTitle incoming request for jobId {}",jobId);
        managementService.removeJobTitle(jobId);
        return "Job title removed";
    }

    @DeleteMapping("/department/delete/{departmentId}")
    public String deleteDepartment(@PathVariable int departmentId){
        log.info("deleteDepartment incoming request for departmentId {}",departmentId);
        managementService.removeDepartment(departmentId);
        return "Department removed";
    }

}
