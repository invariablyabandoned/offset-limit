FROM node:20

# Avoid warnings by switching to noninteractive
# ENV DEBIAN_FRONTEND=noninteractive

# This Dockerfile adds a non-root user with sudo access. Use the "remoteUser"
# property in devcontainer.json to use it. More info: https://aka.ms/vscode-remote/containers/non-root-user
# RUN apt-get update \
#     && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
#     && apt-get -y install git iproute2 procps lsb-release \
#     && apt-get autoremove -y \
#     && apt-get clean -y \
#     && rm -rf /var/lib/apt/lists/*

# Switch back to dialog for any ad-hoc use of apt-get
# ENV DEBIAN_FRONTEND=dialog
