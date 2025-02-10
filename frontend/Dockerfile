#########################################
#   DEVELOPMENT STAGE
#########################################
FROM node:21-alpine as development

RUN apk add --no-cache libc6-compat

ENV NODE_ENV development

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

USER node

#########################################
#   BUILD STAGE
#########################################

FROM node:21-alpine as builder

WORKDIR /app

RUN apk add --no-cache libc6-compat

ENV NODE_ENV production

COPY --chown=node:node --from=development /app/node_modules ./node_modules
COPY --chown=node:node . .

ARG NEXT_PUBLIC_GOOGLE_MAP_API
ARG NEXT_PUBLIC_GRAPHQL_PATH

RUN touch .env.production
RUN echo "NEXT_PUBLIC_GOOGLE_MAP_API=$NEXT_PUBLIC_GOOGLE_MAP_API" >> .env.production
RUN echo "NEXT_PUBLIC_GRAPHQL_PATH=$NEXT_PUBLIC_GRAPHQL_PATH" >> .env.production
RUN cat .env.production

RUN npm run build

USER node

#########################################
#   PRODUCTION STAGE
########################################

FROM node:21-alpine as production

WORKDIR /app

RUN apk add --no-cache libc6-compat

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs

RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

CMD ["node", "server.js"]