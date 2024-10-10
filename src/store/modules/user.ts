import { resetRouter } from "@/router";
import pinia from "@/store";
import { TOKEN_KEY } from "@/enums/CacheEnum";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {});

/**
 * 用于在组件外部（如在Pinia Store 中）使用 Pinia 提供的store 实例。
 * 官方文档解释了如何在组件外部使用 Pinia Store：
 * https://pinia.vuejs.org/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
 */
export function useUserStoreHook() {
  return useUserStore(pinia);
}
