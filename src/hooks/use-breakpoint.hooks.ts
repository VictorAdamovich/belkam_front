import { useMemo } from 'react';

import {
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XL,
  BREAKPOINT_XS,
  BREAKPOINT_XXL,
  BREAKPOINT_XXL_NEW,
} from '@constants/styles.constants';

import useWindowSize from './use-window-size.hooks';

 type TReturn = {
   isBreakpointXxl: boolean;
   isBreakpointXxlNew: boolean;
   isBreakpointXl: boolean;
   isBreakpointLg: boolean;
   isBreakpointMd: boolean;
   isBreakpointSm: boolean,
   isBreakpointXs: boolean;
 };

const useBreakpoint = (): TReturn => {
  const { width } = useWindowSize();

  const isBreakpointXxl = useMemo(() => Number(width) <= BREAKPOINT_XXL, [width]);
  const isBreakpointXxlNew = useMemo(() => Number(width) <= BREAKPOINT_XXL_NEW, [width]);
  const isBreakpointXl = useMemo(() => Number(width) <= BREAKPOINT_XL, [width]);
  const isBreakpointLg = useMemo(() => Number(width) <= BREAKPOINT_LG, [width]);
  const isBreakpointMd = useMemo(() => Number(width) <= BREAKPOINT_MD, [width]);
  const isBreakpointSm = useMemo(() => Number(width) <= BREAKPOINT_SM, [width]);
  const isBreakpointXs = useMemo(() => Number(width) <= BREAKPOINT_XS, [width]);

  return {
    isBreakpointXxl, isBreakpointXxlNew, isBreakpointXl, isBreakpointMd, isBreakpointSm, isBreakpointXs, isBreakpointLg,
  };
};

export default useBreakpoint;
