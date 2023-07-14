package com.employee.mangement.repository;

import com.employee.mangement.repository.persistence.ReportingManagersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportingManagersRepository extends JpaRepository<ReportingManagersEntity,Integer> {

    ReportingManagersEntity findFirstByEmployeeId(int employeeId);
}
