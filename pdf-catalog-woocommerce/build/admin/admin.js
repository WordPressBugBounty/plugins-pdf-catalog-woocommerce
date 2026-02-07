/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src-admin/admin.scss":
/*!******************************!*\
  !*** ./src-admin/admin.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src-admin/admin/CategoryTab.js":
/*!****************************************!*\
  !*** ./src-admin/admin/CategoryTab.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var CategoryTab = function CategoryTab(_ref) {
  var openPopup = _ref.openPopup,
    setActiveTab = _ref.setActiveTab;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSaving = _useState2[0],
    setIsSaving = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    modifiedFields = _useState8[0],
    setModifiedFields = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      key: 'title',
      label: 'Title'
    }, {
      key: 'images',
      label: 'Images'
    }, {
      key: 'short_desc',
      label: 'Short Description'
    }, {
      key: 'long_desc',
      label: 'Long Description'
    }, {
      key: 'read_more',
      label: 'Read More'
    }, {
      key: 'sku',
      label: 'SKU'
    }, {
      key: 'price',
      label: 'Price'
    }, {
      key: 'categories',
      label: 'Categories'
    }, {
      key: 'tags',
      label: 'Tags'
    }, {
      key: 'brands',
      label: 'Brands'
    }, {
      key: 'weight',
      label: 'Weight'
    }, {
      key: 'dimensions',
      label: 'Dimensions'
    }, {
      key: 'attributes',
      label: 'Attributes'
    }, {
      key: 'stock_status',
      label: 'Stock Status'
    }, {
      key: 'gallery',
      label: 'Gallery'
    }]),
    _useState10 = _slicedToArray(_useState9, 2),
    hideshowFields = _useState10[0],
    setHideshowFields = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['weight', 'dimensions', 'attributes', 'stock_status', 'gallery']),
    _useState12 = _slicedToArray(_useState11, 1),
    disablehideshowFields = _useState12[0];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Fetch settings from the REST API
    (0,_api__WEBPACK_IMPORTED_MODULE_3__.fetchData)(gmwcp_wp_ajax.getsettings, gmwcp_wp_ajax.nonce).then(function (fetchedData) {
      setData(fetchedData);
      setLoading(false);
      var newFields = _toConsumableArray(fetchedData.custom_fields.map(function (field) {
        return {
          key: field.gmwcpkey,
          // Assuming 'field' has a key property
          label: field.title // Assuming 'field' has a label property
        };
      }));
      // Update state with new fields
      setHideshowFields(function (prevFields) {
        return [].concat(_toConsumableArray(prevFields), _toConsumableArray(newFields));
      });
    })["catch"](function (error) {
      setLoading(false);
      console.error('Error fetching settings:', error);
    });
  }, []);
  var updateField = function updateField(field, value) {
    setData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, field, value));
    });
    setModifiedFields(function (prevFields) {
      return _objectSpread(_objectSpread({}, prevFields), {}, _defineProperty({}, field, value));
    });
  };
  var toggleCheckbox = function toggleCheckbox(fieldName, key) {
    setData(function (prevData) {
      var currentValues = prevData[fieldName] || [];
      var updatedValues = currentValues.includes(key) ? currentValues.filter(function (item) {
        return item !== key;
      }) // Remove key if already present
      : [].concat(_toConsumableArray(currentValues), [key]); // Add key if not present
      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, fieldName, updatedValues));
    });
    setModifiedFields(function (prevFields) {
      var _data$fieldName;
      return _objectSpread(_objectSpread({}, prevFields), {}, _defineProperty({}, fieldName, (_data$fieldName = data[fieldName]) !== null && _data$fieldName !== void 0 && _data$fieldName.includes(key) ? data[fieldName].filter(function (item) {
        return item !== key;
      }) : [].concat(_toConsumableArray(data[fieldName] || []), [key])));
    });
  };
  var saveSettings = function saveSettings() {
    if (Object.keys(modifiedFields).length === 0) {
      openPopup('No changes to save.');
      return;
    }
    setIsSaving(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_3__.saveData)(gmwcp_wp_ajax.savedata, gmwcp_wp_ajax.nonce, modifiedFields).then(function (responseData) {
      setIsSaving(false);
      if (responseData.success) {
        openPopup('Settings saved!');
        setModifiedFields({});
      } else {
        openPopup('Failed to save settings.');
      }
    })["catch"](function (error) {
      setIsSaving(false);
      console.error('Error saving settings:', error);
      openPopup('Failed to save settings.');
    });
  };
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, loading ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", {
    className: "GMadminTable"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Enable Shop Page")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
    checked: data.gmwcp_shop_enable_product === 'yes',
    onChange: function onChange() {
      return updateField('gmwcp_shop_enable_product', data.gmwcp_shop_enable_product === 'yes' ? 'no' : 'yes');
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Show/Hide Options")), /*#__PURE__*/React.createElement("td", null, hideshowFields.map(function (_ref2) {
    var _data$gmwcp_shop_show;
    var key = _ref2.key,
      label = _ref2.label;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: disablehideshowFields.includes(key) ? ' gmwcp_flex' : '' // Conditionally apply class
    }, /*#__PURE__*/React.createElement("div", {
      className: disablehideshowFields.includes(key) ? ' gmwcp_disabled' : ''
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
      label: label,
      checked: (_data$gmwcp_shop_show = data.gmwcp_shop_show_hide) === null || _data$gmwcp_shop_show === void 0 ? void 0 : _data$gmwcp_shop_show.includes(key) // Check if key exists in array
      ,
      onChange: function onChange() {
        return toggleCheckbox('gmwcp_shop_show_hide', key);
      } // Pass field name and key dynamically
      ,
      disabled: disablehideshowFields.includes(key) // Disable based on `disablehideshowFields` array
    })), disablehideshowFields.includes(key) && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: "https://www.codesmade.com/store/pdf-catalog-woocommerce-pro/",
      target: "_blank"
    }, "Get Pro Version")));
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "View")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    selected: data.gmwcp_shop_view,
    options: [{
      label: 'List',
      value: 'list'
    }, {
      label: 'Grid',
      value: 'grid'
    }],
    onChange: function onChange(value) {
      return updateField('gmwcp_shop_view', value);
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Text Align")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    selected: data.gmwcp_shop_text_align,
    options: [{
      label: 'Left',
      value: 'left'
    }, {
      label: 'Center',
      value: 'center'
    }, {
      label: 'Right',
      value: 'right'
    }],
    onChange: function onChange(value) {
      return updateField('gmwcp_shop_text_align', value);
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Order By")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    selected: data.gmwcp_shop_orderby,
    options: [{
      label: 'Date',
      value: 'date'
    }, {
      label: 'Title',
      value: 'title'
    }, {
      label: 'Price',
      value: 'price'
    }],
    onChange: function onChange(value) {
      return updateField('gmwcp_shop_orderby', value);
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Order Direction")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    selected: data.gmwcp_shop_order,
    options: [{
      label: 'ASC',
      value: 'ASC'
    }, {
      label: 'DESC',
      value: 'DESC'
    }],
    onChange: function onChange(value) {
      return updateField('gmwcp_shop_order', value);
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Show Products Category Wise")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
    checked: data.gmwcp_shop_show_category_wise === 'yes',
    onChange: function onChange() {
      return updateField('gmwcp_shop_show_category_wise', data.gmwcp_shop_show_category_wise === 'yes' ? 'no' : 'yes');
    }
  }))), data.gmwcp_shop_view === 'grid' && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Per Row Number of Product")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    help: "Enter Number Which Per Row Number of Product",
    onChange: function onChange(value) {
      return updateField('gmpcp_shop_per_row_grid', value);
    },
    value: data.gmpcp_shop_per_row_grid
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Page Break After Product")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    help: "Enter Number Which break of number",
    onChange: function onChange(value) {
      return updateField('gmwcp_shop_pagebreak', value);
    },
    value: data.gmwcp_shop_pagebreak,
    disabled: "true"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.codesmade.com/store/pdf-catalog-woocommerce-pro/",
    target: "_blank"
  }, "Get Pro Version")))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Image Section Width")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    help: "Keep Max 50",
    onChange: function onChange(value) {
      return updateField('gmpcp_shop_image_width', value);
    },
    value: data.gmpcp_shop_image_width
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Display Location")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    selected: data.gmwcp_shop_display_location,
    options: [{
      label: 'Before Shop Loop',
      value: 'before'
    }, {
      label: 'After Shop Loop',
      value: 'after'
    }, {
      label: 'Custom Location',
      value: 'custom'
    }],
    onChange: function onChange(value) {
      return updateField('gmwcp_shop_display_location', value);
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Download File Name")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    help: "Download Time Pdf File Name",
    onChange: function onChange(value) {
      return updateField('gmwcp_shop_download_file_name', value);
    },
    value: data.gmwcp_shop_download_file_name
  })))), /*#__PURE__*/React.createElement("h4", null, "Custom Location for you need to use shortcode  ", /*#__PURE__*/React.createElement("code", null, "[gmwcp_shop_product]"), " or ", /*#__PURE__*/React.createElement("code", null, "[gmwcp_shop_product category_id=\"category_id\"]")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    onClick: saveSettings,
    disabled: isSaving
  }, isSaving ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : 'Save Settings')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryTab);

