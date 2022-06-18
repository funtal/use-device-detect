import { useEffect, useState } from 'react';
import useEventListener from 'react-use-event-listener';
import getClientWindowSize from 'get-client-window-size';

import { useDeviceDetectContext } from '..';

import { TBreakpoints } from '../../context';
import { IDeviceDetectData } from './use-device-detect.types';

const getDeviceData = ({ lg, md, sm, xl, xs }: TBreakpoints) => {
  const { width } = getClientWindowSize();

  const isXXL = width > xl;
  const isXS = width < xs;
  const isSM = width >= xs && width < sm;
  const isMD = width >= sm && width < md;
  const isLG = width >= md && width < lg;
  const isXL = width >= lg && width <= xl;

  const isBiggerThanXL = width > xl;
  const isBiggerThanLG = width > lg;
  const isBiggerThanMD = width > md;
  const isBiggerThanSM = width > sm;
  const isBiggerThanXS = width > xs;

  const isSmallerThanXL = width < xl;
  const isSmallerThanLG = width < lg;
  const isSmallerThanMD = width < md;
  const isSmallerThanSM = width < sm;
  const isSmallerThanXS = width < xs;

  return {
    isXXL,
    isXS,
    isSM,
    isMD,
    isLG,
    isXL,
    isBiggerThanXL,
    isBiggerThanLG,
    isBiggerThanMD,
    isBiggerThanSM,
    isBiggerThanXS,
    isSmallerThanXL,
    isSmallerThanLG,
    isSmallerThanMD,
    isSmallerThanSM,
    isSmallerThanXS,
  };
};

export const useDeviceDetect = () => {
  const { breakpoints } = useDeviceDetectContext();

  const [windowSize, setWindowSize] = useState(getClientWindowSize);
  const [deviceData, setDeviceData] = useState<IDeviceDetectData>(() =>
    getDeviceData(breakpoints)
  );

  useEffect(() => {
    setDeviceData(getDeviceData(breakpoints));
  }, [windowSize.width, breakpoints]);

  const handleResize = () => setWindowSize(getClientWindowSize());

  useEventListener('resize', handleResize);

  return { deviceData, windowSize, breakpoints };
};

export default useDeviceDetect;
