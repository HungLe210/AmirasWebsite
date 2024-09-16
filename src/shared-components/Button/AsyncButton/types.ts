import { ButtonBaseProps } from '../../../core';

export type AsyncButtonProps = Omit<ButtonBaseProps, 'onClick'> & {
  asyncOnClick?: () => Promise<void>;
};
