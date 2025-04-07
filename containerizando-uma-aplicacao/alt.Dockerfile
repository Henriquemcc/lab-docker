FROM debian:latest
EXPOSE 8080
WORKDIR /
RUN bash -c "curl -fsSL https://deno.land/install.sh | sh"
COPY . .
CMD ["/bin/deno", "run", "--allow-net", "--allow-read", "./main.ts"]