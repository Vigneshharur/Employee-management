package com.employee.management.repository;

import com.employee.management.entity.EmployeeMainEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeMainRepository extends JpaRepository<EmployeeMainEntity,Integer> {

    @Query(nativeQuery = true, value = "Select employee_id from employee_main order by employee_id desc limit 1")
    Integer getLastEmployeeId();

    EmployeeMainEntity findFirstByEmployeeId(int employeeId);
}