/***/ }),

/***/ "./src-admin/admin/CustomFieldTab.js":
/*!*******************************************!*\
  !*** ./src-admin/admin/CustomFieldTab.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var CustomFieldTab = function CustomFieldTab(_ref) {
  var openPopup = _ref.openPopup,
    setActiveTab = _ref.setActiveTab;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    fieldTitle = _useState4[0],
    setFieldTitle = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    gmwcpkey = _useState6[0],
    setGmwcpkey = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isSaving = _useState8[0],
    setIsSaving = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    fields = _useState10[0],
    setFields = _useState10[1]; // Store existing fields
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    editingFieldId = _useState12[0],
    setEditingFieldId = _useState12[1]; // For editing
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isDeleting = _useState16[0],
    setIsDeleting = _useState16[1]; // State for delete loading

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchFields(); // Fetch existing fields on mount
  }, []);
  var fetchFields = function fetchFields() {
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchData)(gmwcp_wp_ajax.getsettings, gmwcp_wp_ajax.nonce).then(function (fetchedData) {
      setFields(fetchedData.custom_fields);
      setLoading(false);
    })["catch"](function (error) {
      setLoading(false);
      console.error('Error fetching settings:', error);
    });
  };
  var openModal = function openModal() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    setIsOpen(true);
    if (field) {
      setEditingFieldId(field.id);
      setFieldTitle(field.title);
      setGmwcpkey(field.gmwcpkey);
    } else {
      resetForm(); // Reset for new field
    }
  };
  var closeModal = function closeModal() {
    setIsOpen(false);
    resetForm(); // Reset the form on close
  };
  var resetForm = function resetForm() {
    setFieldTitle('');
    setGmwcpkey('');
    setEditingFieldId(null);
  };
  var saveField = function saveField() {
    var data = {
      title: fieldTitle,
      gmwcpkey: gmwcpkey,
      id: editingFieldId // Include ID if editing
    };
    setIsSaving(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.saveData)(gmwcp_wp_ajax.savecustomfield, gmwcp_wp_ajax.nonce, data).then(function (responseData) {
      console.log(responseData);
      setIsSaving(false);
      if (responseData.success) {
        fetchFields();
        openPopup('Settings saved!');
      } else {
        openPopup(responseData.message);
      }
    })["catch"](function (error) {
      setIsSaving(false);
      console.error('Error saving settings:', error);
      openPopup('Failed to save settings.');
    });
  };
  var deleteField = function deleteField(fieldId) {
    if (confirm('Are you sure you want to delete this field?')) {
      setIsDeleting(true); // Set deleting state to true
      var data = {
        id: fieldId // Include ID if editing
      };
      (0,_api__WEBPACK_IMPORTED_MODULE_2__.saveData)(gmwcp_wp_ajax.deletecustomfield, gmwcp_wp_ajax.nonce, data).then(function (responseData) {
        console.log(responseData);
        setIsSaving(false);
        if (responseData.success) {
          fetchFields();
          openPopup(responseData.message);
        } else {
          openPopup(responseData.message);
        }
      })["catch"](function (error) {
        setIsSaving(false);
        console.error('Error saving settings:', error);
        openPopup('Failed to save settings.');
      })["finally"](function () {
        setIsDeleting(false); // Reset deleting state
      });
    }
  };
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    onClick: function onClick() {
      return openModal();
    },
    className: "mb-10"
  }, "Add Field")), loading ?
  /*#__PURE__*/
  // Conditional rendering based on loading state
  React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cfcblist"
  }, /*#__PURE__*/React.createElement("table", {
    className: "wp-list-table widefat fixed striped table-view-list"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Field Title"), /*#__PURE__*/React.createElement("th", null, "Field Key"), /*#__PURE__*/React.createElement("th", null, "Action"))), /*#__PURE__*/React.createElement("tbody", null, fields.length > 0 ?
  // Check if fields exist
  fields.map(function (field) {
    return /*#__PURE__*/React.createElement("tr", {
      key: field.id
    }, /*#__PURE__*/React.createElement("td", null, field.title), /*#__PURE__*/React.createElement("td", null, field.gmwcpkey), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: true,
      onClick: function onClick() {
        return openModal(field);
      }
    }, "Edit"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isDestructive: true,
      onClick: function onClick() {
        return deleteField(field.id);
      },
      disabled: isDeleting // Disable button if deleting
    }, isDeleting ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
      size: "small"
    }) : 'Delete')));
  }) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "4",
    style: {
      textAlign: 'center'
    }
  }, "No fields available.")))))), isOpen && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: "Product Meta Key Field",
    onRequestClose: closeModal
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Field Title",
    value: fieldTitle,
    onChange: function onChange(value) {
      return setFieldTitle(value);
    },
    placeholder: "Enter Field Title",
    disabled: "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.codesmade.com/store/pdf-catalog-woocommerce-pro/",
    target: "_blank"
  }, "Get Pro Version")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Product Meta Key",
    value: gmwcpkey,
    onChange: function onChange(value) {
      return setGmwcpkey(value);
    },
    placeholder: "Enter Field Key",
    disabled: "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.codesmade.com/store/pdf-catalog-woocommerce-pro/",
    target: "_blank"
  }, "Get Pro Version"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    onClick: saveField,
    disabled: isSaving
  }, isSaving ? 'Saving...' : 'Save Field'), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSecondary: true,
    onClick: closeModal
  }, "Cancel"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomFieldTab);

