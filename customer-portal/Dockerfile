FROM openjdk:8-jdk-alpine
ARG JAR_FILE
ENV JAR_FILE=${JAR_FILE}
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Dspring.data.mongodb.uri=mongodb://root:abcd1234@api-database:27017/carbonreact?authSource=admin","-jar","/app.jar"]
