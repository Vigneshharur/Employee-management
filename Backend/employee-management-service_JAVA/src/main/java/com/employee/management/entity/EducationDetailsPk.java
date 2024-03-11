package com.employee.management.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EducationDetailsPk implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int employeeId;
    private String educationLevel;
    private String dataType;

}
