import React from 'react';
import isNumber from 'is-number';

import { defaultBreakpoints } from './device-detect-provider.defaults';

import { DeviceDetectContext, TBreakpoints } from '../../context';
import { IDeviceDetectProviderProps } from './device-detect-provider.types';

const validateUserBreakpoints = (
  breakpoints: Partial<TBreakpoints> | undefined
) => {
  if (!breakpoints) {
    return;
  }

  const breakpointsAsArray = [
    breakpoints.xs,
    breakpoints.sm,
    breakpoints.md,
    breakpoints.lg,
    breakpoints.xl,
  ];
  const filteredBreakpoints = breakpointsAsArray.filter(isNumber);

  const hasNegativeValues = filteredBreakpoints.some(value => value! < 0);
  if (hasNegativeValues) {
    throw new Error('Breakpoints must be positive numbers.');
  }

  const hasDuplicates = filteredBreakpoints.some(
    (value, index, self) => self.indexOf(value) !== index
  );
  if (hasDuplicates) {
    throw new Error('Breakpoints must not have duplicates.');
  }

  const hasAscendingValues = filteredBreakpoints.every(
    (value, index, self) => index === 0 || value! >= self[index - 1]!
  );
  if (!hasAscendingValues) {
    throw new Error('Breakpoints must be ascending.');
  }

  return;
};

export const DeviceDetectProvider = ({
  children,
  breakpoints,
}: IDeviceDetectProviderProps) => {
  validateUserBreakpoints(breakpoints);

  const mergedBreakpoints = { ...defaultBreakpoints, ...breakpoints };

  return (
    <DeviceDetectContext.Provider value={{ breakpoints: mergedBreakpoints }}>
      {children}
    </DeviceDetectContext.Provider>
  );
};
