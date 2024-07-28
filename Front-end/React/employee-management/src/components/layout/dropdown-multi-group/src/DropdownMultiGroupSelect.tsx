import React, { Fragment, useMemo, useState, ReactNode, ReactElement } from 'react';
import Select, { CommonProps, components, MultiValueProps, StylesConfig } from 'react-select';
import { MultiValueRemoveProps } from 'react-select/src/components/MultiValue';
import styled from '@emotion/styled';
import '@emotion/core';

import CustomIndicator from './CustomIndicator';
import CheckboxOption from './CheckboxOption';
import Checkbox from '../../checkbox/lib/';
import Icon from '../../icon/lib/';
import { colors, sizes, zIndices } from '../../theme/lib/';
import { LabelFormFieldTypography, SmallTypography, StandardSemiBoldTypography } from '../../typography/lib/';

const SELECT_OPTION = 'select-option';
const DESELECT_OPTION = 'deselect-option';
const REMOVE_VALUE = 'remove-value';
const selectAllOption = { optionLabel: 'Select All', chipLabel: 'All selected', value: 'selectAll' };

const SearchBarSpacer = styled('span')`
  margin: 0px ${sizes.xxSmall};
`;

const LabelContainer = styled('div')`
  display: flex;
`;

const StyledSmallTypography = styled(SmallTypography)`
  margin-left: auto;
`;

const ErrorMessage = styled(SmallTypography)<{ error: boolean }>`
  display: block;
  visibility: ${({ error }): string => (error ? 'visible' : 'hidden')};
  margin: ${sizes.xxSmall} 0;
  color: ${colors.yellow3};
  svg {
    visibility: ${({ error }): string => (error ? 'visible' : 'hidden')};
    margin-right: ${sizes.xxSmall};
  }
`;

