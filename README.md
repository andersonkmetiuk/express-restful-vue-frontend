# express-restful-vue-frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Project Configuration

## Axios
First we need to install Axios for making HTTP requests for our backend

```
npm install axios
```

Create a configuration for axios `src/services/api.js`

```
import axios from 'axios';

// Define the base URL for the API
const api = axios.create({
  baseURL: 'http://localhost:3000/api', //database API endpoint
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
```