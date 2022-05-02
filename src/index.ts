import { VueConstructor } from 'vue';

import FyAutocomplete from './components/FyAutocomplete';

import FyAvatar from './components/FyAvatar';

import { FyButton, FyButtonSearch } from './components/FyButton';

import { FyChartGauge } from './components/FyChart';

import { FyDataTable } from './components/FyDataTable';

import { FyDialog, FyDialogBase, FyDialogDelete } from './components/FyDialog';

import { FyDrawer } from './components/FyDrawer';

import { FyFilter } from './components/FyFilter';

import { FyCard, FyCardFilter, FyCardForm } from './components/FyCard';

import { FyInfoCard } from './components/FyInfoCard';

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
} from './components/FyInput';

import { FyNoticationBar } from './components/FyNotificationBar';

import { FySnackbar } from './components/FySnackbar';

import { FyToolbar } from './components/FyToolbar';

import { FyUserLabel } from './components/FyUserLabel';

import { FyPage } from './components/FyPage';

import { FyStatus } from './components/FyStatus';

const VueComponents = {
  install(Vue: VueConstructor): void {
    Vue.component('fy-autocomplete', FyAutocomplete);
    Vue.component('fy-button', FyButton);
    Vue.component('fy-button-search', FyButtonSearch);
    Vue.component('fy-input', FyInput);
    Vue.component('fy-avatar', FyAvatar);
    Vue.component('fy-autocomplete', FyAutocomplete);
    Vue.component('fy-button', FyButton);
    Vue.component('fy-chart-gauge', FyChartGauge);
    Vue.component('fy-data-table', FyDataTable);
    Vue.component('fy-dialog', FyDialog);
    Vue.component('fy-dialog-base', FyDialogBase);
    Vue.component('fy-dialog-delete', FyDialogDelete);
    Vue.component('fy-drawer', FyDrawer);
    Vue.component('fy-filter', FyFilter);
    Vue.component('fy-info-card', FyInfoCard);
    Vue.component('fy-input', FyInput);
    Vue.component('fy-input-cep', FyInputCep);
    Vue.component('fy-input-cnpj', FyInputCnpj);
    Vue.component('fy-input-cpf', FyInputCpf);
    Vue.component('fy-input-currency', FyInputCurrency);
    Vue.component('fy-input-date', FyInputDate);
    Vue.component('fy-input-date-time', FyInputDateTime);
    Vue.component('fy-input-phone', FyInputPhone);
    Vue.component('fy-input-time', FyInputTime);
    Vue.component('fy-snackbar', FySnackbar);
    Vue.component('fy-toolbar', FyToolbar);
    Vue.component('fy-notication-bar', FyNoticationBar);
    Vue.component('fy-user-label', FyUserLabel);
    Vue.component('fy-page', FyPage);
    Vue.component('fy-card', FyCard);
    Vue.component('fy-card-filter', FyCardFilter);
    Vue.component('fy-card-form', FyCardForm);
    Vue.component('fy-status', FyStatus);
  },
};

export {
  FyAvatar,
  FyAutocomplete,
  FyButton,
  FyButtonSearch,
  FyChartGauge,
  FyDataTable,
  FyDialog,
  FyDialogBase,
  FyDialogDelete,
  FyDrawer,
  FyFilter,
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
  FySnackbar,
  FyToolbar,
  FyNoticationBar,
  FyUserLabel,
  FyPage,
  FyCard,
  FyCardFilter,
  FyCardForm,
  FyStatus,
};

export default VueComponents;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueComponents);
}
