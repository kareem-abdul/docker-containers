apt update
apt install -y rustup git curl
rustup default stable

apt install -y \
    gnutls-bin \
    libssl-dev \
    gcc \
    llvm-dev \
    libclang-dev \
    build-essential \
    pkg-config \
    gettext \
    libsqlite3-dev

