package com.employee.mangement.repository.persistence;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@ToString
@Entity
@Table(name = "employee_main")
public class EmployeeMainEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private int employeeId;

    private String firstName;

    private String middleName;

    private String lastName;
}
