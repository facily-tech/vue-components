import Vue from 'vue';
import Vuetify from 'vuetify';
import FyFilter from '../FyFilter.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyFilter.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyFilter>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyFilter, {
        vuetify: new Vuetify(),
        ...options,
      });
    };
  });

  it('should render component and match snapshot', () => {
    const wrapper = mountFunction({
      props: {
        allTags: [],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
