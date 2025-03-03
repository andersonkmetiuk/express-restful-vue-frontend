<template>
  <div>
    <h1>Book List</h1>
    <div id="app">
      <ul class="book-list">
        <li v-for="book in books" :key="book.id" class="book-item">
          <router-link :to="'/book/' + book.id" class="book-link">
            <div class="book-title">{{ book.title }}</div>
            <div class="book-author">by {{ book.author }}</div>
            <div class="book-description">{{ book.description }}</div>
            <!-- <div class="book-id">{{ book.id }}</div> -->
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      books: [], // List of books to display
    }
  },
  async mounted() {
    console.log('%cMounted: Fetching books...', 'color: blue; font-weight: bold;')
    try {
      const response = await axios.get('http://localhost:4000/api/books')
      console.log('%cBooks fetched successfully:', 'color: green; font-weight: bold;')
      console.table(response.data) // Display the data in a table format for better readability
      this.books = response.data
    } catch (error) {
      console.error('%cError fetching books:', 'color: red; font-weight: bold;', error)
    }
  },
}
</script>

<style scoped>
/* Global Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  color: #333;
  line-height: 1.6;
}

/* Page Styles */
#app {
  /* width: 100%;
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
  justify-content: flex-start; */
}

h1 {
  font-size: 3rem;
  color: #4caf50;
  text-align: center;
  margin-bottom: 2rem;
  word-wrap: break-word;
  max-width: 100%;
}

/* Book List */
.book-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0;
  list-style: none;
  width: 100%;
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
  width: 100%;
}

.book-item:hover {
  transform: translateY(-5px);
}

/* Book Title */
.book-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4caf50;
  margin-bottom: 0.5rem;
  word-wrap: break-word;
  max-width: 100%;
}

/* Book Author */
.book-author {
  font-size: 1rem;
  color: #ff5722;
  margin-bottom: 1rem;
  word-wrap: break-word;
}

/* Book Description */
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
  width: 100%;
}

/* Responsiveness */
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
