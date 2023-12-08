package com.example.LBC_Back.repository;

import com.example.LBC_Back.repository.entity.User;
import org.springframework.data.r2dbc.repository.R2dbcRepository;

public interface UserRepository extends R2dbcRepository<User,Long> {
}
