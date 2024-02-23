# Jenkins Docker

This creates a jenkins instance using docker with docker and blueocean support.

## prerequisite

- docker
- docker compose

## Installation

Execute the following commands to run a jenkins instance on port 8080
```cmd
$ git clone https://github.com/flycatch/jenkins-docker.git
$ cd jenkins-docker
$ docker compose up --build -d
```

## Post installation set up
For this instance to work with pipelines defined in Flycatch make sure that the following steps are followed.

- add [this](https://github.com/flycatch/flycatch-jenkins-shared-library) as a global library using the following plugin
    - [Pipeline: GitHub Groovy Libraries](https://plugins.jenkins.io/pipeline-github-lib/)
- install the following github plugins
    - [GitHub Branch Source Plugin](https://plugins.jenkins.io/github-branch-source/)
    - [GitHub Checks plugin](https://plugins.jenkins.io/github-checks/)
- also make sure that the following plugins are also installed
    - [Warnings Next Generation Plugin](https://plugins.jenkins.io/warnings-ng/)
