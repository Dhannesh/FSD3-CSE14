# Frontend - Backend

1. create project folder (lab7)
2. create frontend, backend folder with in project folder
3. open terminal and spit it to two
4. open frontend in to left side terminal
5. open backend into right side terminal
6. in backend
   a. initialize backend by `npm init -y`
   b. install nodemon by `npm i nodemon`
   c. open package.json from backend, update `type to module` and script
   d. create app.js
7. in frontend
   a. npm create vite@latest
   b. enter . as project name
   c. select framework as react from arrow key
   d. select variant as javascript from arrow key
   e. select esList for linting from arrow key
   f. select install and start the frontend

## add tailwind to existing react project

1. open terminal and goto project frontend folder
2. install tailwind by
   `npm install tailwindcss @tailwindcss/vite`
3. open vite.config.js
4. add `import tailwindcss from "@tailwindcss/vite";` in first line
5. add 'tailwindcss()' after react()
6. the file should look like

```
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

7. open src/index.css and remove all contents, then add below line
   `@import "tailwindcss";`
