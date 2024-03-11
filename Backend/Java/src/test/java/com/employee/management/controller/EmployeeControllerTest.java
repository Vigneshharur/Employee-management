package com.employee.management.controller;

import com.employee.management.entity.EmployeeMainEntity;
import com.employee.management.model.EmployeeBaseDetails;
import com.employee.management.service.EmployeeService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = EmployeeController.class)
@TestPropertySource({ "classpath:/application.properties" })
public class EmployeeControllerTest {

    private final int EMPLOYEE_ID = 1;

    @Autowired
    EmployeeController employeeController;

    @MockBean
    EmployeeService employeeService;

    @Test
    public void createNewEmployeeTest(){
        EmployeeMainEntity employeeMainDetails = EmployeeMainEntity.builder().build();
        Mockito.when(employeeService.createNewEmployeeId(employeeMainDetails)).thenReturn(employeeMainDetails);
        Assertions.assertEquals(employeeMainDetails,employeeController.createNewEmployee(employeeMainDetails).getBody());
    }

    @Test
    public void saveEmployeeDetailsTest(){
        EmployeeBaseDetails employeeBaseDetails = EmployeeBaseDetails.builder().build();
        Assertions.assertEquals("Employee added successfully",employeeController.saveEmployeeDetails(employeeBaseDetails).getBody());
        Mockito.verify(employeeService,Mockito.times(1)).saveEmployeeDetails(employeeBaseDetails);
    }

    @Test
    public void deleteEmployeeTest(){
        Assertions.assertEquals("Employee removed successfully",employeeController.deleteEmployee(EMPLOYEE_ID).getBody());
    }

    @Test
    public void getEmployeeDetailsTest(){
        EmployeeBaseDetails employeeBaseDetails = EmployeeBaseDetails.builder().build();
        Mockito.when(employeeService.getEmployeeDetails(EMPLOYEE_ID)).thenReturn(employeeBaseDetails);
        Assertions.assertEquals(employeeBaseDetails,employeeController.getEmployeeDetails(EMPLOYEE_ID).getBody());
    }
}
