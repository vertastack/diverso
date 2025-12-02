# 1. Use an official Node.js image as the base
FROM node:slim AS deps

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies (only the package.json & lock files first to optimize caching)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

RUN npm install

# 4. Copy the rest of your app's code
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Use a smaller image for production
FROM node:slim AS runner

# 7. Set working directory again
WORKDIR /app

# 8. Copy necessary files from the previous stage
COPY --from=deps /app ./


# 9. Copy environments
COPY .env.production .env.production

# 10. Set environment variables
ENV NODE_ENV=production

# 11. Expose the port the app runs on
EXPOSE 3000

# 12. Start the app
CMD ["npm", "start"]