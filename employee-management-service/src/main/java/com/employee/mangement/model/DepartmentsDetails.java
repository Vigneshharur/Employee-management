package com.employee.mangement.model;

import lombok.*;

@Data
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DepartmentsDetails {

    private int departmentId;
    private String departmentCode;
    private String departmentName;

}
