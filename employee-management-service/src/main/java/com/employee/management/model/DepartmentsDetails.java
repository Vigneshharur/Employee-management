package com.employee.management.model;

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
