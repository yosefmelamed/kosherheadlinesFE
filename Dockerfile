FROM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL = 'https://kosherheadlinesbe.onrender.com';
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]