/***/ }),

/***/ "./src-admin/admin/ExcludeTab.js":
/*!***************************************!*\
  !*** ./src-admin/admin/ExcludeTab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var ExcludeTab = function ExcludeTab(_ref) {
  var openPopup = _ref.openPopup,
    setActiveTab = _ref.setActiveTab;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSaving = _useState2[0],
    setIsSaving = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    modifiedFields = _useState8[0],
    setModifiedFields = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Fetch settings from the REST API
    (0,_api__WEBPACK_IMPORTED_MODULE_3__.fetchData)(gmwcp_wp_ajax.getsettings, gmwcp_wp_ajax.nonce).then(function (fetchedData) {
      setData(fetchedData);
      setLoading(false);
    })["catch"](function (error) {
      setLoading(false);
      console.error('Error fetching settings:', error);
    });
  }, []);
  var updateField = function updateField(field, value) {
    setData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, field, value));
    });
    setModifiedFields(function (prevFields) {
      return _objectSpread(_objectSpread({}, prevFields), {}, _defineProperty({}, field, value));
    });
  };
  var toggleCheckbox = function toggleCheckbox(fieldName, key) {
    setData(function (prevData) {
      var currentValues = prevData[fieldName] || [];
      var updatedValues = currentValues.includes(key) ? currentValues.filter(function (item) {
        return item !== key;
      }) // Remove key if already present
      : [].concat(_toConsumableArray(currentValues), [key]); // Add key if not present
      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, fieldName, updatedValues));
    });
    setModifiedFields(function (prevFields) {
      var _data$fieldName;
      return _objectSpread(_objectSpread({}, prevFields), {}, _defineProperty({}, fieldName, (_data$fieldName = data[fieldName]) !== null && _data$fieldName !== void 0 && _data$fieldName.includes(key) ? data[fieldName].filter(function (item) {
        return item !== key;
      }) : [].concat(_toConsumableArray(data[fieldName] || []), [key])));
    });
  };
  var saveSettings = function saveSettings() {
    if (Object.keys(modifiedFields).length === 0) {
      openPopup('No changes to save.');
      return;
    }
    setIsSaving(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_3__.saveData)(gmwcp_wp_ajax.savedata, gmwcp_wp_ajax.nonce, modifiedFields).then(function (responseData) {
      setIsSaving(false);
      if (responseData.success) {
        openPopup('Settings saved!');
      } else {
        openPopup('Failed to save settings.');
      }
    })["catch"](function (error) {
      setIsSaving(false);
      console.error('Error saving settings:', error);
      openPopup('Failed to save settings.');
    });
  };
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, loading ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", {
    className: "GMadminTable"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Exclude Out of Stock Shop / Category Page")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
    checked: data.gmwcp_exclude_out_of_stock === 'yes',
    onChange: function onChange() {
      return updateField('gmwcp_exclude_out_of_stock', data.gmwcp_exclude_out_of_stock === 'yes' ? 'no' : 'yes');
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Exclude From Category")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalScrollable, {
    scrollDirection: "y",
    style: {
      height: 300
    }
  }, gmwcp_wp_ajax.gmwcpcategory.map(function (catdata) {
    var _data$gmpcp_exclude_c;
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
      key: String(catdata.term_id),
      label: catdata.name,
      checked: (_data$gmpcp_exclude_c = data.gmpcp_exclude_category) === null || _data$gmpcp_exclude_c === void 0 ? void 0 : _data$gmpcp_exclude_c.includes(String(catdata.term_id)) // Check if key exists in array
      ,
      onChange: function onChange() {
        return toggleCheckbox('gmpcp_exclude_category', String(catdata.term_id));
      } // Pass field name and key dynamically
    });
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Include Only User Role")), /*#__PURE__*/React.createElement("td", null, Object.entries(gmwcp_wp_ajax.gmwcproles).map(function (_ref2) {
    var _data$gmpcp_exclude_r;
    var _ref3 = _slicedToArray(_ref2, 2),
      key = _ref3[0],
      value = _ref3[1];
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
      key: key // Use the key (e.g., 'administrator') as the unique key
      ,
      label: value.name // Use the 'name' property from the value object for the label
      ,
      checked: (_data$gmpcp_exclude_r = data.gmpcp_exclude_role) === null || _data$gmpcp_exclude_r === void 0 ? void 0 : _data$gmpcp_exclude_r.includes(key) // Check if the key exists in the array
      ,
      onChange: function onChange() {
        return toggleCheckbox('gmpcp_exclude_role', key);
      } // Pass field name and key dynamically
    });
  })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    onClick: saveSettings,
    disabled: isSaving
  }, isSaving ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : 'Save Settings')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExcludeTab);

