import Vue from 'vue';
import Vuetify from 'vuetify';
import FyChartGauge from '../FyChartGauge.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyChartGauge.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyChartGauge>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyChartGauge, {
        vuetify: new Vuetify(),
        ...options,
      });
    };
  });

  it('should render component and match snapshot', () => {
    const wrapper = mountFunction();

    expect(wrapper.html()).toMatchSnapshot();
  });
});
