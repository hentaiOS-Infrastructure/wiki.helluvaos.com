FROM caddy:builder as caddy-buildstage
RUN xcaddy build \
    --with github.com/greenpau/caddy-git

FROM caddy:latest as production-stage
COPY --from=caddy-buildstage /usr/bin/caddy /usr/bin/caddy
RUN apk add git && \
    git clone https://github.com/hentaiOS-Infrastructure/wiki.helluvaos.com.git /srv/wiki.helluvaos.com
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
