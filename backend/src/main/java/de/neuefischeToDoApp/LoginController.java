package de.neuefischeToDoApp;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/todos/login")
@RequiredArgsConstructor

public class LoginController {
    private final AuthenticationManager authentificationManager;
    private final JwtService jwtService;

    @PostMapping
    public String login(@RequestBody LoginData loginData){
        try {
            Authentication auth = authentificationManager.authenticate(new UsernamePasswordAuthenticationToken(loginData.getEmail(), loginData.getPassword()));

            Map<String, Object> claims = new HashMap<>();
            claims.put("roles", getRoles(auth));
            return jwtService.createToken(claims, loginData.getEmail());
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials");
        }
    }

    private List<String> getRoles(Authentication auth) {
        return auth.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .toList();

    }
}
