package com.employee.management.repository;

import com.employee.management.entity.CalculationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;

@Repository
public interface CalculationRepository extends JpaRepository<CalculationEntity, Date> {

}
