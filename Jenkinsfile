pipeline {
    agent any

    environment {
        IMAGE_NAME = "react-app-nginx"
        CONTAINER_NAME = "react-app"
        APP_PORT = "80"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                    docker build -t $IMAGE_NAME .
                """
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                sh """
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                """
            }
        }

        stage('Run Container') {
            steps {
                sh """
                    docker run -d -p $APP_PORT:80 --name $CONTAINER_NAME $IMAGE_NAME
                """
            }
        }
    }

    post {
        success {
            echo "React app deployed successfully!"
        }
        failure {
            echo "Deployment failed."
        }
    }
}