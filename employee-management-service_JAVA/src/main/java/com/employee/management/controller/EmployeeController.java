package com.employee.management.controller;

import com.employee.management.entity.EmployeeMainEntity;
import com.employee.management.model.EmployeeBaseDetails;
import com.employee.management.service.EmployeeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employee")
@Slf4j
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping("/main")
    public ResponseEntity<EmployeeMainEntity> createNewEmployee (@RequestBody EmployeeMainEntity employeeMainDetails){
        log.info("EmployeeManagementController createNewEmployee inside request");
        EmployeeMainEntity newEmployeeDetails = employeeService.createNewEmployeeId(employeeMainDetails);
        return ResponseEntity.ok(newEmployeeDetails);
    }

    @PostMapping("/base")
    public ResponseEntity<String> saveEmployeeDetails(@RequestBody EmployeeBaseDetails employeeBaseDetails){
        log.info("saveEmployeeDetails incoming request");
        employeeService.saveEmployeeDetails(employeeBaseDetails);
        return ResponseEntity.ok("Employee added successfully");
    }

    @DeleteMapping("/{employeeId}")
    public ResponseEntity<String> deleteEmployee(@PathVariable int employeeId){
        log.info("removeEmployee incoming request");
        employeeService.removeEmployee(employeeId);
        return ResponseEntity.ok("Employee removed successfully");
    }

    @GetMapping("/{employeeId}")
    public ResponseEntity getEmployeeDetails(@PathVariable int employeeId){
        log.info("getEmployeeDetails incoming request for employeeId {}",employeeId);
        EmployeeBaseDetails employeeBaseDetails = employeeService.getEmployeeDetails(employeeId);
        return ResponseEntity.ok(employeeBaseDetails);
    }
}
