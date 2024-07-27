import React from 'react';
import AsyncSelect, { components } from 'react-select/async';
import { colors, sizes } from '../../theme/src/';
import { LabelTypography, SmallTypography } from '../../typography/lib/';
import Icon from '../../icon/lib/';
import CustomIndicator from './CustomIndicator';
import ValueContainer from './ValueContainer';
import Option from './Option';

const CustomStyles = {
  input: (provided) => ({
    ...provided,
    outline: 'none',
    boxShadow: 'none'
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    border: `0.1rem solid ${state.isFocused ? colors.purple2 : colors.gray2}`,
    borderRadius: '0.3rem',
    cursor: 'pointer',
    height: `${sizes.large}`,
    '&>div': {
      padding: '0 1rem'
    },
    '&:hover': {
      borderColor: 'auto'
    }
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: colors.cta
  }),
  container: (provided) => ({
    ...provided,
    outline: 'none',
    boxShadow: 'none',
    marginTop: `${sizes.xxSmall}`
  }),
  option: (provided, props) => {
    const base = {
      ...provided,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      textAlign: 'left',
      cursor: 'pointer',
      color: colors.black,
      backgroundColor: 'transparent',
      ':active': {
        backgroundColor: colors.purple1
      },
      ':hover': {
        backgroundColor: colors.purple1
      }
    };
    if (props.isFocused) {
      base.backgroundColor = colors.purple1;
    }
    return base;
  },
  menu: (provided, state) => {
    const base = {
      ...provided,
      margin: 0
    };
    if (state.selectProps.restrictedHeight) {
      base.height = '10rem';
    }
    return base;
  },
  menuList: (provided, state) => {
    const base = {
      ...provided
    };
    if (state.selectProps.restrictedHeight) {
      base.height = '10rem';
    }
    return base;
  },
  theme: (theme) => ({
    ...theme,
    primary25: colors.purple1,
    primary: colors.purple1
  })
};

const ClearIndicator = (props) => {
  return (
    <components.ClearIndicator {...props}>
      <Icon iconClass="times" weight="fas" color={colors.cta} iconSize="1x" />
    </components.ClearIndicator>
  );
};

const CustomComponents = {
  DropdownIndicator: CustomIndicator,
  IndicatorSeparator: () => null,
  ClearIndicator,
  ValueContainer,
  Option
};

const DropdownList = ({
  items = [],
  value,
  handleChange,
  placeholder = '',
  label = '',
  labelMessage = undefined,
  id = `dropdown-${new Date().getTime()}`,
  disabled = false,
  isSearchable = false,
  isClearable = false,
  restrictedHeight = undefined
}) => {
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  return (
    <div>
      <LabelTypography className={disabled ? 'disabled' : ''} htmlFor={id}>
        {label} {labelMessage && <SmallTypography className="disabled">{labelMessage}</SmallTypography>}
      </LabelTypography>
      <AsyncSelect
        id={id}
        options={items}
        loadOptions={loadOptions}
        value={value}
        restrictedHeight={restrictedHeight}
        isSearchable={isSearchable}
        isClearable={isClearable}
        placeholder={placeholder}
        onChange={handleChange}
        isDisabled={disabled}
        styles={CustomStyles}
        components={CustomComponents}
      />
    </div>
  );
};

export default DropdownList;
