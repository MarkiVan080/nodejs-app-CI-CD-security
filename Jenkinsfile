pipeline {
    agent any

    environment {
        SONARQUBE_SCANNER_HOME = '/var/sonar-scanner' // adjust if using Docker
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/MarkiVan080/nodejs-app-CI-CD-security.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('SonarQube Scan') {
            steps {
                sh 'sonar-scanner -Dsonar.projectKey=nodejs-devsecops -Dsonar.sources=app'
            }
        }

        stage('OWASP ZAP Scan') {
            steps {
                // Assumes ZAP running as Docker container on localhost
                sh 'zap-cli quick-scan http://localhost:3000'
            }
        }
    }
}
