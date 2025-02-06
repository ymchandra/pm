package com.project.password.manager.resource;

import com.project.password.manager.dto.PasswordEntity;
import com.project.password.manager.service.PasswordEntityService;
import io.smallrye.mutiny.Uni;
import org.eclipse.microprofile.jwt.JsonWebToken;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import java.util.List;

@Path("/list")
public class PasswordEntityResource {

    @Inject
    PasswordEntityService service;

    @Inject
    JsonWebToken token;

    @GET
    @RolesAllowed("SUPER_ADMIN_PM")
    public Uni<List<PasswordEntity>> findAll() {
        System.out.println(token.getName());
        List<PasswordEntity> entities = service.findAll();
        return Uni.createFrom().item(entities);
    }
}
