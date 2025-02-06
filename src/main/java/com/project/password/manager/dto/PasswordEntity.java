package com.project.password.manager.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PasswordEntity {
    private String name;
    private String description;
    private Category category;
    private String login;
    private String password;
}
