import FyButton from './Default/index.vue';


export default {
  title: 'Form/Buttons',
  component: FyButton,
  argTypes: {
    onClick: { action: 'clicked' },
    color: {
      control: { type: 'select' },
      options: ['', 'error', 'info', 'success', 'warning', 'primary'],
    },
  },
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { FyButton },
    template: '<FyButton v-bind="$props" @click="onClick">Label</FyButton>',
    methods: { toJSON: () => {} }, // bug vuetify
  };
};

export const Default = Template.bind({});
Default.args = {
  elevation: 5,
}
