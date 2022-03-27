package de.neuefischeToDoApp;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public UserDocument createUser(UserDocument user) {
        if (findByEmail(user.email).isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User bereits vorhanden");
        } else{
            return userRepository.save(user);
        }
    }

    public Optional<UserDocument> findByEmail(String username) {
        return userRepository.findByEmail(username);
    }
}
