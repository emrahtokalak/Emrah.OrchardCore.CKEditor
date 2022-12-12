/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ckeditor/ckeditor5-core/src/plugin.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-core/src/plugin.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Plugin)
/* harmony export */ });
/* harmony import */ var _ckeditor_ckeditor5_utils_src_observablemixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/observablemixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
/**
 * @module core/plugin
 */

/**
 * The base class for CKEditor plugin classes.
 *
 * @implements module:core/plugin~PluginInterface
 * @mixes module:utils/observablemixin~ObservableMixin
 */
class Plugin extends _ckeditor_ckeditor5_utils_src_observablemixin__WEBPACK_IMPORTED_MODULE_0__.Observable {
    /**
     * @inheritDoc
     */
    constructor(editor) {
        super();
        /**
         * The editor instance.
         *
         * Note that most editors implement the {@link module:core/editor/editorwithui~EditorWithUI} interface in addition
         * to the base {@link module:core/editor/editor~Editor} interface. However, editors with an external UI
         * (i.e. Bootstrap-based) or a headless editor may not implement the {@link module:core/editor/editorwithui~EditorWithUI}
         * interface.
         *
         * Because of above, to make plugins more universal, it is recommended to split features into:
         *  - The "editing" part that only uses the {@link module:core/editor/editor~Editor} interface.
         *  - The "UI" part that uses both the {@link module:core/editor/editor~Editor} interface and
         *  the {@link module:core/editor/editorwithui~EditorWithUI} interface.
         *
         * @readonly
         * @member {module:core/editor/editor~Editor} #editor
         */
        this.editor = editor;
        /**
         * Flag indicating whether a plugin is enabled or disabled.
         * A disabled plugin will not transform text.
         *
         * Plugin can be simply disabled like that:
         *
         *		// Disable the plugin so that no toolbars are visible.
         *		editor.plugins.get( 'TextTransformation' ).isEnabled = false;
         *
         * You can also use {@link #forceDisabled} method.
         *
         * @observable
         * @readonly
         * @member {Boolean} #isEnabled
         */
        this.set('isEnabled', true);
        /**
         * Holds identifiers for {@link #forceDisabled} mechanism.
         *
         * @type {Set.<String>}
         * @private
         */
        this._disableStack = new Set();
    }
    /**
     * Disables the plugin.
     *
     * Plugin may be disabled by multiple features or algorithms (at once). When disabling a plugin, unique id should be passed
     * (e.g. feature name). The same identifier should be used when {@link #clearForceDisabled enabling back} the plugin.
     * The plugin becomes enabled only after all features {@link #clearForceDisabled enabled it back}.
     *
     * Disabling and enabling a plugin:
     *
     *		plugin.isEnabled; // -> true
     *		plugin.forceDisabled( 'MyFeature' );
     *		plugin.isEnabled; // -> false
     *		plugin.clearForceDisabled( 'MyFeature' );
     *		plugin.isEnabled; // -> true
     *
     * Plugin disabled by multiple features:
     *
     *		plugin.forceDisabled( 'MyFeature' );
     *		plugin.forceDisabled( 'OtherFeature' );
     *		plugin.clearForceDisabled( 'MyFeature' );
     *		plugin.isEnabled; // -> false
     *		plugin.clearForceDisabled( 'OtherFeature' );
     *		plugin.isEnabled; // -> true
     *
     * Multiple disabling with the same identifier is redundant:
     *
     *		plugin.forceDisabled( 'MyFeature' );
     *		plugin.forceDisabled( 'MyFeature' );
     *		plugin.clearForceDisabled( 'MyFeature' );
     *		plugin.isEnabled; // -> true
     *
     * **Note:** some plugins or algorithms may have more complex logic when it comes to enabling or disabling certain plugins,
     * so the plugin might be still disabled after {@link #clearForceDisabled} was used.
     *
     * @param {String} id Unique identifier for disabling. Use the same id when {@link #clearForceDisabled enabling back} the plugin.
     */
    forceDisabled(id) {
        this._disableStack.add(id);
        if (this._disableStack.size == 1) {
            this.on('set:isEnabled', forceDisable, { priority: 'highest' });
            this.isEnabled = false;
        }
    }
    /**
     * Clears forced disable previously set through {@link #forceDisabled}. See {@link #forceDisabled}.
     *
     * @param {String} id Unique identifier, equal to the one passed in {@link #forceDisabled} call.
     */
    clearForceDisabled(id) {
        this._disableStack.delete(id);
        if (this._disableStack.size == 0) {
            this.off('set:isEnabled', forceDisable);
            this.isEnabled = true;
        }
    }
    /**
     * @inheritDoc
     */
    destroy() {
        this.stopListening();
    }
    /**
     * @inheritDoc
     */
    static get isContextPlugin() {
        return false;
    }
}
// Helper function that forces plugin to be disabled.
function forceDisable(evt) {
    evt.return = false;
    evt.stop();
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/src/button/buttonview.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/src/button/buttonview.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./node_modules/@ckeditor/ckeditor5-ui/src/view.js");
/* harmony import */ var _icon_iconview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon/iconview */ "./node_modules/@ckeditor/ckeditor5-ui/src/icon/iconview.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/uid */ "./node_modules/@ckeditor/ckeditor5-utils/src/uid.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/keyboard */ "./node_modules/@ckeditor/ckeditor5-utils/src/keyboard.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/env */ "./node_modules/@ckeditor/ckeditor5-utils/src/env.js");
/* harmony import */ var _theme_components_button_button_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme/components/button/button.css */ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module ui/button/buttonview
 */






/**
 * The button view class.
 *
 *		const view = new ButtonView();
 *
 *		view.set( {
 *			label: 'A button',
 *			keystroke: 'Ctrl+B',
 *			tooltip: true,
 *			withText: true
 *		} );
 *
 *		view.render();
 *
 *		document.body.append( view.element );
 *
 * @extends module:ui/view~View
 * @implements module:ui/button/button~Button
 */
class ButtonView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @inheritDoc
     */
    constructor(locale) {
        super(locale);
        const bind = this.bindTemplate;
        const ariaLabelUid = (0,_ckeditor_ckeditor5_utils_src_uid__WEBPACK_IMPORTED_MODULE_2__["default"])();
        // Implement the Button interface.
        this.set('class', undefined);
        this.set('labelStyle', undefined);
        this.set('icon', undefined);
        this.set('isEnabled', true);
        this.set('isOn', false);
        this.set('isVisible', true);
        this.set('isToggleable', false);
        this.set('keystroke', undefined);
        this.set('label', undefined);
        this.set('tabindex', -1);
        this.set('tooltip', false);
        this.set('tooltipPosition', 's');
        this.set('type', 'button');
        this.set('withText', false);
        this.set('withKeystroke', false);
        /**
         * Collection of the child views inside of the button {@link #element}.
         *
         * @readonly
         * @member {module:ui/viewcollection~ViewCollection}
         */
        this.children = this.createCollection();
        /**
         * Label of the button view. It is configurable using the {@link #label label attribute}.
         *
         * @readonly
         * @member {module:ui/view~View} #labelView
         */
        this.labelView = this._createLabelView(ariaLabelUid);
        /**
         * The icon view of the button. Will be added to {@link #children} when the
         * {@link #icon icon attribute} is defined.
         *
         * @readonly
         * @member {module:ui/icon/iconview~IconView} #iconView
         */
        this.iconView = new _icon_iconview__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.iconView.extendTemplate({
            attributes: {
                class: 'ck-button__icon'
            }
        });
        /**
         * A view displaying the keystroke of the button next to the {@link #labelView label}.
         * Added to {@link #children} when the {@link #withKeystroke `withKeystroke` attribute}
         * is defined.
         *
         * @readonly
         * @member {module:ui/view/view~View} #keystrokeView
         */
        this.keystrokeView = this._createKeystrokeView();
        /**
         * Tooltip of the button bound to the template.
         *
         * @see #tooltip
         * @see #_getTooltipString
         * @private
         * @observable
         * @member {String|undefined} #_tooltipString
         */
        this.bind('_tooltipString').to(this, 'tooltip', this, 'label', this, 'keystroke', this._getTooltipString.bind(this));
        const template = {
            tag: 'button',
            attributes: {
                class: [
                    'ck',
                    'ck-button',
                    bind.to('class'),
                    bind.if('isEnabled', 'ck-disabled', value => !value),
                    bind.if('isVisible', 'ck-hidden', value => !value),
                    bind.to('isOn', value => value ? 'ck-on' : 'ck-off'),
                    bind.if('withText', 'ck-button_with-text'),
                    bind.if('withKeystroke', 'ck-button_with-keystroke')
                ],
                type: bind.to('type', value => value ? value : 'button'),
                tabindex: bind.to('tabindex'),
                'aria-labelledby': `ck-editor__aria-label_${ariaLabelUid}`,
                'aria-disabled': bind.if('isEnabled', true, value => !value),
                'aria-pressed': bind.to('isOn', value => this.isToggleable ? String(!!value) : false),
                'data-cke-tooltip-text': bind.to('_tooltipString'),
                'data-cke-tooltip-position': bind.to('tooltipPosition')
            },
            children: this.children,
            on: {
                click: bind.to(evt => {
                    // We can't make the button disabled using the disabled attribute, because it won't be focusable.
                    // Though, shouldn't this condition be moved to the button controller?
                    if (this.isEnabled) {
                        this.fire('execute');
                    }
                    else {
                        // Prevent the default when button is disabled, to block e.g.
                        // automatic form submitting. See ckeditor/ckeditor5-link#74.
                        evt.preventDefault();
                    }
                })
            }
        };
        // On Safari we have to force the focus on a button on click as it's the only browser
        // that doesn't do that automatically. See #12115.
        if (_ckeditor_ckeditor5_utils_src_env__WEBPACK_IMPORTED_MODULE_4__["default"].isSafari) {
            template.on.mousedown = bind.to(evt => {
                this.focus();
                evt.preventDefault();
            });
        }
        this.setTemplate(template);
    }
    /**
     * @inheritDoc
     */
    render() {
        super.render();
        if (this.icon) {
            this.iconView.bind('content').to(this, 'icon');
            this.children.add(this.iconView);
        }
        this.children.add(this.labelView);
        if (this.withKeystroke && this.keystroke) {
            this.children.add(this.keystrokeView);
        }
    }
    /**
     * Focuses the {@link #element} of the button.
     */
    focus() {
        this.element.focus();
    }
    /**
     * Creates a label view instance and binds it with button attributes.
     *
     * @private
     * @param {String} ariaLabelUid The aria label UID.
     * @returns {module:ui/view~View}
     */
    _createLabelView(ariaLabelUid) {
        const labelView = new _view__WEBPACK_IMPORTED_MODULE_0__["default"]();
        const bind = this.bindTemplate;
        labelView.setTemplate({
            tag: 'span',
            attributes: {
                class: [
                    'ck',
                    'ck-button__label'
                ],
                style: bind.to('labelStyle'),
                id: `ck-editor__aria-label_${ariaLabelUid}`
            },
            children: [
                {
                    text: this.bindTemplate.to('label')
                }
            ]
        });
        return labelView;
    }
    /**
     * Creates a view that displays a keystroke next to a {@link #labelView label }
     * and binds it with button attributes.
     *
     * @private
     * @returns {module:ui/view~View}
     */
    _createKeystrokeView() {
        const keystrokeView = new _view__WEBPACK_IMPORTED_MODULE_0__["default"]();
        keystrokeView.setTemplate({
            tag: 'span',
            attributes: {
                class: [
                    'ck',
                    'ck-button__keystroke'
                ]
            },
            children: [
                {
                    text: this.bindTemplate.to('keystroke', text => (0,_ckeditor_ckeditor5_utils_src_keyboard__WEBPACK_IMPORTED_MODULE_3__.getEnvKeystrokeText)(text))
                }
            ]
        });
        return keystrokeView;
    }
    /**
     * Gets the text for the tooltip from the combination of
     * {@link #tooltip}, {@link #label} and {@link #keystroke} attributes.
     *
     * @private
     * @see #tooltip
     * @see #_tooltipString
     * @param {Boolean|String|Function} tooltip Button tooltip.
     * @param {String} label Button label.
     * @param {String} keystroke Button keystroke.
     * @returns {String}
     */
    _getTooltipString(tooltip, label, keystroke) {
        if (tooltip) {
            if (typeof tooltip == 'string') {
                return tooltip;
            }
            else {
                if (keystroke) {
                    keystroke = (0,_ckeditor_ckeditor5_utils_src_keyboard__WEBPACK_IMPORTED_MODULE_3__.getEnvKeystrokeText)(keystroke);
                }
                if (tooltip instanceof Function) {
                    return tooltip(label, keystroke);
                }
                else {
                    return `${label}${keystroke ? ` (${keystroke})` : ''}`;
                }
            }
        }
        return '';
    }
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/src/icon/iconview.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/src/icon/iconview.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./node_modules/@ckeditor/ckeditor5-ui/src/view.js");
/* harmony import */ var _theme_components_icon_icon_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/components/icon/icon.css */ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* global DOMParser */
/**
 * @module ui/icon/iconview
 */


/**
 * The icon view class.
 *
 * @extends module:ui/view~View
 */
class IconView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @inheritDoc
     */
    constructor() {
        super();
        const bind = this.bindTemplate;
        /**
         * The SVG source of the icon.
         *
         * @observable
         * @member {String} #content
         */
        this.set('content', '');
        /**
         * This attribute specifies the boundaries to which the
         * icon content should stretch.
         *
         * @observable
         * @default '0 0 20 20'
         * @member {String} #viewBox
         */
        this.set('viewBox', '0 0 20 20');
        /**
         * The fill color of the child `path.ck-icon__fill`.
         *
         * @observable
         * @default ''
         * @member {String} #fillColor
         */
        this.set('fillColor', '');
        /**
         * When set true (default), all parts of the icon inherit the fill color from the CSS `color` property of the
         * icon's DOM parent.
         *
         * This effectively makes the icon monochromatic and allows it to change its fill color dynamically, for instance,
         * when a {@link module:ui/button/buttonview~ButtonView} displays an icon and it switches between different states
         * (pushed, hovered, etc.) the icon will follow along.
         *
         * **Note**: For the monochromatic icon to render properly, it must be made up of shapes that can be filled
         * with color instead of, for instance, paths with strokes. Be sure to use the *outline stroke* tool
         * (the name could be different in your vector graphics editor) before exporting your icon. Also, remove any
         * excess `fill="..."` attributes that could break the color inheritance.
         *
         * **Note**: If you want to preserve the original look of your icon and disable dynamic color inheritance,
         * set this flag to `false`.
         *
         * @observable
         * @default true
         * @member {Boolean} #isColorInherited
         */
        this.set('isColorInherited', true);
        this.setTemplate({
            tag: 'svg',
            ns: 'http://www.w3.org/2000/svg',
            attributes: {
                class: [
                    'ck',
                    'ck-icon',
                    // Exclude icon internals from the CSS reset to allow rich (non-monochromatic) icons
                    // (https://github.com/ckeditor/ckeditor5/issues/12599).
                    'ck-reset_all-excluded',
                    // The class to remove the dynamic color inheritance is toggleable
                    // (https://github.com/ckeditor/ckeditor5/issues/12599).
                    bind.if('isColorInherited', 'ck-icon_inherit-color')
                ],
                viewBox: bind.to('viewBox')
            }
        });
    }
    /**
     * @inheritDoc
     */
    render() {
        super.render();
        this._updateXMLContent();
        this._colorFillPaths();
        // This is a hack for lack of innerHTML binding.
        // See: https://github.com/ckeditor/ckeditor5-ui/issues/99.
        this.on('change:content', () => {
            this._updateXMLContent();
            this._colorFillPaths();
        });
        this.on('change:fillColor', () => {
            this._colorFillPaths();
        });
    }
    /**
     * Updates the {@link #element} with the value of {@link #content}.
     *
     * @private
     */
    _updateXMLContent() {
        if (this.content) {
            const parsed = new DOMParser().parseFromString(this.content.trim(), 'image/svg+xml');
            const svg = parsed.querySelector('svg');
            const viewBox = svg.getAttribute('viewBox');
            if (viewBox) {
                this.viewBox = viewBox;
            }
            // Preserve presentational attributes of the <svg> element from the source.
            // They can affect rendering of the entire icon (https://github.com/ckeditor/ckeditor5/issues/12597).
            for (const { name, value } of Array.from(svg.attributes)) {
                if (IconView.presentationalAttributeNames.includes(name)) {
                    this.element.setAttribute(name, value);
                }
            }
            while (this.element.firstChild) {
                this.element.removeChild(this.element.firstChild);
            }
            while (svg.childNodes.length > 0) {
                this.element.appendChild(svg.childNodes[0]);
            }
        }
    }
    /**
     * Fills all child `path.ck-icon__fill` with the `#fillColor`.
     *
     * @private
     */
    _colorFillPaths() {
        if (this.fillColor) {
            this.element.querySelectorAll('.ck-icon__fill').forEach(path => {
                path.style.fill = this.fillColor;
            });
        }
    }
}
/**
 * A list of presentational attributes that can be set on the `<svg>` element and should be preserved
 * when the icon {@link module:ui/icon/iconview~IconView#content content} is loaded.
 *
 * See the [specification](https://www.w3.org/TR/SVG/styling.html#TermPresentationAttribute) to learn more.
 *
 * @protected
 * @member {Array.<String>} module:ui/icon/iconview~IconView.presentationalAttributeNames
 */
IconView.presentationalAttributeNames = [
    'alignment-baseline', 'baseline-shift', 'clip-path', 'clip-rule', 'color', 'color-interpolation',
    'color-interpolation-filters', 'color-rendering', 'cursor', 'direction', 'display', 'dominant-baseline', 'fill', 'fill-opacity',
    'fill-rule', 'filter', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style',
    'font-variant', 'font-weight', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start',
    'mask', 'opacity', 'overflow', 'paint-order', 'pointer-events', 'shape-rendering', 'stop-color', 'stop-opacity', 'stroke',
    'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width',
    'text-anchor', 'text-decoration', 'text-overflow', 'text-rendering', 'transform', 'unicode-bidi', 'vector-effect',
    'visibility', 'white-space', 'word-spacing', 'writing-mode'
];


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/src/template.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/src/template.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateBinding": () => (/* binding */ TemplateBinding),
/* harmony export */   "TemplateIfBinding": () => (/* binding */ TemplateIfBinding),
/* harmony export */   "TemplateToBinding": () => (/* binding */ TemplateToBinding),
/* harmony export */   "default": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_emittermixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/emittermixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./node_modules/@ckeditor/ckeditor5-ui/src/view.js");
/* harmony import */ var _viewcollection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewcollection */ "./node_modules/@ckeditor/ckeditor5-ui/src/viewcollection.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_dom_isnode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/dom/isnode */ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/isnode.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/cloneDeepWith.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_toarray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/toarray */ "./node_modules/@ckeditor/ckeditor5-utils/src/toarray.js");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module ui/template
 */
/* global document */







const xhtmlNs = 'http://www.w3.org/1999/xhtml';
/**
 * A basic Template class. It renders a DOM HTML element or text from a
 * {@link module:ui/template~TemplateDefinition definition} and supports element attributes, children,
 * bindings to {@link module:utils/observablemixin~Observable observables} and DOM event propagation.
 *
 * A simple template can look like this:
 *
 *		const bind = Template.bind( observable, emitter );
 *
 *		new Template( {
 *			tag: 'p',
 *			attributes: {
 *				class: 'foo',
 *				style: {
 *					backgroundColor: 'yellow'
 *				}
 *			},
 *			on: {
 *				click: bind.to( 'clicked' )
 *			},
 *			children: [
 *				'A paragraph.'
 *			]
 *		} ).render();
 *
 * and it will render the following HTML element:
 *
 *		<p class="foo" style="background-color: yellow;">A paragraph.</p>
 *
 * Additionally, the `observable` will always fire `clicked` upon clicking `<p>` in the DOM.
 *
 * See {@link module:ui/template~TemplateDefinition} to know more about templates and complex
 * template definitions.
 *
* @mixes module:utils/emittermixin~EmitterMixin
 */
