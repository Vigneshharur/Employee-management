package com.employee.management.controller;

import com.employee.management.entity.DepartmentsEntity;
import com.employee.management.entity.JobTitlesEntity;
import com.employee.management.entity.LocationsEntity;
import com.employee.management.entity.ProjectsEntity;
import com.employee.management.service.ManagementService;
import com.employee.management.utils.MessageConstants;
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
    public ResponseEntity<String> saveDepartmentDetails(@RequestBody DepartmentsEntity departmentsDetails){
        log.info("DepartmentsController addNewDepartment incoming request");
        managementService.saveDepartmentDetails(departmentsDetails);
        return ResponseEntity.ok(MessageConstants.SAVE_DPT_MSG);
    }

    @PostMapping("/location")
    public ResponseEntity<String> saveLocationsDetails(@RequestBody LocationsEntity locationDetails){
        log.info("DepartmentsController saveLocationsDetails incoming request");
        managementService.saveLocationDetails(locationDetails);
        return ResponseEntity.ok("location details Successfully saved");
    }

    @PostMapping("/project")
    public ResponseEntity<String> saveProjectDetails(@RequestBody ProjectsEntity projectDetails){
        log.info("DepartmentsController saveProjectDetails incoming request");
        managementService.saveProjectDetails(projectDetails);
        return ResponseEntity.ok("Project details Successfully saved");
    }

    @PostMapping("/job-title")
    public ResponseEntity<String> saveJobDetails(@RequestBody JobTitlesEntity jobDetails){
        log.info("DepartmentsController saveJobDetails incoming request");
        managementService.saveJobDetails(jobDetails);
        return ResponseEntity.ok("Job details Successfully saved");
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
