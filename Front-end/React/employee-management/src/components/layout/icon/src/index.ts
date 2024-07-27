/* This is hacky workaround for error that says cannot export when --isolateModules flag in turned on */
import { Size } from './Icon';
export type IconSize = Size;
export { default, ICONS } from './Icon';

