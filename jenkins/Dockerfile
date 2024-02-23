FROM jenkins/jenkins
USER root
RUN apt update && apt install -y lsb-release
RUN apt-get update && apt-get install -y lsb-release gnupg
# install docker cli
RUN mkdir -m 0755 -p /etc/apt/keyrings
RUN curl -fsSL https://download.docker.com/linux/debian/gpg \
    | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
RUN echo "deb [ \
            arch=$(dpkg --print-architecture) \ 
            signed-by=/etc/apt/keyrings/docker.gpg \
        ] https://download.docker.com/linux/debian $(lsb_release -cs) stable" \
    | tee /etc/apt/sources.list.d/docker.list > /dev/null
RUN apt-get update && apt-get install -y docker-ce-cli
USER jenkins
RUN jenkins-plugin-cli --plugins "blueocean docker-workflow"