/***/ }),

/***/ "./src-admin/admin/LayoutTab.js":
/*!**************************************!*\
  !*** ./src-admin/admin/LayoutTab.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var LayoutTab = function LayoutTab(_ref) {
  var openPopup = _ref.openPopup,
    setActiveTab = _ref.setActiveTab;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSaving = _useState2[0],
    setIsSaving = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    modifiedFields = _useState8[0],
    setModifiedFields = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Fetch settings from the REST API
    (0,_api__WEBPACK_IMPORTED_MODULE_3__.fetchData)(gmwcp_wp_ajax.getsettings, gmwcp_wp_ajax.nonce).then(function (fetchedData) {
      setData(fetchedData);
      setLoading(false);
    })["catch"](function (error) {
      setLoading(false);
      console.error('Error fetching settings:', error);
    });
  }, []);
  var updateField = function updateField(field, value) {
    setData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, field, value));
    });
    setModifiedFields(function (prevFields) {
      return _objectSpread(_objectSpread({}, prevFields), {}, _defineProperty({}, field, value));
    });
  };
  var toggleCheckbox = function toggleCheckbox(fieldName, key) {
    setData(function (prevData) {
      var currentValues = prevData[fieldName] || [];
      var updatedValues = currentValues.includes(key) ? currentValues.filter(function (item) {
        return item !== key;
      }) // Remove key if already present
      : [].concat(_toConsumableArray(currentValues), [key]); // Add key if not present
      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, fieldName, updatedValues));
    });
    setModifiedFields(function (prevFields) {
      var _data$fieldName;
      return _objectSpread(_objectSpread({}, prevFields), {}, _defineProperty({}, fieldName, (_data$fieldName = data[fieldName]) !== null && _data$fieldName !== void 0 && _data$fieldName.includes(key) ? data[fieldName].filter(function (item) {
        return item !== key;
      }) : [].concat(_toConsumableArray(data[fieldName] || []), [key])));
    });
  };
  var saveSettings = function saveSettings() {
    if (Object.keys(modifiedFields).length === 0) {
      openPopup('No changes to save.');
      return;
    }
    setIsSaving(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_3__.saveData)(gmwcp_wp_ajax.savedata, gmwcp_wp_ajax.nonce, modifiedFields).then(function (responseData) {
      setIsSaving(false);
      if (responseData.success) {
        openPopup('Settings saved!');
        setModifiedFields({});
      } else {
        openPopup('Failed to save settings.');
      }
    })["catch"](function (error) {
      setIsSaving(false);
      console.error('Error saving settings:', error);
      openPopup('Failed to save settings.');
    });
  };
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, loading ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", {
    className: "GMadminTable"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Header Text")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    onChange: function onChange(value) {
      return updateField('gmpcp_header_text', value);
    },
    value: data.gmpcp_header_text,
    disabled: "true"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.codesmade.com/store/pdf-catalog-woocommerce-pro/",
    target: "_blank"
  }, "Get Pro Version")))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Footer Text")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    onChange: function onChange(value) {
      return updateField('gmpcp_footer_text', value);
    },
    value: data.gmpcp_footer_text,
    disabled: "true"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.codesmade.com/store/pdf-catalog-woocommerce-pro/",
    target: "_blank"
  }, "Get Pro Version")))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Background Color")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    onChange: function onChange(value) {
      return updateField('gmpcp_background_color', value);
    },
    value: data.gmpcp_background_color
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Text Color")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    onChange: function onChange(value) {
      return updateField('gmpcp_text_color', value);
    },
    value: data.gmpcp_text_color
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Header/Footer Background Color")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    onChange: function onChange(value) {
      return updateField('gmpcp_hf_background_color', value);
    },
    value: data.gmpcp_hf_background_color
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Header/Footer Text Color")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    onChange: function onChange(value) {
      return updateField('gmpcp_hf_text_color', value);
    },
    value: data.gmpcp_hf_text_color
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Product Title Font Size")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    help: "Enter Number Product Title Font Size",
    onChange: function onChange(value) {
      return updateField('gmpcp_product_title_font_size', value);
    },
    value: data.gmpcp_product_title_font_size
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Product Content Font Size")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    help: "Enter Number Product Content Font Size",
    onChange: function onChange(value) {
      return updateField('gmpcp_product_content_font_size', value);
    },
    value: data.gmpcp_product_content_font_size
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Direction")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    selected: data.gmwcp_direction,
    options: [{
      label: 'LTR',
      value: 'ltr'
    }, {
      label: 'RTL',
      value: 'rtl'
    }],
    onChange: function onChange(value) {
      return updateField('gmwcp_direction', value);
    }
  })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    onClick: saveSettings,
    disabled: isSaving
  }, isSaving ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : 'Save Settings')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutTab);

/***/ }),

