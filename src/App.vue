<script>
import { ref, onMounted } from 'vue';
import api from './services/api';

export default {
  name: 'App',
  setup() {
    const books = ref([]);

    // Função para buscar os livros da API
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books');
        books.value = response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    // Chama a função ao montar o componente
    onMounted(fetchBooks);

    return {
      books,
    };
  },
};
</script>

<template>
  <div id="app">
    <h1>Livros</h1>
    <div class="book-list">
      <div v-for="book in books" :key="book._id" class="book-item">
        <!-- O router-link agora envolve o conteúdo do livro -->
        <router-link :to="'/book/' + book._id" class="book-link">
          <div class="book-title">{{ book.title }}</div>
          <div class="book-author">by {{ book.author }}</div>
          <div class="book-description">{{ book.description }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilo Global */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  color: #333;
  line-height: 1.6;
}

/* Estilo para a página */
#app {
  width: 100%;
  max-width: 1200px;
  min-height: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

h1 {
  font-size: 3rem;
  color: #1a73e8;
  text-align: center;
  margin-bottom: 2rem;
  word-wrap: break-word;
  max-width: 100%;
}

/* Lista de livros */
.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 0;
  list-style: none;
}

.book-item {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.book-item:hover {
  transform: translateY(-5px);
}

/* Título do livro */
.book-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4caf50;
  margin-bottom: 0.5rem;
  word-wrap: break-word;
  max-width: 100%;
}

/* Autor do livro */
.book-author {
  font-size: 1rem;
  color: #ff5722;
  margin-bottom: 1rem;
  word-wrap: break-word;
}

/* Descrição do livro */
.book-description {
  font-size: 0.9rem;
  color: #757575;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  word-wrap: break-word;
}

.book-link {
  display: block;
  text-decoration: none;
}

/* Responsividade */
@media (max-width: 768px) {
  #app {
    padding: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  .book-list {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>
