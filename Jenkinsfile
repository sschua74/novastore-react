pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Validate') {
            steps {
                sh 'cd react-app && npm install'
                sh 'cd react-app && npm run lint'
                sh 'cd react-app && npm test'
            }
        }
        stage('Package') {
            steps {
                sh 'cd react-app && npm run build'
            }
        }
        stage('Deploy to Nginx') {
            steps {
                // Replace nginx_container with your actual container name or ID
                sh 'docker cp react-app/build/. nginx_container:/usr/share/nginx/html/'
            }
        }
    }
}