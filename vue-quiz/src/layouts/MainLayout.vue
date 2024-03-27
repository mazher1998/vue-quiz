<template>
  <q-layout view="lHr Lpr lFf">
    <NavHeader/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import NavHeader from 'components/NavHeader.vue';
</script>