/***/ "./src-admin/admin/MorePluginTab.js":
/*!******************************************!*\
  !*** ./src-admin/admin/MorePluginTab.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var MorePluginTab = function MorePluginTab(_ref) {
  var openPopup = _ref.openPopup,
    setActiveTab = _ref.setActiveTab;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchData)(gmwcp_wp_ajax.moreplugin, gmwcp_wp_ajax.nonce).then(function (fetchedData) {
      setData(fetchedData);
      setLoading(false);
    })["catch"](function (error) {
      setLoading(false);
      console.error('Error fetching plugin data:', error);
    });
  }, []);
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "More Plugins"
  }, loading ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginTop: '20px'
    }
  }, data.map(function (plugin, index) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Card, {
      key: index
    }, plugin.image && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardMedia, null, /*#__PURE__*/React.createElement("img", {
      src: plugin.image,
      alt: plugin.name,
      style: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px'
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardHeader, null, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0
      }
    }, plugin.name)), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: '15px'
      }
    }, plugin.shortdescription), /*#__PURE__*/React.createElement("a", {
      href: plugin.url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: true
    }, "View Plugin"))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MorePluginTab);

/***/ }),

/***/ "./src-admin/admin/ProductTab.js":
/*!***************************************!*\
  !*** ./src-admin/admin/ProductTab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var ProductTab = function ProductTab(_ref) {
  var openPopup = _ref.openPopup,
    setActiveTab = _ref.setActiveTab;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSaving = _useState2[0],
    setIsSaving = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    modifiedFields = _useState8[0],
    setModifiedFields = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      key: 'title',
      label: 'Title'
    }, {
      key: 'images',
      label: 'Images'
    }, {
      key: 'short_desc',
      label: 'Short Description'
    }, {
      key: 'long_desc',
      label: 'Long Description'
    }, {
      key: 'read_more',
      label: 'Read More'
    }, {
      key: 'sku',
      label: 'SKU'
    }, {
      key: 'price',
      label: 'Price'
    }, {
      key: 'categories',
      label: 'Categories'
    }, {
      key: 'tags',
      label: 'Tags'
    }, {
      key: 'brands',
      label: 'Brands'
    }, {
      key: 'weight',
      label: 'Weight'
    }, {
      key: 'dimensions',
      label: 'Dimensions'
    }, {
      key: 'attributes',
      label: 'Attributes'
    }, {
      key: 'stock_status',
      label: 'Stock Status'
    }, {
      key: 'gallery',
      label: 'Gallery'
    }]),
    _useState10 = _slicedToArray(_useState9, 2),
    hideshowFields = _useState10[0],
    setHideshowFields = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['weight', 'dimensions', 'attributes', 'stock_status', 'gallery']),
    _useState12 = _slicedToArray(_useState11, 1),
    disablehideshowFields = _useState12[0];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Fetch settings from the REST API
    (0,_api__WEBPACK_IMPORTED_MODULE_3__.fetchData)(gmwcp_wp_ajax.getsettings, gmwcp_wp_ajax.nonce).then(function (fetchedData) {
      setData(fetchedData);
      setLoading(false);
      var newFields = _toConsumableArray(fetchedData.custom_fields.map(function (field) {
        return {
          key: field.gmwcpkey,
          // Assuming 'field' has a key property
          label: field.title // Assuming 'field' has a label property
        };
      }));
      // Update state with new fields
      setHideshowFields(function (prevFields) {
        return [].concat(_toConsumableArray(prevFields), _toConsumableArray(newFields));
      });
    })["catch"](function (error) {
      setLoading(false);
      console.error('Error fetching settings:', error);
    });
  }, []);
  var updateField = function updateField(field, value) {
    setData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, field, value));
    });
    setModifiedFields(function (prevFields) {
      return _objectSpread(_objectSpread({}, prevFields), {}, _defineProperty({}, field, value));
    });
  };
  var toggleCheckbox = function toggleCheckbox(fieldName, key) {
    setData(function (prevData) {
      var currentValues = prevData[fieldName] || [];
      var updatedValues = currentValues.includes(key) ? currentValues.filter(function (item) {
        return item !== key;
      }) // Remove key if already present
      : [].concat(_toConsumableArray(currentValues), [key]); // Add key if not present
      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, fieldName, updatedValues));
    });
    setModifiedFields(function (prevFields) {
      var _data$fieldName;
      return _objectSpread(_objectSpread({}, prevFields), {}, _defineProperty({}, fieldName, (_data$fieldName = data[fieldName]) !== null && _data$fieldName !== void 0 && _data$fieldName.includes(key) ? data[fieldName].filter(function (item) {
        return item !== key;
      }) : [].concat(_toConsumableArray(data[fieldName] || []), [key])));
    });
  };
  var saveSettings = function saveSettings() {
    if (Object.keys(modifiedFields).length === 0) {
      openPopup('No changes to save.');
      return;
    }
    setIsSaving(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_3__.saveData)(gmwcp_wp_ajax.savedata, gmwcp_wp_ajax.nonce, modifiedFields).then(function (responseData) {
      setIsSaving(false);
      if (responseData.success) {
        openPopup('Settings saved!');
        setModifiedFields({});
      } else {
        openPopup('Failed to save settings.');
      }
    })["catch"](function (error) {
      setIsSaving(false);
      console.error('Error saving settings:', error);
      openPopup('Failed to save settings.');
    });
  };
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, loading ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", {
    className: "GMadminTable"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Enable Single Product Page")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
    checked: data.gmwcp_single_enable_product === 'yes',
    onChange: function onChange() {
      return updateField('gmwcp_single_enable_product', data.gmwcp_single_enable_product === 'yes' ? 'no' : 'yes');
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Show/Hide Options")), /*#__PURE__*/React.createElement("td", null, hideshowFields.map(function (_ref2) {
    var _data$gmwcp_single_sh;
    var key = _ref2.key,
      label = _ref2.label;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: disablehideshowFields.includes(key) ? ' gmwcp_flex' : '' // Conditionally apply class
    }, /*#__PURE__*/React.createElement("div", {
      className: disablehideshowFields.includes(key) ? ' gmwcp_disabled' : ''
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
      label: label,
      checked: (_data$gmwcp_single_sh = data.gmwcp_single_show_hide) === null || _data$gmwcp_single_sh === void 0 ? void 0 : _data$gmwcp_single_sh.includes(key) // Check if key exists in array
      ,
      onChange: function onChange() {
        return toggleCheckbox('gmwcp_single_show_hide', key);
      } // Pass field name and key dynamically
      ,
      disabled: disablehideshowFields.includes(key) // Disable based on `disablehideshowFields` array
    })), disablehideshowFields.includes(key) && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: "https://www.codesmade.com/store/pdf-catalog-woocommerce-pro/",
      target: "_blank"
    }, "Get Pro Version")));
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Image Section Width")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    help: "Keep Max 50",
    onChange: function onChange(value) {
      return updateField('gmpcp_single_image_width', value);
    },
    value: data.gmpcp_single_image_width
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Display Location")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    selected: data.gmwcp_single_display_location,
    options: [{
      label: 'Before Shop Loop',
      value: 'before'
    }, {
      label: 'After Shop Loop',
      value: 'after'
    }, {
      label: 'Custom Location',
      value: 'custom'
    }],
    onChange: function onChange(value) {
      return updateField('gmwcp_single_display_location', value);
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Text Align")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    selected: data.gmwcp_single_text_align,
    options: [{
      label: 'Left',
      value: 'left'
    }, {
      label: 'Center',
      value: 'center'
    }, {
      label: 'Right',
      value: 'right'
    }],
    onChange: function onChange(value) {
      return updateField('gmwcp_single_text_align', value);
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, "Download File Name")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    help: "Download Time Pdf File Name",
    onChange: function onChange(value) {
      return updateField('gmwcp_single_download_file_name', value);
    },
    value: data.gmwcp_single_download_file_name
  })))), /*#__PURE__*/React.createElement("h4", null, "Custom Location for you need to use shortcode  ", /*#__PURE__*/React.createElement("code", null, "[gmwcp_single_product]"), " or ", /*#__PURE__*/React.createElement("code", null, "[gmwcp_single_product id=\"product_id\"]")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    onClick: saveSettings,
    disabled: isSaving
  }, isSaving ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : 'Save Settings')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductTab);

