import defaultSettings from "@/settings";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import { defineStore } from "pinia";
import pinia from "@/store";
import { computed } from "vue";
import { useStorage } from "@vueuse/core";
export const useAppStore = defineStore("app", () => {
  // 语言
  const language = useStorage("language", defaultSettings.language);
  const locale = computed(() => {
    if (language?.value == "en") {
      return en;
    } else {
      return zhCn;
    }
  });
  function changeLanguage(val: string) {
    language.value = val;
  }
  return {
    language,
    locale,
    changeLanguage,
  };
});

export function useAppStoreHook() {
  return useAppStore(pinia);
}
