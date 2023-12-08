package com.example.LBC_Back.controller.DTO;

import com.example.LBC_Back.repository.entity.model.Role;

public record UserDTO(Long id, String email, String password, String firstName, String lastName,
                      java.time.LocalDate creationDate, Role role) {}
