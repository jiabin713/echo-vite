import { NLayoutFooter } from 'naive-ui';
import { defineComponent } from 'vue';
import './index.module.less';

export default defineComponent({
  setup() {
    return () => <NLayoutFooter class={'footer'}>Echo Pro</NLayoutFooter>;
  },
});
