/*
 * @Description: 
 * @FilePath: \ts-element\src\components\Collapse\types.ts
 */
import type { Ref, InjectionKey } from 'vue';

export type collapseItemNameType = string | number;

// export interface CollapseProps {
//   accordion?: boolean;
// }

export interface CollapseItemProps {
  name: collapseItemNameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseCotext {
  activeNames: Ref<collapseItemNameType[]>;
  handleClickCollapseItem: (collapseItemName: collapseItemNameType) => void;
}

export const collapseCotextKey: InjectionKey<CollapseCotext> = Symbol('collapseCotextKey');