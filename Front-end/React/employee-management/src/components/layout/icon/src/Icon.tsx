import React from 'react';
import { IconLookup, IconName } from '@fortawesome/fontawesome-svg-core';
import './fal';
import './fas';
import './far';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type Size = 'xs' | 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';

export enum ICONS {
  'address-book' = 'address-book',
  'ambulance' = 'ambulance',
  'analytics' = 'analytics',
  'angle-double-left' = 'angle-double-left',
  'angle-double-right' = 'angle-double-right',
  'angle-down' = 'angle-down',
  'angle-left' = 'angle-left',
  'angle-right' = 'angle-right',
  'angle-up' = 'angle-up',
  'arrow-alt-up' = 'arrow-alt-up',
  'arrow-left' = 'arrow-left',
  'arrow-right' = 'arrow-right',
  'arrow-to-bottom' = 'arrow-to-bottom',
  'balance-scale' = 'balance-scale',
  'ban' = 'ban',
  'bars' = 'bars',
  'bed' = 'bed',
  'bell' = 'bell',
  'bell-slash' = 'bell-slash',
  'book' = 'book',
  'building' = 'building',
  'bullhorn' = 'bullhorn',
  'calendar-day' = 'calendar-day',
  'car' = 'car',
  'car-garage' = 'car-garage',
  'caret-circle-down' = 'caret-circle-down',
  'caret-down' = 'caret-down',
  'caret-left' = 'caret-left',
  'caret-up' = 'caret-up',
  'chart-line' = 'chart-line',
  'chart-network' = 'chart-network',
  'check' = 'check',
  'check-circle' = 'check-circle',
  'check-square' = 'check-square',
  'circle' = 'circle',
  'clinic-medical' = 'clinic-medical',
  'clipboard' = 'clipboard',
  'clock' = 'clock',
  'cloud-upload' = 'cloud-upload',
  'cog' = 'cog',
  'cogs' = 'cogs',
  'comment' = 'comment',
  'comments' = 'comments',
  'comment-alt' = 'comment-alt',
  'comment-alt-dots' = 'comment-alt-dots',
  'comment-check' = 'comment-check',
  'comment-slash' = 'comment-slash',
  'concierge-bell' = 'concierge-bell',
  'clone' = 'clone',
  'credit-card' = 'credit-card',
  'download' = 'download',
  'ellipsis-h' = 'ellipsis-h',
  'ellipsis-v' = 'ellipsis-v',
  'envelope' = 'envelope',
  'exclamation-circle' = 'exclamation-circle',
  'exclamation-triangle' = 'exclamation-triangle',
  'external-link'='external-link',
  'file-alt' = 'file-alt',
  'file-csv' = 'file-csv',
  'filter' = 'filter',
  'flag' = 'flag',
  'folder-open' = 'folder-open',
  'garage-car' = 'garage-car',
  'grip-vertical' = 'grip-vertical',
  'handshake' = 'handshake',
  'handshake-slash' = 'handshake-slash',
  'hands-helping' = 'hands-helping',
  'hospital' = 'hospital',
  'house' = 'house',
  'inbox-in' = 'inbox-in',
  'info-circle' = 'info-circle',
  'info-square' = 'info-square',
  'key' = 'key',
  'lock-alt' = 'lock-alt',
  'minus' = 'minus',
  'minus-circle' = 'minus-circle',
  'minus-square' = 'minus-square',
  'notes-medical' = 'notes-medical',
  'paperclip' = 'paperclip',
  'paper-plane' = 'paper-plane',
  'pencil' = 'pencil',
  'phone' = 'phone',
  'plus' = 'plus',
  'prescription-bottle' = 'prescription-bottle',
  'print' = 'print',
  'procedures' = 'procedures',
  'question-circle' = 'question-circle',
  'random' = 'random',
  'redo' = 'redo',
  'repeat-alt' = 'repeat-alt',
  'reply' = 'reply',
  'search' = 'search',
  'share' = 'share',
  'sign-in-alt' = 'sign-in-alt',
  'sort' = 'sort',
  'sort-down' = 'sort-down',
  'sort-up' = 'sort-up',
  'spinner' = 'spinner',
  'square' = 'square',
  'stretcher' = 'stretcher',
  'tablets' = 'tablets',
  'tasks' = 'tasks',
  'th' = 'th',
  'times' = 'times',
  'times-circle' = 'times-circle',
  'times-square' = 'times-square',
  'tombstone' = 'tombstone',
  'tools' = 'tools',
  'trash-alt' = 'trash-alt',
  'user-check' = 'user-check',
  'user-circle' = 'user-circle',
  'user-friends' = 'user-friends',
  'user' = 'user',
  'user-plus' = 'user-plus',
  'user-minus' = 'user-minus',
  'user-tag' = 'user-tag',
  'walking' = 'walking',
}

type IconProps = {
  iconClass: IconName;
  iconSize?: Size;
  weight?: 'fas' | 'fal' | 'far';
  style?: React.CSSProperties;
  className?: string;
  color?: string;
  spin?: boolean;
};

const Icon: React.FC<IconProps> = ({
  iconSize = 'sm',
  weight = 'fas',
  className = '',
  color = '',
  iconClass,
  style,
  ...restOfProps
}) => {
  const iconLookup: IconLookup = { prefix: weight, iconName: iconClass };

  if (!(iconClass in ICONS)) {
    return <span>Invalid icon</span>;
  }

  return (
    <FontAwesomeIcon
      data-testid={`icon-${iconClass}`}
      icon={iconLookup}
      size={iconSize}
      className={className}
      style={style}
      color={color}
      {...restOfProps}
    />
  );
};

export default Icon;