/***/ }),

/***/ "./src-admin/admin/TranslationTab.js":
/*!*******************************************!*\
  !*** ./src-admin/admin/TranslationTab.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var TranslationTab = function TranslationTab(_ref) {
  var openPopup = _ref.openPopup,
    setActiveTab = _ref.setActiveTab;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSaving = _useState2[0],
    setIsSaving = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Fetch settings from the REST API
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchData)(gmwcp_wp_ajax.getsettings, gmwcp_wp_ajax.nonce).then(function (fetchedData) {
      setData(fetchedData);
      setLoading(false);
    })["catch"](function (error) {
      setLoading(false);
      console.error('Error fetching settings:', error);
    });
  }, []);
  var updateField = function updateField(field, value) {
    setData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, field, value));
    });
  };
  var saveSettings = function saveSettings() {
    setIsSaving(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.saveData)(gmwcp_wp_ajax.savedata, gmwcp_wp_ajax.nonce, data).then(function (responseData) {
      setIsSaving(false);
      if (responseData.success) {
        openPopup('Settings saved!');
      } else {
        openPopup('Failed to save settings.');
      }
    })["catch"](function (error) {
      setIsSaving(false);
      console.error('Error saving settings:', error);
      openPopup('Failed to save settings.');
    });
  };

  // Check if gmpcp_translation_arr exists and is an object
  var translationArr = gmwcp_wp_ajax.gmpcp_translation || {};
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, loading ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", {
    className: "GMadminTable"
  }, Object.entries(translationArr).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      key = _ref3[0],
      value = _ref3[1];
    return /*#__PURE__*/React.createElement("tr", {
      key: key
    }, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("label", null, value.label)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      onChange: function onChange(value) {
        return updateField(key, value);
      },
      value: data[key],
      disabled: "true"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: "https://www.codesmade.com/store/pdf-catalog-woocommerce-pro/",
      target: "_blank"
    }, "Get Pro Version"))));
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    onClick: saveSettings,
    disabled: isSaving
  }, isSaving ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : 'Save Settings')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TranslationTab);

