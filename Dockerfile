FROM node:12.22.9-alpine AS builder

ENV NODE_ENV=build

WORKDIR /home/node

COPY . /home/node

RUN ci \
    && npm run build \


# --- \
FROM node:12.22.9-alpine

ENV NODE_ENV=development

USER node

WORKDIR /home/node

COPY --from=builder /home/node/package.json /home/node/package*.json /home/node/
COPY --from=builder /home/node/node_modules /home/node/node_modules
COPY --from=builder /home/node/dist /home/node/dist

CMD ["node", "dist/main.js"]