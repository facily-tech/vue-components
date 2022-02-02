import InputCnpj from './index.vue';

export default {
  title: 'Form/Input/CNPJ',
  component: InputCnpj,
  argTypes: {},
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { InputCnpj },
    template: '<InputCnpj v-bind="$props" />',
  };
};

export const Default = Template.bind({});
Default.args = {
  value: '87.007.135/0001-67',
};
