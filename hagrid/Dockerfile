FROM debian:unstable-slim

COPY ./scripts/install.sh ./install.sh
RUN chmod +x ./install.sh
RUN ./install.sh

RUN git clone https://gitlab.com/keys.openpgp.org/hagrid.git
WORKDIR /hagrid
RUN cp Rocket.toml.dist Rocket.toml

CMD ["cargo", "run"]
