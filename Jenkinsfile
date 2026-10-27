pipeline {
    agent any

    stages {
        stage('安装依赖 & 打包') {
            steps {
                nodejs('node24') {
                    sh '''
                        NPM_CACHE="${WORKSPACE}/npm-cache-${JOB_NAME}"
                        npm config set cache "${NPM_CACHE}"
                        npm install
                        npm run build
                    '''
                }
            }
        }

        stage('复制dist到共享挂载目录') {
            steps {
                sh '''
                    mkdir -p /var/jenkins_home/demo/dist/
                    rm -rf /var/jenkins_home/demo/dist/*
                    cp -r dist/* /var/jenkins_home/demo/dist/
                '''
            }
        }
    }

    post {
        success {
            echo "✅ 打包完成，已同步到共享目录"
        }
        failure {
            echo "❌ 流水线失败"
        }
    }
}
