package com.employee.mangement.model;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@ToString
public class ProjectDetails {

    private int projectId;
    private String client;
    private String projectTitle;
    private int noOfEmployees;
}
