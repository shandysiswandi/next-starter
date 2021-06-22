export interface ActionPayloadTyped {
  value: any;
  description?: string;
}

export interface ActionTyped {
  type: string;
  payload?: ActionPayloadTyped;
}
