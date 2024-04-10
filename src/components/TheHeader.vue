<script setup lang="ts">
import { useRoute } from "vue-router";

import { deleteSession } from "@/lib/bsky";

const route = useRoute();

const logout = () => {
  deleteSession();
  location.reload();
};

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
</script>

<template>
  <div>
    <div v-if="route.name !== 'main'" class="columns col-oneline p-2">
      <div class="top-bar">
          <img src="/src/assets/Filled_DIDConnect_Logo.png" alt="DIDConnect Logo" style="height: 65px;">
        <span class="login-brand">DIDConnect</span>
      </div>
      <button v-if="route.name !== 'login'" class="btn btn-link col-ml-auto" @click="logout">
        Logout
      </button>

    <!-- Navigation Bar -->
  <aside class="navigation">
    <ul class="nav-list">
      <li v-for="tab in tabs" :key="tab.routeName" v-if="route.name !== 'login'">
        <RouterLink :to="{ name: tab.routeName }">
        {{ tab.label }}
        </RouterLink>
      </li>
    </ul>
  </aside>
  </div>
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
  top: 8vh; /* Adjust this value to move the navigation down */
  left: 0.9%; /* Increase this value to move it to the right */
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
  font-size: 1.5rem; /* Increase the font size here */
}
</style>