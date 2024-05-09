package com.employee.management.repository;

import com.employee.management.entity.ProjectsEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Transactional
@Repository
public interface ProjectsRepository extends JpaRepository<ProjectsEntity,Integer> {

    @Query(nativeQuery = true, value = "Select project_id from projects order by project_id desc limit 1")
    Integer getLastProjectId();

}
