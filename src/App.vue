<script setup lang="tsx">
</script>
<template>
  用于 开发时测试
  <!-- <h1>button 组件演示</h1>
  <er-button @click="createMessage({ message: 'info msg', showClose: true })"
    >Default Button</er-button
  >
  <er-button plain>Plain Button</er-button>
  <er-button round>Round Button</er-button>
  <er-button circle>E</er-button>
  <er-button disabled>Disabled Button</er-button><br /><br />
  <er-button type="primary">Primary</er-button>
  <er-button type="success">Success</er-button>
  <er-button type="info">Info</er-button>
  <er-button type="warning">Warning</er-button>
  <er-button type="danger">Danger</er-button><br /><br />
  <er-button type="primary" plain>Primary</er-button>
  <er-button type="success" plain>Success</er-button>
  <er-button type="info" plain>Info</er-button>
  <er-button type="warning" plain>Warning</er-button>
  <er-button type="danger" plain>Danger</er-button><br /><br />
  <er-button size="large">Large</er-button>
  <er-button>Default</er-button>
  <er-button size="small">Small</er-button>
  <er-button loading>加载中</er-button>
  <er-button icon="arrow-up">图标</er-button>
  <hr />
  <h1>collapse 组件演示</h1>
  <er-collapse v-model="openVal" accordion>
    <er-collapse-item name="a" title="Title a">
      <h1>headline title</h1>
      <div>this is content a</div>
    </er-collapse-item>
    <er-collapse-item name="b" title="title b">
      <div>this is content b</div>
    </er-collapse-item>
    <er-collapse-item name="c" title="title c  disable" disabled>
      <div>this is content c</div>
    </er-collapse-item>
  </er-collapse>

  <hr />
  <er-tooltip
    ref="tooltipRef"
    trigger="click"
    placement="right-end"
    :popper-options="{ placement: 'right-end', strategy: 'fixed' }"
  >
    <er-button icon="arrow-up">tooltip</er-button>
    <template #content> 弹出部分 </template>
  </er-tooltip>

  <hr />
  <er-dropdown
    :menu-options="dropdownOptions"
    trigger="click"
    @select="createMessage({ message: $event.label, showClose: true })"
    >dropdown</er-dropdown
  > -->
</template>
