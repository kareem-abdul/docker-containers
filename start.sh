#!/usr/bin/env bash

# requires fzf to be installed

shopt -s expand_aliases


COMPOSE=0
if which docker &> /dev/null; then
    if docker compose version &> /dev/null; then
        alias compose="docker compose"
        COMPOSE=1
    elif which docker-compose &> /dev/null; then
        alias compose="docker-compose"
        COMPOSE=1
    fi
elif which podman &> /dev/null; then
    if which docker-compose &> /dev/null || which podman-compose &> /dev/null; then
        alias compose="podman compose 2> /dev/null"
        COMPOSE=1
    fi
fi

if [ $COMPOSE -eq 0 ]; then
    echo "docker compose not available";
    exit 1;
fi


DIR=$(dirname "$(readlink -f "$0")")
cd $DIR

find . -type f -iname "docker-compose*" 2>/dev/null \
    | sed -E 's|^./(.*)$|\1|g' \
    | fzf -m -i --layout=reverse --height="100%" --border=rounded --border-label="Choose service" --info=right --preview='less {}' \
    | while read -r composefile; do
        compose -f "$composefile" up --build -d
        sleep 2;
    done

