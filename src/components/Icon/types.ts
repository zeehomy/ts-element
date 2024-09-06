/*
 * @Description: 
 * @FilePath: \ts-element\src\components\Icon\types.ts
 */
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome';

export interface IconProps extends FontAwesomeIconProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  color?: string;
}