import { VueConstructor } from 'vue';

import { FyAutocomplete } from './components/Autocomplete';

import FyButton from './components/FyButton';

import { FyNoticationBar } from './components/NotificationBar';

import { FyUserLabel } from './components/UserLabel';

import { FyInfoCard } from './components/InfoCard';

import { FyDialog, FyDialogDelete } from './components/Dialogs';

import { FyDrawer } from './components/Drawer';

import { FySnackbar } from './components/Snackbar';

import { FyToolbar } from './components/Toolbar';

import { FyFilterData } from './components/Filters';

import { FyDataTable } from './components/DataTable';

import {
  FyInput,
  FyInputCpf,
  FyInputCnpj,
  FyInputPhone,
  FyInputCep,
  FyInputDate,
  FyInputTime,
  FyInputDateTime,
  FyInputCurrency,
} from './components/Inputs';

import { FyGaugeChart } from './components/Charts';

const VueComponents = {
  install(Vue: VueConstructor, options?: any): void {
    Vue.component('fy-autocomplete', FyAutocomplete);
    Vue.component('fy-button', FyButton);
    Vue.component('fy-autocomplete', FyAutocomplete);
    Vue.component('fy-autocomplete', FyAutocomplete);
  },
};

export {
  FyAutocomplete,
  FyButton,
  FyNoticationBar,
  FyUserLabel,
  FyInfoCard,
  FyInput,
  FyInputCpf,
  FyInputCnpj,
  FyInputPhone,
  FyInputCep,
  FyInputDate,
  FyInputTime,
  FyInputDateTime,
  FyInputCurrency,
  FyDialog,
  FyDialogDelete,
  FyDrawer,
  FySnackbar,
  FyToolbar,
  FyFilterData,
  FyDataTable,
  FyGaugeChart,
};

export default VueComponents;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueComponents);
}
