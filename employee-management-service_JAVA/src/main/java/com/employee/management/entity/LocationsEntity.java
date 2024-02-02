package com.employee.management.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Data
@Entity
@Table(name = "locations")
public class LocationsEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private int locationId;

    private String city;

    private String state;

    private String country;

    private String zipCode;

    private String address1;

    private String address2;

    @Column(name = "no_of_employees")
    private int noOfEmployees;
}
