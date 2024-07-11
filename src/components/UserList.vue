<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "../feature/store";
const store = useStore();

onMounted(async () => {
  await store.loadUsers();
});
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in store.users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>
