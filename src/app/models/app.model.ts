export interface View {
  level: number;
  title: string;
  tabLevel?: number; //simple/tabs
  componentType: any;
}

export interface ViewsContainer {
  [level: number]: View;
}
