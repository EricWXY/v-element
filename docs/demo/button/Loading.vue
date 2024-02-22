<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ErButton, ErIcon } from 'er-element'
</script>

<template>
  <er-button type="primary" loading>Loading</er-button>
  <er-button type="primary" loading-icon="bolt" loading>Loading</er-button>
  <er-button type="primary" loading>
    Loading
    <template #loading>
      <er-icon class="heart-icon" icon="heart" spin />
    </template>
  </er-button>
</template>

<style>
.heart-icon {
  margin-right: 6px;
}
</style>
