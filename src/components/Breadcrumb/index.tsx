import { NBreadcrumb, NBreadcrumbItem, NIcon } from 'naive-ui';
import { HomeFilled } from '@vicons/antd';
import { defineComponent, PropType, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import './index.module.less';

interface Props {
  items: string[];
}

export default defineComponent({
  name: 'BreadCrumb',
  props: {
    items: {
      type: Array as PropType<string[]>,
      default() {
        return [];
      },
    },
  },
  setup(props: Props) {
    const { items } = toRefs(props);
    const { t } = useI18n();

    return () => (
      <NBreadcrumb>
        <NBreadcrumbItem>
          <NIcon>
            <HomeFilled />
          </NIcon>
        </NBreadcrumbItem>
        {items.value.map((item: string) => (
          <NBreadcrumbItem key="item">{t(item)}</NBreadcrumbItem>
        ))}
      </NBreadcrumb>
    );
  },
});
