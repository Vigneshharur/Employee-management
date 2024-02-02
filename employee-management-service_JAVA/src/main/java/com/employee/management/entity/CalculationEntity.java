package com.employee.management.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

import java.sql.Date;

@Entity
@Table(name = "soundhar_kudukavendiya_kaasu")
@Data
@Builder
public class CalculationEntity {

    @Id
    private Date date;

    private int amount;

}
