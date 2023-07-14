package com.employee.management.controller;

import com.employee.management.model.EmployeeMainDetails;
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

    @Autowired
    EmployeeController employeeController;

    @MockBean
    EmployeeService employeeService;

    @Test
    public void createNewEmployeeTest(){
        EmployeeMainDetails employeeMainDetails = EmployeeMainDetails.builder().build();
        Mockito.when(employeeService.createNewEmployeeId(employeeMainDetails)).thenReturn(employeeMainDetails);
        Assertions.assertEquals(employeeMainDetails,employeeController.createNewEmployee(employeeMainDetails).getBody());
    }

}
