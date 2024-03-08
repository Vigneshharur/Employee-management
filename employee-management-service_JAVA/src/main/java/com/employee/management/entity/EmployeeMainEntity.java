package com.employee.management.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@ToString
@Entity
@Table(name = "employee_main")
public class EmployeeMainEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int employeeId;

    private String firstName;

    private String middleName;

    private String lastName;

    @OneToOne( cascade = CascadeType.ALL)
    @JoinColumn(name = "employee_id")
    private EmployeeBaseEntity employeeBase;
}
