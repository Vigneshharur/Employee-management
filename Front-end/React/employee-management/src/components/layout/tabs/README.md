# Tabs component

Tabs organize and allow switching between groups of content that are related and at the same level of hierarchy.

## Example Usage

```javascript
<Tabs value={currentTabIndex} onChange={setCurrentTabIndex}>
  <Tab>First</Tab>
  <Tab>Second</Tab>
</Tabs>
```

## Tabs Props

| Prop     | Type                    | Default Value | Description                                                 | Required |
| -------- | ----------------------- | ------------- | ----------------------------------------------------------- | -------- |
| value    | `number`                |               | Value of currently selected Tab                             | Yes      |
| disabled | `boolean`               | false         | If `true`, all tabs will be disabled.                       | No       |
| onChange | `(arg: number) => void` |               | Callback function that gets called when user clicks the tab | Yes      |

## Tab Props

| Prop     | Type        | Default Value | Description                          | Required |
| -------- | ----------- | ------------- | ------------------------------------ | -------- |
| children | `ReactNode` |               | The label element                    | Yes      |
| disabled | `boolean`   | false         | If `true`, the tab will be disabled. | No       |
