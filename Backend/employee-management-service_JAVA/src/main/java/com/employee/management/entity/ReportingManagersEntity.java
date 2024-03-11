package com.employee.management.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Data
@Entity
@Table(name = "reporting_managers")
public class ReportingManagersEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    private int employeeId;

    private String firstName;

    private String middleName;

    private String lastName;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "reporting_to")
    private List<EmployeeBaseEntity> employees;
}
