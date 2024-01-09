(()=>{"use strict";const e=window.wp.i18n,t=window.wp.element,r=window.wp.data,n=window.wp.components;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:String(t)}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var p=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(d,t);var r,s,p,m,f=(p=d,m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(p);if(m){var r=u(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}(this,e)});function d(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=f.apply(this,arguments)).onChange=e.onChange.bind(c(e)),e.updateMetabox=e.updateMetabox.bind(c(e)),e.onMetaboxChange=e.onMetaboxChange.bind(c(e)),e.state={primaryTermId:"none",selectableTerms:[]},e}return r=d,(s=[{key:"componentDidMount",value:function(){var e=this.props.primaryTermId||"none";this.setState({primaryTermId:e}),this.metaboxField=document.querySelector("#seopress_robots_primary_cat"),this.metaboxField&&this.metaboxField.addEventListener("change",this.onMetaboxChange)}},{key:"componentWillUnmount",value:function(){this.metaboxField&&this.metaboxField.removeEventListener("change",this.onMetaboxChange)}},{key:"componentDidUpdate",value:function(e,t){var r=this;if(e.allTerms!==this.props.allTerms||e.selectedTermIds!==this.props.selectedTermIds){var n=this.props.allTerms&&this.props.allTerms.length?this.props.allTerms.filter((function(e){return r.props.selectedTermIds.includes(e.id)})):[],o=this.props.selectedTermIds.length&&this.props.selectedTermIds.includes(parseInt(this.state.primaryTermId))?this.state.primaryTermId:"none";this.setState({selectableTerms:n,primaryTermId:o})}t.primaryTermId===this.state.primaryTermId&&t.selectableTerms===this.state.selectableTerms||this.updateMetabox(this.state.primaryTermId)}},{key:"updateMetabox",value:function(e){if(this.metaboxField&&this.state.selectableTerms&&this.state.selectableTerms.length){var t=this.getOptions().map((function(t){var r=t.value==e?'selected="selected"':"";return'<option value="'.concat(t.value,'" ').concat(r,">").concat(t.label,"</option>")}));this.metaboxField.value=e,this.metaboxField.innerHTML=t.join("")}}},{key:"getOptions",value:function(){return[{value:"none",label:(0,e.__)("None (will disable this feature)","wp-seopress")}].concat(function(e){if(Array.isArray(e))return i(e)}(t=this.state.selectableTerms.map((function(e){return{value:e.id,label:e.name}})))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var t}},{key:"onChange",value:function(e){this.setState({primaryTermId:e})}},{key:"onMetaboxChange",value:function(e){this.setState({primaryTermId:e.target.value})}},{key:"render",value:function(){return!!this.metaboxField&&!!this.state.selectableTerms.length&&React.createElement(n.SelectControl,{label:(0,e.__)("Select a primary category","wp-seopress"),value:this.state.primaryTermId,options:this.getOptions(),onChange:this.onChange})}}])&&a(r.prototype,s),Object.defineProperty(r,"prototype",{writable:!1}),d}(t.Component),m=(0,r.withSelect)((function(e,t){var r=t.slug,n=e("core").getTaxonomy(r),o=n?e("core/editor").getEditedPostAttribute(n.rest_base):[];return{taxonomy:n,allTerms:e("core").getEntityRecords("taxonomy",r,{per_page:-1,context:"view"})||[],primaryTermId:e("core/editor").getEditedPostAttribute("meta")._seopress_robots_primary_cat||"none",selectedTermIds:o}}))(p);wp.hooks.addFilter("editor.PostTaxonomyType","wpseopress",(function(e){return function(t){return React.createElement(React.Fragment,null,React.createElement(e,t),t.slug&&"category"===t.slug&&React.createElement(n.PanelRow,{className:"seopress-primary-term-picker"},React.createElement(m,t)))}}))})();