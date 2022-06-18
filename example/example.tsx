import * as React from 'react';

import { DeviceDetectProvider, useDeviceDetect } from '../src';

const UseDevideDetectUsage = () => {
  const { deviceData } = useDeviceDetect();

  return (
    <div>
      {deviceData.isSmallerThanXL && <div>Is smaller than XL</div>}
      {deviceData.isSmallerThanLG && <div>Is smaller than LG</div>}
      {deviceData.isSmallerThanMD && <div>Is smaller than MD</div>}
      {deviceData.isSmallerThanSM && <div>Is smaller than SM</div>}
      {deviceData.isSmallerThanXS && <div>Is smaller than XS</div>}

      {deviceData.isBiggerThanXL && <div>Is bigger than XL</div>}
      {deviceData.isBiggerThanLG && <div>Is bigger than LG</div>}
      {deviceData.isBiggerThanMD && <div>Is bigger than MD</div>}
      {deviceData.isBiggerThanSM && <div>Is bigger than SM</div>}
      {deviceData.isBiggerThanXS && <div>Is bigger than XS</div>}

      {deviceData.isXXL && <div>Is XXL</div>}
      {deviceData.isXL && <div>Is XL</div>}
      {deviceData.isLG && <div>Is LG</div>}
      {deviceData.isMD && <div>Is MD</div>}
      {deviceData.isSM && <div>Is SM</div>}
      {deviceData.isXS && <div>Is XS</div>}
    </div>
  )
};

export const App = () => (
  <DeviceDetectProvider>
    <UseDevideDetectUsage />
  </DeviceDetectProvider>
);
