export interface IDrawerSubItems {
  link: string;
  title: string;
}

export interface IDrawerItems {
  title: string;
  icon: string;
  enable: boolean;
  id: string;
  subItems: IDrawerSubItems[];
  link?: string;
  divider?: boolean;
}
