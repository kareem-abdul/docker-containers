FROM alpine:edge

RUN apk add --update --no-cache python3 git && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --upgrade --force-reinstall "git+https://github.com/ytdl-org/youtube-dl.git"

