var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import './fal';
import './fas';
import './far';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export var ICONS;
(function (ICONS) {
    ICONS["address-book"] = "address-book";
    ICONS["ambulance"] = "ambulance";
    ICONS["analytics"] = "analytics";
    ICONS["angle-double-left"] = "angle-double-left";
    ICONS["angle-double-right"] = "angle-double-right";
    ICONS["angle-down"] = "angle-down";
    ICONS["angle-left"] = "angle-left";
    ICONS["angle-right"] = "angle-right";
    ICONS["angle-up"] = "angle-up";
    ICONS["arrow-alt-up"] = "arrow-alt-up";
    ICONS["arrow-left"] = "arrow-left";
    ICONS["arrow-right"] = "arrow-right";
    ICONS["arrow-to-bottom"] = "arrow-to-bottom";
    ICONS["balance-scale"] = "balance-scale";
    ICONS["ban"] = "ban";
    ICONS["bars"] = "bars";
    ICONS["bed"] = "bed";
    ICONS["bell"] = "bell";
    ICONS["bell-slash"] = "bell-slash";
    ICONS["book"] = "book";
    ICONS["building"] = "building";
    ICONS["bullhorn"] = "bullhorn";
    ICONS["calendar-day"] = "calendar-day";
    ICONS["car"] = "car";
    ICONS["car-garage"] = "car-garage";
    ICONS["caret-circle-down"] = "caret-circle-down";
    ICONS["caret-down"] = "caret-down";
    ICONS["caret-left"] = "caret-left";
    ICONS["caret-up"] = "caret-up";
    ICONS["chart-line"] = "chart-line";
    ICONS["chart-network"] = "chart-network";
    ICONS["check"] = "check";
    ICONS["check-circle"] = "check-circle";
    ICONS["check-square"] = "check-square";
    ICONS["circle"] = "circle";
    ICONS["clinic-medical"] = "clinic-medical";
    ICONS["clipboard"] = "clipboard";
    ICONS["clock"] = "clock";
    ICONS["cloud-upload"] = "cloud-upload";
    ICONS["cog"] = "cog";
    ICONS["cogs"] = "cogs";
    ICONS["comment"] = "comment";
    ICONS["comments"] = "comments";
    ICONS["comment-alt"] = "comment-alt";
    ICONS["comment-alt-dots"] = "comment-alt-dots";
    ICONS["comment-check"] = "comment-check";
    ICONS["comment-slash"] = "comment-slash";
    ICONS["concierge-bell"] = "concierge-bell";
    ICONS["clone"] = "clone";
    ICONS["credit-card"] = "credit-card";
    ICONS["download"] = "download";
    ICONS["ellipsis-h"] = "ellipsis-h";
    ICONS["ellipsis-v"] = "ellipsis-v";
    ICONS["envelope"] = "envelope";
    ICONS["exclamation-circle"] = "exclamation-circle";
    ICONS["exclamation-triangle"] = "exclamation-triangle";
    ICONS["external-link"] = "external-link";
    ICONS["file-alt"] = "file-alt";
    ICONS["file-csv"] = "file-csv";
    ICONS["filter"] = "filter";
    ICONS["flag"] = "flag";
    ICONS["folder-open"] = "folder-open";
    ICONS["garage-car"] = "garage-car";
    ICONS["grip-vertical"] = "grip-vertical";
    ICONS["handshake"] = "handshake";
    ICONS["handshake-slash"] = "handshake-slash";
    ICONS["hands-helping"] = "hands-helping";
    ICONS["hospital"] = "hospital";
    ICONS["house"] = "house";
    ICONS["inbox-in"] = "inbox-in";
    ICONS["info-circle"] = "info-circle";
    ICONS["info-square"] = "info-square";
    ICONS["key"] = "key";
    ICONS["lock-alt"] = "lock-alt";
    ICONS["minus"] = "minus";
    ICONS["minus-circle"] = "minus-circle";
    ICONS["minus-square"] = "minus-square";
    ICONS["notes-medical"] = "notes-medical";
    ICONS["paperclip"] = "paperclip";
    ICONS["paper-plane"] = "paper-plane";
    ICONS["pencil"] = "pencil";
    ICONS["phone"] = "phone";
    ICONS["plus"] = "plus";
    ICONS["prescription-bottle"] = "prescription-bottle";
    ICONS["print"] = "print";
    ICONS["procedures"] = "procedures";
    ICONS["question-circle"] = "question-circle";
    ICONS["random"] = "random";
    ICONS["redo"] = "redo";
    ICONS["repeat-alt"] = "repeat-alt";
    ICONS["reply"] = "reply";
    ICONS["search"] = "search";
    ICONS["share"] = "share";
    ICONS["sign-in-alt"] = "sign-in-alt";
    ICONS["sort"] = "sort";
    ICONS["sort-down"] = "sort-down";
    ICONS["sort-up"] = "sort-up";
    ICONS["spinner"] = "spinner";
    ICONS["square"] = "square";
    ICONS["stretcher"] = "stretcher";
    ICONS["tablets"] = "tablets";
    ICONS["tasks"] = "tasks";
    ICONS["th"] = "th";
    ICONS["times"] = "times";
    ICONS["times-circle"] = "times-circle";
    ICONS["times-square"] = "times-square";
    ICONS["tombstone"] = "tombstone";
    ICONS["tools"] = "tools";
    ICONS["trash-alt"] = "trash-alt";
    ICONS["user-check"] = "user-check";
    ICONS["user-circle"] = "user-circle";
    ICONS["user-friends"] = "user-friends";
    ICONS["user"] = "user";
    ICONS["user-plus"] = "user-plus";
    ICONS["user-minus"] = "user-minus";
    ICONS["user-tag"] = "user-tag";
    ICONS["walking"] = "walking";
})(ICONS || (ICONS = {}));
var Icon = function (_a) {
    var _b = _a.iconSize, iconSize = _b === void 0 ? 'sm' : _b, _c = _a.weight, weight = _c === void 0 ? 'fas' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.color, color = _e === void 0 ? '' : _e, iconClass = _a.iconClass, style = _a.style, restOfProps = __rest(_a, ["iconSize", "weight", "className", "color", "iconClass", "style"]);
    var iconLookup = { prefix: weight, iconName: iconClass };
    if (!(iconClass in ICONS)) {
        return React.createElement("span", null, "Invalid icon");
    }
    return (React.createElement(FontAwesomeIcon, __assign({ "data-testid": "icon-" + iconClass, icon: iconLookup, size: iconSize, className: className, style: style, color: color }, restOfProps)));
};
export default Icon;
//# sourceMappingURL=Icon.js.map