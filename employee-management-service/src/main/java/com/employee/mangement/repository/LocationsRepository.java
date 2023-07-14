package com.employee.mangement.repository;

import com.employee.mangement.repository.persistence.LocationsEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Transactional
@Repository
public interface LocationsRepository extends JpaRepository<LocationsEntity,Integer> {

    @Query(nativeQuery = true, value = "Select location_id from locations order by location_id desc limit 1")
    Integer getLastLocationId();

    @Modifying
    @Query(nativeQuery = true, value = "Update locations set no_of_employees = " +
            "(select no_of_employees from locations where location_id = ?1)+ ?2 where location_id = ?1")
    void updateTotalEmployees(int locationId, int change);

}
