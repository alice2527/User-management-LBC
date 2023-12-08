package com.example.LBC_Back.service;

import com.example.LBC_Back.controller.DTO.UserDTO;
import com.example.LBC_Back.repository.UserRepository;
import com.example.LBC_Back.repository.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDate;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    @Override
    public Mono<UserDTO> getUser(Long id) {
        return userRepository.findById(id)
                .map(user -> new UserDTO(user.getId(), user.getEmail(), user.getPassword(), user.getFirstName(), user.getLastName(),user.getCreationDate(),user.getRole() ));
    }

    @Override
    public Flux<UserDTO> findAll() {
        return userRepository.findAll()
                .map(user -> new UserDTO(user.getId(), user.getEmail(), user.getPassword(), user.getFirstName(), user.getLastName(), user.getCreationDate(),user.getRole()));
    }

    @Override
    public Mono<UserDTO> updateUser(Long id, UserDTO userDTO) {
        Mono<User> userOptional = userRepository.findById(id);

        return userOptional.flatMap(existingUser -> {
            String userEmail = existingUser.getEmail(); // Retrieve the existing email

            // Create a new user object with the updated values and the existing email
            return userRepository.save(User.builder()
                            .id(id)
                            .email(userEmail) // Set the email from the existing user
                            .password(userDTO.password())
                            .firstName(userDTO.firstName())
                            .lastName(userDTO.lastName())
                            .creationDate(LocalDate.now())
                            .role(userDTO.role())
                            .build())
                    .map(updatedUser -> new UserDTO(updatedUser.getId(), updatedUser.getEmail(),
                            updatedUser.getPassword(), updatedUser.getFirstName(), updatedUser.getLastName(),
                            updatedUser.getCreationDate(), updatedUser.getRole()));
        });
    }


    @Override
    public Mono<Void> deleteUser(Long id){
        return userRepository.deleteById(id);
    }
    @Override
    public Mono<UserDTO> createUser(UserDTO userDTO) {
        return userRepository.save(User.builder()
                .email(userDTO.email())
                .password(userDTO.password())
                .firstName(userDTO.firstName())
                .lastName(userDTO.lastName())
                        .creationDate(LocalDate.now())
                .role(userDTO.role())
                .build())
                .map(user -> new UserDTO(user.getId(),user.getEmail(),user.getPassword(),user.getFirstName(),user.getLastName(),user.getCreationDate(),user.getRole()));
    }


}
