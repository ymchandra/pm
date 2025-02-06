package com.project.password.manager.service;

import com.project.password.manager.dto.Category;
import com.project.password.manager.dto.PasswordEntity;

import javax.enterprise.context.RequestScoped;
import java.util.List;

@RequestScoped
public class PasswordEntityService {

    private final List<PasswordEntity> entities = List.of(new PasswordEntity(
            "Axis", "Desc", new Category("Finance", "Desc"), "Login", "Password"));

    public List<PasswordEntity> findAll() {
        return entities;
    }
}
