# Node.js DevSecOps Dockerized Demo

## Overview
This repository demonstrates a **DevSecOps pipeline** using:

- **Node.js web app** (CRUD Todos API)
- **Jenkins CI/CD**
- **SonarQube Community Edition** (SAST)
- **OWASP ZAP** (DAST)
- Fully **Dockerized** setup (no local installs required)

This project is designed to showcase **hands-on DevSecOps skills** for portfolio or interview purposes.

---

## **Folder Structure**
nodejs-devsecops/
├── app/ # Node.js app
├── tests/ # Mocha/Chai tests
├── Jenkinsfile # CI/CD pipeline
├── docker-compose.yml # Docker services
└── README.md

---

## **Prerequisites**

- Docker ≥ 20
- Docker Compose ≥ 1.29

---

## **Setup & Run**

1. Clone repo:

```bash
git clone https://github.com/MarkiVan080/nodejs-app-CI-CD-security.git
cd nodejs-devsecops

```
2. Build and start all services:
```bash
docker-compose up --build
```
3. Access services in browser:
Node.js app: http://localhost:3000
Jenkins: http://localhost:8080
SonarQube: http://localhost:9000
OWASP ZAP AP: http://localhost:8081

## **CI/CD Pipeline (Jenkins)**
The jenkins piple (Jenkinsfile) performs:
1. Checkout from Github
2. Install dependencies (npm install)
3. Run unit tests (npm test)
4. SonaQube static code analysis (SAST)
5. OWASP ZAP dynamic scan (DAST) against running Node.js app

Tip: In Docker, Jenkins communicates with SonaQube using http://sonarqube:9000 and ZAP using http://zap:8080.

| Tool              | Purpose                               |
| ----------------- | ------------------------------------- |
| SonarQube CE      | Static code analysis (SAST)           |
| OWASP ZAP         | Dynamic vulnerability scanning (DAST) |
| Jenkins           | CI/CD automation                      |
| Node.js + Express | Application                           |
| Docker Compose    | Full container orchestration          |


## **Running Tests & Security Scans Locally** 
If you want to run tests manually:
```bash

cd app
npm install
npm test

```
## **for SonarQube scan:**
```bash
sonar-scanner -Dsonar.projectKey=nodejs-devsecops -Dsonar.sources=.
```

## **For OWASP ZAP scan (using Docker container):**

```bash
docker exec -it zap zap-cli quick-scan http://nodejs-app:3000
```