# Toast component

This is the generic Toast component based on the Remedy styles. https://app.zeplin.io/project/5e973111cb2b6e7c55dc5454/screen/5cd599c81ae7fe3478c86645

## Example Usage

```javascript
<ToastNotifications
  toasts={{
    content: 'Hi, I am a mock toast',
    type: ToastType.INFO
  }}
  remove={handleCloseClick}
/>
```

## Toast Types

- SUCCESS
- WARNING
- INFO
- ERROR
- PATIENT_SAFETY
- CUSTOM

## Toast Options

| Values         | Type      | Description                                                                                               | Possible values |
| -------------- | --------- | --------------------------------------------------------------------------------------------------------- | --------------- |
| `background`   | string    | Color for toast background. Option value, can be set when type is CUSTOM to change toast background color |                 |
| `content`      | ReactNode | ReactNode to display content inside the toast                                                             |                 |
| `contentColor` | string    | Color for toast content. Option value, can be set when type is CUSTOM to change toast content color       |                 |
| `iconColor`    | string    | Color for toast icons. Option value, can be set when type is CUSTOM to change toast icon color            |                 |
| `iconClass`    | IconName  | Icon class name. Option value, can be set when type is CUSTOM to change toast icon                        |                 |
| `type`         | ToastType | Enum value of supported toast types                                                                       |                 |

## ToastNotification Props

toasts: ToastInterface[];
remove: (index: number) => void;

| Prop     | Type                    | Description                                                                     |
| -------- | ----------------------- | ------------------------------------------------------------------------------- |
| `toasts` | Array<Toast>            | An array of Toast objects to display toasts in UI                                |
| `remove` | (index: number) => void | A function called with index of toast when user clicks on close icon on a toast |
