  # Weather App – CI/CD Deployment

A React Weather Application deployed using Docker, Nginx, and Jenkins CI/CD for production-grade deployment.

## Tech Stack

- Frontend: React + Vite
- Web Server: Nginx
- Containerization: Docker & Docker Compose
- CI/CD: Jenkins
- Cloud: AWS EC2

## Getting Started

### Run Locally

```bash
git clone https://github.com/yourusername/Weather-App.git
cd Weather-App
npm install
npm run dev -- --host 0.0.0.0 --port 5173


### Production with Docker

```bash
docker build -t weather-app-prod .
docker run -d -p 80:80 weather-app-prod

### Production with Docker

```bash
docker build -t weather-app-prod .
docker run -d -p 80:80 weather-app-prod

Or use Docker Compose:
docker compose up -d --build

## CI/CD Pipeline

This Jenkins pipeline automates:

1. Clone code from GitHub
2. Build Docker image using multi-stage Dockerfile
3. Deploy container via Docker Compose
4. Run smoke test to verify app

pipeline {
  stages {
    stage('Build') { sh 'docker build -t weather-app-prod .' }
    stage('Deploy') { sh 'docker compose up -d' }
  }
}

## Screenshots

![Weather App Screenshot](weather.png)
