import { createContext } from 'react';

import { IDeviceDetectContextValue } from './device-detect.types';

export const DeviceDetectContext = createContext<IDeviceDetectContextValue | null>(null);
