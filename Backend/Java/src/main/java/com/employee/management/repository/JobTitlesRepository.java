package com.employee.management.repository;

import com.employee.management.entity.JobTitlesEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Transactional
@Repository
public interface JobTitlesRepository extends JpaRepository<JobTitlesEntity,Integer> {

    @Query(nativeQuery = true, value = "Select job_id from job_titles order by job_id desc limit 1")
    Integer getLastJobId();


}
