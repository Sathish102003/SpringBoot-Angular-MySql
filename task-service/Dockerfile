FROM openjdk:8-jre-slim
COPY ./target/task-service-1.0.0-SNAPSHOT.jar /usr/src/app/
WORKDIR /usr/src/app
EXPOSE 8080
CMD ["java", "-jar", "task-service-1.0.0-SNAPSHOT.jar"]