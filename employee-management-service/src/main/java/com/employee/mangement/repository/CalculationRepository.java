package com.employee.mangement.repository;

import com.employee.mangement.repository.persistence.CalculationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;

@Repository
public interface CalculationRepository extends JpaRepository<CalculationEntity, Date> {

}
