pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Restore Backend') {
            steps {
                bat 'dotnet restore QuitQ.sln'
            }
        }

        stage('Build Backend') {
            steps {
                bat 'dotnet build QuitQ.sln --configuration Release --no-restore'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'dotnet test QuitQ.Test --no-build'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('QuitQFrontend') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo 'QuitQ Build Successful!'
        }

        failure {
            echo 'QuitQ Build Failed!'
        }
    }
}