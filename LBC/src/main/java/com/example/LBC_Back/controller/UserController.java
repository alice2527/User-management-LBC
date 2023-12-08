package com.example.LBC_Back.controller;

import com.example.LBC_Back.controller.DTO.UserDTO;
import com.example.LBC_Back.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping("/{userId}")
    Mono<UserDTO> getUser(@PathVariable("userId") Long userId){
        return userService.getUser(userId);
    }
    @PostMapping
    Mono<UserDTO> createUser(@RequestBody UserDTO userDTO){
        return userService.createUser(userDTO);
    }
    @PutMapping("/{userId}")
    Mono<UserDTO> updateUser(@PathVariable("userId") Long userId,@RequestBody UserDTO userDTO){
        return userService.updateUser(userId,userDTO);
    }
    @GetMapping("/list")
    Flux<UserDTO> getAllUsers(){
        return userService.findAll();
    }
    @DeleteMapping("/{userId}")
    Mono<Void> deleteUser(@PathVariable("userId") Long userId){
        return userService.deleteUser(userId);
    }
}
