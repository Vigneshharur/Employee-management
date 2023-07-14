package com.employee.mangement.controller;

import com.employee.mangement.model.EmployeeBaseDetails;
import com.employee.mangement.model.EmployeeMainDetails;
import com.employee.mangement.service.EmployeeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employee")
@Slf4j
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/new")
    public ResponseEntity createNewEmployee (@RequestBody EmployeeMainDetails employeeMainDetails){
        log.info("EmployeeManagementController createNewEmployee inside request");
        EmployeeMainDetails newEmployeeDetails = employeeService.createNewEmployeeId(employeeMainDetails);
        return ResponseEntity.ok(newEmployeeDetails);
    }

    @PostMapping("/save/base-details")
    public ResponseEntity<String> saveEmployeeDetails(@RequestBody EmployeeBaseDetails employeeBaseDetails){
        log.info("saveEmployeeDetails incoming request");
        employeeService.saveEmployeeDetails(employeeBaseDetails);
        return ResponseEntity.ok("Employee added successfully");
    }

    @DeleteMapping("/delete/{employeeId}")
    public ResponseEntity<String> deleteEmployee(@PathVariable int employeeId){
        log.info("removeEmployee incoming request");
        employeeService.removeEmployee(employeeId);
        return ResponseEntity.ok("Employee removed successfully");
    }

    @GetMapping("/get-employee-details/{employeeId}")
    public ResponseEntity getEmployeeDetails(@PathVariable int employeeId){
        log.info("getEmployeeDetails incoming request for employeeId {}",employeeId);
        EmployeeBaseDetails employeeBaseDetails = employeeService.getEmployeeDetails(employeeId);
        return ResponseEntity.ok(employeeBaseDetails);
    }
}
