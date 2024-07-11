import trpc from "../trpc";
import { ref } from "vue";
import { defineStore } from "pinia";

type User = Awaited<ReturnType<typeof trpc.getUsers.query>>;

const users = ref<User>([]);

export const useStore = defineStore("store", () => {
  async function loadUsers() {
    users.value = await trpc.getUsers.query();
  }
  return {
    users,
    loadUsers,
  };
});
