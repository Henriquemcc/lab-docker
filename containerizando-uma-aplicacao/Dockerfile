# Este Dockerfile deve estar dentro da pasta 'aplicacao'
FROM denoland/deno:2.2.8
WORKDIR /
COPY . .
CMD ["/bin/deno", "run", "--allow-net", "--allow-read", "/main.ts"]