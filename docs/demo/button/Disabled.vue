<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ErButton } from 'er-element'
</script>

<template>
  <p>
    <er-button disabled>Default</er-button>
    <er-button type="primary" disabled>Primary</er-button>
    <er-button type="success" disabled>Success</er-button>
    <er-button type="info" disabled>Info</er-button>
    <er-button type="warning" disabled>Warning</er-button>
    <er-button type="danger" disabled>Danger</er-button>
  </p>
  <p>
    <er-button plain disabled>Plain</er-button>
    <er-button type="primary" plain disabled>Primary</er-button>
    <er-button type="success" plain disabled>Success</er-button>
    <er-button type="info" plain disabled>Info</er-button>
    <er-button type="warning" plain disabled>Warning</er-button>
    <er-button type="danger" plain disabled>Danger</er-button>
  </p>
</template>
