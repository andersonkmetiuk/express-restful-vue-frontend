<template>
  <div>
    <h1>Book Details</h1>
    <div class="book-details">
      <div v-if="book" class="book-card">
        <div class="book-info">
          <span class="info-label">ID:</span>
          <span class="info-value">{{ book.id }}</span>
        </div>
        <div class="book-info">
          <span class="info-label">Title:</span>
          <span class="info-value">{{ book.title }}</span>
        </div>
        <div class="book-info">
          <span class="info-label">Author:</span>
          <span class="info-value">{{ book.author }}</span>
        </div>
        <div class="book-info">
          <span class="info-label">Genre:</span>
          <span class="info-value">{{ book.genre }}</span>
        </div>
        <div class="book-info">
          <span class="info-label">Read:</span>
          <span class="info-value">{{ book.read ? 'Yes' : 'No' }}</span>
        </div>
      </div>

      <p v-else class="loading-text">Loading...</p>

      <router-link to="/" class="back-link">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    id: String, // Accepts the book ID as a prop
  },
  data() {
    return {
      book: null, // Stores book details
    }
  },
  async mounted() {
    try {
      console.log(`Fetching details for book ID: ${this.id}`)
      const response = await axios.get(`http://localhost:4000/api/books/${this.id}`)
      console.log('Book details fetched successfully:', response.data)
      this.book = response.data
    } catch (error) {
      console.error('Error fetching book details:', error)
    }
  },
}
</script>

<style scoped>
/* Page container */
.book-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Title */
h1 {
  font-size: 3rem;
  color: #4caf50;
  text-align: center;
  margin-bottom: 2rem;
}

/* Book details card */
.book-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
}

/* Individual book info row */
.book-info {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
}

/* Label (fixed part) */
.info-label {
  font-weight: bold;
  color: #4caf50;
}

/* Value (dynamic part) */
.info-value {
  color: #ff5722;
}

/* Loading text */
.loading-text {
  font-size: 1.2rem;
  color: #757575;
  margin-top: 1rem;
}

/* Back link */
.back-link {
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #1a73e8;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s;
}

.back-link:hover {
  color: #0f5bb5;
}
</style>
