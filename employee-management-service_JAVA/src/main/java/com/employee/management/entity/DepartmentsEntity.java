package com.employee.management.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Builder
@Entity
@Table(name = "DEPARTMENTS")
public class DepartmentsEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dpt_id")
    private int departmentId;

    @Column(name = "dpt_code")
    private String departmentCode;

    @Column(name = "dpt_name")
    private String departmentName;

    private int totalEmployees;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "department_id")
    private List<EmployeeBaseEntity> employees;

}
