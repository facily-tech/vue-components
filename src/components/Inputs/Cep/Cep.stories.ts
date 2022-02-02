import InputCep from './index.vue';

export default {
  title: 'Form/Input/Cep',
  component: InputCep,
  argTypes: {
    onInput: { action: 'input' },
  },
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { InputCep },
    template: '<InputCep v-bind="$props" @input="onInput" />',
  };
};

export const Default = Template.bind({});
Default.args = {
  value: '74805-180',
};