class Template extends _ckeditor_ckeditor5_utils_src_emittermixin__WEBPACK_IMPORTED_MODULE_1__.Emitter {
    /**
     * Creates an instance of the {@link ~Template} class.
     *
     * @param {module:ui/template~TemplateDefinition} def The definition of the template.
     */
    constructor(def) {
        super();
        Object.assign(this, normalize(clone(def)));
        /**
         * Indicates whether this particular Template instance has been
         * {@link #render rendered}.
         *
         * @readonly
         * @protected
         * @member {Boolean}
         */
        this._isRendered = false;
        /**
         * The tag (`tagName`) of this template, e.g. `div`. It also indicates that the template
         * renders to an HTML element.
         *
         * @member {String} #tag
         */
        /**
         * The text of the template. It also indicates that the template renders to a DOM text node.
         *
         * @member {Array.<String|module:ui/template~TemplateValueSchema>} #text
         */
        /**
         * The attributes of the template, e.g. `{ id: [ 'ck-id' ] }`, corresponding with
         * the attributes of an HTML element.
         *
         * **Note**: This property only makes sense when {@link #tag} is defined.
         *
         * @member {Object} #attributes
         */
        /**
         * The children of the template. They can be either:
         * * independent instances of {@link ~Template} (sub–templates),
         * * native DOM Nodes.
         *
         * **Note**: This property only makes sense when {@link #tag} is defined.
         *
         * @member {Array.<module:ui/template~Template|Node>} #children
         */
        /**
         * The DOM event listeners of the template.
         *
         * @member {Object} #eventListeners
         */
        /**
         * The data used by the {@link #revert} method to restore a node to its original state.
         *
         * See: {@link #apply}.
         *
         * @readonly
         * @protected
         * @member {module:ui/template~RenderData}
         */
        this._revertData = null;
    }
    /**
     * Renders a DOM Node (an HTML element or text) out of the template.
     *
     *		const domNode = new Template( { ... } ).render();
     *
     * See: {@link #apply}.
     *
     * @returns {HTMLElement|Text}
     */
    render() {
        const node = this._renderNode({
            intoFragment: true
        });
        this._isRendered = true;
        return node;
    }
    /**
     * Applies the template to an existing DOM Node, either HTML element or text.
     *
     * **Note:** No new DOM nodes will be created. Applying extends:
     *
     * {@link module:ui/template~TemplateDefinition attributes},
     * {@link module:ui/template~TemplateDefinition event listeners}, and
     * `textContent` of {@link module:ui/template~TemplateDefinition children} only.
     *
     * **Note:** Existing `class` and `style` attributes are extended when a template
     * is applied to an HTML element, while other attributes and `textContent` are overridden.
     *
     * **Note:** The process of applying a template can be easily reverted using the
     * {@link module:ui/template~Template#revert} method.
     *
     *		const element = document.createElement( 'div' );
     *		const observable = new Model( { divClass: 'my-div' } );
     *		const emitter = Object.create( EmitterMixin );
     *		const bind = Template.bind( observable, emitter );
     *
     *		new Template( {
     *			attributes: {
     *				id: 'first-div',
     *				class: bind.to( 'divClass' )
     *			},
     *			on: {
     *				click: bind( 'elementClicked' ) // Will be fired by the observable.
     *			},
     *			children: [
     *				'Div text.'
     *			]
     *		} ).apply( element );
     *
     *		console.log( element.outerHTML ); // -> '<div id="first-div" class="my-div"></div>'
     *
     * @see module:ui/template~Template#render
     * @see module:ui/template~Template#revert
     * @param {Node} node Root node for the template to apply.
     */
    apply(node) {
        this._revertData = getEmptyRevertData();
        this._renderNode({
            node,
            intoFragment: false,
            isApplying: true,
            revertData: this._revertData
        });
        return node;
    }
    /**
     * Reverts a template {@link module:ui/template~Template#apply applied} to a DOM node.
     *
     * @param {Node} node The root node for the template to revert. In most of the cases, it is the
     * same node used by {@link module:ui/template~Template#apply}.
     */
    revert(node) {
        if (!this._revertData) {
            /**
             * Attempting to revert a template which has not been applied yet.
             *
             * @error ui-template-revert-not-applied
             */
            throw new _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"]('ui-template-revert-not-applied', [this, node]);
        }
        this._revertTemplateFromNode(node, this._revertData);
    }
    /**
     * Returns an iterator which traverses the template in search of {@link module:ui/view~View}
     * instances and returns them one by one.
     *
     *		const viewFoo = new View();
     *		const viewBar = new View();
     *		const viewBaz = new View();
     *		const template = new Template( {
     *			tag: 'div',
     *			children: [
     *				viewFoo,
     *				{
     *					tag: 'div',
     *					children: [
     *						viewBar
     *					]
     *				},
     *				viewBaz
     *			]
     *		} );
     *
     *		// Logs: viewFoo, viewBar, viewBaz
     *		for ( const view of template.getViews() ) {
     *			console.log( view );
     *		}
     *
     * @returns {Iterable.<module:ui/view~View>}
     */
    *getViews() {
        function* search(def) {
            if (def.children) {
                for (const child of def.children) {
                    if (isView(child)) {
                        yield child;
                    }
                    else if (isTemplate(child)) {
                        yield* search(child);
                    }
                }
            }
        }
        yield* search(this);
    }
    /**
     * An entry point to the interface which binds DOM nodes to
     * {@link module:utils/observablemixin~Observable observables}.
     * There are two types of bindings:
     *
     * * HTML element attributes or text `textContent` synchronized with attributes of an
     * {@link module:utils/observablemixin~Observable}. Learn more about {@link module:ui/template~BindChain#to}
     * and {@link module:ui/template~BindChain#if}.
     *
     *		const bind = Template.bind( observable, emitter );
     *
     *		new Template( {
     *			attributes: {
     *				// Binds the element "class" attribute to observable#classAttribute.
     *				class: bind.to( 'classAttribute' )
     *			}
     *		} ).render();
     *
     * * DOM events fired on HTML element propagated through
     * {@link module:utils/observablemixin~Observable}. Learn more about {@link module:ui/template~BindChain#to}.
     *
     *		const bind = Template.bind( observable, emitter );
     *
     *		new Template( {
     *			on: {
     *				// Will be fired by the observable.
     *				click: bind( 'elementClicked' )
     *			}
     *		} ).render();
     *
     * Also see {@link module:ui/view~View#bindTemplate}.
     *
     * @param {module:utils/observablemixin~Observable} observable An observable which provides boundable attributes.
     * @param {module:utils/emittermixin~Emitter} emitter An emitter that listens to observable attribute
     * changes or DOM Events (depending on the kind of the binding). Usually, a {@link module:ui/view~View} instance.
     * @returns {module:ui/template~BindChain}
     */
    static bind(observable, emitter) {
        return {
            to(eventNameOrFunctionOrAttribute, callback) {
                return new TemplateToBinding({
                    eventNameOrFunction: eventNameOrFunctionOrAttribute,
                    attribute: eventNameOrFunctionOrAttribute,
                    observable, emitter, callback
                });
            },
            if(attribute, valueIfTrue, callback) {
                return new TemplateIfBinding({
                    observable, emitter, attribute, valueIfTrue, callback
                });
            }
        };
    }
    /**
     * Extends an existing {@link module:ui/template~Template} instance with some additional content
     * from another {@link module:ui/template~TemplateDefinition}.
     *
     *		const bind = Template.bind( observable, emitter );
     *
     *		const template = new Template( {
     *			tag: 'p',
     *			attributes: {
     *				class: 'a',
     *				data-x: bind.to( 'foo' )
     *			},
     *			children: [
     *				{
     *					tag: 'span',
     *					attributes: {
     *						class: 'b'
     *					},
     *					children: [
     *						'Span'
     *					]
     *				}
     *			]
     *		 } );
     *
     *		// Instance-level extension.
     *		Template.extend( template, {
     *			attributes: {
     *				class: 'b',
     *				data-x: bind.to( 'bar' )
     *			},
     *			children: [
     *				{
     *					attributes: {
     *						class: 'c'
     *					}
     *				}
     *			]
     *		} );
     *
     *		// Child extension.
     *		Template.extend( template.children[ 0 ], {
     *			attributes: {
     *				class: 'd'
     *			}
     *		} );
     *
     * the `outerHTML` of `template.render()` is:
     *
     *		<p class="a b" data-x="{ observable.foo } { observable.bar }">
     *			<span class="b c d">Span</span>
     *		</p>
     *
     * @param {module:ui/template~Template} template An existing template instance to be extended.
     * @param {module:ui/template~TemplateDefinition} def Additional definition to be applied to a template.
     */
    static extend(template, def) {
        if (template._isRendered) {
            /**
             * Extending a template after rendering may not work as expected. To make sure
             * the {@link module:ui/template~Template.extend extending} works for an element,
             * make sure it happens before {@link #render} is called.
             *
             * @error template-extend-render
             */
            throw new _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"]('template-extend-render', [this, template]);
        }
        extendTemplate(template, normalize(clone(def)));
    }
    /**
     * Renders a DOM Node (either an HTML element or text) out of the template.
     *
     * @protected
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _renderNode(data) {
        let isInvalid;
        if (data.node) {
            // When applying, a definition cannot have "tag" and "text" at the same time.
            isInvalid = this.tag && this.text;
        }
        else {
            // When rendering, a definition must have either "tag" or "text": XOR( this.tag, this.text ).
            isInvalid = this.tag ? this.text : !this.text;
        }
        if (isInvalid) {
            /**
             * Node definition cannot have the "tag" and "text" properties at the same time.
             * Node definition must have either "tag" or "text" when rendering a new Node.
             *
             * @error ui-template-wrong-syntax
             */
            throw new _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"]('ui-template-wrong-syntax', this);
        }
        if (this.text) {
            return this._renderText(data);
        }
        else {
            return this._renderElement(data);
        }
    }
    /**
     * Renders an HTML element out of the template.
     *
     * @protected
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _renderElement(data) {
        let node = data.node;
        if (!node) {
            node = data.node = document.createElementNS(this.ns || xhtmlNs, this.tag);
        }
        this._renderAttributes(data);
        this._renderElementChildren(data);
        this._setUpListeners(data);
        return node;
    }
    /**
     * Renders a text node out of {@link module:ui/template~Template#text}.
     *
     * @protected
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _renderText(data) {
        let node = data.node;
        // Save the original textContent to revert it in #revert().
        if (node) {
            data.revertData.text = node.textContent;
        }
        else {
            node = data.node = document.createTextNode('');
        }
        // Check if this Text Node is bound to Observable. Cases:
        //
        //		text: [ Template.bind( ... ).to( ... ) ]
        //
        //		text: [
        //			'foo',
        //			Template.bind( ... ).to( ... ),
        //			...
        //		]
        //
        if (hasTemplateBinding(this.text)) {
            this._bindToObservable({
                schema: this.text,
                updater: getTextUpdater(node),
                data
            });
        }
        // Simply set text. Cases:
        //
        //		text: [ 'all', 'are', 'static' ]
        //
        //		text: [ 'foo' ]
        //
        else {
            node.textContent = this.text.join('');
        }
        return node;
    }
    /**
     * Renders HTML element attributes out of {@link module:ui/template~Template#attributes}.
     *
     * @protected
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _renderAttributes(data) {
        if (!this.attributes) {
            return;
        }
        const node = data.node;
        const revertData = data.revertData;
        for (const attrName in this.attributes) {
            // Current attribute value in DOM.
            const domAttrValue = node.getAttribute(attrName);
            // The value to be set.
            const attrValue = this.attributes[attrName];
            // Save revert data.
            if (revertData) {
                revertData.attributes[attrName] = domAttrValue;
            }
            // Detect custom namespace:
            //
            //		class: {
            //			ns: 'abc',
            //			value: Template.bind( ... ).to( ... )
            //		}
            //
            const attrNs = isNamespaced(attrValue) ? attrValue[0].ns : null;
            // Activate binding if one is found. Cases:
            //
            //		class: [
            //			Template.bind( ... ).to( ... )
            //		]
            //
            //		class: [
            //			'bar',
            //			Template.bind( ... ).to( ... ),
            //			'baz'
            //		]
            //
            //		class: {
            //			ns: 'abc',
            //			value: Template.bind( ... ).to( ... )
            //		}
            //
            if (hasTemplateBinding(attrValue)) {
                // Normalize attributes with additional data like namespace:
                //
                //		class: {
                //			ns: 'abc',
                //			value: [ ... ]
                //		}
                //
                const valueToBind = isNamespaced(attrValue) ? attrValue[0].value : attrValue;
                // Extend the original value of attributes like "style" and "class",
                // don't override them.
                if (revertData && shouldExtend(attrName)) {
                    valueToBind.unshift(domAttrValue);
                }
                this._bindToObservable({
                    schema: valueToBind,
                    updater: getAttributeUpdater(node, attrName, attrNs),
                    data
                });
            }
            // Style attribute could be an Object so it needs to be parsed in a specific way.
            //
            //		style: {
            //			width: '100px',
            //			height: Template.bind( ... ).to( ... )
            //		}
            //
            else if (attrName == 'style' && typeof attrValue[0] !== 'string') {
                this._renderStyleAttribute(attrValue[0], data);
            }
            // Otherwise simply set the static attribute:
            //
            //		class: [ 'foo' ]
            //
            //		class: [ 'all', 'are', 'static' ]
            //
            //		class: [
            //			{
            //				ns: 'abc',
            //				value: [ 'foo' ]
            //			}
            //		]
            //
            else {
                // Extend the original value of attributes like "style" and "class",
                // don't override them.
                if (revertData && domAttrValue && shouldExtend(attrName)) {
                    attrValue.unshift(domAttrValue);
                }
                const value = attrValue
                    // Retrieve "values" from:
                    //
                    //		class: [
                    //			{
                    //				ns: 'abc',
                    //				value: [ ... ]
                    //			}
                    //		]
                    //
                    .map((val) => val ? (val.value || val) : val)
                    // Flatten the array.
                    .reduce((prev, next) => prev.concat(next), [])
                    // Convert into string.
                    .reduce(arrayValueReducer, '');
                if (!isFalsy(value)) {
                    node.setAttributeNS(attrNs, attrName, value);
                }
            }
        }
    }
    /**
     * Renders the `style` attribute of an HTML element based on
     * {@link module:ui/template~Template#attributes}.
     *
     * A style attribute is an {Object} with static values:
     *
     *		attributes: {
     *			style: {
     *				color: 'red'
     *			}
     *		}
     *
     * or values bound to {@link module:ui/model~Model} properties:
     *
     *		attributes: {
     *			style: {
     *				color: bind.to( ... )
     *			}
     *		}
     *
     * Note: The `style` attribute is rendered without setting the namespace. It does not seem to be
     * needed.
     *
     * @private
     * @param {Object} styles Styles located in `attributes.style` of {@link module:ui/template~TemplateDefinition}.
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _renderStyleAttribute(styles, data) {
        const node = data.node;
        for (const styleName in styles) {
            const styleValue = styles[styleName];
            // Cases:
            //
            //		style: {
            //			color: bind.to( 'attribute' )
            //		}
            //
            if (hasTemplateBinding(styleValue)) {
                this._bindToObservable({
                    schema: [styleValue],
                    updater: getStyleUpdater(node, styleName),
                    data
                });
            }
            // Cases:
            //
            //		style: {
            //			color: 'red'
            //		}
            //
            else {
                node.style[styleName] = styleValue;
            }
        }
    }
    /**
     * Recursively renders HTML element's children from {@link module:ui/template~Template#children}.
     *
     * @protected
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _renderElementChildren(data) {
        const node = data.node;
        const container = data.intoFragment ? document.createDocumentFragment() : node;
        const isApplying = data.isApplying;
        let childIndex = 0;
        for (const child of this.children) {
            if (isViewCollection(child)) {
                if (!isApplying) {
                    child.setParent(node);
                    // Note: ViewCollection renders its children.
                    for (const view of child) {
                        container.appendChild(view.element);
                    }
                }
            }
            else if (isView(child)) {
                if (!isApplying) {
                    if (!child.isRendered) {
                        child.render();
                    }
                    container.appendChild(child.element);
                }
            }
            else if ((0,_ckeditor_ckeditor5_utils_src_dom_isnode__WEBPACK_IMPORTED_MODULE_4__["default"])(child)) {
                container.appendChild(child);
            }
            else {
                if (isApplying) {
                    const revertData = data.revertData;
                    const childRevertData = getEmptyRevertData();
                    revertData.children.push(childRevertData);
                    child._renderNode({
                        intoFragment: false,
                        node: container.childNodes[childIndex++],
                        isApplying: true,
                        revertData: childRevertData
                    });
                }
                else {
                    container.appendChild(child.render());
                }
            }
        }
        if (data.intoFragment) {
            node.appendChild(container);
        }
    }
    /**
     * Activates `on` event listeners from the {@link module:ui/template~TemplateDefinition}
     * on an HTML element.
     *
     * @protected
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _setUpListeners(data) {
        if (!this.eventListeners) {
            return;
        }
        for (const key in this.eventListeners) {
            const revertBindings = this.eventListeners[key].map(schemaItem => {
                const [domEvtName, domSelector] = key.split('@');
                return schemaItem.activateDomEventListener(domEvtName, domSelector, data);
            });
            if (data.revertData) {
                data.revertData.bindings.push(revertBindings);
            }
        }
    }
    /**
     * For a given {@link module:ui/template~TemplateValueSchema} containing {@link module:ui/template~TemplateBinding}
     * activates the binding and sets its initial value.
     *
     * Note: {@link module:ui/template~TemplateValueSchema} can be for HTML element attributes or
     * text node `textContent`.
     *
     * @protected
     * @param {Object} options Binding options.
     * @param {module:ui/template~TemplateValueSchema} options.schema
     * @param {Function} options.updater A function which updates the DOM (like attribute or text).
     * @param {module:ui/template~RenderData} options.data Rendering data.
     */
    _bindToObservable({ schema, updater, data }) {
        const revertData = data.revertData;
        // Set initial values.
        syncValueSchemaValue(schema, updater, data);
        const revertBindings = schema
            // Filter "falsy" (false, undefined, null, '') value schema components out.
            .filter(item => !isFalsy(item))
            // Filter inactive bindings from schema, like static strings ('foo'), numbers (42), etc.
            .filter((item) => item.observable)
            // Once only the actual binding are left, let the emitter listen to observable change:attribute event.
            // TODO: Reduce the number of listeners attached as many bindings may listen
            // to the same observable attribute.
            .map(templateBinding => templateBinding.activateAttributeListener(schema, updater, data));
        if (revertData) {
            revertData.bindings.push(revertBindings);
        }
    }
    /**
     * Reverts {@link module:ui/template~RenderData#revertData template data} from a node to
     * return it to the original state.
     *
     * @protected
     * @param {HTMLElement|Text} node A node to be reverted.
     * @param {Object} revertData An object that stores information about what changes have been made by
     * {@link #apply} to the node. See {@link module:ui/template~RenderData#revertData} for more information.
     */
    _revertTemplateFromNode(node, revertData) {
        for (const binding of revertData.bindings) {
            // Each binding may consist of several observable+observable#attribute.
            // like the following has 2:
            //
            //		class: [
            //			'x',
            //			bind.to( 'foo' ),
            //			'y',
            //			bind.to( 'bar' )
            //		]
            //
            for (const revertBinding of binding) {
                revertBinding();
            }
        }
        if (revertData.text) {
            node.textContent = revertData.text;
            return;
        }
        const element = node;
        for (const attrName in revertData.attributes) {
            const attrValue = revertData.attributes[attrName];
            // When the attribute has **not** been set before #apply().
            if (attrValue === null) {
                element.removeAttribute(attrName);
            }
            else {
                element.setAttribute(attrName, attrValue);
            }
        }
        for (let i = 0; i < revertData.children.length; ++i) {
            this._revertTemplateFromNode(element.childNodes[i], revertData.children[i]);
        }
    }
}
/**
 * Describes a binding created by the {@link module:ui/template~Template.bind} interface.
 *
 * @protected
 * @internal
 */
class TemplateBinding {
    /**
     * Creates an instance of the {@link module:ui/template~TemplateBinding} class.
     *
     * @param {module:ui/template~TemplateDefinition} def The definition of the binding.
     */
    constructor(def) {
        this.attribute = def.attribute;
        this.observable = def.observable;
        this.emitter = def.emitter;
        this.callback = def.callback;
        /**
         * An observable instance of the binding. It either:
         *
         * * provides the attribute with the value,
         * * or passes the event when a corresponding DOM event is fired.
         *
         * @member {module:utils/observablemixin~ObservableMixin} module:ui/template~TemplateBinding#observable
         */
        /**
         * An {@link module:utils/emittermixin~Emitter} used by the binding to:
         *
         * * listen to the attribute change in the {@link module:ui/template~TemplateBinding#observable},
         * * or listen to the event in the DOM.
         *
         * @member {module:utils/emittermixin~EmitterMixin} module:ui/template~TemplateBinding#emitter
         */
        /**
         * The name of the {@link module:ui/template~TemplateBinding#observable observed attribute}.
         *
         * @member {String} module:ui/template~TemplateBinding#attribute
         */
        /**
         * A custom function to process the value of the {@link module:ui/template~TemplateBinding#attribute}.
         *
         * @member {Function} [module:ui/template~TemplateBinding#callback]
         */
    }
    /**
     * Returns the value of the binding. It is the value of the {@link module:ui/template~TemplateBinding#attribute} in
     * {@link module:ui/template~TemplateBinding#observable}. The value may be processed by the
     * {@link module:ui/template~TemplateBinding#callback}, if such has been passed to the binding.
     *
     * @param {Node} [node] A native DOM node, passed to the custom {@link module:ui/template~TemplateBinding#callback}.
     * @returns {*} The value of {@link module:ui/template~TemplateBinding#attribute} in
     * {@link module:ui/template~TemplateBinding#observable}.
     */
    getValue(node) {
        const value = this.observable[this.attribute];
        return this.callback ? this.callback(value, node) : value;
    }
    /**
     * Activates the listener which waits for changes of the {@link module:ui/template~TemplateBinding#attribute} in
     * {@link module:ui/template~TemplateBinding#observable}, then updates the DOM with the aggregated
     * value of {@link module:ui/template~TemplateValueSchema}.
     *
     * @param {module:ui/template~TemplateValueSchema} schema A full schema to generate an attribute or text in the DOM.
     * @param {Function} updater A DOM updater function used to update the native DOM attribute or text.
     * @param {module:ui/template~RenderData} data Rendering data.
     * @returns {Function} A function to sever the listener binding.
     */
    activateAttributeListener(schema, updater, data) {
        const callback = () => syncValueSchemaValue(schema, updater, data);
        this.emitter.listenTo(this.observable, `change:${this.attribute}`, callback);
        // Allows revert of the listener.
        return () => {
            this.emitter.stopListening(this.observable, `change:${this.attribute}`, callback);
        };
    }
}
/**
 * Describes either:
 *
 * * a binding to an {@link module:utils/observablemixin~Observable},
 * * or a native DOM event binding.
 *
 * It is created by the {@link module:ui/template~BindChain#to} method.
 *
 * @protected
 * @internal
 */
class TemplateToBinding extends TemplateBinding {
    constructor(def) {
        super(def);
        this.eventNameOrFunction = def.eventNameOrFunction;
    }
    /**
     * Activates the listener for the native DOM event, which when fired, is propagated by
     * the {@link module:ui/template~TemplateBinding#emitter}.
     *
     * @param {String} domEvtName The name of the native DOM event.
     * @param {String} domSelector The selector in the DOM to filter delegated events.
     * @param {module:ui/template~RenderData} data Rendering data.
     * @returns {Function} A function to sever the listener binding.
     */
    activateDomEventListener(domEvtName, domSelector, data) {
        const callback = (evt, domEvt) => {
            if (!domSelector || domEvt.target.matches(domSelector)) {
                if (typeof this.eventNameOrFunction == 'function') {
                    this.eventNameOrFunction(domEvt);
                }
                else {
                    this.observable.fire(this.eventNameOrFunction, domEvt);
                }
            }
        };
        this.emitter.listenTo(data.node, domEvtName, callback);
        // Allows revert of the listener.
        return () => {
            this.emitter.stopListening(data.node, domEvtName, callback);
        };
    }
}
/**
 * Describes a binding to {@link module:utils/observablemixin~ObservableMixin} created by the {@link module:ui/template~BindChain#if}
 * method.
 *
 * @protected
 * @internal
 */
class TemplateIfBinding extends TemplateBinding {
    constructor(def) {
        super(def);
        this.valueIfTrue = def.valueIfTrue;
    }
    /**
     * @inheritDoc
     */
    getValue(node) {
        const value = super.getValue(node);
        return isFalsy(value) ? false : (this.valueIfTrue || true);
    }
}
// Checks whether given {@link module:ui/template~TemplateValueSchema} contains a
// {@link module:ui/template~TemplateBinding}.
//
// @param {module:ui/template~TemplateValueSchema} schema
// @returns {Boolean}
function hasTemplateBinding(schema) {
    if (!schema) {
        return false;
    }
    // Normalize attributes with additional data like namespace:
    //
    //		class: {
    //			ns: 'abc',
    //			value: [ ... ]
    //		}
    //
    if (schema.value) {
        schema = schema.value;
    }
    if (Array.isArray(schema)) {
        return schema.some(hasTemplateBinding);
    }
    else if (schema instanceof TemplateBinding) {
        return true;
    }
    return false;
}
// Assembles the value using {@link module:ui/template~TemplateValueSchema} and stores it in a form of
// an Array. Each entry of the Array corresponds to one of {@link module:ui/template~TemplateValueSchema}
// items.
//
// @param {module:ui/template~TemplateValueSchema} schema
// @param {Node} node DOM Node updated when {@link module:utils/observablemixin~ObservableMixin} changes.
// @returns {Array}
function getValueSchemaValue(schema, node) {
    return schema.map(schemaItem => {
        // Process {@link module:ui/template~TemplateBinding} bindings.
        if (schemaItem instanceof TemplateBinding) {
            return schemaItem.getValue(node);
        }
        // All static values like strings, numbers, and "falsy" values (false, null, undefined, '', etc.) just pass.
        return schemaItem;
    });
}
// A function executed each time the bound Observable attribute changes, which updates the DOM with a value
// constructed from {@link module:ui/template~TemplateValueSchema}.
//
// @param {module:ui/template~TemplateValueSchema} schema
// @param {Function} updater A function which updates the DOM (like attribute or text).
// @param {Node} node DOM Node updated when {@link module:utils/observablemixin~ObservableMixin} changes.
function syncValueSchemaValue(schema, updater, { node }) {
    const values = getValueSchemaValue(schema, node);
    let value;
    // Check if schema is a single Template.bind.if, like:
    //
    //		class: Template.bind.if( 'foo' )
    //
    if (schema.length == 1 && schema[0] instanceof TemplateIfBinding) {
        value = values[0];
    }
    else {
        value = values.reduce(arrayValueReducer, '');
    }
    if (isFalsy(value)) {
        updater.remove();
    }
    else {
        updater.set(value);
    }
}
// Returns an object consisting of `set` and `remove` functions, which
// can be used in the context of DOM Node to set or reset `textContent`.
// @see module:ui/view~View#_bindToObservable
//
// @param {Node} node DOM Node to be modified.
// @returns {Object}
function getTextUpdater(node) {
    return {
        set(value) {
            node.textContent = value;
        },
        remove() {
            node.textContent = '';
        }
    };
}
// Returns an object consisting of `set` and `remove` functions, which
// can be used in the context of DOM Node to set or reset an attribute.
// @see module:ui/view~View#_bindToObservable
//
// @param {Node} node DOM Node to be modified.
// @param {String} attrName Name of the attribute to be modified.
// @param {String} [ns=null] Namespace to use.
// @returns {Object}
function getAttributeUpdater(el, attrName, ns) {
    return {
        set(value) {
            el.setAttributeNS(ns, attrName, value);
        },
        remove() {
            el.removeAttributeNS(ns, attrName);
        }
    };
}
// Returns an object consisting of `set` and `remove` functions, which
// can be used in the context of CSSStyleDeclaration to set or remove a style.
// @see module:ui/view~View#_bindToObservable
//
// @param {Node} node DOM Node to be modified.
// @param {String} styleName Name of the style to be modified.
// @returns {Object}
function getStyleUpdater(el, styleName) {
    return {
        set(value) {
            el.style[styleName] = value;
        },
        remove() {
            el.style[styleName] = null;
        }
    };
}
// Clones definition of the template.
//
// @param {module:ui/template~TemplateDefinition} def
// @returns {module:ui/template~TemplateDefinition}
function clone(def) {
    const clone = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(def, value => {
        // Don't clone the `Template.bind`* bindings because of the references to Observable
        // and DomEmitterMixin instances inside, which would also be traversed and cloned by greedy
        // cloneDeepWith algorithm. There's no point in cloning Observable/DomEmitterMixins
        // along with the definition.
        //
        // Don't clone Template instances if provided as a child. They're simply #render()ed
        // and nothing should interfere.
        //
        // Also don't clone View instances if provided as a child of the Template. The template
        // instance will be extracted from the View during the normalization and there's no need
        // to clone it.
        if (value && (value instanceof TemplateBinding || isTemplate(value) || isView(value) || isViewCollection(value))) {
            return value;
        }
    });
    return clone;
}
// Normalizes given {@link module:ui/template~TemplateDefinition}.
//
// See:
//  * {@link normalizeAttributes}
//  * {@link normalizeListeners}
//  * {@link normalizePlainTextDefinition}
//  * {@link normalizeTextDefinition}
//
// @param {module:ui/template~TemplateDefinition} def
// @returns {module:ui/template~TemplateDefinition} Normalized definition.
function normalize(def) {
    if (typeof def == 'string') {
        def = normalizePlainTextDefinition(def);
    }
    else if (def.text) {
        normalizeTextDefinition(def);
    }
    if (def.on) {
        def.eventListeners = normalizeListeners(def.on);
        // Template mixes EmitterMixin, so delete #on to avoid collision.
        delete def.on;
    }
    if (!def.text) {
        if (def.attributes) {
            normalizeAttributes(def.attributes);
        }
        const children = [];
        if (def.children) {
            if (isViewCollection(def.children)) {
                children.push(def.children);
            }
            else {
                for (const child of def.children) {
                    if (isTemplate(child) || isView(child) || (0,_ckeditor_ckeditor5_utils_src_dom_isnode__WEBPACK_IMPORTED_MODULE_4__["default"])(child)) {
                        children.push(child);
                    }
                    else {
                        children.push(new Template(child));
                    }
                }
            }
        }
        def.children = children;
    }
    return def;
}
// Normalizes "attributes" section of {@link module:ui/template~TemplateDefinition}.
//
//		attributes: {
//			a: 'bar',
//			b: {@link module:ui/template~TemplateBinding},
//			c: {
//				value: 'bar'
//			}
//		}
//
// becomes
//
//		attributes: {
//			a: [ 'bar' ],
//			b: [ {@link module:ui/template~TemplateBinding} ],
//			c: {
//				value: [ 'bar' ]
//			}
//		}
//
// @param {Object} attributes
function normalizeAttributes(attributes) {
    for (const a in attributes) {
        if (attributes[a].value) {
            attributes[a].value = (0,_ckeditor_ckeditor5_utils_src_toarray__WEBPACK_IMPORTED_MODULE_5__["default"])(attributes[a].value);
        }
        arrayify(attributes, a);
    }
}
// Normalizes "on" section of {@link module:ui/template~TemplateDefinition}.
//
//		on: {
//			a: 'bar',
//			b: {@link module:ui/template~TemplateBinding},
//			c: [ {@link module:ui/template~TemplateBinding}, () => { ... } ]
//		}
//
// becomes
//
//		on: {
//			a: [ 'bar' ],
//			b: [ {@link module:ui/template~TemplateBinding} ],
//			c: [ {@link module:ui/template~TemplateBinding}, () => { ... } ]
//		}
//
// @param {Object} listeners
// @returns {Object} Object containing normalized listeners.
function normalizeListeners(listeners) {
    for (const l in listeners) {
        arrayify(listeners, l);
    }
    return listeners;
}
// Normalizes "string" {@link module:ui/template~TemplateDefinition}.
//
//		"foo"
//
// becomes
//
//		{ text: [ 'foo' ] },
//
// @param {String} def
// @returns {module:ui/template~TemplateDefinition} Normalized template definition.
function normalizePlainTextDefinition(def) {
    return {
        text: [def]
    };
}
// Normalizes text {@link module:ui/template~TemplateDefinition}.
//
//		children: [
//			{ text: 'def' },
//			{ text: {@link module:ui/template~TemplateBinding} }
//		]
//
// becomes
//
//		children: [
//			{ text: [ 'def' ] },
//			{ text: [ {@link module:ui/template~TemplateBinding} ] }
//		]
//
// @param {module:ui/template~TemplateDefinition} def
function normalizeTextDefinition(def) {
    def.text = (0,_ckeditor_ckeditor5_utils_src_toarray__WEBPACK_IMPORTED_MODULE_5__["default"])(def.text);
}
// Wraps an entry in Object in an Array, if not already one.
//
//		{
//			x: 'y',
//			a: [ 'b' ]
//		}
//
// becomes
//
//		{
//			x: [ 'y' ],
//			a: [ 'b' ]
//		}
//
// @param {Object} obj
// @param {String} key
function arrayify(obj, key) {
    obj[key] = (0,_ckeditor_ckeditor5_utils_src_toarray__WEBPACK_IMPORTED_MODULE_5__["default"])(obj[key]);
}
// A helper which concatenates the value avoiding unwanted
// leading white spaces.
//
// @param {String} prev
// @param {String} cur
// @returns {String}
function arrayValueReducer(prev, cur) {
    if (isFalsy(cur)) {
        return prev;
    }
    else if (isFalsy(prev)) {
        return cur;
    }
    else {
        return `${prev} ${cur}`;
    }
}
// Extends one object defined in the following format:
//
//		{
//			key1: [Array1],
//			key2: [Array2],
//			...
//			keyN: [ArrayN]
//		}
//
// with another object of the same data format.
//
// @param {Object} obj Base object.
// @param {Object} ext Object extending base.
// @returns {String}
function extendObjectValueArray(obj, ext) {
    for (const a in ext) {
        if (obj[a]) {
            obj[a].push(...ext[a]);
        }
        else {
            obj[a] = ext[a];
        }
    }
}
// A helper for {@link module:ui/template~Template#extend}. Recursively extends {@link module:ui/template~Template} instance
// with content from {@link module:ui/template~TemplateDefinition}. See {@link module:ui/template~Template#extend} to learn more.
//
// @param {module:ui/template~Template} def A template instance to be extended.
// @param {module:ui/template~TemplateDefinition} def A definition which is to extend the template instance.
// @param {Object} Error context.
function extendTemplate(template, def) {
    if (def.attributes) {
        if (!template.attributes) {
            template.attributes = {};
        }
        extendObjectValueArray(template.attributes, def.attributes);
    }
    if (def.eventListeners) {
        if (!template.eventListeners) {
            template.eventListeners = {};
        }
        extendObjectValueArray(template.eventListeners, def.eventListeners);
    }
    if (def.text) {
        template.text.push(...def.text);
    }
    if (def.children && def.children.length) {
        if (template.children.length != def.children.length) {
            /**
             * The number of children in extended definition does not match.
             *
             * @error ui-template-extend-children-mismatch
             */
            throw new _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"]('ui-template-extend-children-mismatch', template);
        }
        let childIndex = 0;
        for (const childDef of def.children) {
            extendTemplate(template.children[childIndex++], childDef);
        }
    }
}
// Checks if value is "falsy".
// Note: 0 (Number) is not "falsy" in this context.
//
// @private
// @param {*} value Value to be checked.
function isFalsy(value) {
    return !value && value !== 0;
}
// Checks if the item is an instance of {@link module:ui/view~View}
//
// @private
// @param {*} value Value to be checked.
function isView(item) {
    return item instanceof _view__WEBPACK_IMPORTED_MODULE_2__["default"];
}
// Checks if the item is an instance of {@link module:ui/template~Template}
//
// @private
// @param {*} value Value to be checked.
function isTemplate(item) {
    return item instanceof Template;
}
// Checks if the item is an instance of {@link module:ui/viewcollection~ViewCollection}
//
// @private
// @param {*} value Value to be checked.
function isViewCollection(item) {
    return item instanceof _viewcollection__WEBPACK_IMPORTED_MODULE_3__["default"];
}
// Checks if value array contains the one with namespace.
function isNamespaced(attrValue) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(attrValue[0]) && attrValue[0].ns;
}
// Creates an empty skeleton for {@link module:ui/template~Template#revert}
// data.
//
// @private
function getEmptyRevertData() {
    return {
        children: [],
        bindings: [],
        attributes: {}
    };
}
// Checks whether an attribute should be extended when
// {@link module:ui/template~Template#apply} is called.
//
// @private
// @param {String} attrName Attribute name to check.
function shouldExtend(attrName) {
    return attrName == 'class' || attrName == 'style';
}
/**
 * Tells {@link module:ui/template~Template#_renderNode} to render
 * children into `DocumentFragment` first and then append the fragment
 * to the parent element. It is a speed optimization.
 *
 * @member {Boolean} #intoFragment
 */
/**
 * A node which is being rendered.
 *
 * @member {HTMLElement|Text} #node
 */
/**
 * Indicates whether the {@module:ui/template~RenderNodeOptions#node} has
 * been provided by {@module:ui/template~Template#apply}.
 *
 * @member {Boolean} #isApplying
 */
