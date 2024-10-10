<template>
  <div class="navbar-container">
    <!-- 导航栏面包屑 -->
    <div class="flex">
      <hamburger />
      <breadcrumb />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.navbar-container {
  @apply flex-x-between;

  height: $navbar-height;
  background: var(--el-bg-color);
}
</style>
