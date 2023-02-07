<template>
  <v-app class="bg-grey-lighten-4">
    <NavBar/>
    <v-main class="mx-6 mb-4 pt-16">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>
