ARG VERSION=2019

FROM mcr.microsoft.com/mssql/server:${VERSION}-latest
ARG VERSION

USER root

RUN apt-get update
RUN apt-get install -yq gnupg gnupg2 gnupg1 curl apt-transport-https
RUN curl https://packages.microsoft.com/keys/microsoft.asc -o /var/opt/mssql/ms-key.cer
RUN apt-key add /var/opt/mssql/ms-key.cer
RUN curl https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/mssql-server-${VERSION}.list -o /etc/apt/sources.list.d/mssql-server-${VERSION}.list
RUN apt-get update
RUN apt-get install -y mssql-server-fts
USER mssql