/**
 * An object storing the data that helps {@module:ui/template~Template#revert}
 * bringing back an element to its initial state, i.e. before
 * {@module:ui/template~Template#apply} was called.
 *
 * @member {Object} #revertData
 */


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/src/view.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/src/view.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/* harmony import */ var _viewcollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewcollection */ "./node_modules/@ckeditor/ckeditor5-ui/src/viewcollection.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template */ "./node_modules/@ckeditor/ckeditor5-ui/src/template.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_dom_emittermixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/dom/emittermixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/emittermixin.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_observablemixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/observablemixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/collection */ "./node_modules/@ckeditor/ckeditor5-utils/src/collection.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_isiterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/isiterable */ "./node_modules/@ckeditor/ckeditor5-utils/src/isiterable.js");
/* harmony import */ var _theme_globals_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/globals/globals.css */ "./node_modules/@ckeditor/ckeditor5-ui/theme/globals/globals.css");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* eslint-disable @typescript-eslint/no-invalid-void-type, new-cap */
/**
 * @module ui/view
 */








/**
 * The basic view class, which represents an HTML element created out of a
 * {@link module:ui/view~View#template}. Views are building blocks of the user interface and handle
 * interaction
 *
 * Views {@link module:ui/view~View#registerChild aggregate} children in
 * {@link module:ui/view~View#createCollection collections} and manage the life cycle of DOM
 * listeners e.g. by handling rendering and destruction.
 *
 * See the {@link module:ui/template~TemplateDefinition} syntax to learn more about shaping view
 * elements, attributes and listeners.
 *
 *		class SampleView extends View {
 *			constructor( locale ) {
 *				super( locale );
 *
 *				const bind = this.bindTemplate;
 *
 *				// Views define their interface (state) using observable attributes.
 *				this.set( 'elementClass', 'bar' );
 *
 *				this.setTemplate( {
 *					tag: 'p',
 *
 *					// The element of the view can be defined with its children.
 *					children: [
 *						'Hello',
 *						{
 *							tag: 'b',
 *							children: [ 'world!' ]
 *						}
 *					],
 *					attributes: {
 *						class: [
 *							'foo',
 *
 *							// Observable attributes control the state of the view in DOM.
 *							bind.to( 'elementClass' )
 *						]
 *					},
 *					on: {
 *						// Views listen to DOM events and propagate them.
 *						click: bind.to( 'clicked' )
 *					}
 *				} );
 *			}
 *		}
 *
 *		const view = new SampleView( locale );
 *
 *		view.render();
 *
 *		// Append <p class="foo bar">Hello<b>world</b></p> to the <body>
 *		document.body.appendChild( view.element );
 *
 *		// Change the class attribute to <p class="foo baz">Hello<b>world</b></p>
 *		view.elementClass = 'baz';
 *
 *		// Respond to the "click" event in DOM by executing a custom action.
 *		view.on( 'clicked', () => {
 *			console.log( 'The view has been clicked!' );
 *		} );
 *
 * @mixes module:utils/observablemixin~ObservableMixin
 */
class View extends (0,_ckeditor_ckeditor5_utils_src_dom_emittermixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_ckeditor_ckeditor5_utils_src_observablemixin__WEBPACK_IMPORTED_MODULE_4__.Observable) {
    /**
     * Creates an instance of the {@link module:ui/view~View} class.
     *
     * Also see {@link #render}.
     *
     * @param {module:utils/locale~Locale} [locale] The localization services instance.
     */
    constructor(locale) {
        super();
        /**
         * An HTML element of the view. `null` until {@link #render rendered}
         * from the {@link #template}.
         *
         *		class SampleView extends View {
         *			constructor() {
         *				super();
         *
         *				// A template instance the #element will be created from.
         *				this.setTemplate( {
         *					tag: 'p'
         *
         *					// ...
         *				} );
         *			}
         *		}
         *
         *		const view = new SampleView();
         *
         *		// Renders the #template.
         *		view.render();
         *
         *		// Append the HTML element of the view to <body>.
         *		document.body.appendChild( view.element );
         *
         * **Note**: The element of the view can also be assigned directly:
         *
         *		view.element = document.querySelector( '#my-container' );
         *
         * @member {HTMLElement}
         */
        this.element = null;
        /**
         * Set `true` when the view has already been {@link module:ui/view~View#render rendered}.
         *
         * @readonly
         * @member {Boolean} #isRendered
         */
        this.isRendered = false;
        /**
         * A set of tools to localize the user interface.
         *
         * Also see {@link module:core/editor/editor~Editor#locale}.
         *
         * @readonly
         * @member {module:utils/locale~Locale}
         */
        this.locale = locale;
        /**
         * Shorthand for {@link module:utils/locale~Locale#t}.
         *
         * Note: If {@link #locale} instance hasn't been passed to the view this method may not
         * be available.
         *
         * @see module:utils/locale~Locale#t
         * @method
         */
        this.t = locale && locale.t;
        /**
         * Collections registered with {@link #createCollection}.
         *
         * @protected
         * @member {Set.<module:ui/viewcollection~ViewCollection>}
         */
        this._viewCollections = new _ckeditor_ckeditor5_utils_src_collection__WEBPACK_IMPORTED_MODULE_5__["default"]();
        /**
         * A collection of view instances, which have been added directly
         * into the {@link module:ui/template~Template#children}.
         *
         * @protected
         * @member {module:ui/viewcollection~ViewCollection}
         */
        this._unboundChildren = this.createCollection();
        // Pass parent locale to its children.
        this._viewCollections.on('add', (evt, collection) => {
            collection.locale = locale;
            collection.t = locale && locale.t;
        });
        /**
         * Template of this view. It provides the {@link #element} representing
         * the view in DOM, which is {@link #render rendered}.
         *
         * @member {module:ui/template~Template} #template
         */
        /**
         * Cached {@link module:ui/template~BindChain bind chain} object created by the
         * {@link #template}. See {@link #bindTemplate}.
         *
         * @private
         * @member {Object} #_bindTemplate
         */
        this.decorate('render');
    }
    /**
     * Shorthand for {@link module:ui/template~Template.bind}, a binding
     * {@link module:ui/template~BindChain interface} pre–configured for the view instance.
     *
     * It provides {@link module:ui/template~BindChain#to `to()`} and
     * {@link module:ui/template~BindChain#if `if()`} methods that initialize bindings with
     * observable attributes and attach DOM listeners.
     *
     *		class SampleView extends View {
     *			constructor( locale ) {
     *				super( locale );
     *
     *				const bind = this.bindTemplate;
     *
     *				// These {@link module:utils/observablemixin~Observable observable} attributes will control
     *				// the state of the view in DOM.
     *				this.set( {
     *					elementClass: 'foo',
     *				 	isEnabled: true
     *				 } );
     *
     *				this.setTemplate( {
     *					tag: 'p',
     *
     *					attributes: {
     *						// The class HTML attribute will follow elementClass
     *						// and isEnabled view attributes.
     *						class: [
     *							bind.to( 'elementClass' )
     *							bind.if( 'isEnabled', 'present-when-enabled' )
     *						]
     *					},
     *
     *					on: {
     *						// The view will fire the "clicked" event upon clicking <p> in DOM.
     *						click: bind.to( 'clicked' )
     *					}
     *				} );
     *			}
     *		}
     *
     * @method #bindTemplate
     */
    get bindTemplate() {
        if (this._bindTemplate) {
            return this._bindTemplate;
        }
        return (this._bindTemplate = _template__WEBPACK_IMPORTED_MODULE_2__["default"].bind(this, this));
    }
    /**
     * Creates a new collection of views, which can be used as
     * {@link module:ui/template~Template#children} of this view.
     *
     *		class SampleView extends View {
     *			constructor( locale ) {
     *				super( locale );
     *
     *				const child = new ChildView( locale );
     *				this.items = this.createCollection( [ child ] );
     *
     *				this.setTemplate( {
     *					tag: 'p',
     *
     *					// `items` collection will render here.
     *					children: this.items
     *				} );
     *			}
     *		}
     *
     *		const view = new SampleView( locale );
     *		view.render();
     *
     *		// It will append <p><child#element></p> to the <body>.
     *		document.body.appendChild( view.element );
     *
     * @param {Iterable.<module:ui/view~View>} [views] Initial views of the collection.
     * @returns {module:ui/viewcollection~ViewCollection} A new collection of view instances.
     */
    createCollection(views) {
        const collection = new _viewcollection__WEBPACK_IMPORTED_MODULE_1__["default"](views);
        this._viewCollections.add(collection);
        return collection;
    }
    /**
     * Registers a new child view under the view instance. Once registered, a child
     * view is managed by its parent, including {@link #render rendering}
     * and {@link #destroy destruction}.
     *
     * To revert this, use {@link #deregisterChild}.
     *
     *		class SampleView extends View {
     *			constructor( locale ) {
     *				super( locale );
     *
     *				this.childA = new SomeChildView( locale );
     *				this.childB = new SomeChildView( locale );
     *
     *				this.setTemplate( { tag: 'p' } );
     *
     *				// Register the children.
     *				this.registerChild( [ this.childA, this.childB ] );
     *			}
     *
     *			render() {
     *				super.render();
     *
     *				this.element.appendChild( this.childA.element );
     *				this.element.appendChild( this.childB.element );
     *			}
     *		}
     *
     *		const view = new SampleView( locale );
     *
     *		view.render();
     *
     *		// Will append <p><childA#element><b></b><childB#element></p>.
     *		document.body.appendChild( view.element );
     *
     * **Note**: There's no need to add child views if they're already referenced in the
     * {@link #template}:
     *
     *		class SampleView extends View {
     *			constructor( locale ) {
     *				super( locale );
     *
     *				this.childA = new SomeChildView( locale );
     *				this.childB = new SomeChildView( locale );
     *
     *				this.setTemplate( {
     *					tag: 'p',
     *
     *					// These children will be added automatically. There's no
     *					// need to call {@link #registerChild} for any of them.
     *					children: [ this.childA, this.childB ]
     *				} );
     *			}
     *
     *			// ...
     *		}
     *
     * @param {module:ui/view~View|Iterable.<module:ui/view~View>} children Children views to be registered.
     */
    registerChild(children) {
        if (!(0,_ckeditor_ckeditor5_utils_src_isiterable__WEBPACK_IMPORTED_MODULE_6__["default"])(children)) {
            children = [children];
        }
        for (const child of children) {
            this._unboundChildren.add(child);
        }
    }
    /**
     * The opposite of {@link #registerChild}. Removes a child view from this view instance.
     * Once removed, the child is no longer managed by its parent, e.g. it can safely
     * become a child of another parent view.
     *
     * @see #registerChild
     * @param {module:ui/view~View|Iterable.<module:ui/view~View>} children Child views to be removed.
     */
    deregisterChild(children) {
        if (!(0,_ckeditor_ckeditor5_utils_src_isiterable__WEBPACK_IMPORTED_MODULE_6__["default"])(children)) {
            children = [children];
        }
        for (const child of children) {
            this._unboundChildren.remove(child);
        }
    }
    /**
     * Sets the {@link #template} of the view with with given definition.
     *
     * A shorthand for:
     *
     *		view.setTemplate( definition );
     *
     * @param {module:ui/template~TemplateDefinition} definition Definition of view's template.
     */
    setTemplate(definition) {
        this.template = new _template__WEBPACK_IMPORTED_MODULE_2__["default"](definition);
    }
    /**
     * {@link module:ui/template~Template.extend Extends} the {@link #template} of the view with
     * with given definition.
     *
     * A shorthand for:
     *
     *		Template.extend( view.template, definition );
     *
     * **Note**: Is requires the {@link #template} to be already set. See {@link #setTemplate}.
     *
     * @param {module:ui/template~TemplateDefinition} definition Definition which
     * extends the {@link #template}.
     */
    extendTemplate(definition) {
        _template__WEBPACK_IMPORTED_MODULE_2__["default"].extend(this.template, definition);
    }
    /**
     * Recursively renders the view.
     *
     * Once the view is rendered:
     * * the {@link #element} becomes an HTML element out of {@link #template},
     * * the {@link #isRendered} flag is set `true`.
     *
     * **Note**: The children of the view:
     * * defined directly in the {@link #template}
     * * residing in collections created by the {@link #createCollection} method,
     * * and added by {@link #registerChild}
     * are also rendered in the process.
     *
     * In general, `render()` method is the right place to keep the code which refers to the
     * {@link #element} and should be executed at the very beginning of the view's life cycle.
     *
     * It is possible to {@link module:ui/template~Template.extend} the {@link #template} before
     * the view is rendered. To allow an early customization of the view (e.g. by its parent),
     * such references should be done in `render()`.
     *
     *		class SampleView extends View {
     *			constructor() {
     *				this.setTemplate( {
     *					// ...
     *				} );
     *			},
     *
     *			render() {
     *				// View#element becomes available.
     *				super.render();
     *
     *				// The "scroll" listener depends on #element.
     *				this.listenTo( window, 'scroll', () => {
     *					// A reference to #element would render the #template and make it non-extendable.
     *					if ( window.scrollY > 0 ) {
     *						this.element.scrollLeft = 100;
     *					} else {
     *						this.element.scrollLeft = 0;
     *					}
     *				} );
     *			}
     *		}
     *
     *		const view = new SampleView();
     *
     *		// Let's customize the view before it gets rendered.
     *		view.extendTemplate( {
     *			attributes: {
     *				class: [
     *					'additional-class'
     *				]
     *			}
     *		} );
     *
     *		// Late rendering allows customization of the view.
     *		view.render();
     */
    render() {
        if (this.isRendered) {
            /**
             * This View has already been rendered.
             *
             * @error ui-view-render-already-rendered
             */
            throw new _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"]('ui-view-render-already-rendered', this);
        }
        // Render #element of the view.
        if (this.template) {
            this.element = this.template.render();
            // Auto–register view children from #template.
            this.registerChild(this.template.getViews());
        }
        this.isRendered = true;
    }
    /**
     * Recursively destroys the view instance and child views added by {@link #registerChild} and
     * residing in collections created by the {@link #createCollection}.
     *
     * Destruction disables all event listeners:
     * * created on the view, e.g. `view.on( 'event', () => {} )`,
     * * defined in the {@link #template} for DOM events.
     */
    destroy() {
        this.stopListening();
        this._viewCollections.map(c => c.destroy());
        // Template isn't obligatory for views.
        if (this.template && this.template._revertData) {
            this.template.revert(this.element);
        }
    }
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/src/viewcollection.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/src/viewcollection.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewCollection)
/* harmony export */ });
/* harmony import */ var _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/collection */ "./node_modules/@ckeditor/ckeditor5-utils/src/collection.js");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module ui/viewcollection
 */


/**
 * Collects {@link module:ui/view~View} instances.
 *
 *		const parentView = new ParentView( locale );
 *		const collection = new ViewCollection( locale );
 *
 *		collection.setParent( parentView.element );
 *
 *		const viewA = new ChildView( locale );
 *		const viewB = new ChildView( locale );
 *
 * View collection renders and manages view {@link module:ui/view~View#element elements}:
 *
 *		collection.add( viewA );
 *		collection.add( viewB );
 *
 *		console.log( parentView.element.firsChild ); // -> viewA.element
 *		console.log( parentView.element.lastChild ); // -> viewB.element
 *
 * It {@link module:ui/viewcollection~ViewCollection#delegate propagates} DOM events too:
 *
 *		// Delegate #click and #keydown events from viewA and viewB to the parentView.
 *		collection.delegate( 'click' ).to( parentView );
 *
 *		parentView.on( 'click', ( evt ) => {
 *			console.log( `${ evt.source } has been clicked.` );
 *		} );
 *
 *		// This event will be delegated to the parentView.
 *		viewB.fire( 'click' );
 *
 * **Note**: A view collection can be used directly in the {@link module:ui/template~TemplateDefinition definition}
 * of a {@link module:ui/template~Template template}.
 *
 * @extends module:utils/collection~Collection
 * @mixes module:utils/observablemixin~ObservableMixin
 */
class ViewCollection extends _ckeditor_ckeditor5_utils_src_collection__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Creates a new instance of the {@link module:ui/viewcollection~ViewCollection}.
     *
     * @param {Iterable.<module:ui/view~View>} [initialItems] The initial items of the collection.
     */
    constructor(initialItems = []) {
        super(initialItems, {
            // An #id Number attribute should be legal and not break the `ViewCollection` instance.
            // https://github.com/ckeditor/ckeditor5-ui/issues/93
            idProperty: 'viewUid'
        });
        // Handle {@link module:ui/view~View#element} in DOM when a new view is added to the collection.
        this.on('add', (evt, view, index) => {
            this._renderViewIntoCollectionParent(view, index);
        });
        // Handle {@link module:ui/view~View#element} in DOM when a view is removed from the collection.
        this.on('remove', (evt, view) => {
            if (view.element && this._parentElement) {
                view.element.remove();
            }
        });
        /**
         * A parent element within which child views are rendered and managed in DOM.
         *
         * @protected
         * @member {HTMLElement}
         */
        this._parentElement = null;
    }
    /**
     * Destroys the view collection along with child views.
     * See the view {@link module:ui/view~View#destroy} method.
     */
    destroy() {
        this.map(view => view.destroy());
    }
    /**
     * Sets the parent HTML element of this collection. When parent is set, {@link #add adding} and
     * {@link #remove removing} views in the collection synchronizes their
     * {@link module:ui/view~View#element elements} in the parent element.
     *
     * @param {HTMLElement} element A new parent element.
     */
    setParent(elementOrDocFragment) {
        this._parentElement = elementOrDocFragment;
        // Take care of the initial collection items passed to the constructor.
        for (const view of this) {
            this._renderViewIntoCollectionParent(view);
        }
    }
    /**
     * Delegates selected events coming from within views in the collection to any
     * {@link module:utils/emittermixin~Emitter}.
     *
     * For the following views and collection:
     *
     *		const viewA = new View();
     *		const viewB = new View();
     *		const viewC = new View();
     *
     *		const views = parentView.createCollection();
     *
     *		views.delegate( 'eventX' ).to( viewB );
     *		views.delegate( 'eventX', 'eventY' ).to( viewC );
     *
     *		views.add( viewA );
     *
     * the `eventX` is delegated (fired by) `viewB` and `viewC` along with `customData`:
     *
     *		viewA.fire( 'eventX', customData );
     *
     * and `eventY` is delegated (fired by) `viewC` along with `customData`:
     *
     *		viewA.fire( 'eventY', customData );
     *
     * See {@link module:utils/emittermixin~Emitter#delegate}.
     *
     * @param {...String} events {@link module:ui/view~View} event names to be delegated to another
     * {@link module:utils/emittermixin~Emitter}.
     * @returns {Object}
     * @returns {Function} return.to A function which accepts the destination of
     * {@link module:utils/emittermixin~Emitter#delegate delegated} events.
     */
    delegate(...events) {
        if (!events.length || !isStringArray(events)) {
            /**
             * All event names must be strings.
             *
             * @error ui-viewcollection-delegate-wrong-events
             */
            throw new _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"]('ui-viewcollection-delegate-wrong-events', this);
        }
        return {
            /**
             * Selects destination for {@link module:utils/emittermixin~Emitter#delegate} events.
             *
             * @memberOf module:ui/viewcollection~ViewCollection#delegate
             * @function module:ui/viewcollection~ViewCollection#delegate.to
             * @param {module:utils/emittermixin~Emitter} dest An `Emitter` instance which is
             * the destination for delegated events.
             */
            to: dest => {
                // Activate delegating on existing views in this collection.
                for (const view of this) {
                    for (const evtName of events) {
                        view.delegate(evtName).to(dest);
                    }
                }
                // Activate delegating on future views in this collection.
                this.on('add', (evt, view) => {
                    for (const evtName of events) {
                        view.delegate(evtName).to(dest);
                    }
                });
                // Deactivate delegating when view is removed from this collection.
                this.on('remove', (evt, view) => {
                    for (const evtName of events) {
                        view.stopDelegating(evtName, dest);
                    }
                });
            }
        };
    }
    /**
     * This method {@link module:ui/view~View#render renders} a new view added to the collection.
     *
     * If the {@link #_parentElement parent element} of the collection is set, this method also adds
     * the view's {@link module:ui/view~View#element} as a child of the parent in DOM at a specified index.
     *
     * **Note**: If index is not specified, the view's element is pushed as the last child
     * of the parent element.
     *
     * @private
     * @param {module:ui/view~View} view A new view added to the collection.
     * @param {Number} [index] An index the view holds in the collection. When not specified,
     * the view is added at the end.
     */
    _renderViewIntoCollectionParent(view, index) {
        if (!view.isRendered) {
            view.render();
        }
        if (view.element && this._parentElement) {
            this._parentElement.insertBefore(view.element, this._parentElement.children[index]);
        }
    }
}
// Check if all entries of the array are of `String` type.
//
// @private
// @param {Array} arr An array to be checked.
// @returns {Boolean}
function isStringArray(arr) {
    return arr.every(a => typeof a == 'string');
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOCUMENTATION_URL": () => (/* binding */ DOCUMENTATION_URL),
/* harmony export */   "default": () => (/* binding */ CKEditorError),
/* harmony export */   "logError": () => (/* binding */ logError),
/* harmony export */   "logWarning": () => (/* binding */ logWarning)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/ckeditorerror
 */
/* globals console */
/**
 * URL to the documentation with error codes.
 */
const DOCUMENTATION_URL = 'https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html';
/**
 * The CKEditor error class.
 *
 * You should throw `CKEditorError` when:
 *
 * * An unexpected situation occurred and the editor (most probably) will not work properly. Such exception will be handled
 * by the {@link module:watchdog/watchdog~Watchdog watchdog} (if it is integrated),
 * * If the editor is incorrectly integrated or the editor API is used in the wrong way. This way you will give
 * feedback to the developer as soon as possible. Keep in mind that for common integration issues which should not
 * stop editor initialization (like missing upload adapter, wrong name of a toolbar component) we use
 * {@link module:utils/ckeditorerror~logWarning `logWarning()`} and
 * {@link module:utils/ckeditorerror~logError `logError()`}
 * to improve developers experience and let them see the a working editor as soon as possible.
 *
 *		/**
 *		 * Error thrown when a plugin cannot be loaded due to JavaScript errors, lack of plugins with a given name, etc.
 *		 *
 *		 * @error plugin-load
 *		 * @param pluginName The name of the plugin that could not be loaded.
 *		 * @param moduleName The name of the module which tried to load this plugin.
 *		 * /
 *		throw new CKEditorError( 'plugin-load', {
 *			pluginName: 'foo',
 *			moduleName: 'bar'
 *		} );
 *
 * @extends Error
 */
class CKEditorError extends Error {
    /**
     * Creates an instance of the CKEditorError class.
     *
     * @param {String} errorName The error id in an `error-name` format. A link to this error documentation page will be added
     * to the thrown error's `message`.
     * @param {Object|null} context A context of the error by which the {@link module:watchdog/watchdog~Watchdog watchdog}
     * is able to determine which editor crashed. It should be an editor instance or a property connected to it. It can be also
     * a `null` value if the editor should not be restarted in case of the error (e.g. during the editor initialization).
     * The error context should be checked using the `areConnectedThroughProperties( editor, context )` utility
     * to check if the object works as the context.
     * @param {Object} [data] Additional data describing the error. A stringified version of this object
     * will be appended to the error message, so the data are quickly visible in the console. The original
     * data object will also be later available under the {@link #data} property.
     */
    constructor(errorName, context, data) {
        super(getErrorMessage(errorName, data));
        /**
         * @type {String}
         */
        this.name = 'CKEditorError';
        /**
         * A context of the error by which the Watchdog is able to determine which editor crashed.
         *
         * @type {Object|null}
         */
        this.context = context;
        /**
         * The additional error data passed to the constructor. Undefined if none was passed.
         *
         * @type {Object|undefined}
         */
        this.data = data;
    }
    /**
     * Checks if the error is of the `CKEditorError` type.
     * @returns {Boolean}
     */
    is(type) {
        return type === 'CKEditorError';
    }
    /**
     * A utility that ensures that the thrown error is a {@link module:utils/ckeditorerror~CKEditorError} one.
     * It is useful when combined with the {@link module:watchdog/watchdog~Watchdog} feature, which can restart the editor in case
     * of a {@link module:utils/ckeditorerror~CKEditorError} error.
     *
     * @static
     * @param {Error} err The error to rethrow.
     * @param {Object} context An object connected through properties with the editor instance. This context will be used
     * by the watchdog to verify which editor should be restarted.
     */
    static rethrowUnexpectedError(err, context) {
        if (err.is && err.is('CKEditorError')) {
            throw err;
        }
        /**
         * An unexpected error occurred inside the CKEditor 5 codebase. This error will look like the original one
         * to make the debugging easier.
         *
         * This error is only useful when the editor is initialized using the {@link module:watchdog/watchdog~Watchdog} feature.
         * In case of such error (or any {@link module:utils/ckeditorerror~CKEditorError} error) the watchdog should restart the editor.
         *
         * @error unexpected-error
         */
        const error = new CKEditorError(err.message, context);
        // Restore the original stack trace to make the error look like the original one.
        // See https://github.com/ckeditor/ckeditor5/issues/5595 for more details.
        error.stack = err.stack;
        throw error;
    }
}
/**
 * Logs a warning to the console with a properly formatted message and adds a link to the documentation.
 * Use whenever you want to log a warning to the console.
 *
 *		/**
 *		 * There was a problem processing the configuration of the toolbar. The item with the given
 *		 * name does not exist, so it was omitted when rendering the toolbar.
 *		 *
 *		 * @error toolbarview-item-unavailable
 *		 * @param {String} name The name of the component.
 *		 * /
 *		logWarning( 'toolbarview-item-unavailable', { name } );
 *
 * See also {@link module:utils/ckeditorerror~CKEditorError} for an explanation when to throw an error and when to log
 * a warning or an error to the console.
 *
 * @param {String} errorName The error name to be logged.
 * @param {Object} [data] Additional data to be logged.
 */
function logWarning(errorName, data) {
    console.warn(...formatConsoleArguments(errorName, data));
}
/**
 * Logs an error to the console with a properly formatted message and adds a link to the documentation.
 * Use whenever you want to log an error to the console.
 *
 *		/**
 *		 * There was a problem processing the configuration of the toolbar. The item with the given
 *		 * name does not exist, so it was omitted when rendering the toolbar.
 *		 *
 *		 * @error toolbarview-item-unavailable
 *		 * @param {String} name The name of the component.
 *		 * /
 *		 logError( 'toolbarview-item-unavailable', { name } );
 *
 * **Note**: In most cases logging a warning using {@link module:utils/ckeditorerror~logWarning} is enough.
 *
 * See also {@link module:utils/ckeditorerror~CKEditorError} for an explanation when to use each method.
 *
 * @param {String} errorName The error name to be logged.
 * @param {Object} [data] Additional data to be logged.
 */
function logError(errorName, data) {
    console.error(...formatConsoleArguments(errorName, data));
}
// Returns formatted link to documentation message.
//
// @private
// @param {String} errorName
// @returns {string}
function getLinkToDocumentationMessage(errorName) {
    return `\nRead more: ${DOCUMENTATION_URL}#error-${errorName}`;
}
// Returns formatted error message.
//
// @private
// @param {String} errorName
// @param {Object} [data]
// @returns {string}
function getErrorMessage(errorName, data) {
    const processedObjects = new WeakSet();
    const circularReferencesReplacer = (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (processedObjects.has(value)) {
                return `[object ${value.constructor.name}]`;
            }
            processedObjects.add(value);
        }
        return value;
    };
    const stringifiedData = data ? ` ${JSON.stringify(data, circularReferencesReplacer)}` : '';
    const documentationLink = getLinkToDocumentationMessage(errorName);
    return errorName + stringifiedData + documentationLink;
}
// Returns formatted console error arguments.
//
// @private
// @param {String} errorName
// @param {Object} [data]
// @returns {Array}
function formatConsoleArguments(errorName, data) {
    const documentationMessage = getLinkToDocumentationMessage(errorName);
    return data ? [errorName, data, documentationMessage] : [errorName, documentationMessage];
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/collection.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/collection.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Collection)
/* harmony export */ });
/* harmony import */ var _emittermixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emittermixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js");
/* harmony import */ var _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/* harmony import */ var _uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uid */ "./node_modules/@ckeditor/ckeditor5-utils/src/uid.js");
/* harmony import */ var _isiterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isiterable */ "./node_modules/@ckeditor/ckeditor5-utils/src/isiterable.js");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/collection
 */




/**
 * Collections are ordered sets of objects. Items in the collection can be retrieved by their indexes
 * in the collection (like in an array) or by their ids.
 *
 * If an object without an `id` property is being added to the collection, the `id` property will be generated
 * automatically. Note that the automatically generated id is unique only within this single collection instance.
 *
 * By default an item in the collection is identified by its `id` property. The name of the identifier can be
 * configured through the constructor of the collection.
 *
 * @mixes module:utils/emittermixin~EmitterMixin
 */
