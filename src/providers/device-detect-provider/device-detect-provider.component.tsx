import React from 'react';

import { DeviceDetectContext } from '../../context';
import { IDeviceDetectProviderProps } from './device-detect-provider.types';

export const DeviceDetectProvider = ({ children, breakpoints }: IDeviceDetectProviderProps) => (
  <DeviceDetectContext.Provider value={{ breakpoints }}>{children}</DeviceDetectContext.Provider>
);
