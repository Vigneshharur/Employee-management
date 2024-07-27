# Primary component

This is a generic slideInPane that can be used for showing content. It uses PatientPing's styles except for the content.

## Example Usage

```javascript
<SlideInPane isOpen={paneIsOpen} onClose={onClose} headerText="A Really Cool Modal" buttons={{[
  <Button onClick={handleSave}> Save</Button>,
  <Button onClick={handleCancel}> Cancel</Button>
]}}>
  Some html content in the Pane.
</SlideInPane>
```

## Props

| Prop               | Type                                | Default Value | Description                               | Possible values       |
| ------------------ | ----------------------------------- | ------------- | ----------------------------------------- | --------------------- |
| `isOpen`           | bool                                | `false`       | Whether the pane is open.                 |                       |
| `headerText`       | string                              |               | The text to show for the header.          |                       |
| `buttons`          | array of Button                     |               | Actions for the content of the Pane       |                       |
| `banner`           | { type: BannerTypes, text: String } |               | Actions for the content of the Pane       |                       |
| `badge`            | { text: String, inline: bool }      |               | Text to display in warning badge          |                       |
| `children`         | ReactNode                           |               | Content to display in main part of pane   |                       |
| `headerChildren`   | ReactNode                           |               | Additional content to display in header   |                       |
| `showNav`          | bool                                |               | Whether pane is below navigation bar      |                       |
| `isOverlayOpen`    | bool                                |               | Whether to display overlay outside pane   |                       |
| `onClose`          | function                            |               | The function to call when modal is closed |                       |
| `onOpen`           | function                            |               | The function to call when modal is opened |                       |
| `onScroll`         | function                            |               | The function to call during scrolling     |                       |
