package com.employee.management.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Data
@Entity
@Table(name = "education_details")
@IdClass(EducationDetailsPk.class)
public class EducationDetailsEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private int employeeId;

    @Id
    private String educationLevel;

    @Id
    private String dataType;

    private String dataValue;
}