class Collection extends _emittermixin__WEBPACK_IMPORTED_MODULE_0__.Emitter {
    /**
     * Creates a new Collection instance.
     *
     * You can provide an iterable of initial items the collection will be created with:
     *
     *		const collection = new Collection( [ { id: 'John' }, { id: 'Mike' } ] );
     *
     *		console.log( collection.get( 0 ) ); // -> { id: 'John' }
     *		console.log( collection.get( 1 ) ); // -> { id: 'Mike' }
     *		console.log( collection.get( 'Mike' ) ); // -> { id: 'Mike' }
     *
     * Or you can first create a collection and then add new items using the {@link #add} method:
     *
     *		const collection = new Collection();
     *
     *		collection.add( { id: 'John' } );
     *		console.log( collection.get( 0 ) ); // -> { id: 'John' }
     *
     * Whatever option you choose, you can always pass a configuration object as the last argument
     * of the constructor:
     *
     *		const emptyCollection = new Collection( { idProperty: 'name' } );
     *		emptyCollection.add( { name: 'John' } );
     *		console.log( collection.get( 'John' ) ); // -> { name: 'John' }
     *
     *		const nonEmptyCollection = new Collection( [ { name: 'John' } ], { idProperty: 'name' } );
     *		nonEmptyCollection.add( { name: 'George' } );
     *		console.log( collection.get( 'George' ) ); // -> { name: 'George' }
     *		console.log( collection.get( 'John' ) ); // -> { name: 'John' }
     *
     * @param {Iterable.<Object>|Object} [initialItemsOrOptions] The initial items of the collection or
     * the options object.
     * @param {Object} [options={}] The options object, when the first argument is an array of initial items.
     * @param {String} [options.idProperty='id'] The name of the property which is used to identify an item.
     * Items that do not have such a property will be assigned one when added to the collection.
     */
    constructor(initialItemsOrOptions = {}, options = {}) {
        super();
        const hasInitialItems = (0,_isiterable__WEBPACK_IMPORTED_MODULE_3__["default"])(initialItemsOrOptions);
        if (!hasInitialItems) {
            options = initialItemsOrOptions;
        }
        this._items = [];
        this._itemMap = new Map();
        this._idProperty = options.idProperty || 'id';
        this._bindToExternalToInternalMap = new WeakMap();
        this._bindToInternalToExternalMap = new WeakMap();
        this._skippedIndexesFromExternal = [];
        // Set the initial content of the collection (if provided in the constructor).
        if (hasInitialItems) {
            for (const item of initialItemsOrOptions) {
                this._items.push(item);
                this._itemMap.set(this._getItemIdBeforeAdding(item), item);
            }
        }
    }
    /**
     * The number of items available in the collection.
     *
     * @member {Number} #length
     */
    get length() {
        return this._items.length;
    }
    /**
     * Returns the first item from the collection or null when collection is empty.
     *
     * @returns {Object|null} The first item or `null` if collection is empty.
     */
    get first() {
        return this._items[0] || null;
    }
    /**
     * Returns the last item from the collection or null when collection is empty.
     *
     * @returns {Object|null} The last item or `null` if collection is empty.
     */
    get last() {
        return this._items[this.length - 1] || null;
    }
    /**
     * Adds an item into the collection.
     *
     * If the item does not have an id, then it will be automatically generated and set on the item.
     *
     * @chainable
     * @param {Object} item
     * @param {Number} [index] The position of the item in the collection. The item
     * is pushed to the collection when `index` not specified.
     * @fires add
     * @fires change
     */
    add(item, index) {
        return this.addMany([item], index);
    }
    /**
     * Adds multiple items into the collection.
     *
     * Any item not containing an id will get an automatically generated one.
     *
     * @chainable
     * @param {Iterable.<Object>} items
     * @param {Number} [index] The position of the insertion. Items will be appended if no `index` is specified.
     * @fires add
     * @fires change
     */
    addMany(items, index) {
        if (index === undefined) {
            index = this._items.length;
        }
        else if (index > this._items.length || index < 0) {
            /**
             * The `index` passed to {@link module:utils/collection~Collection#addMany `Collection#addMany()`}
             * is invalid. It must be a number between 0 and the collection's length.
             *
             * @error collection-add-item-invalid-index
             */
            throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('collection-add-item-invalid-index', this);
        }
        let offset = 0;
        for (const item of items) {
            const itemId = this._getItemIdBeforeAdding(item);
            const currentItemIndex = index + offset;
            this._items.splice(currentItemIndex, 0, item);
            this._itemMap.set(itemId, item);
            this.fire('add', item, currentItemIndex);
            offset++;
        }
        this.fire('change', {
            added: items,
            removed: [],
            index
        });
        return this;
    }
    /**
     * Gets an item by its ID or index.
     *
     * @param {String|Number} idOrIndex The item ID or index in the collection.
     * @returns {Object|null} The requested item or `null` if such item does not exist.
     */
    get(idOrIndex) {
        let item;
        if (typeof idOrIndex == 'string') {
            item = this._itemMap.get(idOrIndex);
        }
        else if (typeof idOrIndex == 'number') {
            item = this._items[idOrIndex];
        }
        else {
            /**
             * An index or ID must be given.
             *
             * @error collection-get-invalid-arg
             */
            throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('collection-get-invalid-arg', this);
        }
        return item || null;
    }
    /**
     * Returns a Boolean indicating whether the collection contains an item.
     *
     * @param {Object|String} itemOrId The item or its ID in the collection.
     * @returns {Boolean} `true` if the collection contains the item, `false` otherwise.
     */
    has(itemOrId) {
        if (typeof itemOrId == 'string') {
            return this._itemMap.has(itemOrId);
        }
        else { // Object
            const idProperty = this._idProperty;
            const id = itemOrId[idProperty];
            return id && this._itemMap.has(id);
        }
    }
    /**
     * Gets an index of an item in the collection.
     * When an item is not defined in the collection, the index will equal -1.
     *
     * @param {Object|String} itemOrId The item or its ID in the collection.
     * @returns {Number} The index of a given item.
     */
    getIndex(itemOrId) {
        let item;
        if (typeof itemOrId == 'string') {
            item = this._itemMap.get(itemOrId);
        }
        else {
            item = itemOrId;
        }
        return item ? this._items.indexOf(item) : -1;
    }
    /**
     * Removes an item from the collection.
     *
     * @param {Object|Number|String} subject The item to remove, its ID or index in the collection.
     * @returns {Object} The removed item.
     * @fires remove
     * @fires change
     */
    remove(subject) {
        const [item, index] = this._remove(subject);
        this.fire('change', {
            added: [],
            removed: [item],
            index
        });
        return item;
    }
    /**
     * Executes the callback for each item in the collection and composes an array or values returned by this callback.
     *
     * @param {Function} callback
     * @param {Object} callback.item
     * @param {Number} callback.index
     * @param {Object} [ctx] Context in which the `callback` will be called.
     * @returns {Array} The result of mapping.
     */
    map(callback, ctx) {
        return this._items.map(callback, ctx);
    }
    /**
     * Finds the first item in the collection for which the `callback` returns a true value.
     *
     * @param {Function} callback
     * @param {Object} callback.item
     * @param {Number} callback.index
     * @param {Object} [ctx] Context in which the `callback` will be called.
     * @returns {Object|undefined} The item for which `callback` returned a true value.
     */
    find(callback, ctx) {
        return this._items.find(callback, ctx);
    }
    /**
     * Returns an array with items for which the `callback` returned a true value.
     *
     * @param {Function} callback
     * @param {Object} callback.item
     * @param {Number} callback.index
     * @param {Object} [ctx] Context in which the `callback` will be called.
     * @returns {Array} The array with matching items.
     */
    filter(callback, ctx) {
        return this._items.filter(callback, ctx);
    }
    /**
     * Removes all items from the collection and destroys the binding created using
     * {@link #bindTo}.
     *
     * @fires remove
     * @fires change
     */
    clear() {
        if (this._bindToCollection) {
            this.stopListening(this._bindToCollection);
            this._bindToCollection = null;
        }
        const removedItems = Array.from(this._items);
        while (this.length) {
            this._remove(0);
        }
        this.fire('change', {
            added: [],
            removed: removedItems,
            index: 0
        });
    }
    /**
     * Binds and synchronizes the collection with another one.
     *
     * The binding can be a simple factory:
     *
     *		class FactoryClass {
     *			constructor( data ) {
     *				this.label = data.label;
     *			}
     *		}
     *
     *		const source = new Collection( { idProperty: 'label' } );
     *		const target = new Collection();
     *
     *		target.bindTo( source ).as( FactoryClass );
     *
     *		source.add( { label: 'foo' } );
     *		source.add( { label: 'bar' } );
     *
     *		console.log( target.length ); // 2
     *		console.log( target.get( 1 ).label ); // 'bar'
     *
     *		source.remove( 0 );
     *		console.log( target.length ); // 1
     *		console.log( target.get( 0 ).label ); // 'bar'
     *
     * or the factory driven by a custom callback:
     *
     *		class FooClass {
     *			constructor( data ) {
     *				this.label = data.label;
     *			}
     *		}
     *
     *		class BarClass {
     *			constructor( data ) {
     *				this.label = data.label;
     *			}
     *		}
     *
     *		const source = new Collection( { idProperty: 'label' } );
     *		const target = new Collection();
     *
     *		target.bindTo( source ).using( ( item ) => {
     *			if ( item.label == 'foo' ) {
     *				return new FooClass( item );
     *			} else {
     *				return new BarClass( item );
     *			}
     *		} );
     *
     *		source.add( { label: 'foo' } );
     *		source.add( { label: 'bar' } );
     *
     *		console.log( target.length ); // 2
     *		console.log( target.get( 0 ) instanceof FooClass ); // true
     *		console.log( target.get( 1 ) instanceof BarClass ); // true
     *
     * or the factory out of property name:
     *
     *		const source = new Collection( { idProperty: 'label' } );
     *		const target = new Collection();
     *
     *		target.bindTo( source ).using( 'label' );
     *
     *		source.add( { label: { value: 'foo' } } );
     *		source.add( { label: { value: 'bar' } } );
     *
     *		console.log( target.length ); // 2
     *		console.log( target.get( 0 ).value ); // 'foo'
     *		console.log( target.get( 1 ).value ); // 'bar'
     *
     * It's possible to skip specified items by returning falsy value:
     *
     *		const source = new Collection();
     *		const target = new Collection();
     *
     *		target.bindTo( source ).using( item => {
     *			if ( item.hidden ) {
     *				return null;
     *			}
     *
     *			return item;
     *		} );
     *
     *		source.add( { hidden: true } );
     *		source.add( { hidden: false } );
     *
     *		console.log( source.length ); // 2
     *		console.log( target.length ); // 1
     *
     * **Note**: {@link #clear} can be used to break the binding.
     *
     * @param {module:utils/collection~Collection} externalCollection A collection to be bound.
     * @returns {module:utils/collection~CollectionBindToChain} The binding chain object.
     */
    bindTo(externalCollection) {
        if (this._bindToCollection) {
            /**
             * The collection cannot be bound more than once.
             *
             * @error collection-bind-to-rebind
             */
            throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('collection-bind-to-rebind', this);
        }
        this._bindToCollection = externalCollection;
        return {
            as: Class => {
                this._setUpBindToBinding(item => new Class(item));
            },
            using: callbackOrProperty => {
                if (typeof callbackOrProperty == 'function') {
                    this._setUpBindToBinding(callbackOrProperty);
                }
                else {
                    this._setUpBindToBinding(item => item[callbackOrProperty]);
                }
            }
        };
    }
    /**
     * Finalizes and activates a binding initiated by {#bindTo}.
     *
     * @private
     * @param {Function} factory A function which produces collection items.
     */
    _setUpBindToBinding(factory) {
        const externalCollection = this._bindToCollection;
        // Adds the item to the collection once a change has been done to the external collection.
        //
        // @private
        const addItem = (evt, externalItem, index) => {
            const isExternalBoundToThis = externalCollection._bindToCollection == this;
            const externalItemBound = externalCollection._bindToInternalToExternalMap.get(externalItem);
            // If an external collection is bound to this collection, which makes it a 2–way binding,
            // and the particular external collection item is already bound, don't add it here.
            // The external item has been created **out of this collection's item** and (re)adding it will
            // cause a loop.
            if (isExternalBoundToThis && externalItemBound) {
                this._bindToExternalToInternalMap.set(externalItem, externalItemBound);
                this._bindToInternalToExternalMap.set(externalItemBound, externalItem);
            }
            else {
                const item = factory(externalItem);
                // When there is no item we need to remember skipped index first and then we can skip this item.
                if (!item) {
                    this._skippedIndexesFromExternal.push(index);
                    return;
                }
                // Lets try to put item at the same index as index in external collection
                // but when there are a skipped items in one or both collections we need to recalculate this index.
                let finalIndex = index;
                // When we try to insert item after some skipped items from external collection we need
                // to include this skipped items and decrease index.
                //
                // For the following example:
                // external -> [ 'A', 'B - skipped for internal', 'C - skipped for internal' ]
                // internal -> [ A ]
                //
                // Another item is been added at the end of external collection:
                // external.add( 'D' )
                // external -> [ 'A', 'B - skipped for internal', 'C - skipped for internal', 'D' ]
                //
                // We can't just add 'D' to internal at the same index as index in external because
                // this will produce empty indexes what is invalid:
                // internal -> [ 'A', empty, empty, 'D' ]
                //
                // So we need to include skipped items and decrease index
                // internal -> [ 'A', 'D' ]
                for (const skipped of this._skippedIndexesFromExternal) {
                    if (index > skipped) {
                        finalIndex--;
                    }
                }
                // We need to take into consideration that external collection could skip some items from
                // internal collection.
                //
                // For the following example:
                // internal -> [ 'A', 'B - skipped for external', 'C - skipped for external' ]
                // external -> [ A ]
                //
                // Another item is been added at the end of external collection:
                // external.add( 'D' )
                // external -> [ 'A', 'D' ]
                //
                // We need to include skipped items and place new item after them:
                // internal -> [ 'A', 'B - skipped for external', 'C - skipped for external', 'D' ]
                for (const skipped of externalCollection._skippedIndexesFromExternal) {
                    if (finalIndex >= skipped) {
                        finalIndex++;
                    }
                }
                this._bindToExternalToInternalMap.set(externalItem, item);
                this._bindToInternalToExternalMap.set(item, externalItem);
                this.add(item, finalIndex);
                // After adding new element to internal collection we need update indexes
                // of skipped items in external collection.
                for (let i = 0; i < externalCollection._skippedIndexesFromExternal.length; i++) {
                    if (finalIndex <= externalCollection._skippedIndexesFromExternal[i]) {
                        externalCollection._skippedIndexesFromExternal[i]++;
                    }
                }
            }
        };
        // Load the initial content of the collection.
        for (const externalItem of externalCollection) {
            addItem(null, externalItem, externalCollection.getIndex(externalItem));
        }
        // Synchronize the with collection as new items are added.
        this.listenTo(externalCollection, 'add', addItem);
        // Synchronize the with collection as new items are removed.
        this.listenTo(externalCollection, 'remove', (evt, externalItem, index) => {
            const item = this._bindToExternalToInternalMap.get(externalItem);
            if (item) {
                this.remove(item);
            }
            // After removing element from external collection we need update/remove indexes
            // of skipped items in internal collection.
            this._skippedIndexesFromExternal = this._skippedIndexesFromExternal.reduce((result, skipped) => {
                if (index < skipped) {
                    result.push(skipped - 1);
                }
                if (index > skipped) {
                    result.push(skipped);
                }
                return result;
            }, []);
        });
    }
    /**
     * Returns an unique id property for a given `item`.
     *
     * The method will generate new id and assign it to the `item` if it doesn't have any.
     *
     * @private
     * @param {Object} item Item to be added.
     * @returns {String}
     */
    _getItemIdBeforeAdding(item) {
        const idProperty = this._idProperty;
        let itemId;
        if ((idProperty in item)) {
            itemId = item[idProperty];
            if (typeof itemId != 'string') {
                /**
                 * This item's ID should be a string.
                 *
                 * @error collection-add-invalid-id
                 */
                throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('collection-add-invalid-id', this);
            }
            if (this.get(itemId)) {
                /**
                 * This item already exists in the collection.
                 *
                 * @error collection-add-item-already-exists
                 */
                throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('collection-add-item-already-exists', this);
            }
        }
        else {
            item[idProperty] = itemId = (0,_uid__WEBPACK_IMPORTED_MODULE_2__["default"])();
        }
        return itemId;
    }
    /**
     * Core {@link #remove} method implementation shared in other functions.
     *
     * In contrast this method **does not** fire the {@link #event:change} event.
     *
     * @private
     * @param {Object|Number|String} subject The item to remove, its id or index in the collection.
     * @returns {Array} Returns an array with the removed item and its index.
     * @fires remove
     */
    _remove(subject) {
        let index, id, item;
        let itemDoesNotExist = false;
        const idProperty = this._idProperty;
        if (typeof subject == 'string') {
            id = subject;
            item = this._itemMap.get(id);
            itemDoesNotExist = !item;
            if (item) {
                index = this._items.indexOf(item);
            }
        }
        else if (typeof subject == 'number') {
            index = subject;
            item = this._items[index];
            itemDoesNotExist = !item;
            if (item) {
                id = item[idProperty];
            }
        }
        else {
            item = subject;
            id = item[idProperty];
            index = this._items.indexOf(item);
            itemDoesNotExist = (index == -1 || !this._itemMap.get(id));
        }
        if (itemDoesNotExist) {
            /**
             * Item not found.
             *
             * @error collection-remove-404
             */
            throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('collection-remove-404', this);
        }
        this._items.splice(index, 1);
        this._itemMap.delete(id);
        const externalItem = this._bindToInternalToExternalMap.get(item);
        this._bindToInternalToExternalMap.delete(item);
        this._bindToExternalToInternalMap.delete(externalItem);
        this.fire('remove', item, index);
        return [item, index];
    }
    /**
     * Iterable interface.
     *
     * @returns {Iterator.<*>}
     */
    [Symbol.iterator]() {
        return this._items[Symbol.iterator]();
    }
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/emittermixin.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/dom/emittermixin.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Emitter": () => (/* binding */ Emitter),
/* harmony export */   "default": () => (/* binding */ DomEmitterMixin)
/* harmony export */ });
/* harmony import */ var _emittermixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emittermixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js");
/* harmony import */ var _uid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uid */ "./node_modules/@ckeditor/ckeditor5-utils/src/uid.js");
/* harmony import */ var _isnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isnode */ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/isnode.js");
/* harmony import */ var _iswindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iswindow */ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/iswindow.js");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* eslint-disable new-cap */
/**
 * @module utils/dom/emittermixin
 */




/**
 * Mixin that injects the DOM events API into its host. It provides the API
 * compatible with {@link module:utils/emittermixin~EmitterMixin}.
 *
 * DOM emitter mixin is by default available in the {@link module:ui/view~View} class,
 * but it can also be mixed into any other class:
 *
 *		import mix from '../utils/mix.js';
 *		import DomEmitterMixin from '../utils/dom/emittermixin.js';
 *		import { Emitter } from '../utils/emittermixin.js';
 *
 *		class SomeView extends DomEmitterMixin( Emitter ) {}
 *
 *		const view = new SomeView();
 *		view.listenTo( domElement, ( evt, domEvt ) => {
 *			console.log( evt, domEvt );
 *		} );
 *
 * @mixin EmitterMixin
 * @mixes module:utils/emittermixin~EmitterMixin
 * @implements module:utils/dom/emittermixin~Emitter
 */
function DomEmitterMixin(base) {
    class Mixin extends base {
        listenTo(emitter, event, callback, options = {}) {
            // Check if emitter is an instance of DOM Node. If so, use corresponding ProxyEmitter (or create one if not existing).
            if ((0,_isnode__WEBPACK_IMPORTED_MODULE_2__["default"])(emitter) || (0,_iswindow__WEBPACK_IMPORTED_MODULE_3__["default"])(emitter)) {
                const proxyOptions = {
                    capture: !!options.useCapture,
                    passive: !!options.usePassive
                };
                const proxyEmitter = this._getProxyEmitter(emitter, proxyOptions) || new ProxyEmitter(emitter, proxyOptions);
                this.listenTo(proxyEmitter, event, callback, options);
            }
            else {
                // Execute parent class method with Emitter (or ProxyEmitter) instance.
                _emittermixin__WEBPACK_IMPORTED_MODULE_0__.Emitter.prototype.listenTo.call(this, emitter, event, callback, options);
            }
        }
        stopListening(emitter, event, callback) {
            // Check if the emitter is an instance of DOM Node. If so, forward the call to the corresponding ProxyEmitters.
            if ((0,_isnode__WEBPACK_IMPORTED_MODULE_2__["default"])(emitter) || (0,_iswindow__WEBPACK_IMPORTED_MODULE_3__["default"])(emitter)) {
                const proxyEmitters = this._getAllProxyEmitters(emitter);
                for (const proxy of proxyEmitters) {
                    this.stopListening(proxy, event, callback);
                }
            }
            else {
                // Execute parent class method with Emitter (or ProxyEmitter) instance.
                _emittermixin__WEBPACK_IMPORTED_MODULE_0__.Emitter.prototype.stopListening.call(this, emitter, event, callback);
            }
        }
        /**
         * Retrieves ProxyEmitter instance for given DOM Node residing in this Host and given options.
         *
         * @private
         * @param {Node|Window} node DOM Node of the ProxyEmitter.
         * @param {Object} [options] Additional options.
         * @param {Boolean} [options.useCapture=false] Indicates that events of this type will be dispatched to the registered
         * listener before being dispatched to any EventTarget beneath it in the DOM tree.
         * @param {Boolean} [options.usePassive=false] Indicates that the function specified by listener will never call preventDefault()
         * and prevents blocking browser's main thread by this event handler.
         * @returns {module:utils/dom/emittermixin~ProxyEmitter|null} ProxyEmitter instance bound to the DOM Node.
         */
        _getProxyEmitter(node, options) {
            return (0,_emittermixin__WEBPACK_IMPORTED_MODULE_0__._getEmitterListenedTo)(this, getProxyEmitterId(node, options));
        }
        /**
         * Retrieves all the ProxyEmitter instances for given DOM Node residing in this Host.
         *
         * @private
         * @param {Node|Window} node DOM Node of the ProxyEmitter.
         * @returns {Array.<module:utils/dom/emittermixin~ProxyEmitter>}
         */
        _getAllProxyEmitters(node) {
            return [
                { capture: false, passive: false },
                { capture: false, passive: true },
                { capture: true, passive: false },
                { capture: true, passive: true }
            ].map(options => this._getProxyEmitter(node, options)).filter(proxy => !!proxy);
        }
    }
    return Mixin;
}
const Emitter = DomEmitterMixin(_emittermixin__WEBPACK_IMPORTED_MODULE_0__.Emitter);
// Backward compatibility with `mix`
([
    '_getProxyEmitter', '_getAllProxyEmitters',
    'on', 'once', 'off', 'listenTo',
    'stopListening', 'fire', 'delegate', 'stopDelegating',
    '_addEventListener', '_removeEventListener'
]).forEach(key => {
    DomEmitterMixin[key] = Emitter.prototype[key];
});
/**
 * Creates a ProxyEmitter instance. Such an instance is a bridge between a DOM Node firing events
 * and any Host listening to them. It is backwards compatible with {@link module:utils/emittermixin~EmitterMixin#on}.
 * There is a separate instance for each combination of modes (useCapture & usePassive). The mode is concatenated with
 * UID stored in HTMLElement to give each instance unique identifier.
 *
 *                                  listenTo( click, ... )
 *                    +-----------------------------------------+
 *                    |              stopListening( ... )       |
 *     +----------------------------+                           |             addEventListener( click, ... )
 *     | Host                       |                           |   +---------------------------------------------+
 *     +----------------------------+                           |   |       removeEventListener( click, ... )     |
 *     | _listeningTo: {            |                +----------v-------------+                                   |
 *     |   UID+mode: {              |                | ProxyEmitter           |                                   |
 *     |     emitter: ProxyEmitter, |                +------------------------+                      +------------v----------+
 *     |     callbacks: {           |                | events: {              |                      | Node (HTMLElement)    |
 *     |       click: [ callbacks ] |                |   click: [ callbacks ] |                      +-----------------------+
 *     |     }                      |                | },                     |                      | data-ck-expando: UID  |
 *     |   }                        |                | _domNode: Node,        |                      +-----------------------+
 *     | }                          |                | _domListeners: {},     |                                   |
 *     | +------------------------+ |                | _emitterId: UID+mode   |                                   |
 *     | | DomEmitterMixin        | |                +--------------^---------+                                   |
 *     | +------------------------+ |                           |   |                                             |
 *     +--------------^-------------+                           |   +---------------------------------------------+
 *                    |                                         |                  click (DOM Event)
 *                    +-----------------------------------------+
 *                                fire( click, DOM Event )
 *
 * @mixes module:utils/emittermixin~EmitterMixin
 * @implements module:utils/dom/emittermixin~Emitter
 * @private
 */
class ProxyEmitter extends _emittermixin__WEBPACK_IMPORTED_MODULE_0__.Emitter {
    /**
     * @param {Node|Window} node DOM Node that fires events.
     * @param {Object} [options] Additional options.
     * @param {Boolean} [options.useCapture=false] Indicates that events of this type will be dispatched to the registered
     * listener before being dispatched to any EventTarget beneath it in the DOM tree.
     * @param {Boolean} [options.usePassive=false] Indicates that the function specified by listener will never call preventDefault()
     * and prevents blocking browser's main thread by this event handler.
     */
    constructor(node, options) {
        super();
        // Set emitter ID to match DOM Node "expando" property.
        (0,_emittermixin__WEBPACK_IMPORTED_MODULE_0__._setEmitterId)(this, getProxyEmitterId(node, options));
        // Remember the DOM Node this ProxyEmitter is bound to.
        this._domNode = node;
        // And given options.
        this._options = options;
    }
    /**
     * Registers a callback function to be executed when an event is fired.
     *
     * It attaches a native DOM listener to the DOM Node. When fired,
     * a corresponding Emitter event will also fire with DOM Event object as an argument.
     *
     * **Note**: This is automatically called by the
     * {@link module:utils/emittermixin~EmitterMixin#listenTo `EmitterMixin#listenTo()`}.
     *
     * @method module:utils/dom/emittermixin~ProxyEmitter#attach
     * @param {String} event The name of the event.
     */
    attach(event) {
        // If the DOM Listener for given event already exist it is pointless
        // to attach another one.
        if (this._domListeners && this._domListeners[event]) {
            return;
        }
        const domListener = this._createDomListener(event);
        // Attach the native DOM listener to DOM Node.
        this._domNode.addEventListener(event, domListener, this._options);
        if (!this._domListeners) {
            this._domListeners = {};
        }
        // Store the native DOM listener in this ProxyEmitter. It will be helpful
        // when stopping listening to the event.
        this._domListeners[event] = domListener;
    }
    /**
     * Stops executing the callback on the given event.
     *
     * **Note**: This is automatically called by the
     * {@link module:utils/emittermixin~EmitterMixin#stopListening `EmitterMixin#stopListening()`}.
     *
     * @method module:utils/dom/emittermixin~ProxyEmitter#detach
     * @param {String} event The name of the event.
     */
    detach(event) {
        let events;
        // Remove native DOM listeners which are orphans. If no callbacks
        // are awaiting given event, detach native DOM listener from DOM Node.
        // See: {@link attach}.
        if (this._domListeners[event] && (!(events = this._events[event]) || !events.callbacks.length)) {
            this._domListeners[event].removeListener();
        }
    }
    /**
     * Adds callback to emitter for given event.
     *
     * @protected
     * @method module:utils/dom/emittermixin~ProxyEmitter#_addEventListener
     * @param {String} event The name of the event.
     * @param {Function} callback The function to be called on event.
     * @param {Object} [options={}] Additional options.
     * @param {module:utils/priorities~PriorityString} [options.priority='normal'] The priority of this event callback. The higher
     * the priority value the sooner the callback will be fired. Events having the same priority are called in the
     * order they were added.
     */
    _addEventListener(event, callback, options) {
        this.attach(event);
        _emittermixin__WEBPACK_IMPORTED_MODULE_0__.Emitter.prototype._addEventListener.call(this, event, callback, options);
    }
    /**
     * Removes callback from emitter for given event.
     *
     * @protected
     * @method module:utils/dom/emittermixin~ProxyEmitter#_removeEventListener
     * @param {String} event The name of the event.
     * @param {Function} callback The function to stop being called.
     */
    _removeEventListener(event, callback) {
        _emittermixin__WEBPACK_IMPORTED_MODULE_0__.Emitter.prototype._removeEventListener.call(this, event, callback);
        this.detach(event);
    }
    /**
     * Creates a native DOM listener callback. When the native DOM event
     * is fired it will fire corresponding event on this ProxyEmitter.
     * Note: A native DOM Event is passed as an argument.
     *
     * @private
     * @method module:utils/dom/emittermixin~ProxyEmitter#_createDomListener
     * @param {String} event The name of the event.
     * @returns {Function} The DOM listener callback.
     */
    _createDomListener(event) {
        const domListener = (domEvt) => {
            this.fire(event, domEvt);
        };
        // Supply the DOM listener callback with a function that will help
        // detach it from the DOM Node, when it is no longer necessary.
        // See: {@link detach}.
        domListener.removeListener = () => {
            this._domNode.removeEventListener(event, domListener, this._options);
            delete this._domListeners[event];
        };
        return domListener;
    }
}
// Gets an unique DOM Node identifier. The identifier will be set if not defined.
//
// @private
// @param {Node} node
// @returns {String} UID for given DOM Node.
function getNodeUID(node) {
    return node['data-ck-expando'] || (node['data-ck-expando'] = (0,_uid__WEBPACK_IMPORTED_MODULE_1__["default"])());
}
// Gets id of the ProxyEmitter for the given node.
//
// Combines DOM Node identifier and additional options.
//
// @private
// @param {Node} node
// @param {Object} options Additional options.
// @returns {String} ProxyEmitter id.
function getProxyEmitterId(node, options) {
    let id = getNodeUID(node);
    for (const option of Object.keys(options).sort()) {
        if (options[option]) {
            id += '-' + option;
        }
    }
    return id;
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/isnode.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/dom/isnode.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isNode)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/dom/isnode
 */
