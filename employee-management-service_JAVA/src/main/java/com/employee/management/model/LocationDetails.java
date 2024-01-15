package com.employee.management.model;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Data
public class LocationDetails {

    private int locationId;

    private String city;

    private String state;

    private String country;

    private String zipCode;

    private String address1;

    private String address2;

    private int noOfEmployees;
}
