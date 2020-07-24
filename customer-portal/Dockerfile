FROM openjdk:8-jdk-alpine
WORKDIR /Volumes/F/innovation-overall/carbonreact/carbonreact/customer-portal/
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
