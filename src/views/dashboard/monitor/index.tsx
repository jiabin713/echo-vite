import Breadcrumb from '@/components/Breadcrumb';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div class={'container'}>
        <Breadcrumb items={['menu.dashboard', 'menu.dashboard.monitor']} />
        <h1>monitor</h1>
      </div>
    );
  },
});
