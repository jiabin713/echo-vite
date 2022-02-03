import { useAppStore } from '@/store';
import { NMenu } from 'naive-ui';
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouteRecordNormalized, useRoute, useRouter } from 'vue-router';
import { menuOptions } from './menuOptions';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const appStore = useAppStore();
    const router = useRouter();
    const route = useRoute();
    const collapsed = ref(false);
    const appRoute = router
      .getRoutes()
      .find((el) => el.name === 'root') as RouteRecordNormalized;
    return () => (
      <NMenu
        collapsed={collapsed.value}
        collapsedWidth={64}
        collapsedIconSize={22}
        indent={34}
        options={menuOptions}
      ></NMenu>
    );
  },
});
