type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface ButtonProps {
  type?: ButtonType;
  size?: 'large' | 'small';
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
}