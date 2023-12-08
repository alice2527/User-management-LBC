package com.example.LBC_Back.repository.entity;

import com.example.LBC_Back.repository.entity.model.Role;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@Table("users")
public class User {

    @Id
    private Long id;

    @Column
    private String email;

    @Column
    private String password;

    @Column("firstName")
    private String firstName;

    @Column("lastName")
    private String lastName;

    @Column("creationDate")
    private LocalDate creationDate;

    @Column
    private Role role;

}
