#base image 
FROM  node:20-alpine
#set the working directory
WORKDIR /app
#Copy package.json and package-lock.json first for better caching
COPY package*.json ./
#Install dependencies
RUN npm install 
#Copy the rest of the application files
COPY . .
#Expose the port(5173 for vite)
EXPOSE 5173
#Start the app with npm run dev
CMD ["npm","run","dev","--","--host","0.0.0.0","--port","5173"]
