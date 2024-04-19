/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blockHelpers.js":
/*!*****************************!*\
  !*** ./src/blockHelpers.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewBlockItem: () => (/* binding */ addNewBlockItem),
/* harmony export */   customizeBlockItem: () => (/* binding */ customizeBlockItem),
/* harmony export */   generateAttributes: () => (/* binding */ generateAttributes),
/* harmony export */   onChangeAttribute: () => (/* binding */ onChangeAttribute)
/* harmony export */ });
function generateAttributes(defaultAttributes) {
  const attributes = {};
  for (const key in defaultAttributes) {
    attributes[key] = {
      type: typeof defaultAttributes[key],
      default: defaultAttributes[key]
    };
  }
  return attributes;
}
const onChangeAttribute = (key, value, setAttributes) => {
  setAttributes({
    [key]: value
  });
};
const addNewBlockItem = (items, defaultItem) => {
  return [...items, {
    ...defaultItem
  }];
};
const customizeBlockItem = (items, index, key, value) => {
  return items.map((item, i) => i === index ? {
    ...item,
    [key]: value
  } : item);
};

/***/ }),

/***/ "./src/card/edit.jsx":
/*!***************************!*\
  !*** ./src/card/edit.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaultAttr_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultAttr.json */ "./src/card/defaultAttr.json");
/* harmony import */ var _blockHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockHelpers */ "./src/blockHelpers.js");





const edit = ({
  attributes,
  setAttributes
}) => {
  const {
    cardItems
  } = attributes;
  const addItem = () => {
    setAttributes({
      cardItems: (0,_blockHelpers__WEBPACK_IMPORTED_MODULE_4__.addNewBlockItem)(cardItems, _defaultAttr_json__WEBPACK_IMPORTED_MODULE_3__)
    });
  };
  const customizeItem = (index, key, value) => {
    setAttributes({
      cardItems: (0,_blockHelpers__WEBPACK_IMPORTED_MODULE_4__.customizeBlockItem)(cardItems, index, key, value)
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Card Settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSecondary: true,
    onClick: addItem
  }, "Add Card Item"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wrapper-fluid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "page-component-overview"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cgds page-component-item-wrapper picture-item"
  }, cardItems.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cgds card",
    key: index
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: `Card Item ${index + 1}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      const imageUrl = media.url;
      customizeItem(index, "imageUrl", imageUrl);
    },
    value: item.imageUrl || "",
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: open,
      className: `button button-large ${!item.imageUrl ? "button-secondary" : ""}`
    }, !item.imageUrl ? "Upload Image" : "Change Image")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Font",
    value: item.font,
    onChange: value => customizeItem(index, "font", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Card Title",
    value: item.title,
    onChange: value => customizeItem(index, "title", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Card Text",
    value: item.content,
    onChange: value => customizeItem(index, "content", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Card Href",
    value: item.href,
    onChange: value => customizeItem(index, "href", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Link Guide",
    value: item.linkText,
    onChange: value => customizeItem(index, "linkText", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label"
  }, "Body Text Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    color: item.contentColor,
    onChangeComplete: value => customizeItem(index, "contentColor", value.hex),
    disableAlpha: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label"
  }, "Card Title Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    color: item.titleColor,
    onChangeComplete: value => customizeItem(index, "titleColor", value.hex),
    disableAlpha: true
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cgds card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "card-img-top",
    src: item.imageUrl,
    alt: `Card ${index} image`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    style: {
      color: item.titleColor,
      fontFamily: item.font
    },
    className: "stretched-link link-primary",
    href: item.href,
    onClick: e => {
      e.preventDefault();
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "h5 text-primary card-title",
    value: item.title,
    onChange: value => customizeItem(index, "title", value),
    placeholder: "Add card title"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      color: item.contentColor,
      fontFamily: item.font
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "card-text",
    value: item.content,
    onChange: value => customizeItem(index, "content", value),
    placeholder: "Add card description"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "card-link",
    href: "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "bi bi-arrow-right-circle-fill"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    value: item.linkText,
    onChange: value => customizeItem(index, "linkText", value),
    placeholder: "Add link guide"
  })))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

/***/ }),

/***/ "./src/card/save.jsx":
/*!***************************!*\
  !*** ./src/card/save.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const save = ({
  attributes
}) => {
  const {
    cardItems
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wrapper-fluid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "page-component-overview"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cgds page-component-item-wrapper picture-item"
  }, cardItems.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cgds card",
    key: index + 1
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "card-img-top",
    src: item.imageUrl,
    alt: "Card Image"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "stretched-link link-primary",
    href: item.href
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "h5 text-primary card-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: item.titleColor,
      fontFamily: item.font
    }
  }, item.title))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "card-text",
    style: {
      color: item.contentColor,
      fontFamily: item.font
    }
  }, item.content), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "card-link",
    href: "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "bi bi-arrow-right-circle-fill"
  }), item.linkText))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "./src/card/defaultAttr.json":
/*!***********************************!*\
  !*** ./src/card/defaultAttr.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"title":"","content":"","imageUrl":"","contentColor":"var(--cgds-text-color)","titleColor":"var(--cgds-primary)","href":"","font":"Kantumruy Pro","linkText":""}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/card/index.jsx ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/card/save.jsx");
/* harmony import */ var _defaultAttr_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultAttr.json */ "./src/card/defaultAttr.json");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/card/edit.jsx");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('rachana-block/card', {
  attributes: {
    cardItems: {
      type: 'array',
      default: [_defaultAttr_json__WEBPACK_IMPORTED_MODULE_2__]
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map