package com.employee.management.repository;

import com.employee.management.entity.LocationsEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Transactional
@Repository
public interface LocationsRepository extends JpaRepository<LocationsEntity,Integer> {

    @Query(nativeQuery = true, value = "Select location_id from locations order by location_id desc limit 1")
    Integer getLastLocationId();

}
