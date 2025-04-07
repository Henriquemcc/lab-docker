# Este Dockerfile deve estar dentro da pasta 'aplicacao'
FROM debian:latest
EXPOSE 8080
WORKDIR /
RUN apt update
RUN apt install -y curl unzip
RUN bash -c "curl -fsSL https://deno.land/install.sh | sh"
COPY . .
CMD ["/bin/deno", "run", "--allow-net", "--allow-read", "./main.ts"]