import InputCpf from './index.vue';

export default {
  title: 'Form/Input/CPF',
  component: InputCpf,
  argTypes: {},
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { InputCpf },
    template: '<InputCpf v-bind="$props" />',
  };
};

export const Default = Template.bind({});
Default.args = {
  value: '028.356.982-89',
};
