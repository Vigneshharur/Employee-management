package com.employee.management.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Data
@Entity
@Table(name = "hr_managers")
public class HRManagersEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    private int employeeId;

    private String firstName;

    private String middleName;

    private String lastName;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "added_by")
    private List<EmployeeBaseEntity> employees;
}
