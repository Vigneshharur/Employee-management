package com.employee.mangement.model.builder;

import com.employee.mangement.repository.persistence.EducationDetailsEntity;
import com.employee.mangement.repository.persistence.EmployeeBaseEntity;
import com.employee.mangement.repository.persistence.EmployeeMainEntity;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;
import java.time.Period;
import java.util.List;

@Component
public class EmployeeBuilder {

    public void setEmployeeName(EmployeeBaseEntity employeeBaseEntity, EmployeeMainEntity employeeMainEntity){
        employeeBaseEntity.setFirstName(employeeMainEntity.getFirstName());
        employeeBaseEntity.setMiddleName(employeeMainEntity.getMiddleName());
        employeeBaseEntity.setLastName(employeeMainEntity.getLastName());
    }

    public Integer calculateAge(Date dateOfBirth){
        return Period.between(dateOfBirth.toLocalDate() , LocalDate.now()).getYears();
    }

}
