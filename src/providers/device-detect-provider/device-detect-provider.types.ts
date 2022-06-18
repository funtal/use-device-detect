import { ReactNode } from 'react';
import { IDeviceDetectContextValue } from '../../context';

export interface IDeviceDetectProviderProps
  extends Partial<IDeviceDetectContextValue> {
  children: ReactNode;
}
