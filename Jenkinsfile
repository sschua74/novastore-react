pipeline {
    agent any

    environment {
        IMAGE_NAME = "react-app-nginx"
        CONTAINER_NAME = "react-app"
        APP_PORT = "8081"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build & Deploy') {
            steps {
                script {
                    // Remove old container if exists
                    sh "docker stop $CONTAINER_NAME || true"
                    sh "docker rm $CONTAINER_NAME || true"

                    // Build Docker image (Dockerfile handles npm install + build)
                    sh "docker build -t $IMAGE_NAME ."

                    // Run container
                    sh "docker run -d -p $APP_PORT:80 --name $CONTAINER_NAME $IMAGE_NAME"
                }
            }
        }
    }

    post {
        success {
            echo "React app deployed successfully! Open http://localhost:8081'"
        }
        failure {
            echo "Deployment failed."
        }
    }
}