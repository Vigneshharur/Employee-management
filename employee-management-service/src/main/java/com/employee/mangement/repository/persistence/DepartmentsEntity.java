package com.employee.mangement.repository.persistence;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Builder
@Entity
@Table(name = "DEPARTMENTS")
public class DepartmentsEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "dpt_id")
    private int departmentId;

    @Column(name = "dpt_code")
    private String departmentCode;

    @Column(name = "dpt_name")
    private String departmentName;

    private int totalEmployees;

}
