FROM node:12-alpine as base

WORKDIR /app/

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production


FROM base as builder
RUN yarn install --frozen-lockfile --production=false

COPY . .

ENV NODE_ENV=production
ARG NODE_CONFIG_ENV
ENV NODE_CONFIG_ENV=$NODE_CONFIG_ENV
RUN ./env-preset.sh yarn build


FROM base

ENV NODE_ENV=production

COPY . .
COPY --from=builder /app/.next /app/.next

EXPOSE 3000

COPY docker-entrypoint.sh /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD yarn start
