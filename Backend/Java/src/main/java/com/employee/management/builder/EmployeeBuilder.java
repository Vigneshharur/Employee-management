package com.employee.management.builder;

import com.employee.management.entity.EmployeeBaseEntity;
import com.employee.management.entity.EmployeeMainEntity;
import org.springframework.stereotype.Component;

@Component
public class EmployeeBuilder {

    public void setEmployeeName(EmployeeBaseEntity employeeBaseEntity, EmployeeMainEntity employeeMainEntity){
        employeeBaseEntity.setFirstName(employeeMainEntity.getFirstName());
        employeeBaseEntity.setMiddleName(employeeMainEntity.getMiddleName());
        employeeBaseEntity.setLastName(employeeMainEntity.getLastName());
    }

}
