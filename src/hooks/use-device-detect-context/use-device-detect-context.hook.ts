import { useContext } from 'react';

import { DeviceDetectContext } from '../../context';

export const useDeviceDetectContext = () => {
  const deviceDetectContext = useContext(DeviceDetectContext);

  if (!deviceDetectContext) {
    throw new Error(
      'DeviceDetectContext is unavailable, make sure you are using DeviceDetectProvider context.'
    );
  }

  return deviceDetectContext;
};
