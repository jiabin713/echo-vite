import Footer from '@/components/Footer';
import { Layout } from '@arco-design/web-vue';
import { computed, defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import './index.module.less';

export default defineComponent({
  setup() {
    const collapse = ref(false);
    // const collapse = computed(() => {
    //   return appStore.menuCollapse;
    // });
    // const setCollapsed = (val: boolean) => {
    //   appStore.updateSettings({ menuCollapse: val });
    // };
    const setCollapsed = () => {
      collapse.value = !collapse.value;
    };
    const paddingStyle = computed(() => {
      // const paddingLeft = menu.value
      //   ? { paddingLeft: `${menuWidth.value}px` }
      //   : {};
      // const paddingTop = navbar.value ? { paddingTop: navbarHeight } : {};
      // return { ...paddingLeft, ...paddingTop };
      return { paddingLeft: '220px', paddingTop: '60px' };
    });
    return () => (
      <Layout class={'layout'}>
        {/* {
                navbar ? <div class={"layout-navbar"}><NavBar /></div>: null
            } */}
        <Layout>
          <Layout.Sider
            class={'layout-sider'}
            breakpoint="xl"
            collapsed={collapse.value}
            collapsible={true}
            width={220}
            // style={{ paddingTop: navbar ? '60px' : '' }}
            style={{ paddingTop: '60px' }}
            hideTrigger={true}
            onCollapse={setCollapsed}
          >
            <div class={'menu-wrapper'}>{/* <Menu /> */}</div>
          </Layout.Sider>
          <Layout class={'layout-content'} style={paddingStyle}>
            <Layout.Content>
              <RouterView />
            </Layout.Content>
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    );
  },
});