/**
 * Checks if the object is a native DOM Node.
 *
 * @param {*} obj
 * @returns {Boolean}
 */
function isNode(obj) {
    if (obj) {
        if (obj.defaultView) {
            return obj instanceof obj.defaultView.Document;
        }
        else if (obj.ownerDocument && obj.ownerDocument.defaultView) {
            return obj instanceof obj.ownerDocument.defaultView.Node;
        }
    }
    return false;
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/iswindow.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/dom/iswindow.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isWindow)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/dom/iswindow
 */
/**
 * Checks if the object is a native DOM Window.
 *
 * @param {*} obj
 * @returns {Boolean}
 */
function isWindow(obj) {
    const stringifiedObject = Object.prototype.toString.apply(obj);
    // Returns `true` for the `window` object in browser environments.
    if (stringifiedObject == '[object Window]') {
        return true;
    }
    // Returns `true` for the `window` object in the Electron environment.
    if (stringifiedObject == '[object global]') {
        return true;
    }
    return false;
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Emitter": () => (/* binding */ Emitter),
/* harmony export */   "_getEmitterId": () => (/* binding */ _getEmitterId),
/* harmony export */   "_getEmitterListenedTo": () => (/* binding */ _getEmitterListenedTo),
/* harmony export */   "_setEmitterId": () => (/* binding */ _setEmitterId),
/* harmony export */   "default": () => (/* binding */ EmitterMixin)
/* harmony export */ });
/* harmony import */ var _eventinfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventinfo */ "./node_modules/@ckeditor/ckeditor5-utils/src/eventinfo.js");
/* harmony import */ var _uid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uid */ "./node_modules/@ckeditor/ckeditor5-utils/src/uid.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/@ckeditor/ckeditor5-utils/src/priorities.js");
/* harmony import */ var _inserttopriorityarray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inserttopriorityarray */ "./node_modules/@ckeditor/ckeditor5-utils/src/inserttopriorityarray.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version */ "./node_modules/@ckeditor/ckeditor5-utils/src/version.js");
/* harmony import */ var _ckeditorerror__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/emittermixin
 */
/* eslint-disable new-cap */




// To check if component is loaded more than once.


const _listeningTo = Symbol('listeningTo');
const _emitterId = Symbol('emitterId');
const _delegations = Symbol('delegations');
/**
 * Mixin that injects the {@link ~Emitter events API} into its host.
 *
 * Read more about the concept of emitters in the:
 * * {@glink framework/guides/architecture/core-editor-architecture#event-system-and-observables Event system and observables}
 * section of the {@glink framework/guides/architecture/core-editor-architecture Core editor architecture} guide.
 * * {@glink framework/guides/deep-dive/event-system Event system} deep dive guide.
 *
 * @mixin EmitterMixin
 * @implements module:utils/emittermixin~Emitter
 */
function EmitterMixin(base) {
    class Mixin extends base {
        on(event, callback, options) {
            this.listenTo(this, event, callback, options);
        }
        once(event, callback, options) {
            let wasFired = false;
            const onceCallback = (event, ...args) => {
                // Ensure the callback is called only once even if the callback itself leads to re-firing the event
                // (which would call the callback again).
                if (!wasFired) {
                    wasFired = true;
                    // Go off() at the first call.
                    event.off();
                    // Go with the original callback.
                    callback.call(this, event, ...args);
                }
            };
            // Make a similar on() call, simply replacing the callback.
            this.listenTo(this, event, onceCallback, options);
        }
        off(event, callback) {
            this.stopListening(this, event, callback);
        }
        listenTo(emitter, event, callback, options = {}) {
            let emitterInfo, eventCallbacks;
            // _listeningTo contains a list of emitters that this object is listening to.
            // This list has the following format:
            //
            // _listeningTo: {
            //     emitterId: {
            //         emitter: emitter,
            //         callbacks: {
            //             event1: [ callback1, callback2, ... ]
            //             ....
            //         }
            //     },
            //     ...
            // }
            if (!this[_listeningTo]) {
                this[_listeningTo] = {};
            }
            const emitters = this[_listeningTo];
            if (!_getEmitterId(emitter)) {
                _setEmitterId(emitter);
            }
            const emitterId = _getEmitterId(emitter);
            if (!(emitterInfo = emitters[emitterId])) {
                emitterInfo = emitters[emitterId] = {
                    emitter,
                    callbacks: {}
                };
            }
            if (!(eventCallbacks = emitterInfo.callbacks[event])) {
                eventCallbacks = emitterInfo.callbacks[event] = [];
            }
            eventCallbacks.push(callback);
            // Finally register the callback to the event.
            addEventListener(this, emitter, event, callback, options);
        }
        stopListening(emitter, event, callback) {
            const emitters = this[_listeningTo];
            let emitterId = emitter && _getEmitterId(emitter);
            const emitterInfo = (emitters && emitterId) ? emitters[emitterId] : undefined;
            const eventCallbacks = (emitterInfo && event) ? emitterInfo.callbacks[event] : undefined;
            // Stop if nothing has been listened.
            if (!emitters || (emitter && !emitterInfo) || (event && !eventCallbacks)) {
                return;
            }
            // All params provided. off() that single callback.
            if (callback) {
                removeEventListener(this, emitter, event, callback);
                // We must remove callbacks as well in order to prevent memory leaks.
                // See https://github.com/ckeditor/ckeditor5/pull/8480
                const index = eventCallbacks.indexOf(callback);
                if (index !== -1) {
                    if (eventCallbacks.length === 1) {
                        delete emitterInfo.callbacks[event];
                    }
                    else {
                        removeEventListener(this, emitter, event, callback);
                    }
                }
            }
            // Only `emitter` and `event` provided. off() all callbacks for that event.
            else if (eventCallbacks) {
                while ((callback = eventCallbacks.pop())) {
                    removeEventListener(this, emitter, event, callback);
                }
                delete emitterInfo.callbacks[event];
            }
            // Only `emitter` provided. off() all events for that emitter.
            else if (emitterInfo) {
                for (event in emitterInfo.callbacks) {
                    this.stopListening(emitter, event);
                }
                delete emitters[emitterId];
            }
            // No params provided. off() all emitters.
            else {
                for (emitterId in emitters) {
                    this.stopListening(emitters[emitterId].emitter);
                }
                delete this[_listeningTo];
            }
        }
        fire(eventOrInfo, ...args) {
            try {
                const eventInfo = eventOrInfo instanceof _eventinfo__WEBPACK_IMPORTED_MODULE_0__["default"] ? eventOrInfo : new _eventinfo__WEBPACK_IMPORTED_MODULE_0__["default"](this, eventOrInfo);
                const event = eventInfo.name;
                let callbacks = getCallbacksForEvent(this, event);
                // Record that the event passed this emitter on its path.
                eventInfo.path.push(this);
                // Handle event listener callbacks first.
                if (callbacks) {
                    // Arguments passed to each callback.
                    const callbackArgs = [eventInfo, ...args];
                    // Copying callbacks array is the easiest and most secure way of preventing infinite loops, when event callbacks
                    // are added while processing other callbacks. Previous solution involved adding counters (unique ids) but
                    // failed if callbacks were added to the queue before currently processed callback.
                    // If this proves to be too inefficient, another method is to change `.on()` so callbacks are stored if same
                    // event is currently processed. Then, `.fire()` at the end, would have to add all stored events.
                    callbacks = Array.from(callbacks);
                    for (let i = 0; i < callbacks.length; i++) {
                        callbacks[i].callback.apply(this, callbackArgs);
                        // Remove the callback from future requests if off() has been called.
                        if (eventInfo.off.called) {
                            // Remove the called mark for the next calls.
                            delete eventInfo.off.called;
                            this._removeEventListener(event, callbacks[i].callback);
                        }
                        // Do not execute next callbacks if stop() was called.
                        if (eventInfo.stop.called) {
                            break;
                        }
                    }
                }
                // Delegate event to other emitters if needed.
                const delegations = this[_delegations];
                if (delegations) {
                    const destinations = delegations.get(event);
                    const passAllDestinations = delegations.get('*');
                    if (destinations) {
                        fireDelegatedEvents(destinations, eventInfo, args);
                    }
                    if (passAllDestinations) {
                        fireDelegatedEvents(passAllDestinations, eventInfo, args);
                    }
                }
                return eventInfo.return;
            }
            catch (err) {
                // @if CK_DEBUG // throw err;
                /* istanbul ignore next */
                _ckeditorerror__WEBPACK_IMPORTED_MODULE_5__["default"].rethrowUnexpectedError(err, this);
            }
        }
        delegate(...events) {
            return {
                to: (emitter, nameOrFunction) => {
                    if (!this[_delegations]) {
                        this[_delegations] = new Map();
                    }
                    // Originally there was a for..of loop which unfortunately caused an error in Babel that didn't allow
                    // build an application. See: https://github.com/ckeditor/ckeditor5-react/issues/40.
                    events.forEach(eventName => {
                        const destinations = this[_delegations].get(eventName);
                        if (!destinations) {
                            this[_delegations].set(eventName, new Map([[emitter, nameOrFunction]]));
                        }
                        else {
                            destinations.set(emitter, nameOrFunction);
                        }
                    });
                }
            };
        }
        stopDelegating(event, emitter) {
            if (!this[_delegations]) {
                return;
            }
            if (!event) {
                this[_delegations].clear();
            }
            else if (!emitter) {
                this[_delegations].delete(event);
            }
            else {
                const destinations = this[_delegations].get(event);
                if (destinations) {
                    destinations.delete(emitter);
                }
            }
        }
        _addEventListener(event, callback, options) {
            createEventNamespace(this, event);
            const lists = getCallbacksListsForNamespace(this, event);
            const priority = _priorities__WEBPACK_IMPORTED_MODULE_2__["default"].get(options.priority);
            const callbackDefinition = {
                callback,
                priority
            };
            // Add the callback to all callbacks list.
            for (const callbacks of lists) {
                // Add the callback to the list in the right priority position.
                (0,_inserttopriorityarray__WEBPACK_IMPORTED_MODULE_3__["default"])(callbacks, callbackDefinition);
            }
        }
        _removeEventListener(event, callback) {
            const lists = getCallbacksListsForNamespace(this, event);
            for (const callbacks of lists) {
                for (let i = 0; i < callbacks.length; i++) {
                    if (callbacks[i].callback == callback) {
                        // Remove the callback from the list (fixing the next index).
                        callbacks.splice(i, 1);
                        i--;
                    }
                }
            }
        }
    }
    return Mixin;
}
const Emitter = EmitterMixin(Object);
// Backward compatibility with `mix`
([
    'on', 'once', 'off', 'listenTo',
    'stopListening', 'fire', 'delegate', 'stopDelegating',
    '_addEventListener', '_removeEventListener'
]).forEach(key => {
    EmitterMixin[key] = Emitter.prototype[key];
});
/**
 * Checks if `listeningEmitter` listens to an emitter with given `listenedToEmitterId` and if so, returns that emitter.
 * If not, returns `null`.
 *
 * @internal
 * @protected
 * @param {module:utils/emittermixin~Emitter} listeningEmitter An emitter that listens.
 * @param {String} listenedToEmitterId Unique emitter id of emitter listened to.
 * @returns {module:utils/emittermixin~Emitter|null}
 */
function _getEmitterListenedTo(listeningEmitter, listenedToEmitterId) {
    const listeningTo = listeningEmitter[_listeningTo];
    if (listeningTo && listeningTo[listenedToEmitterId]) {
        return listeningTo[listenedToEmitterId].emitter;
    }
    return null;
}
/**
 * Sets emitter's unique id.
 *
 * **Note:** `_emitterId` can be set only once.
 *
 * @internal
 * @protected
 * @param {module:utils/emittermixin~Emitter} emitter An emitter for which id will be set.
 * @param {String} [id] Unique id to set. If not passed, random unique id will be set.
 */
function _setEmitterId(emitter, id) {
    if (!emitter[_emitterId]) {
        emitter[_emitterId] = id || (0,_uid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
}
/**
 * Returns emitter's unique id.
 *
 * @internal
 * @protected
 * @param {module:utils/emittermixin~Emitter} emitter An emitter which id will be returned.
 * @returns {String|undefined}
 */
function _getEmitterId(emitter) {
    return emitter[_emitterId];
}
// Gets the internal `_events` property of the given object.
// `_events` property store all lists with callbacks for registered event names.
// If there were no events registered on the object, empty `_events` object is created.
function getEvents(source) {
    if (!source._events) {
        Object.defineProperty(source, '_events', {
            value: {}
        });
    }
    return source._events;
}
// Creates event node for generic-specific events relation architecture.
function makeEventNode() {
    return {
        callbacks: [],
        childEvents: []
    };
}
// Creates an architecture for generic-specific events relation.
// If needed, creates all events for given eventName, i.e. if the first registered event
// is foo:bar:abc, it will create foo:bar:abc, foo:bar and foo event and tie them together.
// It also copies callbacks from more generic events to more specific events when
// specific events are created.
function createEventNamespace(source, eventName) {
    const events = getEvents(source);
    // First, check if the event we want to add to the structure already exists.
    if (events[eventName]) {
        // If it exists, we don't have to do anything.
        return;
    }
    // In other case, we have to create the structure for the event.
    // Note, that we might need to create intermediate events too.
    // I.e. if foo:bar:abc is being registered and we only have foo in the structure,
    // we need to also register foo:bar.
    // Currently processed event name.
    let name = eventName;
    // Name of the event that is a child event for currently processed event.
    let childEventName = null;
    // Array containing all newly created specific events.
    const newEventNodes = [];
    // While loop can't check for ':' index because we have to handle generic events too.
    // In each loop, we truncate event name, going from the most specific name to the generic one.
    // I.e. foo:bar:abc -> foo:bar -> foo.
    while (name !== '') {
        if (events[name]) {
            // If the currently processed event name is already registered, we can be sure
            // that it already has all the structure created, so we can break the loop here
            // as no more events need to be registered.
            break;
        }
        // If this event is not yet registered, create a new object for it.
        events[name] = makeEventNode();
        // Add it to the array with newly created events.
        newEventNodes.push(events[name]);
        // Add previously processed event name as a child of this event.
        if (childEventName) {
            events[name].childEvents.push(childEventName);
        }
        childEventName = name;
        // If `.lastIndexOf()` returns -1, `.substr()` will return '' which will break the loop.
        name = name.substr(0, name.lastIndexOf(':'));
    }
    if (name !== '') {
        // If name is not empty, we found an already registered event that was a parent of the
        // event we wanted to register.
        // Copy that event's callbacks to newly registered events.
        for (const node of newEventNodes) {
            node.callbacks = events[name].callbacks.slice();
        }
        // Add last newly created event to the already registered event.
        events[name].childEvents.push(childEventName);
    }
}
// Gets an array containing callbacks list for a given event and it's more specific events.
// I.e. if given event is foo:bar and there is also foo:bar:abc event registered, this will
// return callback list of foo:bar and foo:bar:abc (but not foo).
function getCallbacksListsForNamespace(source, eventName) {
    const eventNode = getEvents(source)[eventName];
    if (!eventNode) {
        return [];
    }
    let callbacksLists = [eventNode.callbacks];
    for (let i = 0; i < eventNode.childEvents.length; i++) {
        const childCallbacksLists = getCallbacksListsForNamespace(source, eventNode.childEvents[i]);
        callbacksLists = callbacksLists.concat(childCallbacksLists);
    }
    return callbacksLists;
}
// Get the list of callbacks for a given event, but only if there any callbacks have been registered.
// If there are no callbacks registered for given event, it checks if this is a specific event and looks
// for callbacks for it's more generic version.
function getCallbacksForEvent(source, eventName) {
    let event;
    if (!source._events || !(event = source._events[eventName]) || !event.callbacks.length) {
        // There are no callbacks registered for specified eventName.
        // But this could be a specific-type event that is in a namespace.
        if (eventName.indexOf(':') > -1) {
            // If the eventName is specific, try to find callback lists for more generic event.
            return getCallbacksForEvent(source, eventName.substr(0, eventName.lastIndexOf(':')));
        }
        else {
            // If this is a top-level generic event, return null;
            return null;
        }
    }
    return event.callbacks;
}
// Fires delegated events for given map of destinations.
//
// @private
// * @param {Map.<utils.Emitter>} destinations A map containing
// `[ {@link module:utils/emittermixin~Emitter}, "event name" ]` pair destinations.
// * @param {utils.EventInfo} eventInfo The original event info object.
// * @param {Array.<*>} fireArgs Arguments the original event was fired with.
function fireDelegatedEvents(destinations, eventInfo, fireArgs) {
    for (let [emitter, name] of destinations) {
        if (!name) {
            name = eventInfo.name;
        }
        else if (typeof name == 'function') {
            name = name(eventInfo.name);
        }
        const delegatedInfo = new _eventinfo__WEBPACK_IMPORTED_MODULE_0__["default"](eventInfo.source, name);
        delegatedInfo.path = [...eventInfo.path];
        emitter.fire(delegatedInfo, ...fireArgs);
    }
}
// Helper for registering event callback on the emitter.
function addEventListener(listener, emitter, event, callback, options) {
    if (emitter._addEventListener) {
        emitter._addEventListener(event, callback, options);
    }
    else {
        // Allow listening on objects that do not implement Emitter interface.
        // This is needed in some tests that are using mocks instead of the real objects with EmitterMixin mixed.
        (listener._addEventListener).call(emitter, event, callback, options);
    }
}
// Helper for removing event callback from the emitter.
function removeEventListener(listener, emitter, event, callback) {
    if (emitter._removeEventListener) {
        emitter._removeEventListener(event, callback);
    }
    else {
        // Allow listening on objects that do not implement Emitter interface.
        // This is needed in some tests that are using mocks instead of the real objects with EmitterMixin mixed.
        listener._removeEventListener.call(emitter, event, callback);
    }
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/env.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/env.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getUserAgent": () => (/* binding */ getUserAgent),
/* harmony export */   "isAndroid": () => (/* binding */ isAndroid),
/* harmony export */   "isBlink": () => (/* binding */ isBlink),
/* harmony export */   "isGecko": () => (/* binding */ isGecko),
/* harmony export */   "isMac": () => (/* binding */ isMac),
/* harmony export */   "isRegExpUnicodePropertySupported": () => (/* binding */ isRegExpUnicodePropertySupported),
/* harmony export */   "isSafari": () => (/* binding */ isSafari),
/* harmony export */   "isWindows": () => (/* binding */ isWindows),
/* harmony export */   "isiOS": () => (/* binding */ isiOS)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* globals navigator:false */
/**
 * @module utils/env
 */
/**
 * Safely returns `userAgent` from browser's navigator API in a lower case.
 * If navigator API is not available it will return an empty string.
 *
 * @returns {String}
 */
function getUserAgent() {
    // In some environments navigator API might not be available.
    try {
        return navigator.userAgent.toLowerCase();
    }
    catch (e) {
        return '';
    }
}
const userAgent = getUserAgent();
/**
 * A namespace containing environment and browser information.
 *
 * @namespace
 */
const env = {
    /**
     * Indicates that the application is running on Macintosh.
     *
     * @static
     * @type {Boolean}
     */
    isMac: isMac(userAgent),
    /**
     * Indicates that the application is running on Windows.
     *
     * @static
     * @type {Boolean}
     */
    isWindows: isWindows(userAgent),
    /**
     * Indicates that the application is running in Firefox (Gecko).
     *
     * @static
     * @type {Boolean}
     */
    isGecko: isGecko(userAgent),
    /**
     * Indicates that the application is running in Safari.
     *
     * @static
     * @type {Boolean}
     */
    isSafari: isSafari(userAgent),
    /**
     * Indicates the the application is running in iOS.
     *
     * @static
     * @type {Boolean}
     */
    isiOS: isiOS(userAgent),
    /**
     * Indicates that the application is running on Android mobile device.
     *
     * @static
     * @type {Boolean}
     */
    isAndroid: isAndroid(userAgent),
    /**
     * Indicates that the application is running in a browser using the Blink engine.
     *
     * @static
     * @type {Boolean}
     */
    isBlink: isBlink(userAgent),
    /**
     * Environment features information.
     *
     * @memberOf module:utils/env~env
     * @namespace
     */
    features: {
        /**
         * Indicates that the environment supports ES2018 Unicode property escapes — like `\p{P}` or `\p{L}`.
         * More information about unicode properties might be found
         * [in Unicode Standard Annex #44](https://www.unicode.org/reports/tr44/#GC_Values_Table).
         *
         * @type {Boolean}
         */
        isRegExpUnicodePropertySupported: isRegExpUnicodePropertySupported()
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (env);
/**
 * Checks if User Agent represented by the string is running on Macintosh.
 *
 * @param {String} userAgent **Lowercase** `navigator.userAgent` string.
 * @returns {Boolean} Whether User Agent is running on Macintosh or not.
 */
function isMac(userAgent) {
    return userAgent.indexOf('macintosh') > -1;
}
/**
 * Checks if User Agent represented by the string is running on Windows.
 *
 * @param {String} userAgent **Lowercase** `navigator.userAgent` string.
 * @returns {Boolean} Whether User Agent is running on Windows or not.
 */
function isWindows(userAgent) {
    return userAgent.indexOf('windows') > -1;
}
/**
 * Checks if User Agent represented by the string is Firefox (Gecko).
 *
 * @param {String} userAgent **Lowercase** `navigator.userAgent` string.
 * @returns {Boolean} Whether User Agent is Firefox or not.
 */
function isGecko(userAgent) {
    return !!userAgent.match(/gecko\/\d+/);
}
/**
 * Checks if User Agent represented by the string is Safari.
 *
 * @param {String} userAgent **Lowercase** `navigator.userAgent` string.
 * @returns {Boolean} Whether User Agent is Safari or not.
 */
function isSafari(userAgent) {
    return userAgent.indexOf(' applewebkit/') > -1 && userAgent.indexOf('chrome') === -1;
}
/**
 * Checks if User Agent represented by the string is running in iOS.
 *
 * @param {String} userAgent **Lowercase** `navigator.userAgent` string.
 * @returns {Boolean} Whether User Agent is running in iOS or not.
 */
function isiOS(userAgent) {
    // "Request mobile site" || "Request desktop site".
    return !!userAgent.match(/iphone|ipad/i) || (isMac(userAgent) && navigator.maxTouchPoints > 0);
}
/**
 * Checks if User Agent represented by the string is Android mobile device.
 *
 * @param {String} userAgent **Lowercase** `navigator.userAgent` string.
 * @returns {Boolean} Whether User Agent is Safari or not.
 */
function isAndroid(userAgent) {
    return userAgent.indexOf('android') > -1;
}
/**
 * Checks if User Agent represented by the string is Blink engine.
 *
 * @param {String} userAgent **Lowercase** `navigator.userAgent` string.
 * @returns {Boolean} Whether User Agent is Blink engine or not.
 */
function isBlink(userAgent) {
    // The Edge browser before switching to the Blink engine used to report itself as Chrome (and "Edge/")
    // but after switching to the Blink it replaced "Edge/" with "Edg/".
    return userAgent.indexOf('chrome/') > -1 && userAgent.indexOf('edge/') < 0;
}
/**
 * Checks if the current environment supports ES2018 Unicode properties like `\p{P}` or `\p{L}`.
 * More information about unicode properties might be found
 * [in Unicode Standard Annex #44](https://www.unicode.org/reports/tr44/#GC_Values_Table).
 *
 * @returns {Boolean}
 */
function isRegExpUnicodePropertySupported() {
    let isSupported = false;
    // Feature detection for Unicode properties. Added in ES2018. Currently Firefox does not support it.
    // See https://github.com/ckeditor/ckeditor5-mention/issues/44#issuecomment-487002174.
    try {
        // Usage of regular expression literal cause error during build (ckeditor/ckeditor5-dev#534).
        isSupported = 'ć'.search(new RegExp('[\\p{L}]', 'u')) === 0;
    }
    catch (error) {
        // Firefox throws a SyntaxError when the group is unsupported.
    }
    return isSupported;
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/eventinfo.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/eventinfo.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventInfo)
/* harmony export */ });
/* harmony import */ var _spy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spy */ "./node_modules/@ckeditor/ckeditor5-utils/src/spy.js");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/eventinfo
 */

/**
 * The event object passed to event callbacks. It is used to provide information about the event as well as a tool to
 * manipulate it.
 */
class EventInfo {
    /**
     * @param {Object} source The emitter.
     * @param {String} name The event name.
     */
    constructor(source, name) {
        this.source = source;
        this.name = name;
        this.path = [];
        // The following methods are defined in the constructor because they must be re-created per instance.
        this.stop = (0,_spy__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.off = (0,_spy__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/inserttopriorityarray.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/inserttopriorityarray.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertToPriorityArray)
/* harmony export */ });
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./priorities */ "./node_modules/@ckeditor/ckeditor5-utils/src/priorities.js");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Inserts any object with priority at correct index by priority so registered objects are always sorted from highest to lowest priority.
 *
 * @param {Array.<module:utils/inserttopriorityarray~ObjectWithPriority>} objects Array of objects with priority to insert object to.
 * @param {module:utils/inserttopriorityarray~ObjectWithPriority} objectToInsert Object with `priority` property.
 */
function insertToPriorityArray(objects, objectToInsert) {
    const priority = _priorities__WEBPACK_IMPORTED_MODULE_0__["default"].get(objectToInsert.priority);
    for (let i = 0; i < objects.length; i++) {
        if (_priorities__WEBPACK_IMPORTED_MODULE_0__["default"].get(objects[i].priority) < priority) {
            objects.splice(i, 0, objectToInsert);
            return;
        }
    }
    objects.push(objectToInsert);
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/isiterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/isiterable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isIterable)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/isiterable
 */
/**
 * Checks if value implements iterator interface.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if value implements iterator interface.
 */
function isIterable(value) {
    return !!(value && value[Symbol.iterator]);
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/keyboard.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/keyboard.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCode": () => (/* binding */ getCode),
/* harmony export */   "getEnvKeystrokeText": () => (/* binding */ getEnvKeystrokeText),
/* harmony export */   "getLocalizedArrowKeyCodeDirection": () => (/* binding */ getLocalizedArrowKeyCodeDirection),
/* harmony export */   "isArrowKeyCode": () => (/* binding */ isArrowKeyCode),
/* harmony export */   "isForwardArrowKeyCode": () => (/* binding */ isForwardArrowKeyCode),
/* harmony export */   "keyCodes": () => (/* binding */ keyCodes),
/* harmony export */   "parseKeystroke": () => (/* binding */ parseKeystroke)
/* harmony export */ });
/* harmony import */ var _ckeditorerror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/@ckeditor/ckeditor5-utils/src/env.js");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */


const modifiersToGlyphsMac = {
    ctrl: '⌃',
    cmd: '⌘',
    alt: '⌥',
    shift: '⇧'
};
const modifiersToGlyphsNonMac = {
    ctrl: 'Ctrl+',
    alt: 'Alt+',
    shift: 'Shift+'
};
/**
 * An object with `keyName => keyCode` pairs for a set of known keys.
 *
 * Contains:
 *
 * * `a-z`,
 * * `0-9`,
 * * `f1-f12`,
 * * `` ` ``, `-`, `=`, `[`, `]`, `;`, `'`, `,`, `.`, `/`, `\`,
 * * `arrow(left|up|right|bottom)`,
 * * `backspace`, `delete`, `enter`, `esc`, `tab`,
 * * `ctrl`, `cmd`, `shift`, `alt`.
 */
const keyCodes = generateKnownKeyCodes();
const keyCodeNames = Object.fromEntries(Object.entries(keyCodes).map(([name, code]) => [code, name.charAt(0).toUpperCase() + name.slice(1)]));
/**
 * Converts a key name or {@link module:utils/keyboard~KeystrokeInfo keystroke info} into a key code.
 *
 * Note: Key names are matched with {@link module:utils/keyboard~keyCodes} in a case-insensitive way.
 *
 * @param {String|module:utils/keyboard~KeystrokeInfo} A key name (see {@link module:utils/keyboard~keyCodes})
 * or a keystroke data object.
 * @returns {Number} Key or keystroke code.
 */
function getCode(key) {
    let keyCode;
    if (typeof key == 'string') {
        keyCode = keyCodes[key.toLowerCase()];
        if (!keyCode) {
            /**
             * Unknown key name. Only key names included in the {@link module:utils/keyboard~keyCodes} can be used.
             *
             * @error keyboard-unknown-key
             * @param {String} key
             */
            throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"]('keyboard-unknown-key', null, { key });
        }
    }
    else {
        keyCode = key.keyCode +
            (key.altKey ? keyCodes.alt : 0) +
            (key.ctrlKey ? keyCodes.ctrl : 0) +
            (key.shiftKey ? keyCodes.shift : 0) +
            (key.metaKey ? keyCodes.cmd : 0);
    }
    return keyCode;
}
/**
 * Parses the keystroke and returns a keystroke code that will match the code returned by
 * {@link module:utils/keyboard~getCode} for the corresponding {@link module:utils/keyboard~KeystrokeInfo keystroke info}.
 *
 * The keystroke can be passed in two formats:
 *
 * * as a single string – e.g. `ctrl + A`,
 * * as an array of {@link module:utils/keyboard~keyCodes known key names} and key codes – e.g.:
 *   * `[ 'ctrl', 32 ]` (ctrl + space),
 *   * `[ 'ctrl', 'a' ]` (ctrl + A).
 *
 * Note: Key names are matched with {@link module:utils/keyboard~keyCodes} in a case-insensitive way.
 *
 * Note: Only keystrokes with a single non-modifier key are supported (e.g. `ctrl+A` is OK, but `ctrl+A+B` is not).
 *
 * Note: On macOS, keystroke handling is translating the `Ctrl` key to the `Cmd` key and handling only that keystroke.
 * For example, a registered keystroke `Ctrl+A` will be translated to `Cmd+A` on macOS. To disable the translation of some keystroke,
 * use the forced modifier: `Ctrl!+A` (note the exclamation mark).
 *
 * @param {String|Array.<Number|String>} keystroke The keystroke definition.
 * @returns {Number} Keystroke code.
 */
function parseKeystroke(keystroke) {
    if (typeof keystroke == 'string') {
        keystroke = splitKeystrokeText(keystroke);
    }
    return keystroke
        .map(key => (typeof key == 'string') ? getEnvKeyCode(key) : key)
        .reduce((key, sum) => sum + key, 0);
}
/**
 * Translates any keystroke string text like `"Ctrl+A"` to an
 * environment–specific keystroke, i.e. `"⌘A"` on macOS.
 *
 * @param {String} keystroke The keystroke text.
 * @returns {String} The keystroke text specific for the environment.
 */
function getEnvKeystrokeText(keystroke) {
    let keystrokeCode = parseKeystroke(keystroke);
    const modifiersToGlyphs = Object.entries(_env__WEBPACK_IMPORTED_MODULE_1__["default"].isMac ? modifiersToGlyphsMac : modifiersToGlyphsNonMac);
    const modifiers = modifiersToGlyphs.reduce((modifiers, [name, glyph]) => {
        // Modifier keys are stored as a bit mask so extract those from the keystroke code.
        if ((keystrokeCode & keyCodes[name]) != 0) {
            keystrokeCode &= ~keyCodes[name];
            modifiers += glyph;
        }
        return modifiers;
    }, '');
    return modifiers + (keystrokeCode ? keyCodeNames[keystrokeCode] : '');
}
/**
 * Returns `true` if the provided key code represents one of the arrow keys.
 *
 * @param {Number} keyCode A key code as in {@link module:utils/keyboard~KeystrokeInfo#keyCode}.
 * @returns {Boolean}
 */
function isArrowKeyCode(keyCode) {
    return keyCode == keyCodes.arrowright ||
        keyCode == keyCodes.arrowleft ||
        keyCode == keyCodes.arrowup ||
        keyCode == keyCodes.arrowdown;
}
/**
 * Returns the direction in which the {@link module:engine/model/documentselection~DocumentSelection selection}
 * will move when the provided arrow key code is pressed considering the language direction of the editor content.
 *
 * For instance, in right–to–left (RTL) content languages, pressing the left arrow means moving the selection right (forward)
 * in the model structure. Similarly, pressing the right arrow moves the selection left (backward).
 *
 * @param {Number} keyCode A key code as in {@link module:utils/keyboard~KeystrokeInfo#keyCode}.
 * @param {module:utils/language~LanguageDirection} contentLanguageDirection The content language direction, corresponding to
 * {@link module:utils/locale~Locale#contentLanguageDirection}.
 * @returns {module:utils/keyboard~ArrowKeyCodeDirection|undefined} Localized arrow direction or `undefined` for non-arrow key codes.
 */
function getLocalizedArrowKeyCodeDirection(keyCode, contentLanguageDirection) {
    const isLtrContent = contentLanguageDirection === 'ltr';
    switch (keyCode) {
        case keyCodes.arrowleft:
            return isLtrContent ? 'left' : 'right';
        case keyCodes.arrowright:
            return isLtrContent ? 'right' : 'left';
        case keyCodes.arrowup:
            return 'up';
        case keyCodes.arrowdown:
            return 'down';
    }
}
// Converts a key name to the key code with mapping based on the env.
//
// See: {@link module:utils/keyboard~getCode}.
//
// @param {String} key The key name (see {@link module:utils/keyboard~keyCodes}).
// @returns {Number} Key code.
function getEnvKeyCode(key) {
    // Don't remap modifier key for forced modifiers.
    if (key.endsWith('!')) {
        return getCode(key.slice(0, -1));
    }
    const code = getCode(key);
    return _env__WEBPACK_IMPORTED_MODULE_1__["default"].isMac && code == keyCodes.ctrl ? keyCodes.cmd : code;
}
/**
 * Determines if the provided key code moves the {@link module:engine/model/documentselection~DocumentSelection selection}
 * forward or backward considering the language direction of the editor content.
 *
 * For instance, in right–to–left (RTL) languages, pressing the left arrow means moving forward
 * in the model structure. Similarly, pressing the right arrow moves the selection backward.
 *
 * @param {Number} keyCode A key code as in {@link module:utils/keyboard~KeystrokeInfo#keyCode}.
 * @param {module:utils/language~LanguageDirection} contentLanguageDirection The content language direction, corresponding to
 * {@link module:utils/locale~Locale#contentLanguageDirection}.
 * @returns {Boolean}
 */
function isForwardArrowKeyCode(keyCode, contentLanguageDirection) {
    const localizedKeyCodeDirection = getLocalizedArrowKeyCodeDirection(keyCode, contentLanguageDirection);
    return localizedKeyCodeDirection === 'down' || localizedKeyCodeDirection === 'right';
}
function generateKnownKeyCodes() {
    const keyCodes = {
        arrowleft: 37,
        arrowup: 38,
        arrowright: 39,
        arrowdown: 40,
        backspace: 8,
        delete: 46,
        enter: 13,
        space: 32,
        esc: 27,
        tab: 9,
        // The idea about these numbers is that they do not collide with any real key codes, so we can use them
        // like bit masks.
        ctrl: 0x110000,
        shift: 0x220000,
        alt: 0x440000,
        cmd: 0x880000
    };
    // a-z
    for (let code = 65; code <= 90; code++) {
        const letter = String.fromCharCode(code);
        keyCodes[letter.toLowerCase()] = code;
    }
    // 0-9
    for (let code = 48; code <= 57; code++) {
        keyCodes[code - 48] = code;
    }
    // F1-F12
    for (let code = 112; code <= 123; code++) {
        keyCodes['f' + (code - 111)] = code;
    }
    // other characters
    for (const char of '`-=[];\',./\\') {
        keyCodes[char] = char.charCodeAt(0);
    }
    return keyCodes;
}
function splitKeystrokeText(keystroke) {
    return keystroke.split('+').map(key => key.trim());
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable),
/* harmony export */   "default": () => (/* binding */ ObservableMixin)
/* harmony export */ });
/* harmony import */ var _emittermixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emittermixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js");
/* harmony import */ var _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/isObject.js");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* eslint-disable @typescript-eslint/unified-signatures, new-cap */
/**
 * @module utils/observablemixin
 */



