package com.employee.mangement.model;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Data
public class EmployeeMainDetails {

    private int employeeId;
    private String firstName;
    @Builder.Default
    private String middleName = "";
    private String lastName;

}
