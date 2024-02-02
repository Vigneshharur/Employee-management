package com.employee.management.repository;

import com.employee.management.entity.HRManagersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HRManagersRepository extends JpaRepository<HRManagersEntity,Integer> {

    HRManagersEntity findFirstByEmployeeId(int employeeId);

}
