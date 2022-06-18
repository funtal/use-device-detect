import * as React from 'react';
import { DeviceDetectProvider, useDeviceDetect } from '../src';

const UseDevideDetectUsage = () => {
  const { deviceData } = useDeviceDetect();

  return (
    <div>
      {deviceData.isSmallerThanXS && <div>Is smaller than XS</div>}
      {deviceData.isSmallerThanSM && <div>Is smaller than SM</div>}
      {deviceData.isSmallerThanMD && <div>Is smaller than MD</div>}
      {deviceData.isSmallerThanLG && <div>Is smaller than LG</div>}
      {deviceData.isSmallerThanXL && <div>Is smaller than XL</div>}
    </div>
  )
};

export const App = () => {
  return (
    <DeviceDetectProvider breakpoints={{
      xl: 1600,
      lg: 1200,
      md: 992,
      sm: 768,
      xs: 480
    }}>
      <UseDevideDetectUsage />
    </DeviceDetectProvider>
  );
};
