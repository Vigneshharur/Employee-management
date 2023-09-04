package com.employee.management.repository.persistence;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Data
@Entity
@Table(name = "projects")
public class ProjectsEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "project_id")
    private int projectId;

    private String client;

    private String projectTitle;

    private int noOfEmployees;
}
