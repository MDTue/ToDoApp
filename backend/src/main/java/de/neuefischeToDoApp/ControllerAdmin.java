package de.neuefischeToDoApp;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/todos/admingreet")
@RequiredArgsConstructor
public class ControllerAdmin {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @GetMapping
    public String greetAdmin(Principal principal){
        return("Hallo Admin"+principal.getName());
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
