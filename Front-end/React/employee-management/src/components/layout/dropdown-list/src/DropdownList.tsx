import React from 'react';
import styled from '@emotion/styled';
import '@emotion/react'; // Ensure you're using the correct Emotion version
import Select, {
  components,
  Props as SelectProps,
  StylesConfig,
  GroupBase,
  Theme,
  // You can directly use the type for component props here
} from 'react-select';
import { colors, sizes, zIndices } from '../../theme/lib/';
import { LabelTypography, SmallTypography, StandardSemiBoldTypography } from '../../typography/lib/';
import Icon from '../../icon/lib/';
import CustomIndicator from './CustomIndicator';
import ValueContainer from './ValueContainer';
import Option from './Option';

export interface Value {
  label: string;
  value: string;
}

interface DropdownListProps extends SelectProps<Value, false, GroupBase<Value>> {
  className?: string;
  items: Value[] | [];
  value?: Value;
  handleChange: (event: Value | null) => void;
  placeholder?: string;
  label?: string;
  labelMessage?: string;
  id: string;
  disabled?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  restrictedHeight?: undefined;
  required?: boolean;
  isWithinModal?: boolean;
  error?: boolean;
  errorMessage?: string;
}

const Required = styled(StandardSemiBoldTypography)`
  color: ${colors.red2};
`;

const ErrorMessage = styled(SmallTypography)<{ error: boolean }>`
  display: block;
  visibility: ${({ error }) => (error ? 'visible' : 'hidden')};
  margin: ${sizes.xxSmall} 0;
  color: ${colors.yellow3};
  svg {
    visibility: ${({ error }) => (error ? 'visible' : 'hidden')};
    margin-right: ${sizes.xxSmall};
  }
`;

const CustomStyles: StylesConfig<Value, false, GroupBase<Value>> = {
  input: (provided) => ({
    ...provided,
    outline: 'none',
    boxShadow: 'none'
  }),
  control: (provided, state) => {
    let borderColor = colors.gray2;
    if (state.isFocused) {
      borderColor = colors.purple2;
    } else if (state.selectProps.error) {
      borderColor = colors.yellow2;
    }
    return {
      ...provided,
      width: '100%',
      border: `0.1rem solid ${borderColor}`,
      backgroundColor: state.selectProps.error ? colors.yellow1 : colors.white,
      borderRadius: '0.3rem',
      cursor: 'pointer',
      height: `${sizes.large}`,
      '&>div': {
        padding: '0 1rem'
      },
      '&:hover': {
        borderColor: 'auto'
      }
    };
  },
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
      whiteSpace: 'nowrap' as const,
      textOverflow: 'ellipsis',
      textAlign: 'left' as const,
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
  menuPortal: (provided) => ({ ...provided, zIndex: zIndices.modalDropdown }),
  theme: (theme) => ({
    ...theme,
    primary25: colors.purple1,
    primary: colors.purple1
  })
};

// Define the type for ClearIndicator props
const ClearIndicator = (props: any) => {
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
                        className = '',
                        items = [],
                        value,
                        handleChange,
                        placeholder = '',
                        label = '',
                        labelMessage = undefined,
                        id = `dropdown-${new Date().getTime()}`,
                        disabled = false,
                        isSearchable = true,
                        isClearable = false,
                        restrictedHeight = undefined,
                        required = false,
                        isWithinModal = false,
                        error = false,
                        errorMessage = '',
                        ...args
                      }: DropdownListProps) => {
  return (
      <div className={className}>
        {required && <Required>* </Required>}
        <LabelTypography className={disabled ? 'disabled' : ''} htmlFor={id}>
          {label} {labelMessage && <SmallTypography className="disabled">{labelMessage}</SmallTypography>}
        </LabelTypography>
        <Select
            id={id}
            options={items}
            value={value}
            restrictedHeight={restrictedHeight}
            isSearchable={isSearchable}
            isClearable={isClearable}
            placeholder={placeholder}
            onChange={handleChange}
            isDisabled={disabled}
            styles={CustomStyles}
            components={CustomComponents}
            menuPortalTarget={isWithinModal ? document.body : null}
            menuShouldBlockScroll={isWithinModal}
            error={error}
            {...args}
        />
        <ErrorMessage error={error}>
          <Icon iconClass="exclamation-triangle" color={colors.yellow2} iconSize="lg" weight="fas" />
          {errorMessage}
        </ErrorMessage>
      </div>
  );
};

export default DropdownList;
