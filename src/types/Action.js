// @flow
export interface Action {
  type: string;
  meta?: any;
  error?: Error;
}

export interface PayloadAction<T> extends Action {
  payload: T;
}
