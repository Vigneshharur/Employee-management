package com.employee.management.model;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@ToString
public class Response {

    private String message;
    private Boolean status;

}
