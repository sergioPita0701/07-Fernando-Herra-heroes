FROM node
RUN mkdir -p /app
WORKDIR /app
COPY . .
# USER node
RUN yarn
EXPOSE 3000
CMD [ "yarn", "dev", "--", "--host"]