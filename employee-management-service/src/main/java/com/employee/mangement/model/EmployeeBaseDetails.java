package com.employee.mangement.model;

import lombok.*;

import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@ToString
public class EmployeeBaseDetails {

    private int employeeId;

    private String firstName;

    private String middleName;

    private String lastName;

    private Date dateOfBirth;

    private int age;

    private String gender;

    private boolean isMarried;

    private String citizenship;

    private String fatherName;

    private String motherName;

    private String bloodGroup;

    private int roleId;

    private int locationId;

    private int departmentId;

    private int projectId;

    private boolean isActive;

    private Long mobileNumber;

    private String personalEmail;

    private String companyEmail;

    private String aadharNumber;

    private String panNumber;

    private double totalExperience;

    private Date joinedDate;

    private int addedBy;

    private int reportingTo;

    private Long emergencyContact;

    private EducationDetails educationDetails;
}
