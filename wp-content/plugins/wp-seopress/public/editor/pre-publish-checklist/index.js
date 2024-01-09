(()=>{"use strict";const e=window.wp.components,t=window.wp.data,r=window.wp.editPost,n=window.wp.i18n,o=window.wp.plugins,s=window.wp.wordcount;function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var n;return n=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==i(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={title:{selector:"#seopress_titles_title_meta",type:"text",key:"_seopress_titles_title"},description:{selector:"#seopress_titles_desc_meta",type:"text",key:"_seopress_titles_desc"},noindex:{selector:"#seopress_robots_index_meta",type:"checkbox",key:"_seopress_robots_index"}};document.addEventListener("DOMContentLoaded",(function(){if(wp.plugins){if(null===document.querySelector("#seopress-js-module-seo-metabox")){for(var e=function(){var e,o,s=(e=n[r],o=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,s,i,l=[],c=!0,a=!1;try{if(s=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=s.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(a)throw o}}return l}}(e,o)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=(s[0],s[1]);jQuery(i.selector).on("change paste keyup",(function(e){!function(e,r){r.value="checkbox"==r.type?e.target.checked?"yes":"":e.target.value;var n=(0,t.select)("core/editor").getEditedPostAttribute("meta");(0,t.dispatch)("core/editor").editPost({meta:a(a({},n),{},u({},r.key,r.value))})}(e,i)}))},r=0,n=Object.entries(p);r<n.length;r++)e();jQuery("#seopress-tag-single-excerpt").click((function(){jQuery("#seopress_titles_desc_meta").trigger("paste")}))}(0,o.registerPlugin)("pre-publish-checklist",{render:d})}}));var d=function(){var o=(0,t.useSelect)((function(e){return{content:e("core/editor").getEditedPostAttribute("content"),meta:e("core/editor").getEditedPostAttribute("meta")}})),i=o.content,l=o.meta;if(!l)return"";var c=(0,s.count)(i,"words"),a=(null==l?void 0:l._seopress_titles_title)||"",u=(null==l?void 0:l._seopress_titles_desc)||"",p="yes"===(null==l?void 0:l._seopress_robots_index),d=React.createElement(e.Icon,{icon:"yes",style:{color:"green"}}),y=React.createElement(e.Icon,{icon:"no",style:{color:"red"}});return React.createElement(r.PluginPrePublishPanel,{title:(0,n.__)("SEO Checklist","wp-seopress")},React.createElement("ul",null,React.createElement("li",null,c>300?d:y,React.createElement("strong",null,(0,n.__)("Word count: ","wp-seopress")),React.createElement("span",null,c)),React.createElement("li",null,a?d:y,React.createElement("strong",null,a?(0,n.__)("Meta title is set.","wp-seopress"):(0,n.__)("Custom meta title is not set.","wp-seopress"))),React.createElement("li",null,u?d:y,React.createElement("strong",null,u?(0,n.__)("Meta description is set.","wp-seopress"):(0,n.__)("Custom meta description is not set.","wp-seopress"))),React.createElement("li",null,p?y:d,React.createElement("strong",null,p?(0,n.__)("This content is set to noindex.","wp-seopress"):(0,n.__)("This content is set to be indexed.","wp-seopress")))))}})();