const CustomStyles = {
  input: (provided: customStyleInterface) => ({
    ...provided,
    outline: 'none',
    boxShadow: 'none'
  }),
  control: (provided: customStyleInterface, state: { selectProps: { error: boolean } }) => ({
    ...provided,
    backgroundColor: state?.selectProps?.error ? colors.yellow1 : colors.white,
    width: '100%',
    border: `1px solid ${state?.selectProps?.error ? colors.yellow2 : colors.gray2}`,
    borderRadius: '3px',
    cursor: 'pointer',
    minHeight: `${sizes.large}`,
    boxShadow: 'none',
    '&>div': {
      padding: `0 ${sizes.xSmall}`
    },
    '&:hover': {
      borderColor: `${colors.gray2}`,
      boxShadow: 'none'
    }
  }),
  clearIndicator: (provided: customStyleInterface) => ({
    ...provided,
    color: colors.cta
  }),
  container: (provided: customStyleInterface) => ({
    ...provided,
    display: 'flex',
    flexWrap: 'wrap',
    outline: 'none',
    boxShadow: 'none',
    marginTop: `${sizes.xxSmall}`
  }),
  indicatorsContainer: (provided: customStyleInterface) => ({ ...provided, marginBottom: 0 }),
  option: (provided: customStyleInterface, props: MultiValueProps<groupedValues | nonGroupedValues>) => {
    const base = {
      ...provided,
      display: 'flex',
      textOverflow: 'ellipsis',
      textAlign: 'left',
      cursor: 'pointer',
      color: colors.black,
      paddingLeft:
        !props.selectProps.isGrouped || props?.data?.value === selectAllOption.value ? '12px' : `${sizes.medium}`,
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
  menu: (provided: customStyleInterface) => ({
    ...provided,
    margin: 0
  }),
  menuPortal: (provided: customStyleInterface) => ({ ...provided, zIndex: zIndices.modalDropdown }),
  multiValue: (provided: customStyleInterface) => {
    return {
      ...provided,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `0.3rem ${sizes.xSmall}`,
      margin: `.3rem ${sizes.xxSmall}`,
      backgroundColor: colors.green4,
      borderRadius: sizes.xSmall
    };
  },
  multiValueLabel: (provided: customStyleInterface) => ({
    ...provided,
    padding: 0,
    color: colors.green3
  }),
  multiValueRemove: (provided: customStyleInterface) => ({
    ...provided,
    color: colors.green3,
    marginLeft: sizes.xSmall,
    ':hover': {
      backgroundColor: 'transparent',
      color: colors.green3
    }
  }),
  theme: (provided: customStyleInterface) => ({
    ...provided,
    primary25: colors.purple1,
    primary: colors.purple1
  })
};

const groupItemStyles = {
  cursor: 'pointer',
  display: 'flex'
};
const groupLabelStyles = {
  transform: 'translateX(30px)'
};

const MultiValueLabel = (props: MultiValueProps<groupedValues | nonGroupedValues>) => (
  <components.MultiValueLabel {...props} key={props.data.label}>
    <SmallTypography title={props.data.label}>{props.data.label}</SmallTypography>
  </components.MultiValueLabel>
);

const MultiValueRemove = (props: MultiValueRemoveProps<groupedValues | nonGroupedValues>) => {
  return (
    <components.MultiValueRemove {...props}>
      <Icon weight="fal" iconClass="times" />
    </components.MultiValueRemove>
  );
};

const renderChips = (currentSelections: ReactNode[]): ReactNode => {
  const abbreviatedList = currentSelections.slice(0, 6);
  const additionalHiddenOptions = currentSelections.length - 6;
  return (
    <Fragment>
      {abbreviatedList.map((child) => child)} {additionalHiddenOptions > 0 && `(+${additionalHiddenOptions})`}
    </Fragment>
  );
};

const ValueContainer = (props: customValueContainer) => {
  //if you inspect the element in dev tools props children is an array of ReactElements
  //the typings provided by React-Select are showing props.children as a ReactNode - not even an array.
  // I believe that is incorrect, so suppressing warning on currentSelection declaration
  // @ts-ignore
  const currentSelections: ReactElement[] = props?.children?.[0];
  const filterInput = props.children?.[1];

  //return the magnify icon if nothing has been selected, otherwise render chips
  const renderValueComponent = (): ReactNode => {
    if (!props.hasValue) {
      return (
        <Fragment>
          <Icon iconClass="search" weight="fas" color={colors.cta} />
          <SearchBarSpacer />
        </Fragment>
      );
    }
    if (currentSelections) {
      let isAllSelected = currentSelections.find(
        (selection: ReactElement) => selection?.props?.data?.value === selectAllOption.value
      );
      //The default selectAllOption is Select all, but the chip should read All selected
      if (isAllSelected?.props?.children === selectAllOption.optionLabel) {
        isAllSelected = {
          ...isAllSelected,
          props: { ...isAllSelected.props, data: { ...isAllSelected.props.data, label: selectAllOption.chipLabel } }
        };
      }
      return isAllSelected || renderChips(currentSelections);
    }
  };
  return (
    <components.ValueContainer {...props}>
      {renderValueComponent()}
      {filterInput}
    </components.ValueContainer>
  );
};

const defaultNoOptionsMessage = () => <Fragment>No results found</Fragment>;

const CustomComponents = {
  DropdownIndicator: CustomIndicator,
  ValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  IndicatorSeparator: () => null,
  Option: CheckboxOption
};

interface nonGroupedValues {
  id: string;
  label: string;
  value: string;
}
interface groupedValues extends nonGroupedValues {
  group: string;
}

interface groupedOption {
  label: string;
  options: groupedValues[];
}

interface customValueContainer extends CommonProps<groupedValues | nonGroupedValues, true> {
  children: ReactElement[];
}

interface customStyleInterface extends StylesConfig<groupedValues | nonGroupedValues, true> {}

interface FilterOptionsInterface extends MultiValueProps<groupedValues | nonGroupedValues> {
  label: string;
}

export interface DropdownMultiGroupSelectProps {
  options: groupedOption[] | nonGroupedValues[];
  value: groupedValues[] | nonGroupedValues[];
  handleChange: (event: groupedValues[] | nonGroupedValues[] | null) => void;
  label: string;
  id: string;
  placeholder?: string;
  secondaryLabel?: string;
  allOptionsLabel?: string;
  noOptionsMessage?: () => ReactNode;
  isDisabled?: boolean;
  isWithinModal?: boolean;
  isRequiredField?: boolean;
  className?: string;
  error?: boolean;
  errorMessage?: string;
}

const DropdownMultiGroupSelect: React.FC<DropdownMultiGroupSelectProps> = ({
  options = [],
  value = [],
  handleChange,
  placeholder = '',
  label = '',
  secondaryLabel = '',
  id = 'ppingMultiGroupSelect',
  isDisabled = false,
  allOptionsLabel = selectAllOption.optionLabel,
  noOptionsMessage, //function that returns a node
  isWithinModal = false,
  isRequiredField = false,
  className,
  error = false,
  errorMessage = 'Please make a selection'
}) => {
  //this needs to be controlled because the group option select is not a core feature of the library
  // and the input value is not cleared after a selection is made
  const [inputValue, setInputValue] = useState('');
  const groupedOption = [...options] as groupedOption[];
  const isGroupedDropdown: boolean = !!groupedOption[0]?.options;
  const allOptionsItem = { value: selectAllOption.value, label: allOptionsLabel };
  const allOptions = useMemo(() => {
    return options.length > 0 ? [...new Set([allOptionsItem, ...options])] : [];
  }, [options, allOptionsLabel]);

  const flattenedOptions = useMemo(() => {
    if (!isGroupedDropdown) return options; //nonGroupedOptions are already a flat list
    const groupedOptions = [...options] as groupedOption[];
    return groupedOptions.reduce((allOptions: groupedValues[], currentOption: groupedOption) => {
      const updatedOptions = [...allOptions];
      return [...updatedOptions, ...currentOption?.options];
    }, []);
  }, [options]);

  //include the allOptionsItem checkbox and chip in selections only for the UI, we don't want to send this option to the server, so we need to control this here
  const selectedValues = useMemo(() => {
    const isAllSelected = flattenedOptions.length && flattenedOptions.length === value.length;
    if (isAllSelected) {
      return [allOptionsItem, ...value];
    } else {
      return value.filter((option) => option.value !== allOptionsItem.value);
    }
  }, [value]);

  const filterOption = (props: FilterOptionsInterface, string: string = '') => {
    if (string.length < 3) return true;
    const lowerString = string.toLowerCase();
    const lowerLabel = props.label.toLowerCase();
    //match input value to on individual options
    if (lowerLabel.includes(lowerString)) return true;
    if (isGroupedDropdown) {
      //match input value to group label
      const groupOptions = allOptions.filter((group) => group.label.toLowerCase().includes(lowerString));

      if (groupOptions) {
        for (const groupOption of groupOptions as groupedOption[]) {
          //check if current option is in group
          const option = groupOption?.options?.find(
            (currentOption: groupedValues) => currentOption.label.toLowerCase() === lowerLabel
          );
          if (option) {
            return true;
          }
        }
      }
    }
    return false;
  };

  function handleGroupClick(groupName: string, allGroupOptions: groupedValues[], isAllGroupSelected: boolean) {
    //reset filter input value on group click as the input is hidden once you've made a selection
    if (inputValue) setInputValue('');
    const groupedValues = [...value] as groupedValues[];
    const removedGroupFromValues = groupedValues.filter((selections) => selections.group !== groupName);
    //note that isAllGroupSelect is evaluated before this event forces a rerender, so if isAllGroupSelected is true,
    // the result will be that the checkbox should next be unchecked and the values should be removed. if false, the groups should be added
    const updateValue = isAllGroupSelected ? removedGroupFromValues : [...removedGroupFromValues, ...allGroupOptions];
    handleChange(updateValue);
  }

  const formatGroupLabel = (groupProps: { label: string; options: groupedValues[] }) => {
    const [groupLabel, allGroupOptions] = [groupProps.label, groupProps.options];
    const currentGroupValues = [...value] as groupedValues[];
    const selectedGroupOptions = currentGroupValues.length
      ? currentGroupValues.filter((option) => option.group === groupLabel)
      : [];
    const isAllSelected = allGroupOptions.length === selectedGroupOptions.length;
    return (
      <LabelFormFieldTypography style={groupItemStyles}>
        <Checkbox value={isAllSelected} onChange={() => handleGroupClick(groupLabel, allGroupOptions, isAllSelected)} />
        <StandardSemiBoldTypography style={groupLabelStyles}>{groupLabel}</StandardSemiBoldTypography>
      </LabelFormFieldTypography>
    );
  };

  const handleOnChange = (
    e: groupedValues[] | nonGroupedValues[] | null,
    meta: { option: { value: string }; removedValue?: { value: string }; action: string }
  ) => {
    let updateValue = e || []; //null is sent when the last item has been deselected
    //add or remove all options if the allOptionsItem is clicked
    if (meta?.option?.value === allOptionsItem.value || meta?.removedValue?.value === allOptionsItem.value) {
      if (meta.action === SELECT_OPTION) {
        updateValue = flattenedOptions as groupedValues[] | nonGroupedValues[];
      } else if (meta.action === DESELECT_OPTION || meta.action === REMOVE_VALUE) {
        updateValue = [];
      }
    } else if (meta.action === 'deselect-option') {
      //We're adding the allOptionsItem to all options for the UI, we need to remove this item from the list before setting it to state
      updateValue =
        e?.filter((option: groupedValues | nonGroupedValues) => option.value !== allOptionsItem.value) || [];
    }
    handleChange(updateValue);
  };

  const handleInputChange = (e: string) => {
    setInputValue(e);
  };
  const dropdownId = `dropdown-${id}`;
  const renderSelect = () => (
    // @ts-ignore
    <Select
      id={dropdownId}
      options={allOptions}
      value={selectedValues}
      isMulti
      hideSelectedOptions={false}
      isClearable={true}
      placeholder={placeholder}
      closeMenuOnSelect={false}
      onChange={handleOnChange}
      onInputChange={handleInputChange}
      inputValue={inputValue}
      getOptionValue={(option: { id: string }) => option.id}
      isDisabled={isDisabled}
      styles={CustomStyles}
      components={CustomComponents}
      formatGroupLabel={formatGroupLabel}
      filterOption={filterOption}
      menuPortalTarget={isWithinModal && document.body}
      menuShouldBlockScroll={isWithinModal}
      noOptionsMessage={noOptionsMessage || defaultNoOptionsMessage}
      isGrouped={isGroupedDropdown}
      error={error}
    />
  );

  return (
    <div className={className}>
      <LabelContainer className={isDisabled ? 'disabled' : ''}>
        <LabelFormFieldTypography className={isRequiredField ? 'requiredField' : ''} htmlFor={dropdownId}>
          {label}
        </LabelFormFieldTypography>
        {secondaryLabel && <StyledSmallTypography>{secondaryLabel}</StyledSmallTypography>}
      </LabelContainer>
      {renderSelect()}
      <ErrorMessage error={error}>
        <Icon iconClass="exclamation-triangle" color={colors.yellow2} iconSize="lg" weight="fas" />
        {errorMessage}
      </ErrorMessage>
    </div>
  );
};

export default DropdownMultiGroupSelect;
