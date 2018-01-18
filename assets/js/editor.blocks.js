/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_content__ = __webpack_require__(1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9pbmRleC5qcz84MTkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9nZW5lcmljLWNvbnRlbnQnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * Block dependencies\n */\n\n\n\n/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    Editable = _wp$blocks.Editable,\n    AlignmentToolbar = _wp$blocks.AlignmentToolbar,\n    BlockControls = _wp$blocks.BlockControls,\n    InspectorControls = _wp$blocks.InspectorControls,\n    BlockDescription = _wp$blocks.BlockDescription,\n    ColorPalette = _wp$blocks.ColorPalette;\nvar _wp$components = wp.components,\n    Toolbar = _wp$components.Toolbar,\n    Button = _wp$components.Button,\n    Tooltip = _wp$components.Tooltip,\n    PanelBody = _wp$components.PanelBody,\n    PanelColor = _wp$components.PanelColor,\n    PanelRow = _wp$components.PanelRow;\nvar _window = window,\n    getComputedStyle = _window.getComputedStyle;\n\n/**\n  * Register block\n */\n\n/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('wds/generic-content', {\n\ttitle: __('Generic Content'),\n\tcategory: 'common',\n\ticon: 'format-aside',\n\tattributes: {\n\t\tcontent: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.generic-content'\n\t\t},\n\t\talignment: {\n\t\t\ttype: 'string'\n\t\t},\n\t\ttextColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tbackgroundColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tfontSize: {\n\t\t\ttype: 'number'\n\t\t}\n\t},\n\tsupports: {\n\t\tclassName: true\n\t},\n\tedit: function edit(props) {\n\n\t\treturn [!!props.focus && wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\t{ key: 'inspector' },\n\t\t\twp.element.createElement(\n\t\t\t\tPanelColor,\n\t\t\t\t{ title: __('Background Color'), colorValue: props.attributes.backgroundColor, initialOpen: false },\n\t\t\t\twp.element.createElement(ColorPalette, {\n\t\t\t\t\tvalue: props.attributes.backgroundColor,\n\t\t\t\t\tonChange: function onChange(colorValue) {\n\t\t\t\t\t\treturn props.setAttributes({ backgroundColor: colorValue });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelColor,\n\t\t\t\t{ title: __('Text Color'), colorValue: props.attributes.textColor, initialOpen: false },\n\t\t\t\twp.element.createElement(ColorPalette, {\n\t\t\t\t\tvalue: props.attributes.textColor,\n\t\t\t\t\tonChange: function onChange(colorValue) {\n\t\t\t\t\t\treturn props.setAttributes({ textColor: colorValue });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t), !!props.focus && wp.element.createElement(\n\t\t\tBlockControls,\n\t\t\t{ key: 'controls' },\n\t\t\twp.element.createElement(AlignmentToolbar, {\n\t\t\t\tvalue: props.attributes.alignment,\n\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\treturn props.setAttributes({ alignment: value });\n\t\t\t\t}\n\t\t\t})\n\t\t), wp.element.createElement(\n\t\t\t'div',\n\t\t\t{\n\t\t\t\tclassName: __WEBPACK_IMPORTED_MODULE_0_classnames___default()(props.className)\n\t\t\t},\n\t\t\twp.element.createElement(Editable, {\n\t\t\t\ttagName: 'div',\n\t\t\t\tmultiline: 'p',\n\t\t\t\tplaceholder: __('Enter your message here..'),\n\t\t\t\tvalue: props.attributes.content,\n\t\t\t\tstyle: {\n\t\t\t\t\tbackgroundColor: props.attributes.backgroundColor,\n\t\t\t\t\tcolor: props.attributes.textColor,\n\t\t\t\t\ttextAlign: props.attributes.alignment\n\t\t\t\t},\n\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\treturn props.setAttributes({ content: value });\n\t\t\t\t},\n\t\t\t\tfocus: props.focus\n\t\t\t})\n\t\t)];\n\t},\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{\n\t\t\t\tclassName: __WEBPACK_IMPORTED_MODULE_0_classnames___default()('generic-content'),\n\t\t\t\tstyle: { textAlign: props.attributes.alignment }\n\t\t\t},\n\t\t\tprops.attributes.content\n\t\t);\n\t}\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9nZW5lcmljLWNvbnRlbnQvaW5kZXguanM/Y2Q0OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJsb2NrIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBibG9jayBsaWJyYXJpZXNcbiAqL1xudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciBfd3AkYmxvY2tzID0gd3AuYmxvY2tzLFxuICAgIHJlZ2lzdGVyQmxvY2tUeXBlID0gX3dwJGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSxcbiAgICBFZGl0YWJsZSA9IF93cCRibG9ja3MuRWRpdGFibGUsXG4gICAgQWxpZ25tZW50VG9vbGJhciA9IF93cCRibG9ja3MuQWxpZ25tZW50VG9vbGJhcixcbiAgICBCbG9ja0NvbnRyb2xzID0gX3dwJGJsb2Nrcy5CbG9ja0NvbnRyb2xzLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGJsb2Nrcy5JbnNwZWN0b3JDb250cm9scyxcbiAgICBCbG9ja0Rlc2NyaXB0aW9uID0gX3dwJGJsb2Nrcy5CbG9ja0Rlc2NyaXB0aW9uLFxuICAgIENvbG9yUGFsZXR0ZSA9IF93cCRibG9ja3MuQ29sb3JQYWxldHRlO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBUb29sYmFyID0gX3dwJGNvbXBvbmVudHMuVG9vbGJhcixcbiAgICBCdXR0b24gPSBfd3AkY29tcG9uZW50cy5CdXR0b24sXG4gICAgVG9vbHRpcCA9IF93cCRjb21wb25lbnRzLlRvb2x0aXAsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFBhbmVsQ29sb3IgPSBfd3AkY29tcG9uZW50cy5QYW5lbENvbG9yLFxuICAgIFBhbmVsUm93ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxSb3c7XG52YXIgX3dpbmRvdyA9IHdpbmRvdyxcbiAgICBnZXRDb21wdXRlZFN0eWxlID0gX3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlO1xuXG4vKipcbiAgKiBSZWdpc3RlciBibG9ja1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKCd3ZHMvZ2VuZXJpYy1jb250ZW50Jywge1xuXHR0aXRsZTogX18oJ0dlbmVyaWMgQ29udGVudCcpLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGljb246ICdmb3JtYXQtYXNpZGUnLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Y29udGVudDoge1xuXHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdHNvdXJjZTogJ2NoaWxkcmVuJyxcblx0XHRcdHNlbGVjdG9yOiAnLmdlbmVyaWMtY29udGVudCdcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdHRleHRDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdGJhY2tncm91bmRDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdGZvbnRTaXplOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJ1xuXHRcdH1cblx0fSxcblx0c3VwcG9ydHM6IHtcblx0XHRjbGFzc05hbWU6IHRydWVcblx0fSxcblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXG5cdFx0cmV0dXJuIFshIXByb3BzLmZvY3VzICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0eyBrZXk6ICdpbnNwZWN0b3InIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFBhbmVsQ29sb3IsXG5cdFx0XHRcdHsgdGl0bGU6IF9fKCdCYWNrZ3JvdW5kIENvbG9yJyksIGNvbG9yVmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuYmFja2dyb3VuZENvbG9yLCBpbml0aWFsT3BlbjogZmFsc2UgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KENvbG9yUGFsZXR0ZSwge1xuXHRcdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29sb3JWYWx1ZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yVmFsdWUgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0UGFuZWxDb2xvcixcblx0XHRcdFx0eyB0aXRsZTogX18oJ1RleHQgQ29sb3InKSwgY29sb3JWYWx1ZTogcHJvcHMuYXR0cmlidXRlcy50ZXh0Q29sb3IsIGluaXRpYWxPcGVuOiBmYWxzZSB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQ29sb3JQYWxldHRlLCB7XG5cdFx0XHRcdFx0dmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMudGV4dENvbG9yLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb2xvclZhbHVlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvcHMuc2V0QXR0cmlidXRlcyh7IHRleHRDb2xvcjogY29sb3JWYWx1ZSB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KSwgISFwcm9wcy5mb2N1cyAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRCbG9ja0NvbnRyb2xzLFxuXHRcdFx0eyBrZXk6ICdjb250cm9scycgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChBbGlnbm1lbnRUb29sYmFyLCB7XG5cdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmFsaWdubWVudCxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IHZhbHVlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzbmFtZXMocHJvcHMuY2xhc3NOYW1lKVxuXHRcdFx0fSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChFZGl0YWJsZSwge1xuXHRcdFx0XHR0YWdOYW1lOiAnZGl2Jyxcblx0XHRcdFx0bXVsdGlsaW5lOiAncCcsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBfXygnRW50ZXIgeW91ciBtZXNzYWdlIGhlcmUuLicpLFxuXHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5jb250ZW50LFxuXHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogcHJvcHMuYXR0cmlidXRlcy5iYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdFx0Y29sb3I6IHByb3BzLmF0dHJpYnV0ZXMudGV4dENvbG9yLFxuXHRcdFx0XHRcdHRleHRBbGlnbjogcHJvcHMuYXR0cmlidXRlcy5hbGlnbm1lbnRcblx0XHRcdFx0fSxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiB2YWx1ZSB9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Zm9jdXM6IHByb3BzLmZvY3VzXG5cdFx0XHR9KVxuXHRcdCldO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzbmFtZXMoJ2dlbmVyaWMtY29udGVudCcpLFxuXHRcdFx0XHRzdHlsZTogeyB0ZXh0QWxpZ246IHByb3BzLmF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdH0sXG5cdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnRcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9nZW5lcmljLWNvbnRlbnQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2016 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tclasses.push(classNames.apply(null, arg));\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {\n\t\twindow.classNames = classNames;\n\t}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzFkNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9nZW5lcmljLWNvbnRlbnQvc3R5bGUuc2Nzcz9jYTc5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9ja3MvZ2VuZXJpYy1jb250ZW50L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);