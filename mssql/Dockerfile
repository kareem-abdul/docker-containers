ARG VERSION=2019

FROM mcr.microsoft.com/mssql/server:${VERSION}-latest

USER root

RUN apt-get update
RUN apt-get install -yq gnupg gnupg2 gnupg1 curl apt-transport-https
RUN curl https://packages.microsoft.com/keys/microsoft.asc  -o  /etc/apt/trusted.gpg.d/microsoft.asc
RUN curl https://packages.microsoft.com/config/ubuntu/20.04/mssql-server-${VERSION}.list -o /etc/apt/sources.list.d/mssql-server-${VERSION}.list
RUN apt-get update
RUN apt-get install mssql-server-fts

USER mssql

