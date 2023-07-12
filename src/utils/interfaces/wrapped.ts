import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
  BackgroundColorProps,
  LayoutProps,
  PositionProps,
} from 'styled-system';

export interface IWrappedSystem
  extends BorderProps,
    PositionProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundColorProps,
    LayoutProps {}

export type IWrappedVariants =
  | 'outback:card'
  | 'outback:card:row'
  | 'outback:card:row:center'
  | 'outback:row'
  | 'outback:topRadius'
  | 'outback:bottomRadius'
  | 'outback:fullRadius'
  | 'outback:modal:full'
  | 'outback:card:row:space'
  | 'outback:row:center';

export type IButtonsVariants =
  | 'apple'
  | 'google'
  | 'facebook'
  | 'outback:primary'
  | 'outback:white:red'
  | 'outback:secondary'
  | 'outback:support'
  | 'outback:clean'
  | 'outback:white:border'
  | 'outback:white:border:red'
  | 'outback:disabled';
