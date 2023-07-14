package com.employee.mangement.repository;

import com.employee.mangement.repository.persistence.ProjectsEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Transactional
@Repository
public interface ProjectsRepository extends JpaRepository<ProjectsEntity,Integer> {

    @Query(nativeQuery = true, value = "Select project_id from projects order by project_id desc limit 1")
    Integer getLastProjectId();

    @Modifying
    @Query(nativeQuery = true, value = "Update projects set no_of_employees = " +
            "(select no_of_employees from projects where project_id = ?1)+ ?2 where project_id = ?1")
    void updateTotalEmployees(int projectId, int change);

}
