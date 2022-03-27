
package de.neuefischeToDoApp;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.lang.annotation.Documented;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Repository
public interface ToDoRepo extends MongoRepository<ToDo , String>{
    List<ToDo> findAllByUser(String user);
    Optional<ToDo> findByJobIdAndUser(String jobId, String user);
    Optional<ToDo> deleteByJobIdAndUser(String jobId, String user);

}