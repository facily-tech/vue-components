export interface ISubItemsDrawer {
  link: string;
  title: string;
}

export interface IItemsDrawer {
  title: string;
  icon: string;
  enable: boolean;
  id: string;
  subItems: ISubItemsDrawer[];
  link?: string;
  divider?: boolean;
}
