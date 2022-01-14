export interface IDataTableHeaders {
  text: string;
  align: string;
  value: string;
}

interface IDataTableColumnsObject {
  title: string;
  subtitle: string;
}

interface IDataTableColumnsCheckbox {
  checked: boolean;
  onChange?: (event: Event) => void;
}

interface IDataTableColumns {
  [index: string]: string | IDataTableColumnsObject | IDataTableColumnsCheckbox;
}

interface IDataTableStatus {
  text: string;
  color: string;
}

interface IDataTableActions {
  type: 'active' | 'icon-btn' | 'link';
  color: string;
  actionKey: string;
  icon: string;
  label: string;
}

export interface IDataTableRows {
  id: string;
  showId: boolean;
  clickable: boolean;
  cols: IDataTableColumns;
  status?: IDataTableStatus;
  actions?: IDataTableActions[];
}

export interface IDataTablePagination {
  itemsPerPage: number;
  page: number;
  totalPages: number;
}
