package com.employee.management.model;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@ToString
public class JobDetails {

    private int jobId;
    private String jobTitle;
    private int noOfEmployees;

}