const observablePropertiesSymbol = Symbol('observableProperties');
const boundObservablesSymbol = Symbol('boundObservables');
const boundPropertiesSymbol = Symbol('boundProperties');
const decoratedMethods = Symbol('decoratedMethods');
const decoratedOriginal = Symbol('decoratedOriginal');
/**
 * A mixin that injects the "observable properties" and data binding functionality described in the
 * {@link ~Observable} interface.
 *
 * Read more about the concept of observables in the:
 * * {@glink framework/guides/architecture/core-editor-architecture#event-system-and-observables Event system and observables}
 * section of the {@glink framework/guides/architecture/core-editor-architecture Core editor architecture} guide,
 * * {@glink framework/guides/deep-dive/observables Observables deep dive} guide.
 *
 * @mixin ObservableMixin
 * @mixes module:utils/emittermixin~EmitterMixin
 * @implements module:utils/observablemixin~Observable
 */
function ObservableMixin(base) {
    class Mixin extends base {
        set(name, value) {
            // If the first parameter is an Object, iterate over its properties.
            if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(name)) {
                Object.keys(name).forEach(property => {
                    this.set(property, name[property]);
                }, this);
                return;
            }
            initObservable(this);
            const properties = this[observablePropertiesSymbol];
            if ((name in this) && !properties.has(name)) {
                /**
                 * Cannot override an existing property.
                 *
                 * This error is thrown when trying to {@link ~Observable#set set} a property with
                 * a name of an already existing property. For example:
                 *
                 *		let observable = new Model();
                 *		observable.property = 1;
                 *		observable.set( 'property', 2 );			// throws
                 *
                 *		observable.set( 'property', 1 );
                 *		observable.set( 'property', 2 );			// ok, because this is an existing property.
                 *
                 * @error observable-set-cannot-override
                 */
                throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('observable-set-cannot-override', this);
            }
            Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                get() {
                    return properties.get(name);
                },
                set(value) {
                    const oldValue = properties.get(name);
                    // Fire `set` event before the new value will be set to make it possible
                    // to override observable property without affecting `change` event.
                    // See https://github.com/ckeditor/ckeditor5-utils/issues/171.
                    let newValue = this.fire(`set:${name}`, name, value, oldValue);
                    if (newValue === undefined) {
                        newValue = value;
                    }
                    // Allow undefined as an initial value like A.define( 'x', undefined ) (#132).
                    // Note: When properties map has no such own property, then its value is undefined.
                    if (oldValue !== newValue || !properties.has(name)) {
                        properties.set(name, newValue);
                        this.fire(`change:${name}`, name, newValue, oldValue);
                    }
                }
            });
            this[name] = value;
        }
        bind(...bindProperties) {
            if (!bindProperties.length || !isStringArray(bindProperties)) {
                /**
                 * All properties must be strings.
                 *
                 * @error observable-bind-wrong-properties
                 */
                throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('observable-bind-wrong-properties', this);
            }
            if ((new Set(bindProperties)).size !== bindProperties.length) {
                /**
                 * Properties must be unique.
                 *
                 * @error observable-bind-duplicate-properties
                 */
                throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('observable-bind-duplicate-properties', this);
            }
            initObservable(this);
            const boundProperties = this[boundPropertiesSymbol];
            bindProperties.forEach(propertyName => {
                if (boundProperties.has(propertyName)) {
                    /**
                     * Cannot bind the same property more than once.
                     *
                     * @error observable-bind-rebind
                     */
                    throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('observable-bind-rebind', this);
                }
            });
            const bindings = new Map();
            // @typedef {Object} Binding
            // @property {Array} property Property which is bound.
            // @property {Array} to Array of observable–property components of the binding (`{ observable: ..., property: .. }`).
            // @property {Array} callback A function which processes `to` components.
            bindProperties.forEach(a => {
                const binding = { property: a, to: [] };
                boundProperties.set(a, binding);
                bindings.set(a, binding);
            });
            // @typedef {Object} BindChain
            // @property {Function} to See {@link ~ObservableMixin#_bindTo}.
            // @property {Function} toMany See {@link ~ObservableMixin#_bindToMany}.
            // @property {module:utils/observablemixin~Observable} _observable The observable which initializes the binding.
            // @property {Array} _bindProperties Array of `_observable` properties to be bound.
            // @property {Array} _to Array of `to()` observable–properties (`{ observable: toObservable, properties: ...toProperties }`).
            // @property {Map} _bindings Stores bindings to be kept in
            // {@link ~ObservableMixin#_boundProperties}/{@link ~ObservableMixin#_boundObservables}
            // initiated in this binding chain.
            return {
                to: bindTo,
                toMany: bindToMany,
                _observable: this,
                _bindProperties: bindProperties,
                _to: [],
                _bindings: bindings
            };
        }
        unbind(...unbindProperties) {
            // Nothing to do here if not inited yet.
            if (!(this[observablePropertiesSymbol])) {
                return;
            }
            const boundProperties = this[boundPropertiesSymbol];
            const boundObservables = this[boundObservablesSymbol];
            if (unbindProperties.length) {
                if (!isStringArray(unbindProperties)) {
                    /**
                     * Properties must be strings.
                     *
                     * @error observable-unbind-wrong-properties
                     */
                    throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('observable-unbind-wrong-properties', this);
                }
                unbindProperties.forEach(propertyName => {
                    const binding = boundProperties.get(propertyName);
                    // Nothing to do if the binding is not defined
                    if (!binding) {
                        return;
                    }
                    binding.to.forEach(([toObservable, toProperty]) => {
                        const toProperties = boundObservables.get(toObservable);
                        const toPropertyBindings = toProperties[toProperty];
                        toPropertyBindings.delete(binding);
                        if (!toPropertyBindings.size) {
                            delete toProperties[toProperty];
                        }
                        if (!Object.keys(toProperties).length) {
                            boundObservables.delete(toObservable);
                            this.stopListening(toObservable, 'change');
                        }
                    });
                    boundProperties.delete(propertyName);
                });
            }
            else {
                boundObservables.forEach((bindings, boundObservable) => {
                    this.stopListening(boundObservable, 'change');
                });
                boundObservables.clear();
                boundProperties.clear();
            }
        }
        decorate(methodName) {
            initObservable(this);
            const originalMethod = this[methodName];
            if (!originalMethod) {
                /**
                 * Cannot decorate an undefined method.
                 *
                 * @error observablemixin-cannot-decorate-undefined
                 * @param {Object} object The object which method should be decorated.
                 * @param {String} methodName Name of the method which does not exist.
                 */
                throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('observablemixin-cannot-decorate-undefined', this, { object: this, methodName });
            }
            this.on(methodName, (evt, args) => {
                evt.return = originalMethod.apply(this, args);
            });
            this[methodName] = function (...args) {
                return this.fire(methodName, args);
            };
            this[methodName][decoratedOriginal] = originalMethod;
            if (!this[decoratedMethods]) {
                this[decoratedMethods] = [];
            }
            this[decoratedMethods].push(methodName);
        }
        // Override the EmitterMixin stopListening method to be able to clean (and restore) decorated methods.
        // This is needed in case of:
        //  1. Have x.foo() decorated.
        //  2. Call x.stopListening()
        //  3. Call x.foo(). Problem: nothing happens (the original foo() method is not executed)
        stopListening(emitter, event, callback) {
            // Removing all listeners so let's clean the decorated methods to the original state.
            if (!emitter && this[decoratedMethods]) {
                for (const methodName of this[decoratedMethods]) {
                    this[methodName] = this[methodName][decoratedOriginal];
                }
                delete this[decoratedMethods];
            }
            _emittermixin__WEBPACK_IMPORTED_MODULE_0__.Emitter.prototype.stopListening.call(this, emitter, event, callback);
        }
    }
    return Mixin;
}
const Observable = ObservableMixin(_emittermixin__WEBPACK_IMPORTED_MODULE_0__.Emitter);
// Backward compatibility with `mix`
([
    'set', 'bind', 'unbind', 'decorate',
    'on', 'once', 'off', 'listenTo',
    'stopListening', 'fire', 'delegate', 'stopDelegating',
    '_addEventListener', '_removeEventListener'
]).forEach(key => {
    ObservableMixin[key] = Observable.prototype[key];
});
// Init symbol properties needed for the observable mechanism to work.
//
// @private
// @param {module:utils/observablemixin~ObservableMixin} observable
function initObservable(observable) {
    // Do nothing if already inited.
    if (observable[observablePropertiesSymbol]) {
        return;
    }
    // The internal hash containing the observable's state.
    //
    // @private
    // @type {Map}
    Object.defineProperty(observable, observablePropertiesSymbol, {
        value: new Map()
    });
    // Map containing bindings to external observables. It shares the binding objects
    // (`{ observable: A, property: 'a', to: ... }`) with {@link module:utils/observablemixin~ObservableMixin#_boundProperties} and
    // it is used to observe external observables to update own properties accordingly.
    // See {@link module:utils/observablemixin~ObservableMixin#bind}.
    //
    //		A.bind( 'a', 'b', 'c' ).to( B, 'x', 'y', 'x' );
    //		console.log( A._boundObservables );
    //
    //			Map( {
    //				B: {
    //					x: Set( [
    //						{ observable: A, property: 'a', to: [ [ B, 'x' ] ] },
    //						{ observable: A, property: 'c', to: [ [ B, 'x' ] ] }
    //					] ),
    //					y: Set( [
    //						{ observable: A, property: 'b', to: [ [ B, 'y' ] ] },
    //					] )
    //				}
    //			} )
    //
    //		A.bind( 'd' ).to( B, 'z' ).to( C, 'w' ).as( callback );
    //		console.log( A._boundObservables );
    //
    //			Map( {
    //				B: {
    //					x: Set( [
    //						{ observable: A, property: 'a', to: [ [ B, 'x' ] ] },
    //						{ observable: A, property: 'c', to: [ [ B, 'x' ] ] }
    //					] ),
    //					y: Set( [
    //						{ observable: A, property: 'b', to: [ [ B, 'y' ] ] },
    //					] ),
    //					z: Set( [
    //						{ observable: A, property: 'd', to: [ [ B, 'z' ], [ C, 'w' ] ], callback: callback }
    //					] )
    //				},
    //				C: {
    //					w: Set( [
    //						{ observable: A, property: 'd', to: [ [ B, 'z' ], [ C, 'w' ] ], callback: callback }
    //					] )
    //				}
    //			} )
    //
    // @private
    // @type {Map}
    Object.defineProperty(observable, boundObservablesSymbol, {
        value: new Map()
    });
    // Object that stores which properties of this observable are bound and how. It shares
    // the binding objects (`{ observable: A, property: 'a', to: ... }`) with
    // {@link module:utils/observablemixin~ObservableMixin#_boundObservables}. This data structure is
    // a reverse of {@link module:utils/observablemixin~ObservableMixin#_boundObservables} and it is helpful for
    // {@link module:utils/observablemixin~ObservableMixin#unbind}.
    //
    // See {@link module:utils/observablemixin~ObservableMixin#bind}.
    //
    //		A.bind( 'a', 'b', 'c' ).to( B, 'x', 'y', 'x' );
    //		console.log( A._boundProperties );
    //
    //			Map( {
    //				a: { observable: A, property: 'a', to: [ [ B, 'x' ] ] },
    //				b: { observable: A, property: 'b', to: [ [ B, 'y' ] ] },
    //				c: { observable: A, property: 'c', to: [ [ B, 'x' ] ] }
    //			} )
    //
    //		A.bind( 'd' ).to( B, 'z' ).to( C, 'w' ).as( callback );
    //		console.log( A._boundProperties );
    //
    //			Map( {
    //				a: { observable: A, property: 'a', to: [ [ B, 'x' ] ] },
    //				b: { observable: A, property: 'b', to: [ [ B, 'y' ] ] },
    //				c: { observable: A, property: 'c', to: [ [ B, 'x' ] ] },
    //				d: { observable: A, property: 'd', to: [ [ B, 'z' ], [ C, 'w' ] ], callback: callback }
    //			} )
    //
    // @private
    // @type {Map}
    Object.defineProperty(observable, boundPropertiesSymbol, {
        value: new Map()
    });
}
// A chaining for {@link module:utils/observablemixin~ObservableMixin#bind} providing `.to()` interface.
//
// @private
// @param {...[Observable|String|Function]} args Arguments of the `.to( args )` binding.
function bindTo(...args) {
    const parsedArgs = parseBindToArgs(...args);
    const bindingsKeys = Array.from(this._bindings.keys());
    const numberOfBindings = bindingsKeys.length;
    // Eliminate A.bind( 'x' ).to( B, C )
    if (!parsedArgs.callback && parsedArgs.to.length > 1) {
        /**
         * Binding multiple observables only possible with callback.
         *
         * @error observable-bind-to-no-callback
         */
        throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('observable-bind-to-no-callback', this);
    }
    // Eliminate A.bind( 'x', 'y' ).to( B, callback )
    if (numberOfBindings > 1 && parsedArgs.callback) {
        /**
         * Cannot bind multiple properties and use a callback in one binding.
         *
         * @error observable-bind-to-extra-callback
         */
        throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('observable-bind-to-extra-callback', this);
    }
    parsedArgs.to.forEach(to => {
        // Eliminate A.bind( 'x', 'y' ).to( B, 'a' )
        if (to.properties.length && to.properties.length !== numberOfBindings) {
            /**
             * The number of properties must match.
             *
             * @error observable-bind-to-properties-length
             */
            throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('observable-bind-to-properties-length', this);
        }
        // When no to.properties specified, observing source properties instead i.e.
        // A.bind( 'x', 'y' ).to( B ) -> Observe B.x and B.y
        if (!to.properties.length) {
            to.properties = this._bindProperties;
        }
    });
    this._to = parsedArgs.to;
    // Fill {@link BindChain#_bindings} with callback. When the callback is set there's only one binding.
    if (parsedArgs.callback) {
        this._bindings.get(bindingsKeys[0]).callback = parsedArgs.callback;
    }
    attachBindToListeners(this._observable, this._to);
    // Update observable._boundProperties and observable._boundObservables.
    updateBindToBound(this);
    // Set initial values of bound properties.
    this._bindProperties.forEach(propertyName => {
        updateBoundObservableProperty(this._observable, propertyName);
    });
}
// Binds to an attribute in a set of iterable observables.
//
// @private
// @param {Array.<Observable>} observables
// @param {String} attribute
// @param {Function} callback
function bindToMany(observables, attribute, callback) {
    if (this._bindings.size > 1) {
        /**
         * Binding one attribute to many observables only possible with one attribute.
         *
         * @error observable-bind-to-many-not-one-binding
         */
        throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('observable-bind-to-many-not-one-binding', this);
    }
    this.to(
    // Bind to #attribute of each observable...
    ...getBindingTargets(observables, attribute), 
    // ...using given callback to parse attribute values.
    callback);
}
// Returns an array of binding components for
// {@link Observable#bind} from a set of iterable observables.
//
// @param {Array.<Observable>} observables
// @param {String} attribute
// @returns {Array.<String|Observable>}
function getBindingTargets(observables, attribute) {
    const observableAndAttributePairs = observables.map(observable => [observable, attribute]);
    // Merge pairs to one-dimension array of observables and attributes.
    return Array.prototype.concat.apply([], observableAndAttributePairs);
}
// Check if all entries of the array are of `String` type.
//
// @private
// @param {Array} arr An array to be checked.
// @returns {Boolean}
function isStringArray(arr) {
    return arr.every(a => typeof a == 'string');
}
// Parses and validates {@link Observable#bind}`.to( args )` arguments and returns
// an object with a parsed structure. For example
//
//		A.bind( 'x' ).to( B, 'a', C, 'b', call );
//
// becomes
//
//		{
//			to: [
//				{ observable: B, properties: [ 'a' ] },
//				{ observable: C, properties: [ 'b' ] },
//			],
//			callback: call
// 		}
//
// @private
// @param {...*} args Arguments of {@link Observable#bind}`.to( args )`.
// @returns {Object}
function parseBindToArgs(...args) {
    // Eliminate A.bind( 'x' ).to()
    if (!args.length) {
        /**
         * Invalid argument syntax in `to()`.
         *
         * @error observable-bind-to-parse-error
         */
        throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('observable-bind-to-parse-error', null);
    }
    const parsed = { to: [] };
    let lastObservable;
    if (typeof args[args.length - 1] == 'function') {
        parsed.callback = args.pop();
    }
    args.forEach(a => {
        if (typeof a == 'string') {
            lastObservable.properties.push(a);
        }
        else if (typeof a == 'object') {
            lastObservable = { observable: a, properties: [] };
            parsed.to.push(lastObservable);
        }
        else {
            throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]('observable-bind-to-parse-error', null);
        }
    });
    return parsed;
}
// Synchronizes {@link module:utils/observablemixin#_boundObservables} with {@link Binding}.
//
// @private
// @param {Binding} binding A binding to store in {@link Observable#_boundObservables}.
// @param {Observable} toObservable A observable, which is a new component of `binding`.
// @param {String} toPropertyName A name of `toObservable`'s property, a new component of the `binding`.
function updateBoundObservables(observable, binding, toObservable, toPropertyName) {
    const boundObservables = observable[boundObservablesSymbol];
    const bindingsToObservable = boundObservables.get(toObservable);
    const bindings = bindingsToObservable || {};
    if (!bindings[toPropertyName]) {
        bindings[toPropertyName] = new Set();
    }
    // Pass the binding to a corresponding Set in `observable._boundObservables`.
    bindings[toPropertyName].add(binding);
    if (!bindingsToObservable) {
        boundObservables.set(toObservable, bindings);
    }
}
// Synchronizes {@link Observable#_boundProperties} and {@link Observable#_boundObservables}
// with {@link BindChain}.
//
// Assuming the following binding being created
//
// 		A.bind( 'a', 'b' ).to( B, 'x', 'y' );
//
// the following bindings were initialized by {@link Observable#bind} in {@link BindChain#_bindings}:
//
// 		{
// 			a: { observable: A, property: 'a', to: [] },
// 			b: { observable: A, property: 'b', to: [] },
// 		}
//
// Iterate over all bindings in this chain and fill their `to` properties with
// corresponding to( ... ) arguments (components of the binding), so
//
// 		{
// 			a: { observable: A, property: 'a', to: [ B, 'x' ] },
// 			b: { observable: A, property: 'b', to: [ B, 'y' ] },
// 		}
//
// Then update the structure of {@link Observable#_boundObservables} with updated
// binding, so it becomes:
//
// 		Map( {
// 			B: {
// 				x: Set( [
// 					{ observable: A, property: 'a', to: [ [ B, 'x' ] ] }
// 				] ),
// 				y: Set( [
// 					{ observable: A, property: 'b', to: [ [ B, 'y' ] ] },
// 				] )
//			}
// 		} )
//
// @private
// @param {BindChain} chain The binding initialized by {@link Observable#bind}.
function updateBindToBound(chain) {
    let toProperty;
    chain._bindings.forEach((binding, propertyName) => {
        // Note: For a binding without a callback, this will run only once
        // like in A.bind( 'x', 'y' ).to( B, 'a', 'b' )
        // TODO: ES6 destructuring.
        chain._to.forEach(to => {
            toProperty = to.properties[binding.callback ? 0 : chain._bindProperties.indexOf(propertyName)];
            binding.to.push([to.observable, toProperty]);
            updateBoundObservables(chain._observable, binding, to.observable, toProperty);
        });
    });
}
// Updates an property of a {@link Observable} with a value
// determined by an entry in {@link Observable#_boundProperties}.
//
// @private
// @param {Observable} observable A observable which property is to be updated.
// @param {String} propertyName An property to be updated.
function updateBoundObservableProperty(observable, propertyName) {
    const boundProperties = observable[boundPropertiesSymbol];
    const binding = boundProperties.get(propertyName);
    let propertyValue;
    // When a binding with callback is created like
    //
    // 		A.bind( 'a' ).to( B, 'b', C, 'c', callback );
    //
    // collect B.b and C.c, then pass them to callback to set A.a.
    if (binding.callback) {
        propertyValue = binding.callback.apply(observable, binding.to.map(to => to[0][to[1]]));
    }
    else {
        propertyValue = binding.to[0];
        propertyValue = propertyValue[0][propertyValue[1]];
    }
    if (Object.prototype.hasOwnProperty.call(observable, propertyName)) {
        observable[propertyName] = propertyValue;
    }
    else {
        observable.set(propertyName, propertyValue);
    }
}
// Starts listening to changes in {@link BindChain._to} observables to update
// {@link BindChain._observable} {@link BindChain._bindProperties}. Also sets the
// initial state of {@link BindChain._observable}.
//
// @private
// @param {Observable} observable
// @param {BindChain} chain The chain initialized by {@link Observable#bind}.
function attachBindToListeners(observable, toBindings) {
    toBindings.forEach(to => {
        const boundObservables = observable[boundObservablesSymbol];
        let bindings;
        // If there's already a chain between the observables (`observable` listens to
        // `to.observable`), there's no need to create another `change` event listener.
        if (!boundObservables.get(to.observable)) {
            observable.listenTo(to.observable, 'change', (evt, propertyName) => {
                bindings = boundObservables.get(to.observable)[propertyName];
                // Note: to.observable will fire for any property change, react
                // to changes of properties which are bound only.
                if (bindings) {
                    bindings.forEach(binding => {
                        updateBoundObservableProperty(observable, binding.property);
                    });
                }
            });
        }
    });
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/priorities.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/priorities.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Provides group of constants to use instead of hardcoding numeric priority values.
 *
 * @namespace
 */
const priorities = {
    /**
     * Converts a string with priority name to it's numeric value. If `Number` is given, it just returns it.
     *
     * @static
     * @param {module:utils/priorities~PriorityString} [priority] Priority to convert.
     * @returns {Number} Converted priority.
     */
    get(priority = 'normal') {
        if (typeof priority != 'number') {
            return this[priority] || this.normal;
        }
        else {
            return priority;
        }
    },
    highest: 100000,
    high: 1000,
    normal: 0,
    low: -1000,
    lowest: -100000
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priorities);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/spy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/spy.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/spy
 */
/**
 * Creates a spy function (ala Sinon.js) that can be used to inspect call to it.
 *
 * The following are the present features:
 *
 * * spy.called: property set to `true` if the function has been called at least once.
 *
 * @returns {Function} The spy function.
 */
function spy() {
    return function spy() {
        spy.called = true;
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spy);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/toarray.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/toarray.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toArray)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
function toArray(data) {
    return Array.isArray(data) ? data : [data];
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/uid.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/uid.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uid)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/uid
 */
// A hash table of hex numbers to avoid using toString() in uid() which is costly.
// [ '00', '01', '02', ..., 'fe', 'ff' ]
const HEX_NUMBERS = new Array(256).fill('')
    .map((_, index) => ('0' + (index).toString(16)).slice(-2));
/**
 * Returns a unique id. The id starts with an "e" character and a randomly generated string of
 * 32 alphanumeric characters.
 *
 * **Note**: The characters the unique id is built from correspond to the hex number notation
 * (from "0" to "9", from "a" to "f"). In other words, each id corresponds to an "e" followed
 * by 16 8-bit numbers next to each other.
 *
 * @returns {String} An unique id string.
 */
function uid() {
    // Let's create some positive random 32bit integers first.
    //
    // 1. Math.random() is a float between 0 and 1.
    // 2. 0x100000000 is 2^32 = 4294967296.
    // 3. >>> 0 enforces integer (in JS all numbers are floating point).
    //
    // For instance:
    //		Math.random() * 0x100000000 = 3366450031.853859
    // but
    //		Math.random() * 0x100000000 >>> 0 = 3366450031.
    const r1 = Math.random() * 0x100000000 >>> 0;
    const r2 = Math.random() * 0x100000000 >>> 0;
    const r3 = Math.random() * 0x100000000 >>> 0;
    const r4 = Math.random() * 0x100000000 >>> 0;
    // Make sure that id does not start with number.
    return 'e' +
        HEX_NUMBERS[r1 >> 0 & 0xFF] +
        HEX_NUMBERS[r1 >> 8 & 0xFF] +
        HEX_NUMBERS[r1 >> 16 & 0xFF] +
        HEX_NUMBERS[r1 >> 24 & 0xFF] +
        HEX_NUMBERS[r2 >> 0 & 0xFF] +
        HEX_NUMBERS[r2 >> 8 & 0xFF] +
        HEX_NUMBERS[r2 >> 16 & 0xFF] +
        HEX_NUMBERS[r2 >> 24 & 0xFF] +
        HEX_NUMBERS[r3 >> 0 & 0xFF] +
        HEX_NUMBERS[r3 >> 8 & 0xFF] +
        HEX_NUMBERS[r3 >> 16 & 0xFF] +
        HEX_NUMBERS[r3 >> 24 & 0xFF] +
        HEX_NUMBERS[r4 >> 0 & 0xFF] +
        HEX_NUMBERS[r4 >> 8 & 0xFF] +
        HEX_NUMBERS[r4 >> 16 & 0xFF] +
        HEX_NUMBERS[r4 >> 24 & 0xFF];
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/version.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/version.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ckeditorerror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/version
 */
/* globals window, global */

const version = '35.3.2';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);
/* istanbul ignore next */
const windowOrGlobal = typeof window === 'object' ? window : __webpack_require__.g;
/* istanbul ignore next */
if (windowOrGlobal.CKEDITOR_VERSION) {
    /**
     * This error is thrown when due to a mistake in how CKEditor 5 was installed or initialized, some
     * of its modules were duplicated (evaluated and executed twice). Module duplication leads to inevitable runtime
     * errors.
     *
     * There are many situations in which some modules can be loaded twice. In the worst case scenario,
     * you may need to check your project for each of these issues and fix them all.
     *
     * # Trying to add a plugin to an existing build
     *
     * If you import an existing CKEditor 5 build and a plugin like this:
     *
     *		import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
     *		import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
     *
     * Then your project loads some CKEditor 5 packages twice. How does it happen?
     *
     * The build package contains a file which is already compiled with webpack. This means
     * that it contains all the necessary code from e.g. `@ckeditor/ckeditor5-engine` and `@ckeditor/ckeditor5-utils`.
     *
     * However, the `Highlight` plugin imports some of the modules from these packages, too. If you ask webpack to
     * build such a project, you will end up with the modules being included (and run) twice &mdash; first, because they are
     * included inside the build package, and second, because they are required by the `Highlight` plugin.
     *
     * Therefore, **you must never add plugins to an existing build** unless your plugin has no dependencies.
     *
     * Adding plugins to a build is done by taking the source version of this build (so, before it was built with webpack)
     * and adding plugins there. In this situation, webpack will know that it only needs to load each plugin once.
     *
     * Read more in the {@glink installation/getting-started/installing-plugins "Installing plugins"} guide.
     *
     * # Confused an editor build with an editor implementation
     *
     * This scenario is very similar to the previous one, but has a different origin.
     *
     * Let's assume that you wanted to use CKEditor 5 from source, as explained in the
     * {@glink installation/advanced/alternative-setups/integrating-from-source "Building from source"} section
     * or in the {@glink framework/guides/quick-start "Quick start"} guide of CKEditor 5 Framework.
     *
     * The correct way to do so is to import an editor and plugins and run them together like this:
     *
     *		import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
     *		import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
     *		import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
     *		import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
     *		import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
     *
     *		ClassicEditor
     *			.create( document.querySelector( '#editor' ), {
     *				plugins: [ Essentials, Paragraph, Bold, Italic ],
     *				toolbar: [ 'bold', 'italic' ]
     *			} )
     *			.then( editor => {
     *				console.log( 'Editor was initialized', editor );
     *			} )
     *			.catch( error => {
     *				console.error( error.stack );
     *			} );
     *
     * However, you might have mistakenly imported a build instead of the source `ClassicEditor`. In this case
     * your imports will look like this:
     *
     *		import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
     *		import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
     *		import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
     *		import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
     *		import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
     *
     * This creates the same situation as in the previous section because you use a build together with source plugins.
     *
     * Remember: `@ckeditor/ckeditor5-build-*` packages contain editor builds and `@ckeditor/ckeditor5-editor-*` contain source editors.
     *
     * # Loading two or more builds on one page
     *
     * If you use CKEditor 5 builds, you might have loaded two (or more) `ckeditor.js` files on one web page.
     * Check your web page for duplicated `<script>` elements or make sure your page builder/bundler includes CKEditor only once.
     *
     * If you want to use two different types of editors at once, see the
     * {@glink installation/advanced/using-two-editors "Using two different editors"}
     * section.
     *
     * # Using outdated packages
     *
     * Building CKEditor 5 from source requires using multiple npm packages. These packages have their dependencies
     * to other packages. If you use the latest version of, for example, `@ckeditor/ckeditor5-editor-classic` with
     * an outdated version of `@ckeditor/ckeditor5-image`, npm or yarn will need to install two different versions of
     * `@ckeditor/ckeditor5-core` because `@ckeditor/ckeditor5-editor-classic` and `@ckeditor/ckeditor5-image` may require
     * different versions of the core package.
     *
     * The solution to this issue is to update all packages to their latest version. We recommend
     * using tools like [`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates) which simplify this process.
     *
     * # Conflicting version of dependencies
     *
     * This is a special case of the previous scenario. If you use CKEditor 5 with some third-party plugins,
     * it may happen that even if you use the latest versions of the official packages and the latest version of
     * these third-party packages, there will be a conflict between some of their dependencies.
     *
     * Such a problem can be resolved by either downgrading CKEditor 5 packages (which we do not recommend) or
     * asking the author of the third-party package to upgrade its depdendencies (or forking their project and doing this yourself).
     *
     * **Note:** All official CKEditor 5 packages (excluding integrations and `ckeditor5-dev-*` packages) are released in the
     * same major version. This is &mdash; in the `x.y.z`, the `x` is the same for all packages. This is the simplest way to check
     * whether you use packages coming from the same CKEditor 5 version. You can read more about versioning in the
     * {@glink support/versioning-policy Versioning policy} guide.
     *
     * # Packages were duplicated in `node_modules`
     *
     * In some situations, especially when calling `npm install` multiple times, it may happen
     * that npm will not correctly "deduplicate" packages.
     *
     * Normally, npm deduplicates all packages so, for example, `@ckeditor/ckeditor5-core` is installed only once in `node_modules/`.
     * However, it is known to fail to do so from time to time.
     *
     * We recommend checking if any of the steps listed below help:
     *
     * * `rm -rf node_modules && npm install` to make sure you have a clean `node_modules/` directory. This step
     * is known to help in most cases.
     * * If you use `yarn.lock` or `package-lock.json`, remove it before `npm install`.
     * * Check whether all CKEditor 5 packages are up to date and reinstall them
     * if you changed anything (`rm -rf node_modules && npm install`).
     *
     * If all packages are correct and compatible with each other, the steps above are known to help. If not, you may
     * try to check with `npm ls` how many times packages like `@ckeditor/ckeditor5-core`, `@ckeditor/ckeditor5-engine` and
     *`@ckeditor/ckeditor5-utils` are installed. If more than once, verify which package causes that.
     *
     * @error ckeditor-duplicated-modules
     */
    throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"]('ckeditor-duplicated-modules', null);
}
else {
    windowOrGlobal.CKEDITOR_VERSION = version;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}", "",{"version":3,"sources":["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],"names":[],"mappings":"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD0ID,CCvIE,6EACC,0DACD,CAEA,+EACC,2DAA4C,CAC5C,uEACD,CAID,qDACC,6DACD,CDhBD,6BEDC,eF2ID,CA1IA,wIEGE,qCFuIF,CA1IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAqID,CA3GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDiIA,CC9HC,yFACC,qDACD,CAEA,2FACC,sDAA4C,CAC5C,kEACD,CAID,iEACC,wDACD,CDmHA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC7IC,mDDkJD,CC/IE,2FACC,yDACD,CAEA,6FACC,0DAA4C,CAC5C,sEACD,CAID,mEACC,4DACD,CD6HD,2CAIC,wCACD,CAEA,uCAEC,eACD","sourcesContent":["/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n@import \"../../mixins/_unselectable.css\";\n\n.ck.ck-button,\na.ck.ck-button {\n\t@mixin ck-unselectable;\n\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: left;\n\n\t& .ck-button__label {\n\t\tdisplay: none;\n\t}\n\n\t&.ck-button_with-text {\n\t\t& .ck-button__label {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n\n\t/* Center the icon horizontally in a button without text. */\n\t&:not(.ck-button_with-text)  {\n\t\tjustify-content: center;\n\t}\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/**\n * Makes element unselectable.\n */\n@define-mixin ck-unselectable {\n\t-moz-user-select: none;\n\t-webkit-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n@import \"../../../mixins/_focus.css\";\n@import \"../../../mixins/_shadow.css\";\n@import \"../../../mixins/_disabled.css\";\n@import \"../../../mixins/_rounded.css\";\n@import \"../../mixins/_button.css\";\n@import \"@ckeditor/ckeditor5-ui/theme/mixins/_dir.css\";\n\n.ck.ck-button,\na.ck.ck-button {\n\t@mixin ck-button-colors --ck-color-button-default;\n\t@mixin ck-rounded-corners;\n\n\twhite-space: nowrap;\n\tcursor: default;\n\tvertical-align: middle;\n\tpadding: var(--ck-spacing-tiny);\n\ttext-align: center;\n\n\t/* A very important piece of styling. Go to variable declaration to learn more. */\n\tmin-width: var(--ck-ui-component-min-height);\n\tmin-height: var(--ck-ui-component-min-height);\n\n\t/* Normalize the height of the line. Removing this will break consistent height\n\tamong text and text-less buttons (with icons). */\n\tline-height: 1;\n\n\t/* Enable font size inheritance, which allows fluid UI scaling. */\n\tfont-size: inherit;\n\n\t/* Avoid flickering when the foucs border shows up. */\n\tborder: 1px solid transparent;\n\n\t/* Apply some smooth transition to the box-shadow and border. */\n\ttransition: box-shadow .2s ease-in-out, border .2s ease-in-out;\n\n\t/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */\n\t-webkit-appearance: none;\n\n\t&:active,\n\t&:focus {\n\t\t@mixin ck-focus-ring;\n\t\t@mixin ck-box-shadow var(--ck-focus-outer-shadow);\n\t}\n\n\t/* Allow icon coloring using the text \"color\" property. */\n\t& .ck-button__icon {\n\t\t& use,\n\t\t& use * {\n\t\t\tcolor: inherit;\n\t\t}\n\t}\n\n\t& .ck-button__label {\n\t\t/* Enable font size inheritance, which allows fluid UI scaling. */\n\t\tfont-size: inherit;\n\t\tfont-weight: inherit;\n\t\tcolor: inherit;\n\t\tcursor: inherit;\n\n\t\t/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and\n\t\twithout labels (but with icons) have different sizes in Chrome */\n\t\tvertical-align: middle;\n\n\t\t@mixin ck-dir ltr {\n\t\t\ttext-align: left;\n\t\t}\n\n\t\t@mixin ck-dir rtl {\n\t\t\ttext-align: right;\n\t\t}\n\t}\n\n\t& .ck-button__keystroke {\n\t\tcolor: inherit;\n\n\t\t@mixin ck-dir ltr {\n\t\t\tmargin-left: var(--ck-spacing-large);\n\t\t}\n\n\t\t@mixin ck-dir rtl {\n\t\t\tmargin-right: var(--ck-spacing-large);\n\t\t}\n\n\t\tfont-weight: bold;\n\t\topacity: .7;\n\t}\n\n\t/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */\n\t&.ck-disabled {\n\t\t&:active,\n\t\t&:focus {\n\t\t\t/* The disabled button should have a slightly less visible shadow when focused. */\n\t\t\t@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);\n\t\t}\n\n\t\t& .ck-button__icon {\n\t\t\t@mixin ck-disabled;\n\t\t}\n\n\t\t/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */\n\t\t& .ck-button__label {\n\t\t\t@mixin ck-disabled;\n\t\t}\n\n\t\t& .ck-button__keystroke {\n\t\t\topacity: .3;\n\t\t}\n\t}\n\n\t&.ck-button_with-text {\n\t\tpadding: var(--ck-spacing-tiny) var(--ck-spacing-standard);\n\n\t\t/* stylelint-disable-next-line no-descending-specificity */\n\t\t& .ck-button__icon {\n\t\t\t@mixin ck-dir ltr {\n\t\t\t\tmargin-left: calc(-1 * var(--ck-spacing-small));\n\t\t\t\tmargin-right: var(--ck-spacing-small);\n\t\t\t}\n\n\t\t\t@mixin ck-dir rtl {\n\t\t\t\tmargin-right: calc(-1 * var(--ck-spacing-small));\n\t\t\t\tmargin-left: var(--ck-spacing-small);\n\t\t\t}\n\t\t}\n\t}\n\n\t&.ck-button_with-keystroke {\n\t\t/* stylelint-disable-next-line no-descending-specificity */\n\t\t& .ck-button__label {\n\t\t\tflex-grow: 1;\n\t\t}\n\t}\n\n\t/* A style of the button which is currently on, e.g. its feature is active. */\n\t&.ck-on {\n\t\t@mixin ck-button-colors --ck-color-button-on;\n\t}\n\n\t&.ck-button-save {\n\t\tcolor: var(--ck-color-button-save);\n\t}\n\n\t&.ck-button-cancel {\n\t\tcolor: var(--ck-color-button-cancel);\n\t}\n}\n\n/* A style of the button which handles the primary action. */\n.ck.ck-button-action,\na.ck.ck-button-action {\n\t@mixin ck-button-colors --ck-color-button-action;\n\n\tcolor: var(--ck-color-button-action-text);\n}\n\n.ck.ck-button-bold,\na.ck.ck-button-bold {\n\tfont-weight: bold;\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/**\n * Implements a button of given background color.\n *\n * @param {String} $background - Background color of the button.\n * @param {String} $border - Border color of the button.\n */\n@define-mixin ck-button-colors $prefix {\n\tbackground: var($(prefix)-background);\n\n\t&:not(.ck-disabled) {\n\t\t&:hover {\n\t\t\tbackground: var($(prefix)-hover-background);\n\t\t}\n\n\t\t&:active {\n\t\t\tbackground: var($(prefix)-active-background);\n\t\t\tbox-shadow: inset 0 2px 2px var($(prefix)-active-shadow);\n\t\t}\n\t}\n\n\t/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */\n\t&.ck-disabled {\n\t\tbackground: var($(prefix)-disabled-background);\n\t}\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/**\n * Implements rounded corner interface for .ck-rounded-corners class.\n *\n * @see $ck-border-radius\n */\n@define-mixin ck-rounded-corners {\n\tborder-radius: 0;\n\n\t@nest .ck-rounded-corners &,\n\t&.ck-rounded-corners {\n\t\tborder-radius: var(--ck-border-radius);\n\t\t@mixin-content;\n\t}\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/**\n * A visual style of focused element's border.\n */\n@define-mixin ck-focus-ring {\n\t/* Disable native outline. */\n\toutline: none;\n\tborder: var(--ck-focus-ring)\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/**\n * A helper to combine multiple shadows.\n */\n@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {\n\tbox-shadow: $shadowA, $shadowB;\n}\n\n/**\n * Gives an element a drop shadow so it looks like a floating panel.\n */\n@define-mixin ck-drop-shadow {\n\t@mixin ck-box-shadow var(--ck-drop-shadow);\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/**\n * A class which indicates that an element holding it is disabled.\n */\n@define-mixin ck-disabled {\n\topacity: var(--ck-disabled-opacity);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}", "",{"version":3,"sources":["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],"names":[],"mappings":"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAY1B,qBAcD,CAZC,0BARA,aAAc,CAGd,cAgBA,CAJC,yBAEC,iBACD","sourcesContent":["/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n.ck.ck-icon {\n\tvertical-align: middle;\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n:root {\n\t--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));\n}\n\n.ck.ck-icon {\n\twidth: var(--ck-icon-size);\n\theight: var(--ck-icon-size);\n\n\t/* Multiplied by the height of the line in \"px\" should give SVG \"viewport\" dimensions */\n\tfont-size: .8333350694em;\n\n\tcolor: inherit;\n\n\t/* Inherit cursor style (#5). */\n\tcursor: inherit;\n\n\t/* This will prevent blurry icons on Firefox. See #340. */\n\twill-change: transform;\n\n\t& * {\n\t\t/* Inherit cursor style (#5). */\n\t\tcursor: inherit;\n\n\t\t/* Allows dynamic coloring of the icons. */\n\t\tcolor: inherit;\n\n\t\t&:not([fill]) {\n\t\t\t/* Needed by FF. */\n\t\t\tfill: currentColor;\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@ckeditor/ckeditor5-ui/theme/globals/globals.css":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@ckeditor/ckeditor5-ui/theme/globals/globals.css ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}", "",{"version":3,"sources":["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_hidden.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_zindex.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_transition.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],"names":[],"mappings":"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAgD,CAChD,8BAAmD,CACnD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAmD,CACnD,oCAAuD,CACvD,6BAAkD,CAIlD,+CAAwD,CACxD,qEAA+E,CAC/E,qCAAwD,CACxD,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAA+D,CAC/D,mDAAgE,CAChE,+CAA6D,CAC7D,yDAA8D,CAE9D,uCAAuD,CACvD,6CAA4D,CAC5D,8CAA4D,CAC5D,0CAAyD,CACzD,gDAA8D,CAE9D,+DAAsE,CACtE,iDAAkE,CAClE,kDAAkE,CAClE,8CAA+D,CAC/D,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA4D,CAC5D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAmE,CACnE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,+BAAiD,CACjD,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,wCAAwD,CACxD,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,gEAAuE,CACvE,4EAAiF,CACjF,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CCpGhE,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJoGD,CI9FA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD","sourcesContent":["/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/**\n * A class which hides an element in DOM.\n */\n.ck-hidden {\n\t/* Override selector specificity. Otherwise, all elements with some display\n\tstyle defined will override this one, which is not a desired result. */\n\tdisplay: none !important;\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n.ck.ck-reset,\n.ck.ck-reset_all,\n.ck-reset_all *:not(.ck-reset_all-excluded *) {\n\tbox-sizing: border-box;\n\twidth: auto;\n\theight: auto;\n\tposition: static;\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n:root {\n\t--ck-z-default: 1;\n\t--ck-z-modal: calc( var(--ck-z-default) + 999 );\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/**\n * A class that disables all transitions of the element and its children.\n */\n.ck-transitions-disabled,\n.ck-transitions-disabled * {\n\ttransition: none !important;\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n:root {\n\t--ck-color-base-foreground: \t\t\t\t\t\t\t\thsl(0, 0%, 98%);\n\t--ck-color-base-background: \t\t\t\t\t\t\t\thsl(0, 0%, 100%);\n\t--ck-color-base-border: \t\t\t\t\t\t\t\t\thsl(0, 0%, 77%);\n\t--ck-color-base-action: \t\t\t\t\t\t\t\t\thsl(104, 44%, 48%);\n\t--ck-color-base-focus: \t\t\t\t\t\t\t\t\t\thsl(209, 92%, 70%);\n\t--ck-color-base-text: \t\t\t\t\t\t\t\t\t\thsl(0, 0%, 20%);\n\t--ck-color-base-active: \t\t\t\t\t\t\t\t\thsl(208, 88%, 52%);\n\t--ck-color-base-active-focus:\t\t\t\t\t\t\t\thsl(208, 88%, 47%);\n\t--ck-color-base-error:\t\t\t\t\t\t\t\t\t\thsl(15, 100%, 43%);\n\n\t/* -- Generic colors ------------------------------------------------------------------------ */\n\n\t--ck-color-focus-border-coordinates: \t\t\t\t\t\t208, 79%, 51%;\n\t--ck-color-focus-border: \t\t\t\t\t\t\t\t\thsl(var(--ck-color-focus-border-coordinates));\n\t--ck-color-focus-outer-shadow:\t\t\t\t\t\t\t\thsl(207, 89%, 86%);\n\t--ck-color-focus-disabled-shadow:\t\t\t\t\t\t\thsla(209, 90%, 72%,.3);\n\t--ck-color-focus-error-shadow:\t\t\t\t\t\t\t\thsla(9,100%,56%,.3);\n\t--ck-color-text: \t\t\t\t\t\t\t\t\t\t\tvar(--ck-color-base-text);\n\t--ck-color-shadow-drop: \t\t\t\t\t\t\t\t\thsla(0, 0%, 0%, 0.15);\n\t--ck-color-shadow-drop-active:\t\t\t\t\t\t\t\thsla(0, 0%, 0%, 0.2);\n\t--ck-color-shadow-inner: \t\t\t\t\t\t\t\t\thsla(0, 0%, 0%, 0.1);\n\n\t/* -- Buttons ------------------------------------------------------------------------------- */\n\n\t--ck-color-button-default-background: \t\t\t\t\t\ttransparent;\n\t--ck-color-button-default-hover-background: \t\t\t\thsl(0, 0%, 90%);\n\t--ck-color-button-default-active-background: \t\t\t\thsl(0, 0%, 85%);\n\t--ck-color-button-default-active-shadow: \t\t\t\t\thsl(0, 0%, 75%);\n\t--ck-color-button-default-disabled-background: \t\t\t\ttransparent;\n\n\t--ck-color-button-on-background: \t\t\t\t\t\t\thsl(0, 0%, 87%);\n\t--ck-color-button-on-hover-background: \t\t\t\t\t\thsl(0, 0%, 77%);\n\t--ck-color-button-on-active-background: \t\t\t\t\thsl(0, 0%, 73%);\n\t--ck-color-button-on-active-shadow: \t\t\t\t\t\thsl(0, 0%, 63%);\n\t--ck-color-button-on-disabled-background: \t\t\t\t\thsl(0, 0%, 87%);\n\n\t--ck-color-button-action-background: \t\t\t\t\t\tvar(--ck-color-base-action);\n\t--ck-color-button-action-hover-background: \t\t\t\t\thsl(104, 44%, 43%);\n\t--ck-color-button-action-active-background: \t\t\t\thsl(104, 44%, 41%);\n\t--ck-color-button-action-active-shadow: \t\t\t\t\thsl(104, 44%, 36%);\n\t--ck-color-button-action-disabled-background: \t\t\t\thsl(104, 44%, 58%);\n\t--ck-color-button-action-text: \t\t\t\t\t\t\t\tvar(--ck-color-base-background);\n\n\t--ck-color-button-save: \t\t\t\t\t\t\t\t\thsl(120, 100%, 27%);\n\t--ck-color-button-cancel: \t\t\t\t\t\t\t\t\thsl(15, 100%, 43%);\n\n\t--ck-color-switch-button-off-background:\t\t\t\t\thsl(0, 0%, 69%);\n\t--ck-color-switch-button-off-hover-background:\t\t\t\thsl(0, 0%, 64%);\n\t--ck-color-switch-button-on-background:\t\t\t\t\t\tvar(--ck-color-button-action-background);\n\t--ck-color-switch-button-on-hover-background:\t\t\t\thsl(104, 44%, 43%);\n\t--ck-color-switch-button-inner-background:\t\t\t\t\tvar(--ck-color-base-background);\n\t--ck-color-switch-button-inner-shadow:\t\t\t\t\t\thsla(0, 0%, 0%, 0.1);\n\n\t/* -- Dropdown ------------------------------------------------------------------------------ */\n\n\t--ck-color-dropdown-panel-background: \t\t\t\t\t\tvar(--ck-color-base-background);\n\t--ck-color-dropdown-panel-border: \t\t\t\t\t\t\tvar(--ck-color-base-border);\n\n\t/* -- Input --------------------------------------------------------------------------------- */\n\n\t--ck-color-input-background: \t\t\t\t\t\t\t\tvar(--ck-color-base-background);\n\t--ck-color-input-border: \t\t\t\t\t\t\t\t\thsl(0, 0%, 78%);\n\t--ck-color-input-error-border:\t\t\t\t\t\t\t\tvar(--ck-color-base-error);\n\t--ck-color-input-text: \t\t\t\t\t\t\t\t\t\tvar(--ck-color-base-text);\n\t--ck-color-input-disabled-background: \t\t\t\t\t\thsl(0, 0%, 95%);\n\t--ck-color-input-disabled-border: \t\t\t\t\t\t\thsl(0, 0%, 78%);\n\t--ck-color-input-disabled-text: \t\t\t\t\t\t\thsl(0, 0%, 46%);\n\n\t/* -- List ---------------------------------------------------------------------------------- */\n\n\t--ck-color-list-background: \t\t\t\t\t\t\t\tvar(--ck-color-base-background);\n\t--ck-color-list-button-hover-background: \t\t\t\t\tvar(--ck-color-button-default-hover-background);\n\t--ck-color-list-button-on-background: \t\t\t\t\t\tvar(--ck-color-base-active);\n\t--ck-color-list-button-on-background-focus: \t\t\t\tvar(--ck-color-base-active-focus);\n\t--ck-color-list-button-on-text:\t\t\t\t\t\t\t\tvar(--ck-color-base-background);\n\n\t/* -- Panel --------------------------------------------------------------------------------- */\n\n\t--ck-color-panel-background: \t\t\t\t\t\t\t\tvar(--ck-color-base-background);\n\t--ck-color-panel-border: \t\t\t\t\t\t\t\t\tvar(--ck-color-base-border);\n\n\t/* -- Toolbar ------------------------------------------------------------------------------- */\n\n\t--ck-color-toolbar-background: \t\t\t\t\t\t\t\tvar(--ck-color-base-foreground);\n\t--ck-color-toolbar-border: \t\t\t\t\t\t\t\t\tvar(--ck-color-base-border);\n\n\t/* -- Tooltip ------------------------------------------------------------------------------- */\n\n\t--ck-color-tooltip-background: \t\t\t\t\t\t\t\tvar(--ck-color-base-text);\n\t--ck-color-tooltip-text: \t\t\t\t\t\t\t\t\tvar(--ck-color-base-background);\n\n\t/* -- Engine -------------------------------------------------------------------------------- */\n\n\t--ck-color-engine-placeholder-text: \t\t\t\t\t\thsl(0, 0%, 44%);\n\n\t/* -- Upload -------------------------------------------------------------------------------- */\n\n\t--ck-color-upload-bar-background:\t\t \t\t\t\t\thsl(209, 92%, 70%);\n\n\t/* -- Link -------------------------------------------------------------------------------- */\n\n\t--ck-color-link-default:\t\t\t\t\t\t\t\t\thsl(240, 100%, 47%);\n\t--ck-color-link-selected-background:\t\t\t\t\t\thsla(201, 100%, 56%, 0.1);\n\t--ck-color-link-fake-selection:\t\t\t\t\t\t\t\thsla(201, 100%, 56%, 0.3);\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n:root {\n\t/**\n\t * An opacity value of disabled UI item.\n\t */\n\t--ck-disabled-opacity: .5;\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n:root {\n\t/**\n\t * The geometry of the of focused element's outer shadow.\n\t */\n\t--ck-focus-outer-shadow-geometry: 0 0 0 3px;\n\n\t/**\n\t * A visual style of focused element's outer shadow.\n\t */\n\t--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);\n\n\t/**\n\t * A visual style of focused element's outer shadow (when disabled).\n\t */\n\t--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);\n\n\t/**\n\t * A visual style of focused element's outer shadow (when has errors).\n\t */\n\t--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);\n\n\t/**\n\t * A visual style of focused element's border or outline.\n\t */\n\t--ck-focus-ring: 1px solid var(--ck-color-focus-border);\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n:root {\n\t--ck-font-size-base: 13px;\n\t--ck-line-height-base: 1.84615;\n\t--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;\n\n\t--ck-font-size-tiny: 0.7em;\n\t--ck-font-size-small: 0.75em;\n\t--ck-font-size-normal: 1em;\n\t--ck-font-size-big: 1.4em;\n\t--ck-font-size-large: 1.8em;\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n:root {\n\t/* This is super-important. This is **manually** adjusted so a button without an icon\n\tis never smaller than a button with icon, additionally making sure that text-less buttons\n\tare perfect squares. The value is also shared by other components which should stay \"in-line\"\n\twith buttons. */\n\t--ck-ui-component-min-height: 2.3em;\n}\n\n/**\n * Resets an element, ignoring its children.\n */\n.ck.ck-reset,\n.ck.ck-reset_all,\n.ck-reset_all *:not(.ck-reset_all-excluded *) {\n\t/* Do not include inheritable rules here. */\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: transparent;\n\ttext-decoration: none;\n\tvertical-align: middle;\n\ttransition: none;\n\n\t/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */\n\tword-wrap: break-word;\n}\n\n/**\n * Resets an element AND its children.\n */\n.ck.ck-reset_all,\n.ck-reset_all *:not(.ck-reset_all-excluded *) {\n\t/* These are rule inherited by all children elements. */\n\tborder-collapse: collapse;\n\tfont: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);\n\tcolor: var(--ck-color-text);\n\ttext-align: left;\n\twhite-space: nowrap;\n\tcursor: auto;\n\tfloat: none;\n}\n\n.ck-reset_all {\n\t& .ck-rtl *:not(.ck-reset_all-excluded *) {\n\t\ttext-align: right;\n\t}\n\n\t& iframe:not(.ck-reset_all-excluded *) {\n\t\t/* For IE */\n\t\tvertical-align: inherit;\n\t}\n\n\t& textarea:not(.ck-reset_all-excluded *) {\n\t\twhite-space: pre-wrap;\n\t}\n\n\t& textarea:not(.ck-reset_all-excluded *),\n\t& input[type=\"text\"]:not(.ck-reset_all-excluded *),\n\t& input[type=\"password\"]:not(.ck-reset_all-excluded *) {\n\t\tcursor: text;\n\t}\n\n\t& textarea[disabled]:not(.ck-reset_all-excluded *),\n\t& input[type=\"text\"][disabled]:not(.ck-reset_all-excluded *),\n\t& input[type=\"password\"][disabled]:not(.ck-reset_all-excluded *) {\n\t\tcursor: default;\n\t}\n\n\t& fieldset:not(.ck-reset_all-excluded *) {\n\t\tpadding: 10px;\n\t\tborder: 2px groove hsl(255, 7%, 88%);\n\t}\n\n\t& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {\n\t\t/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */\n\t\tpadding: 0;\n\t\tborder: 0\n\t}\n}\n\n/**\n * Default UI rules for RTL languages.\n */\n.ck[dir=\"rtl\"],\n.ck[dir=\"rtl\"] .ck {\n\ttext-align: right;\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/**\n * Default border-radius value.\n */\n:root{\n\t--ck-border-radius: 2px;\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n:root {\n\t/**\n\t * A visual style of element's inner shadow (i.e. input).\n\t */\n\t--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;\n\n\t/**\n\t * A visual style of element's drop shadow (i.e. panel).\n\t */\n\t--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);\n\n\t/**\n\t * A visual style of element's active shadow (i.e. comment or suggestion).\n\t */\n\t--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);\n}\n","/*\n * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n:root {\n\t--ck-spacing-unit: \t\t\t\t\t\t0.6em;\n\t--ck-spacing-large: \t\t\t\t\tcalc(var(--ck-spacing-unit) * 1.5);\n\t--ck-spacing-standard: \t\t\t\t\tvar(--ck-spacing-unit);\n\t--ck-spacing-medium: \t\t\t\t\tcalc(var(--ck-spacing-unit) * 0.8);\n\t--ck-spacing-small: \t\t\t\t\tcalc(var(--ck-spacing-unit) * 0.5);\n\t--ck-spacing-tiny: \t\t\t\t\t\tcalc(var(--ck-spacing-unit) * 0.3);\n\t--ck-spacing-extra-tiny: \t\t\t\tcalc(var(--ck-spacing-unit) * 0.16);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-core/theme/icons/image.svg":
/*!*********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-core/theme/icons/image.svg ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z\"/></svg>");

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css":
/*!********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/singletonStyleDomAPI.js */ "./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_button_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../../css-loader/dist/cjs.js!../../../../../postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./button.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"data-cke":true}};

;
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_button_css__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_button_css__WEBPACK_IMPORTED_MODULE_5__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_button_css__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_button_css__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/singletonStyleDomAPI.js */ "./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../../css-loader/dist/cjs.js!../../../../../postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./icon.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"data-cke":true}};

;
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_css__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_css__WEBPACK_IMPORTED_MODULE_5__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_css__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_css__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/theme/globals/globals.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/theme/globals/globals.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/singletonStyleDomAPI.js */ "./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./globals.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@ckeditor/ckeditor5-ui/theme/globals/globals.css");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"data-cke":true}};

;
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_globals_css__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_globals_css__WEBPACK_IMPORTED_MODULE_5__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_globals_css__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_globals_css__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js ***!
  \***************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement, attributes) {
  Object.keys(attributes).forEach(function (key) {
    styleElement.setAttribute(key, attributes[key]);
  });
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js":
/*!************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js ***!
  \************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join("\n");
  };
}();
/* istanbul ignore next  */


function apply(styleElement, index, remove, obj) {
  var css;

  if (remove) {
    css = "";
  } else {
    css = "";

    if (obj.supports) {
      css += "@supports (".concat(obj.supports, ") {");
    }

    if (obj.media) {
      css += "@media ".concat(obj.media, " {");
    }

    var needLayer = typeof obj.layer !== "undefined";

    if (needLayer) {
      css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
    }

    css += obj.css;

    if (needLayer) {
      css += "}";
    }

    if (obj.media) {
      css += "}";
    }

    if (obj.supports) {
      css += "}";
    }
  } // For old IE

  /* istanbul ignore if  */


  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = styleElement.childNodes;

    if (childNodes[index]) {
      styleElement.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index]);
    } else {
      styleElement.appendChild(cssNode);
    }
  }
}

var singletonData = {
  singleton: null,
  singletonCounter: 0
};
/* istanbul ignore next  */

function domAPI(options) {
  // eslint-disable-next-line no-undef,no-use-before-define
  var styleIndex = singletonData.singletonCounter++;
  var styleElement = // eslint-disable-next-line no-undef,no-use-before-define
  singletonData.singleton || ( // eslint-disable-next-line no-undef,no-use-before-define
  singletonData.singleton = options.insertStyleElement(options));
  return {
    update: function update(obj) {
      apply(styleElement, styleIndex, false, obj);
    },
    remove: function remove(obj) {
      apply(styleElement, styleIndex, true, obj);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/lodash-es/_DataView.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_DataView.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var DataView = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataView);


/***/ }),

/***/ "./node_modules/lodash-es/_Hash.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_Hash.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear.js */ "./node_modules/lodash-es/_hashClear.js");
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete.js */ "./node_modules/lodash-es/_hashDelete.js");
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet.js */ "./node_modules/lodash-es/_hashGet.js");
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas.js */ "./node_modules/lodash-es/_hashHas.js");
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet.js */ "./node_modules/lodash-es/_hashSet.js");






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hash);


/***/ }),

