package com.employee.mangement.repository;

import com.employee.mangement.repository.persistence.HRManagersEntity;
import com.employee.mangement.repository.persistence.ReportingManagersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HRManagersRepository extends JpaRepository<HRManagersEntity,Integer> {

    HRManagersEntity findFirstByEmployeeId(int employeeId);

}
