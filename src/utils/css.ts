import { viewportWidth } from '@constants/config';

export const transformRpxToVw = (rpx: number): string => `${rpx / (viewportWidth / 100)}vw`;
