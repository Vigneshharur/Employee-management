package com.employee.management.controller;

import com.employee.management.service.EmployeeService;
import org.junit.runner.RunWith;
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

    public void createNewEmployeeTest(){

    }

}
