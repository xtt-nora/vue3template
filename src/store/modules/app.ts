import defaultSettings from "@/settings";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import { DeviceEnum } from "@/enums/DeviceEnum";
import { defineStore } from "pinia";
import pinia from "@/store";
import { computed } from "vue";

export const useAppStore = defineStore("app", () => {
  // 设备类型
  const device = useStorage("device", DeviceEnum.DESKTOP);
  // 布局大小
  const size = useStorage("size", defaultSettings.size);
  // 语言
  const language = useStorage("language", defaultSettings.language);

  /**
   * 根据语言标识读取对应的语言包
   */
  const locale = computed(() => {
    if (language?.value == "en") {
      return en;
    } else {
      return zhCn;
    }
  });
  // 切换设备
  function toggleDevice(val: string) {
    device.value = val;
  }

  function changeSize(val: string) {
    size.value = val;
  }
  function changeLanguage(val: string) {
    language.value = val;
  }
  return {
    device,
    language,
    locale,
    size,
    toggleDevice,
    changeSize,
    changeLanguage,
  };
});

export function useAppStoreHook() {
  return useAppStore(pinia);
}
