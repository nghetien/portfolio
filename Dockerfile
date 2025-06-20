FROM node:18-alpine AS base

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY turbo.json ./
COPY packages/ ./packages/
COPY apps/tiennghe.com/package.json ./apps/tiennghe.com/

RUN pnpm install --frozen-lockfile

COPY apps/tiennghe.com/ ./apps/tiennghe.com/

FROM base AS builder

WORKDIR /app

RUN pnpm turbo build --filter=tiennghe.com

FROM node:18-alpine AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/tiennghe.com/public ./apps/tiennghe.com/public

COPY --from=builder --chown=nextjs:nodejs /app/apps/tiennghe.com/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/tiennghe.com/.next/static ./apps/tiennghe.com/.next/static

USER nextjs

EXPOSE 3000

# Set environment variable
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start command
CMD ["node", "apps/tiennghe.com/server.js"]
