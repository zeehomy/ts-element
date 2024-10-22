type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
type NativeType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  type?: ButtonType;
  size?: 'large' | 'small';
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  nativeType?: NativeType;
  autofocus?: boolean;
  icon?: string;
  loading?: boolean;
}

export interface ButtonInstance {
  buttonVariable: string;
  ref: HTMLButtonElement;
}