package com.employee.management.repository;

import com.employee.management.entity.EmployeeBaseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeBaseRepository extends JpaRepository<EmployeeBaseEntity,Integer> {

    @Query(nativeQuery = true, value = "Select employee_id from employee_base where employee_id = ?1")
    Integer isEmployeePresent(int employeeId);

    @Query
    EmployeeBaseEntity findFirstByEmployeeId(int employeeId);

    @Query(nativeQuery = true, value = "Select employee_id from employee_base where reporting_to = ?1")
    List<Integer> getAllEmployeesReporting(int employeeId);

    @Query(nativeQuery = true, value = "Select employee_id from employee_base where department_id = ?1")
    List<Integer> getAllEmployeesForDepartment(int departmentId);

    @Query(nativeQuery = true, value = "Select employee_id from employee_base where project = ?1")
    List<Integer> getAllEmployeesForProject(int projectId);

    @Query(nativeQuery = true, value = "Select employee_id from employee_base where location_id = ?1")
    List<Integer> getAllEmployeesForLocation(int locationId);

    @Query(nativeQuery = true, value = "Select employee_id from employee_base where employee_role = ?1")
    List<Integer> getAllEmployeesForRole(int jobId);
}
