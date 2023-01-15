FROM node:lts as dependencies
WORKDIR /next_full
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /next_full
COPY . .
COPY --from=dependencies /next_full/node_modules ./node_modules
RUN npm build

FROM node:lts as runner
WORKDIR /next_full
ENV NODE_ENV production

COPY --from=builder /next_full/public ./public
COPY --from=builder /next_full/package.json ./package.json
COPY --from=builder /next_full/.next ./.next
COPY --from=builder /next_full/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]