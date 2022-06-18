import { ReactNode } from 'react';

import { TBreakpoints } from '../../context';

export interface IDeviceDetectProviderProps {
  children: ReactNode;
  breakpoints?: Partial<TBreakpoints>;
}
