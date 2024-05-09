package com.employee.management.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.sql.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Builder
@Entity
@Table(name = "EMPLOYEE_BASE")
public class EmployeeBaseEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "employee_id")
    private int employeeId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "gender")
    private String gender;

    @Column(name = "marital_status")
    private boolean isMarried;

    @Column(name = "citizenship")
    private String citizenship;

    @Column(name = "father_name")
    private String fatherName;

    @Column(name = "mother_name")
    private String motherName;

    @Column(name = "blood_group")
    private String bloodGroup;

    @Column(name = "employee_role")
    private int roleId;

    @Column(name = "location_id")
    private int locationId;

    @Column(name = "department_id")
    private int departmentId;

    @Column(name = "project")
    private int projectId;

    @Column(name = "status")
    private boolean isActive;

    @Column(name = "mobile_number")
    private Long mobileNumber;

    @Column(name = "personal_email")
    private String personalEmail;

    @Column(name = "company_email")
    private String companyEmail;

    @Column(name = "aadhar_number")
    private String aadharNumber;

    @Column(name = "pan_card")
    private String panNumber;

    @Column(name = "previous_experience")
    private int previousExperience;

    private Date joinedDate;

    @Column(name = "added_by")
    private int addedBy;

    @Column(name = "reporting_to")
    private int reportingTo;

    @Column(name = "emergency_contact")
    private Long emergencyContact;

    @Column(name = "is_reporting_manager")
    private Boolean isReportingManager;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "employeeId")
    private List<EducationDetailsEntity> educationDetails;

}
