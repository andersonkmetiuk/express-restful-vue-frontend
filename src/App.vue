<script>
import { ref, onMounted } from 'vue'
import api from './services/api'

export default {
  name: 'App',
  setup() {
    const books = ref([])

    // Função para buscar os livros da API
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books')
        books.value = response.data
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    }

    // Chama a função ao montar o componente
    onMounted(fetchBooks)

    return {
      books,
    }
  },
}
</script>

<template>


  <RouterView />
</template>

