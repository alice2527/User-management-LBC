package com.example.LBC_Back.service;

import com.example.LBC_Back.controller.DTO.UserDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface UserService {
    Mono<UserDTO> getUser(Long id);
    Flux<UserDTO> findAll();
    Mono<UserDTO> updateUser(Long id,UserDTO userDTO);
    Mono<Void> deleteUser(Long id);
    Mono<UserDTO> createUser(UserDTO userDTO);
}
