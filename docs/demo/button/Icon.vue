<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ErButton, ErIcon } from 'er-element'
</script>

<template>
  <er-button type="primary" icon="edit" />
  <er-button type="primary" icon="share" />
  <er-button type="primary" icon="trash" />
  <er-button type="primary" icon="search">Search</er-button>
  <er-button type="primary">
    Upload <er-icon class="icon--right" icon="cloud-arrow-up" />
  </er-button>
</template>

<style>
.icon--right {
  margin-left: 6px;
}
</style>
