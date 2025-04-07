# Este Dockerfile deve estar dentro da pasta 'aplicacao'
FROM denoland/deno:2.2.8
EXPOSE 8080
WORKDIR /
COPY . .
CMD ["/bin/deno", "run", "--allow-net", "--allow-read", "/main.ts"]