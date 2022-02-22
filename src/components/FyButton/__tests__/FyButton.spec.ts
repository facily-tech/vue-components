import Vue from 'vue';

import Router from 'vue-router';

import FyButton from '../FyButton';

import { createLocalVue, mount, Wrapper } from '@vue/test-utils';

describe('FyButton.ts', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>;
  let router: Router;
  let localVue: typeof Vue;

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);

    mountFunction = (options = {}) => {
      return mount(FyButton, {
        localVue,
        router,
        ...options,
      });
    };
  });

  it('should render component and match snapshot', () => {
    expect(mountFunction().html()).toMatchSnapshot();
  });
});
