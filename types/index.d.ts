import { VueConstructor } from 'vue';

import {
  IDataTableHeaders,
  IDataTablePagination,
  IDataTableRows,
} from '../src/components/FyDataTable/types';

import { IDialog, IDialogDeleteItem } from '../src/components/FyDialog/types';

import { IDrawerItems, IDrawerSubItems } from '../src/components/FyDrawer/types';

import { IFiltersAllTags } from '../src/components/FyFilter/types';

import { INotificationBarProps } from '../src/components/FyNotificationBar/types';
import { ISnackbarProps } from '../src/components/FySnackbar/types';
import { IItemsToolbar } from '../src/components/FyToolbar/types';

import {
  fyFormatDate,
  fyParserDateOder,
  fyFormatMaskCellPhone,
  fyFormatMaskCurrency,
  fyFormatMaskTaxId,
  fyFormatMaskZipCode,
  fyNormalizeSpecialCharacters,
  fyNormalizeString,
  fyGenerateQueryParams,
  fyGenerateSlug,
} from '../src/utils';

import { IParamsProps } from '../src/utils/types';

export const FyAvatar: VueConstructor;
export const FyAutocomplete: VueConstructor;
export const FyButton: VueConstructor;
export const FyChartGauge: VueConstructor;
export const FyDataTable: VueConstructor;
export const FyDataTableBase: VueConstructor;
export const FyDialog: VueConstructor;
export const FyDialogBase: VueConstructor;
export const FyDialogDelete: VueConstructor;
export const FyDrawer: VueConstructor;
export const FyFilter: VueConstructor;
export const FyInfoCard: VueConstructor;
export const FyInput: VueConstructor;
export const FyInputCpf: VueConstructor;
export const FyInputCnpj: VueConstructor;
export const FyInputPhone: VueConstructor;
export const FyInputCep: VueConstructor;
export const FyInputDate: VueConstructor;
export const FyInputTime: VueConstructor;
export const FyInputDateTime: VueConstructor;
export const FyInputCurrency: VueConstructor;
export const FyPage: VueConstructor;
export const FySnackbar: VueConstructor;
export const FySnackbarBase: VueConstructor;
export const FyToolbar: VueConstructor;
export const FyNoticationBar: VueConstructor;
export const FyUserLabel: VueConstructor;

export type IFyDataTableHeaders = IDataTableHeaders;
export type IFyDataTablePagination = IDataTablePagination;
export type IFyDataTableRows = IDataTableRows;
export type IFyIDialog = IDialog;
export type IFyIDialogDeleteItem = IDialogDeleteItem;
export type IFyDrawerItems = IDrawerItems;
export type IFyDrawerSubItems = IDrawerSubItems;

export type IFyFiltersAllTags = IFiltersAllTags;
export type IFyNotificationBarProps = INotificationBarProps;
export type IFySnackbarProps = ISnackbarProps;
export type IFyItemsToolbar = IItemsToolbar;

export type IFyParamsProps = IParamsProps;

export {
  fyFormatDate,
  fyParserDateOder,
  fyFormatMaskCellPhone,
  fyFormatMaskCurrency,
  fyFormatMaskTaxId,
  fyFormatMaskZipCode,
  fyNormalizeSpecialCharacters,
  fyNormalizeString,
  fyGenerateQueryParams,
  fyGenerateSlug,
};
