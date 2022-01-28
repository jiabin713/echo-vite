<template>
  <div class="container">
    <Breadcrumb :items="['menu.ums', 'menu.ums.staff']" />
    <h1>staff</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.container {
  padding: 0 20px 20px 20px;
}
.layout {
  display: flex;
  &-left-side {
    flex-basis: 300px;
  }
  &-content {
    flex: 1;
    padding: 0 16px;
  }
  &-right-side {
    flex-basis: 280px;
  }
}
</style>
