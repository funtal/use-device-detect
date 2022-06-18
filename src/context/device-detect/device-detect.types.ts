import { EDeviceSize } from '../../enums';

export type TBreakpoints = Record<EDeviceSize, number>;

export interface IDeviceDetectContextValue {
  breakpoints: TBreakpoints;
}
