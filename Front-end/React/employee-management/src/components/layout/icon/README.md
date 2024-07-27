# `Icon`

Wrapper around [FontAwesomeIcon](https://github.com/FortAwesome/react-fontawesome). 
Imports supported FontAwesome icons (in the pro package).

## Example Usage

```javascript
<Icon iconClass="ambulance" iconSize="lg" weight="fal" color="red" />
```

## Props

* `iconClass` | string - The name of the icon to be used
* `iconSize` | `['xs','sm','lg','2x','3x','4x','5x','6x','7x','8x','9x','10x']` - Default is 'sm', indicates size
* `weight` | ['far', 'fal', 'fas'] - Matching up to **r**egular, **l**ight, **s**olid FontAwesome weights
* `style` | object - Can be provided to alter the style of the icon
* `className` | string - straight CSS class override
* `color` | string - either hex code or HTML color for icon

## How to Add an Icon
1. Find the name of the icon from [FA Gallery](https://fontawesome.com/icons?d=gallery). e.g. `'angle-down'`
2. Add the icon name to `ICONS`.
3. Add the icon to `./fas.js`, `./fal.js`, and `./far.js`
    ```
    import { faAngleDown } from '@fortawesome/pro-solid-svg-icons/faAngleDown';
    ...
    
    library.add(
    faAngleDown,
    ...
    );
    ```
   
IMPORTANT: Tree shaking doesn't appear to be working for the FA imports so use deep links.
i.e. `import { faAngleDown } from '@fortawesome/pro-solid-svg-icons/faAngleDown';`
instead of `import { faAngleDown } from '@fortawesome/pro-solid-svg-icons';`

