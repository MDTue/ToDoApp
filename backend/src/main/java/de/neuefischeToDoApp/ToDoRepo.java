
package de.neuefischeToDoApp;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.lang.annotation.Documented;
import java.util.HashMap;
import java.util.List;
@Repository
public interface ToDoRepo extends MongoRepository<ToDo , String>{

}