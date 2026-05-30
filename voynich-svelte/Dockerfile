# ── build stage ────────────────────────────────────────────────────────────────
FROM node:26-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# prune dev dependencies
RUN npm prune --omit=dev

# ── production stage ────────────────────────────────────────────────────────────
FROM node:26-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=80
ENV HOST=0.0.0.0

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 80

CMD ["node", "build"]
