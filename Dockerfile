FROM node:16-alpine
WORKDIR /portfolio
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
