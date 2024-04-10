<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();
const isDarkMode = ref(false);

// Function to toggle dark mode
const toggleMode = () => {
  isDarkMode.value = !isDarkMode.value;
  // Toggle classes on the body to change themes
  if (isDarkMode.value) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
};

// Tabs array with routes and labels
const tabs = [
  {
    routeName: "index",
    label: "Home",
  },
  {
    routeName: "notifications",
    label: "Notifications",
  },
  {
    routeName: "search",
    label: "Search",
  },
  {
    routeName: "my-profile",
    label: "Profile",
  },
  {
    routeName: "settings",
    label: "Settings",
  },
];

// Function to simulate logout
const logout = () => {
  // Replace with your logout logic
};
</script>

<template>
  <div>
    <!-- Navigation Bar -->
    <aside class="navigation">
      <ul class="nav-list">
        <li v-for="tab in tabs" :key="tab.routeName">
          <RouterLink :to="{ name: tab.routeName }">
            {{ tab.label }}
          </RouterLink>
        </li>
      </ul>
    </aside>

    <!-- Main Content Area -->
    <main class="content">
      <!-- Your content here -->
    </main>

    <!-- Dark Mode Toggle Button -->
    <div class="dark-mode-toggle" @click="toggleMode">
      <div class="toggle-button" :class="{ 'dark': isDarkMode }"></div>
    </div>

    <!-- Logout Button -->
    <button @click="logout" class="logout-button">Logout</button>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  transition: background-color 0.3s, color 0.3s;
}

/* Navigation Bar */
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--nav-width);
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-list li a {
  display: block;
  padding: 0.5em 0;
  color: inherit;
  text-decoration: none;
}

/* Main Content */
.content {
  margin-left: var(--nav-width); /* Make space for the sidebar */
  padding: 1rem;
}

/* Dark Mode Toggle Styles */
.dark-mode-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 1.5rem;
  background-color: #fff;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  cursor: pointer;
}

.toggle-button {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #000;
  transition: all 0.3s ease;
}

.toggle-button.dark {
  transform: translateX(1.5rem);
  background-color: #fff;
}

/* Dark and Light Mode Color Definitions */
:root {
  --nav-width: 200px;
}

body.dark-mode {
  --background-color: #33333;
  --text-color: #b8d8be;
  background-color: var(--background-color);
  color: var(--text-color);
}

.dark-mode .navigation {
  background-color: var(--background-color);
}

body:not(.dark-mode) {
  --background-color: #fbf5eb;
  --text-color: #33333;
  background-color: var(--background-color);
  color: var(--text-color);
}

:not(.dark-mode) .navigation {
  background-color: var(--background-color);
}
</style>
