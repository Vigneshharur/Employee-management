package com.employee.management.model;

import lombok.*;

import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@ToString
public class EducationDetails {

    private Map<String,Map<String,String>> primaryEducation;

    private Map<String,Map<String,String>> higherEducation;

}
