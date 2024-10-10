<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/modules/app";
import { computed } from "vue";

const appStore = useAppStore();
const locale = computed(() => appStore.locale);
</script>
