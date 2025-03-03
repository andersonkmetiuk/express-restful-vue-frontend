<template>
  <div>
    <h1>Book Details</h1>
    <p v-if="book">ID: {{ book._id }}</p>
    <p v-if="book">Title: {{ book.title }}</p>
    <p v-if="book">Author: {{ book.author }}</p>
    <p v-if="book">Genre: {{ book.genre }}</p>
    <p v-if="book">Read: {{ book.read ? 'Yes' : 'No' }}</p>

    <p v-else>Loading...</p>

    <RouterLink to="/">Home</RouterLink>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    id: String, // Accepts the book id as a prop
  },
  data() {
    return {
      book: null,
    }
  },
  async mounted() {
    try {
      const response = await axios.get(`http://localhost:4000/api/books/${this.id}`)
      this.book = response.data
    } catch (error) {
      console.error('Error fetching book details:', error)
    }
  },
}
</script>
