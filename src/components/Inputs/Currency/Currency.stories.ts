import InputCurrency from './index.vue';

export default {
  title: 'Form/Input/Currency',
  component: InputCurrency,
  argTypes: {},
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { InputCurrency },
    template: '<InputCurrency v-bind="$props" />',
  };
};

export const Default = Template.bind({});
Default.args = {
  value: '999',
};
