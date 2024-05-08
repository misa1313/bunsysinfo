pipeline {
    agent any
    stages {
        stage('SettingBun') {
            steps{
                script {
                    sh 'curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.0"'
                    sh 'export BUN_INSTALL="$HOME/.bun"' 
                    sh 'export PATH=$BUN_INSTALL/bin:$PATH'
                    sh 'export BUNPATH=$HOME/.bun/bin'
                    sh 'echo $BUNPATH'
                    sh "bun install"
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
