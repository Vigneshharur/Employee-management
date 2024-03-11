package com.employee.management.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Data
@Table(name = "job_titles")
public class JobTitlesEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id")
    private int jobId;

    private String jobTitle;

    private int noOfEmployees;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "employee_role")
    private List<EmployeeBaseEntity> employees;
}
