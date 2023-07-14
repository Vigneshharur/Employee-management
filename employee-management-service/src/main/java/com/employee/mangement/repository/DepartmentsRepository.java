package com.employee.mangement.repository;

import com.employee.mangement.repository.persistence.DepartmentsEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Transactional
@Repository
public interface DepartmentsRepository extends JpaRepository<DepartmentsEntity,Integer> {

    @Query(nativeQuery = true, value = "Select dpt_id from departments order by dpt_id desc limit 1")
    Integer getLastDepartmentId();

    @Modifying
    @Query(nativeQuery = true, value = "Update departments set total_employees = " +
            "(select total_employees from departments where dpt_id = ?1)+ ?2 where dpt_id = ?1")
    void updateTotalEmployees(int departmentId, int change);

}
