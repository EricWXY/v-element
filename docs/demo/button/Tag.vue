<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ErButton } from 'er-element'
</script>

<template>
  <er-button>button</er-button>
  <er-button tag="div" role="button" tabindex="0">div</er-button>
  <er-button tag="a" href="https://www.baidu.com" target="_blank" rel="noopener noreferrer"
    >a</er-button
  >
</template>
