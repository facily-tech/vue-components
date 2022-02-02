import InputPhone from './index.vue';

export default {
  title: 'Form/Input/Phone',
  component: InputPhone,
  argTypes: {},
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { InputPhone },
    template: '<InputPhone v-bind="$props" />',
  };
};

export const Default = Template.bind({});
Default.args = {
  value: '896555555',
};
