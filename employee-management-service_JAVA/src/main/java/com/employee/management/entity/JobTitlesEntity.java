package com.employee.management.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Data
@Table(name = "job_titles")
public class JobTitlesEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "job_id")
    private int jobId;

    private String jobTitle;

    private int noOfEmployees;
}