/***/ }),

/***/ "./src-admin/admin/api.js":
/*!********************************!*\
  !*** ./src-admin/admin/api.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData),
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// api.js
var fetchData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint, nonce) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(endpoint, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'X-WP-Nonce': nonce
            }
          });
        case 3:
          response = _context.sent;
          if (response.ok) {
            _context.next = 6;
            break;
          }
          throw new Error("HTTP error! status: ".concat(response.status));
        case 6:
          _context.next = 8;
          return response.json();
        case 8:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching data:', _context.t0);
          throw _context.t0;
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function fetchData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var saveData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(endpoint, nonce, payload) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-WP-Nonce': nonce
            },
            body: JSON.stringify({
              settings: payload
            })
          });
        case 3:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", response.json());
        case 7:
          _context2.next = 9;
          return response.json();
        case 9:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0);
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function saveData(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src-admin/admin.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.scss */ "./src-admin/admin.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_CategoryTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/CategoryTab */ "./src-admin/admin/CategoryTab.js");
/* harmony import */ var _admin_ProductTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/ProductTab */ "./src-admin/admin/ProductTab.js");
/* harmony import */ var _admin_LayoutTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/LayoutTab */ "./src-admin/admin/LayoutTab.js");
/* harmony import */ var _admin_ExcludeTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/ExcludeTab */ "./src-admin/admin/ExcludeTab.js");
/* harmony import */ var _admin_TranslationTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/TranslationTab */ "./src-admin/admin/TranslationTab.js");
/* harmony import */ var _admin_CustomFieldTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/CustomFieldTab */ "./src-admin/admin/CustomFieldTab.js");
/* harmony import */ var _admin_MorePluginTab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/MorePluginTab */ "./src-admin/admin/MorePluginTab.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }












