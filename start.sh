#!/usr/bin/env bash
./gradlew customer-portal:clean customer-portal:build customer-portal:docker -x test
docker-compose up -d
rabbitmq_cont_id=$(docker ps -aqf "name=rabbitmq") && docker exec $rabbitmq_cont_id rabbitmq-plugins enable rabbitmq_management