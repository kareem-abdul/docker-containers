#!/bin/bash

# requires fzf to be installed

DIR=$(dirname "$(readlink -f "$0")")
cd $DIR

find . -type f -iname "docker-compose*" 2>/dev/null \
    | sed -E 's|^./(.*)$|\1|g' \
    | fzf -m -i --layout=reverse --height=20 --border=rounded --border-label="Choose service" --info=right --preview='less {}' \
    | while read -r composefile; do
        which docker-compose &> /dev/null;
        if [ $? -eq 0 ]; then 
            docker-compose -f "$composefile" up --build -d
            exit 0;
        fi

        # check if docker compose plugin is installed
        docker compose version &> /dev/null
        if [ $? -eq 0 ]; then 
            docker compose -f "$composefile" up --build -d
            exit 0;
        fi
        echo "docker compose not found" 1>&2;
        exit 1;
    done

