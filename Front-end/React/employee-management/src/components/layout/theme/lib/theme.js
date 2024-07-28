var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from '@emotion/core';
export var globalStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  html {\n    font-size: 62.5%;\n    box-sizing: border-box;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n  html button {\n    cursor: pointer;\n    font-family: 'Libre Franklin', sans-serif;\n  }\n  body {\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n  }\n"], ["\n  html {\n    font-size: 62.5%;\n    box-sizing: border-box;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n  html button {\n    cursor: pointer;\n    font-family: 'Libre Franklin', sans-serif;\n  }\n  body {\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n  }\n"])));
export var colors;
(function (colors) {
    colors["brand"] = "#8CBD3D";
    colors["cta"] = "#5A53AF";
    colors["coral"] = "#F2783B";
    colors["cream1"] = "#FCF6ED";
    colors["cream2"] = "#E8D9C4";
    colors["cream"] = "#FCF6ED";
    colors["charcoal"] = "#18181E";
    colors["white"] = "#FFFFFF";
    colors["black"] = "#000000";
    colors["gray1"] = "#F5F5F5";
    colors["gray2"] = "#E1E1E1";
    colors["gray3"] = "#CCCCCC";
    colors["gray4"] = "#757575";
    colors["gray5"] = "#565C5F";
    colors["purple1"] = "#F4F3FF";
    colors["purple2"] = "#D6D4EB";
    colors["purple3"] = "#8984BE";
    colors["purple4"] = "#3C3775";
    colors["green1"] = "#ECF1E2";
    colors["green2"] = "#A5CC66";
    colors["green3"] = "#24742C";
    colors["green4"] = "#CFE6C0";
    colors["goldenrod"] = "#FFD00D";
    colors["yellow1"] = "#FFF4C7";
    colors["yellow2"] = "#FABA6B";
    colors["yellow3"] = "#92451D";
    colors["yellow4"] = "#FFECD6";
    colors["red1"] = "#F2D1CD";
    colors["red2"] = "#BF1D08";
    colors["plum1"] = "#CF8CAD";
    colors["plum2"] = "#8E3F5C";
    colors["teal1"] = "#83C1C6";
    colors["teal2"] = "#00848E";
    colors["navy"] = "#201C4F";
})(colors || (colors = {}));
// From typography styleguide to use only when a Wrapping components is not an option
export var fontSize = {
    displayLarge: '3.4rem',
    displayMedium: '2.6rem',
    displaySmall: '2.1rem',
    heading: '1.7rem',
    standard: '1.6rem',
    small: '1.3rem',
    hint: '1.2rem'
};
export var sizes = {
    xxSmall: '0.6rem',
    xSmall: '1rem',
    small: '2rem',
    medium: '3rem',
    large: '4rem',
    xLarge: '5rem',
    xxLarge: '6rem'
};
export var zIndices;
(function (zIndices) {
    zIndices[zIndices["modal"] = 7000] = "modal";
    zIndices[zIndices["modalDropdown"] = 7050] = "modalDropdown";
})(zIndices || (zIndices = {}));
export var fontFamily = { default: 'Libre Franklin, sans-serif' };
export var boxShadow = '0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3)';
export var maxMobileWidth = 991;
var templateObject_1;
//# sourceMappingURL=theme.js.map