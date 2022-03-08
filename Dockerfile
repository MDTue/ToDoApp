FROM openjdk:17-alpine
ENV ENVIRONMENT=prod
ADD backend/target/todo-app-0.0.1-SNAPSHOT.jar app.jar
CMD ["java -jar /app.jar"]