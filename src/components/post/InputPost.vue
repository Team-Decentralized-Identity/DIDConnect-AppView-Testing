<template>
  <div class="container">
    <!-- Fixed Input Group for Posting New Content, now at the top -->
    <div class="input-area">
      <!-- Text input -->
      <textarea 
        v-model="state.text" 
        class="form-input" 
        placeholder="What's happening?" 
        @keydown="onkeydown"
      />
      <!-- Submit button -->
      <ButtonAsync 
        class="btn btn-primary" 
        :on-click="submit" 
        :force-loading="processingPost"
      >
        Post
      </ButtonAsync>
    </div>

    <!-- Scrollable Posts Feed -->
    <div class="posts-feed">
      <!-- Posts are rendered here. This part scrolls independently. -->
      <div class="post" v-for="post in posts" :key="post.id">
        <!-- Render post content here -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRoute, RouterLink } from "vue-router";
import ButtonAsync from "@/components/common/ButtonAsync.vue";

const route = useRoute();
const isDarkMode = ref(false);

const toggleMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.className = isDarkMode.value ? 'dark-mode' : '';
};

// Assuming 'posts' are coming from a parent component or a composable function
const posts = ref(null);

const state = reactive({
  text: '',
  // ... other reactive states if needed
});

const submit = () => {
  // Submit post logic
};

const onkeydown = (event) => {
  // Handle keydown event
};

// Replace with your logout logic
const logout = () => {
  console.log('Logging out...');
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.posts-feed {
  overflow-y: auto;
  flex-grow: 1;
}

.input-area {
  background: #fff; /* or your preferred color */
  padding: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
}

.form-input {
  flex-grow: 1;
  margin-right: 1rem;
  height: 40px; /* Reduced height to make the input area smaller */
}

.btn-primary {
  /* Style as needed */
}

.post {
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  /* Additional styles as needed */
}
</style>
