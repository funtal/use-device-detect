import isNumber from 'is-number';
import { useContext } from 'react';

import { DeviceDetectContext, TBreakpoints } from '../../context';

import { defaultBreakpoints } from './use-device-detect-context.defaults';

const validateUserBreakpoints = (breakpoints: Partial<TBreakpoints> | undefined) => {
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

export const useDeviceDetectContext = () => {
  const deviceDetectContext = useContext(DeviceDetectContext);

  const mergedBreakpoints = {
    ...defaultBreakpoints,
    ...deviceDetectContext?.breakpoints,
  };

  validateUserBreakpoints(mergedBreakpoints);

  return { breakpoints: mergedBreakpoints };
};
