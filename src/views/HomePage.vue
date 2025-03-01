<template>
  <div>
    <h1>Book List</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        <!-- Use router-link to navigate to the book detail page -->
        <router-link :to="`/book/${book.id}`">{{ book.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],
    };
  },
  async mounted() {
    console.log('%cMounted: Fetching books...', 'color: blue; font-weight: bold;');
    try {
      const response = await axios.get('http://localhost:4000/api/books');
      console.log('%cBooks fetched successfully:', 'color: green; font-weight: bold;');
      console.table(response.data);  // Display the data in a table format for better readability
      this.books = response.data;
    } catch (error) {
      console.error('%cError fetching books:', 'color: red; font-weight: bold;', error);
    }
  },
};
</script>
