#!/usr/bin/env bash
./gradlew customer-portal:clean customer-portal:build customer-portal:docker -x test
docker-compose up -d