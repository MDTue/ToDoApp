package de.neuefischeToDoApp;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/todos/greet")
@RequiredArgsConstructor
public class ControllerUser {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @GetMapping
    public String greetUser(Principal principal){
        return("Hallo User "+ principal.getName());
    }
    @GetMapping("me")
    public ResponseEntity<UserDocument> me(Principal principal){
        return  ResponseEntity.of(userService.findByEmail(principal.getName()));
    }
    @PostMapping
    public UserDocument createUser(@RequestBody UserDocument user) {
        user.setPasswort(passwordEncoder.encode(user.getPasswort()));
        return userService.createUser(user);
    }




}

