package com.employee.management.repository;

import com.employee.management.entity.DepartmentsEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Transactional
@Repository
public interface DepartmentsRepository extends JpaRepository<DepartmentsEntity,Integer> {

    @Query(nativeQuery = true, value = "Select dpt_id from departments order by dpt_id desc limit 1")
    Integer getLastDepartmentId();

}