/***/ "./node_modules/lodash-es/_ListCache.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_ListCache.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear.js */ "./node_modules/lodash-es/_listCacheClear.js");
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete.js */ "./node_modules/lodash-es/_listCacheDelete.js");
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet.js */ "./node_modules/lodash-es/_listCacheGet.js");
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas.js */ "./node_modules/lodash-es/_listCacheHas.js");
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet.js */ "./node_modules/lodash-es/_listCacheSet.js");






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Map.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Map.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ }),

/***/ "./node_modules/lodash-es/_MapCache.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_MapCache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear.js */ "./node_modules/lodash-es/_mapCacheClear.js");
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete.js */ "./node_modules/lodash-es/_mapCacheDelete.js");
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet.js */ "./node_modules/lodash-es/_mapCacheGet.js");
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas.js */ "./node_modules/lodash-es/_mapCacheHas.js");
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet.js */ "./node_modules/lodash-es/_mapCacheSet.js");






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Promise.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_Promise.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Promise = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);


/***/ }),

/***/ "./node_modules/lodash-es/_Set.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Set.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Set = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Set);


/***/ }),

/***/ "./node_modules/lodash-es/_Stack.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_Stack.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _stackClear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stackClear.js */ "./node_modules/lodash-es/_stackClear.js");
/* harmony import */ var _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stackDelete.js */ "./node_modules/lodash-es/_stackDelete.js");
/* harmony import */ var _stackGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stackGet.js */ "./node_modules/lodash-es/_stackGet.js");
/* harmony import */ var _stackHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stackHas.js */ "./node_modules/lodash-es/_stackHas.js");
/* harmony import */ var _stackSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stackSet.js */ "./node_modules/lodash-es/_stackSet.js");







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Stack.prototype['delete'] = _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Stack.prototype.get = _stackGet_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Stack.prototype.has = _stackHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
Stack.prototype.set = _stackSet_js__WEBPACK_IMPORTED_MODULE_5__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);


