package com.employee.management.repository;

import com.employee.management.entity.JobTitlesEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Transactional
@Repository
public interface JobTitlesRepository extends JpaRepository<JobTitlesEntity,Integer> {

    @Query(nativeQuery = true, value = "Select job_id from job_titles order by job_id desc limit 1")
    Integer getLastJobId();

    @Modifying
    @Query(nativeQuery = true, value = "Update job_titles set no_of_employees = " +
            "(select no_of_employees from job_titles where job_id = ?1) + ?2 where job_id = ?1")
    void updateTotalEmployees(int jobId, int change);


}
