pipeline {
    agent any

    triggers {
        // Run the pipeline only when there's a push or merge to the main branch
        githubPush()
        githubPush(branch: 'main')
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Checkout the code from the main branch
                    checkout scm

                    // Build Docker image using Dockerfile in the root directory
                    docker.build("your-dockerhub-username/your-image-name:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    // Push the built Docker image to Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        docker.image("your-dockerhub-username/your-image-name:latest").push("latest")
                    }
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                script {
                    // Pull the Docker image on EC2 instance and run the container
                    sshagent(['your-ssh-credentials']) {
                        sh "ssh -o StrictHostKeyChecking=no -i /path/to/your/key.pem ec2-user@your-ec2-instance 'docker pull your-dockerhub-username/your-image-name:latest && docker run -d your-dockerhub-username/your-image-name:latest'"
                    }
                }
            }
        }
    }
}