var AdminApp = function AdminApp() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPopupOpen = _useState2[0],
    setIsPopupOpen = _useState2[1]; // State for popup visibility
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    popupMessage = _useState4[0],
    setPopupMessage = _useState4[1]; // State for popup message

  var openPopup = function openPopup(message) {
    setPopupMessage(message);
    setIsPopupOpen(true);
  };
  var closePopup = function closePopup() {
    setIsPopupOpen(false);
    setPopupMessage('');
  };
  var tabs = [{
    name: 'CategoryTab',
    title: 'Category & Shop Page Setting',
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_admin_CategoryTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
      openPopup: openPopup
    })
  }, {
    name: 'ProductTab',
    title: 'Single Product Page Setting',
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_admin_ProductTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
      openPopup: openPopup
    })
  }, {
    name: 'LayoutTab',
    title: 'Layout',
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_admin_LayoutTab__WEBPACK_IMPORTED_MODULE_7__["default"], {
      openPopup: openPopup
    })
  }, {
    name: 'ExcludeTab',
    title: 'Exclude',
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_admin_ExcludeTab__WEBPACK_IMPORTED_MODULE_8__["default"], {
      openPopup: openPopup
    })
  }, {
    name: 'TranslationTab',
    title: 'Translation',
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_admin_TranslationTab__WEBPACK_IMPORTED_MODULE_9__["default"], {
      openPopup: openPopup
    })
  }, {
    name: 'CustomFieldTab',
    title: 'Product Meta Key',
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_admin_CustomFieldTab__WEBPACK_IMPORTED_MODULE_10__["default"], {
      openPopup: openPopup
    })
  }, {
    name: 'MorePluginTab',
    title: 'More Free Plugins',
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_admin_MorePluginTab__WEBPACK_IMPORTED_MODULE_11__["default"], {
      openPopup: openPopup
    })
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Panel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {
    className: "",
    activeClass: "active-tab",
    tabs: tabs
  }, function (tab, selected) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "tab-content ".concat(tab.name === selected ? 'active-tab' : '')
    }, tab.content);
  })), isPopupOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
    title: popupMessage,
    onRequestClose: closePopup
  }));
};
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  var root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createRoot)(document.getElementById('GMWCP-admin-root'));
  root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(AdminApp, null));
});
})();

/******/ })()
;
//# sourceMappingURL=admin.js.map