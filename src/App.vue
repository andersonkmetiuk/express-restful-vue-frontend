<script>
import { ref, onMounted } from 'vue'
import api from './services/api'

export default {
  name: 'App',
  setup() {
    const books = ref([])

    // Function to fetch books from the API
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books')
        books.value = response.data
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    }

    // Calls the function when the component is mounted
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