/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_Uint8Array.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_Uint8Array.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Uint8Array;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Uint8Array);


/***/ }),

/***/ "./node_modules/lodash-es/_WeakMap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_WeakMap.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var WeakMap = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeakMap);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayEach.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayEach.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayEach);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayFilter.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayFilter.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayFilter);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayLikeKeys.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_arrayLikeKeys.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTimes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseTimes.js */ "./node_modules/lodash-es/_baseTimes.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/lodash-es/isTypedArray.js");







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
      isArg = !isArr && (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value),
      isBuff = !isArr && !isArg && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
      isType = !isArr && !isArg && !isBuff && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? (0,_baseTimes_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_5__["default"])(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayLikeKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayPush.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayPush.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayPush);


/***/ }),

/***/ "./node_modules/lodash-es/_assignValue.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_assignValue.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objValue, value)) ||
      (value === undefined && !(key in object))) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, value);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignValue);


/***/ }),

/***/ "./node_modules/lodash-es/_assocIndexOf.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_assocIndexOf.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assocIndexOf);


/***/ }),

/***/ "./node_modules/lodash-es/_baseAssign.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseAssign.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssign);


/***/ }),

/***/ "./node_modules/lodash-es/_baseAssignIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignIn);


/***/ }),

/***/ "./node_modules/lodash-es/_baseAssignValue.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignValue.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ "./node_modules/lodash-es/_defineProperty.js");


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignValue);


/***/ }),

/***/ "./node_modules/lodash-es/_baseClone.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseClone.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_Stack.js */ "./node_modules/lodash-es/_Stack.js");
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_arrayEach.js */ "./node_modules/lodash-es/_arrayEach.js");
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_assignValue.js */ "./node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _baseAssign_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_baseAssign.js */ "./node_modules/lodash-es/_baseAssign.js");
/* harmony import */ var _baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_baseAssignIn.js */ "./node_modules/lodash-es/_baseAssignIn.js");
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_cloneBuffer.js */ "./node_modules/lodash-es/_cloneBuffer.js");
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_copyArray.js */ "./node_modules/lodash-es/_copyArray.js");
/* harmony import */ var _copySymbols_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_copySymbols.js */ "./node_modules/lodash-es/_copySymbols.js");
/* harmony import */ var _copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_copySymbolsIn.js */ "./node_modules/lodash-es/_copySymbolsIn.js");
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_getAllKeys.js */ "./node_modules/lodash-es/_getAllKeys.js");
/* harmony import */ var _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_getAllKeysIn.js */ "./node_modules/lodash-es/_getAllKeysIn.js");
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/lodash-es/_getTag.js");
/* harmony import */ var _initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_initCloneArray.js */ "./node_modules/lodash-es/_initCloneArray.js");
/* harmony import */ var _initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_initCloneByTag.js */ "./node_modules/lodash-es/_initCloneByTag.js");
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_initCloneObject.js */ "./node_modules/lodash-es/_initCloneObject.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isMap.js */ "./node_modules/lodash-es/isMap.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isSet.js */ "./node_modules/lodash-es/isSet.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (isArr) {
    result = (0,_initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
    if (!isDeep) {
      return (0,_copyArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value, result);
    }
  } else {
    var tag = (0,_getTag_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value),
        isFunc = tag == funcTag || tag == genTag;

    if ((0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value)) {
      return (0,_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : (0,_initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value);
      if (!isDeep) {
        return isFlat
          ? (0,_copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__["default"])(value, (0,_baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__["default"])(result, value))
          : (0,_copySymbols_js__WEBPACK_IMPORTED_MODULE_10__["default"])(value, (0,_baseAssign_js__WEBPACK_IMPORTED_MODULE_11__["default"])(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = (0,_initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__["default"])(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if ((0,_isSet_js__WEBPACK_IMPORTED_MODULE_14__["default"])(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if ((0,_isMap_js__WEBPACK_IMPORTED_MODULE_15__["default"])(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__["default"] : _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__["default"])
    : (isFlat ? _keysIn_js__WEBPACK_IMPORTED_MODULE_18__["default"] : _keys_js__WEBPACK_IMPORTED_MODULE_19__["default"]);

  var props = isArr ? undefined : keysFunc(value);
  (0,_arrayEach_js__WEBPACK_IMPORTED_MODULE_20__["default"])(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_21__["default"])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseClone);


/***/ }),

/***/ "./node_modules/lodash-es/_baseCreate.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseCreate.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseCreate);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetAllKeys.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseGetAllKeys.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? result : (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, symbolsFunc(object));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetAllKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsArguments.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsArguments.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == argsTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsArguments);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsMap.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsMap.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == mapTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsMap);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsNative.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNative.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ "./node_modules/lodash-es/_isMasked.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ "./node_modules/lodash-es/_toSource.js");





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNative);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsSet.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == setTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsSet);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsTypedArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) &&
    (0,_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/_baseKeys.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeys.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ "./node_modules/lodash-es/_nativeKeys.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_baseKeysIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeysIn.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeysIn.js */ "./node_modules/lodash-es/_nativeKeysIn.js");




/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var isProto = (0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeysIn);


/***/ }),

/***/ "./node_modules/lodash-es/_baseTimes.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseTimes.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTimes);


/***/ }),

/***/ "./node_modules/lodash-es/_baseUnary.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseUnary.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUnary);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneArrayBuffer.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneArrayBuffer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Uint8Array.js */ "./node_modules/lodash-es/_Uint8Array.js");


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](result).set(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](arrayBuffer));
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneArrayBuffer);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneBuffer.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneBuffer.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneBuffer);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneDataView.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_cloneDataView.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDataView);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneRegExp.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneRegExp.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneRegExp);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneSymbol.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneSymbol.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneSymbol);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneTypedArray.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneTypedArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/_copyArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_copyArray.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyArray);


/***/ }),

/***/ "./node_modules/lodash-es/_copyObject.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_copyObject.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assignValue.js */ "./node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
    } else {
      (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyObject);


/***/ }),

/***/ "./node_modules/lodash-es/_copySymbols.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbols.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbols);


/***/ }),

/***/ "./node_modules/lodash-es/_copySymbolsIn.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbolsIn.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ "./node_modules/lodash-es/_getSymbolsIn.js");



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbolsIn);


/***/ }),

/***/ "./node_modules/lodash-es/_coreJsData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_coreJsData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]["__core-js_shared__"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreJsData);


/***/ }),

/***/ "./node_modules/lodash-es/_defineProperty.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_defineProperty.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");


var defineProperty = (function() {
  try {
    var func = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProperty);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);


/***/ }),

/***/ "./node_modules/lodash-es/_getAllKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ "./node_modules/lodash-es/_baseGetAllKeys.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_getAllKeysIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeysIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ "./node_modules/lodash-es/_baseGetAllKeys.js");
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbolsIn.js */ "./node_modules/lodash-es/_getSymbolsIn.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeysIn);


/***/ }),

/***/ "./node_modules/lodash-es/_getMapData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getMapData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable.js */ "./node_modules/lodash-es/_isKeyable.js");


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return (0,_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMapData);


/***/ }),

/***/ "./node_modules/lodash-es/_getNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getNative.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsNative.js */ "./node_modules/lodash-es/_baseIsNative.js");
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getValue.js */ "./node_modules/lodash-es/_getValue.js");



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0,_getValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key);
  return (0,_baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? value : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNative);


/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");


/** Built-in value references. */
var getPrototype = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);


/***/ }),

/***/ "./node_modules/lodash-es/_getSymbols.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getSymbols.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayFilter.js */ "./node_modules/lodash-es/_arrayFilter.js");
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ "./node_modules/lodash-es/stubArray.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return (0,_arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbols);


/***/ }),

/***/ "./node_modules/lodash-es/_getSymbolsIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getSymbolsIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ "./node_modules/lodash-es/stubArray.js");





/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(object) {
  var result = [];
  while (object) {
    (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object));
    object = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);
  }
  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbolsIn);


/***/ }),

/***/ "./node_modules/lodash-es/_getTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_getTag.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_DataView.js */ "./node_modules/lodash-es/_DataView.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Promise.js */ "./node_modules/lodash-es/_Promise.js");
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Set.js */ "./node_modules/lodash-es/_Set.js");
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_WeakMap.js */ "./node_modules/lodash-es/_WeakMap.js");
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toSource.js */ "./node_modules/lodash-es/_toSource.js");








/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    mapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    promiseCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
    setCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
    weakMapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"](new ArrayBuffer(1))) != dataViewTag) ||
    (_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]) != mapTag) ||
    (_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"].resolve()) != promiseTag) ||
    (_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]) != setTag) ||
    (_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]) != weakMapTag)) {
  getTag = function(value) {
    var result = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);


/***/ }),

/***/ "./node_modules/lodash-es/_getValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_getValue.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValue);


/***/ }),

/***/ "./node_modules/lodash-es/_hashClear.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_hashClear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (0,_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null) : {};
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashClear);


/***/ }),

/***/ "./node_modules/lodash-es/_hashDelete.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hashDelete.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_hashGet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashGet);


/***/ }),

/***/ "./node_modules/lodash-es/_hashHas.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashHas.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashHas);


/***/ }),

/***/ "./node_modules/lodash-es/_hashSet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashSet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashSet);


/***/ }),

/***/ "./node_modules/lodash-es/_initCloneArray.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneArray.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneArray);


/***/ }),

/***/ "./node_modules/lodash-es/_initCloneByTag.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneByTag.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");
/* harmony import */ var _cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cloneDataView.js */ "./node_modules/lodash-es/_cloneDataView.js");
/* harmony import */ var _cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cloneRegExp.js */ "./node_modules/lodash-es/_cloneRegExp.js");
/* harmony import */ var _cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cloneSymbol.js */ "./node_modules/lodash-es/_cloneSymbol.js");
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cloneTypedArray.js */ "./node_modules/lodash-es/_cloneTypedArray.js");






/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return (0,_cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return (0,_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return (0,_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return (0,_cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneByTag);


/***/ }),

/***/ "./node_modules/lodash-es/_initCloneObject.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneObject.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/lodash-es/_baseCreate.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object))
    ? (0,_baseCreate_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object))
    : {};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneObject);


/***/ }),

/***/ "./node_modules/lodash-es/_isIndex.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_isIndex.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_isKeyable.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_isKeyable.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKeyable);


/***/ }),

/***/ "./node_modules/lodash-es/_isMasked.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_isMasked.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ "./node_modules/lodash-es/_coreJsData.js");


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMasked);


/***/ }),

/***/ "./node_modules/lodash-es/_isPrototype.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_isPrototype.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheClear.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheClear.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheClear);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheDelete.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheDelete.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheGet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheGet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheGet);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheHas.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheHas.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__data__, key) > -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheSet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheSet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheSet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheClear.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheClear.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash.js */ "./node_modules/lodash-es/_Hash.js");
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || _ListCache_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheClear);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheDelete.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheDelete.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheGet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheGet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).get(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheGet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheHas.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheHas.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).has(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheSet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheSet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheSet);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeCreate.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeCreate.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");


/* Built-in method references that are verified to be native. */
var nativeCreate = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'create');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeCreate);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeKeysIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeysIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeysIn);


/***/ }),

/***/ "./node_modules/lodash-es/_nodeUtil.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_nodeUtil.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeUtil);


/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);


/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overArg);


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);


/***/ }),

/***/ "./node_modules/lodash-es/_stackClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_stackClear.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackClear);


/***/ }),

/***/ "./node_modules/lodash-es/_stackDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_stackDelete.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_stackGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackGet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackGet);


/***/ }),

/***/ "./node_modules/lodash-es/_stackHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackHas.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackHas);


/***/ }),

/***/ "./node_modules/lodash-es/_stackSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackSet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var pairs = data.__data__;
    if (!_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_2__["default"](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackSet);


/***/ }),

/***/ "./node_modules/lodash-es/_toSource.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_toSource.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toSource);


/***/ }),

/***/ "./node_modules/lodash-es/cloneDeepWith.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/cloneDeepWith.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone.js */ "./node_modules/lodash-es/_baseClone.js");


/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.cloneWith` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the deep cloned value.
 * @see _.cloneWith
 * @example
 *
 * function customizer(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(true);
 *   }
 * }
 *
 * var el = _.cloneDeepWith(document.body, customizer);
 *
 * console.log(el === document.body);
 * // => false
 * console.log(el.nodeName);
 * // => 'BODY'
 * console.log(el.childNodes.length);
 * // => 20
 */
function cloneDeepWith(value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return (0,_baseClone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDeepWith);


/***/ }),

/***/ "./node_modules/lodash-es/eq.js":
/*!**************************************!*\
  !*** ./node_modules/lodash-es/eq.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eq);


/***/ }),

/***/ "./node_modules/lodash-es/isArguments.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArguments.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ "./node_modules/lodash-es/_baseIsArguments.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = (0,_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function() { return arguments; }()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArguments);


/***/ }),

/***/ "./node_modules/lodash-es/isArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);


/***/ }),

/***/ "./node_modules/lodash-es/isArrayLike.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArrayLike.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length) && !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLike);


/***/ }),

/***/ "./node_modules/lodash-es/isBuffer.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isBuffer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ "./node_modules/lodash-es/stubFalse.js");



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBuffer);


/***/ }),

/***/ "./node_modules/lodash-es/isFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/isFunction.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);


/***/ }),

/***/ "./node_modules/lodash-es/isLength.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isLength.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLength);


/***/ }),

/***/ "./node_modules/lodash-es/isMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isMap.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsMap.js */ "./node_modules/lodash-es/_baseIsMap.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsMap = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsMap) : _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMap);


/***/ }),

/***/ "./node_modules/lodash-es/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isSet.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsSet.js */ "./node_modules/lodash-es/_baseIsSet.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsSet = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsSet) : _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSet);


/***/ }),

/***/ "./node_modules/lodash-es/isTypedArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isTypedArray.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ "./node_modules/lodash-es/_baseIsTypedArray.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/keys.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/keys.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeys.js */ "./node_modules/lodash-es/_baseKeys.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) : (0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);


/***/ }),

/***/ "./node_modules/lodash-es/keysIn.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/keysIn.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeysIn.js */ "./node_modules/lodash-es/_baseKeysIn.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, true) : (0,_baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysIn);


/***/ }),

/***/ "./node_modules/lodash-es/stubArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubArray.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubArray);


/***/ }),

/***/ "./node_modules/lodash-es/stubFalse.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubFalse.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubFalse);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/*!**********************************************!*\
  !*** ./assets/ckeditor-orchardcore-media.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InsertOrchardCoreMedia)
/* harmony export */ });
/* harmony import */ var _ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-core/src/plugin */ "./node_modules/@ckeditor/ckeditor5-core/src/plugin.js");
/* harmony import */ var _ckeditor_ckeditor5_core_theme_icons_image_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-core/theme/icons/image.svg */ "./node_modules/@ckeditor/ckeditor5-core/theme/icons/image.svg");
/* harmony import */ var _ckeditor_ckeditor5_ui_src_button_buttonview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-ui/src/button/buttonview */ "./node_modules/@ckeditor/ckeditor5-ui/src/button/buttonview.js");





class InsertOrchardCoreMedia extends _ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_0__["default"] {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'insertImage', locale => {
            const view = new _ckeditor_ckeditor5_ui_src_button_buttonview__WEBPACK_IMPORTED_MODULE_2__["default"]( locale );

            view.set( {
                label: 'Insert image',
                icon: _ckeditor_ckeditor5_core_theme_icons_image_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                // It doesn't matter which modal is bound to, so long as its only one, and is unbound later.
                var modalSelector = '#mediaModalBody';
                var selectButtonSelector = '#mediaBodySelectButton';
                var modal = $('#mediaModalBody');
                if (modal.length === 0)
                {
                    modalSelector = '#mediaModalHtmlField';
                    selectButtonSelector = '#mediaHtmlFieldSelectButton';
                }

                function appendMedia (){
                    var content = '';
                    
                    for (i = 0; i < mediaApp.selectedMedias.length; i++) {
                        var mediaBodyContent = ' [image]' + mediaApp.selectedMedias[i].mediaPath + '[/image]';
                        content = content  + mediaBodyContent;
                    }

                    editor.model.change( writer => {
                        editor.model.insertContent(writer.createText( content ), editor.model.document.selection);
                    } );
                    
                    $(modalSelector).modal('hide');
                    // Unbind select button event.
                    $(selectButtonSelector).off('click', appendMedia);

                    return true;
                }
                $("#mediaApp").detach().appendTo(modalSelector + ' .modal-body');
                $("#mediaApp").show();
                mediaApp.selectedMedias = [];
                $(modalSelector).modal();
                $(selectButtonSelector).on('click', appendMedia);
            } );

            return view;
        } );        
    }
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map