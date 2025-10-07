pipeline {
  agent any
  stages {
    stage('Build Docker Image') {
      steps {
        sh 'docker-compose build react-app'
      }
    }
    stage('Deploy React App') {
      steps {
        sh 'docker-compose up -d react-app'
      }
    }
  }
}