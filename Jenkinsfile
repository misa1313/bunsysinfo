pipeline {
    agent any
    environment{
        BUNPATH="${HOME}/.bun/bin"
        BUN_INSTALL="${HOME}/.bun" 
    }
    stages {
        stage('SettingBun') {
            steps{
                script {
                    sh 'curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.0"'
                    sh 'export PATH=$BUN_INSTALL/bin:$PATH'
                    sh '${BUNPATH}/bun install'
                }
            }
        }

        stage('LintTest'){
            steps{
                script {
                  sh "bunx eslint ."
                  sh "bun test"
                }
            }
        }
        stage('BuildingImage') {
            steps{
                script {
                  sh "docker build . -t buninfo:${env.BUILD_ID}"
                }
            }
        }
    }
}
