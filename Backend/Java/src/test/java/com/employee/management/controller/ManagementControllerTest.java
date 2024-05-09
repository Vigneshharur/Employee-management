package com.employee.management.controller;

import com.employee.management.entity.DepartmentsEntity;
import com.employee.management.service.ManagementService;
import com.employee.management.utils.MessageConstants;
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
@SpringBootTest(classes = ManagementController.class)
@TestPropertySource({ "classpath:/application.properties" })
public class ManagementControllerTest {

    private final int EMPLOYEE_ID = 1;

    @Autowired
    ManagementController managementController;

    @MockBean
    ManagementService managementService;

    @Test
    public void saveDepartmentDetailsTest(){
        DepartmentsEntity departmentsDetails = DepartmentsEntity.builder().build();
        Assertions.assertEquals(MessageConstants.SAVE_DPT_MSG, managementController.saveDepartmentDetails(departmentsDetails).getBody());
        Mockito.verify(managementService, Mockito.times(1)).saveDepartmentDetails(departmentsDetails);
    }

}
