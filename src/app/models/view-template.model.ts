export interface ViewTemplate {
  currentView: number;
  views: AppViews;
}

export interface AppViews {
  [key: number]: View;
}

export interface View {
  key: number;
  title: string;
  componentName: string;
}
