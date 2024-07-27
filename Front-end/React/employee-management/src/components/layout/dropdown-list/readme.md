# DropdownList component

Dropdown list that adheres to PatientPing style guide. There are multiple components in the same folder as the exported DropdownList component. Those are effectively private components to this component.

## Example Usage

```javascript
<DropdownList
  items={ddlItems}
  currentSelectedItem={currentSelectedItem}
  handleChange={handleChange}
  placeholder="All:"
/>
```

## Props

| Prop                  | Type    | Default Value | Description                                                 |
| --------------------- | ------- | ------------- | ----------------------------------------------------------- |
| `items`               | array   | `[]`          | an array of items in the shape of `{value:'one', value: 1}` |
| `currentSelectedItem` | number  | `0`           | The index of this item.                                     |
| `handleChange`        | fuction | `() => null`  | The handler for the item selection.                         |
| `placeholder`         | string  | `undefined`   | The default text to show when an item is not supplied.      |
