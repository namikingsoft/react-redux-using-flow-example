// @flow

export interface Action {
  type: string;
  error?: boolean;
  meta?: any;
}

export interface PayloadAction<T> extends Action {
  payload: T;
}
