package com.employee.mangement.model;

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
