package com.employee.management.repository.persistence;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Data
@Entity
@Table(name = "reporting_managers")
public class ReportingManagersEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private int employeeId;

    private String firstName;

    private String middleName;

    private String lastName;
}
