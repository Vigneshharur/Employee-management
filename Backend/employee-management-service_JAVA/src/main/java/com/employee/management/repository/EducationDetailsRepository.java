package com.employee.management.repository;

import com.employee.management.entity.EducationDetailsEntity;
import com.employee.management.entity.EducationDetailsPk;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EducationDetailsRepository extends JpaRepository<EducationDetailsEntity, EducationDetailsPk> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "Delete from education_details where employee_id = ?1")
    void removeEmployeeEduDetails(int employeeId);

    List<EducationDetailsEntity> findAllByEmployeeId(int employeeId);
}
