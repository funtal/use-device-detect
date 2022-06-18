import React from 'react';

import { DeviceDetectContext } from '../../context';

import { IDeviceDetectProviderProps } from './device-detect-provider.types';

import { defaultBreakpoints } from './device-detect-provider.defaults';

export const DeviceDetectProvider = ({
  children,
  breakpoints,
}: IDeviceDetectProviderProps) => {
  const mergedBreakpoints = { ...defaultBreakpoints, ...breakpoints };

  return (
    <DeviceDetectContext.Provider value={{ breakpoints: mergedBreakpoints }}>
      {children}
    </DeviceDetectContext.Provider>
  );
};
