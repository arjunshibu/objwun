/*
objwun v. 0.0.6
fedeghe <fedeghe@gmail.com>

A library to deal efficiently with Object literals
~5KB on 22/8/2020
*/
(function(fn) {
    /* istanbul ignore next */
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = fn();
	} else if (typeof define === "function" && define.amd) {
		define([], fn);
	} else {
		if (typeof window !== "undefined") {
			root = window;
		} else if (typeof global !== "undefined") {
			root = global;
		} else if (typeof self !== "undefined") {
			root = self;
		} else {
			root = this;
		}
		root.objwun = fn.call(root);
	}
})(function _(){function r(){var r=A.ut.args2arr(arguments),n={};if(r.length){for(var t,e=0,u=r.length;e<u;e++){A.mustBe.obj(r[e]);for(t in r[e])r[e].hasOwnProperty(t)&&(n[t]=r[e][t])}return n}return n}function n(r,n){A.mustBe.arr(r),A.mustBe.func(n);for(var t=[],e=0,u=r.length;e<u;e++)n(r[e],e)&&t.push(r[e]);return t}function t(r,n){A.mustBe.objOrArr(r),n=n||function(r,n){return r};var t;return A.in.isObj(r)&&(t=A.ut.objLoop(r,n)),A.in.isArr(r)&&(t=A.ut.arrLoop(r,n)),t}function e(r,n,t){if(A.mustBe.objOrArr(r),A.mustBe.defined(n),i(r)||i(n))return t||null;n=n.replace(/\[(\d+)\]/g,function(r,n){return"."+n});var e=n.split("."),u=r,o=0,f=e.length;for(null;o<f;o++){if(!(e[o]in u))return t||null;u=u[e[o]]}return u}function u(r,n){A.mustBe.arr(r),A.mustBe.defined(n);for(var t=0,e=r.length;t<e;t++)if(r[t]===n)return!0;return!1}function i(r){return A.mustBe.defined(r),""===r||null===r||A.in.isArr(r)&&0===r.length||A.in.isObj(r)&&("function"==typeof Object.keys&&0===Object.keys(r).length&&r.constructor===Object||function(){for(var n in r)if(r.hasOwnProperty(n))return!1}())}function o(r,n){A.mustBe.arr(r),A.mustBe.funcOrStr(n);var t={},e=0,u=r.length;if("function"==typeof n)for(;e<u;e++)t[n(r[e])]=r[e];else for(;e<u;e++)t[r[e][n]]=r[e];return t}function f(r,n){return A.mustBe.objOrArr(r),n=n||function(r){return r},A.in.isObj(r)?A.ut.objLoop(r,n):A.ut.arrLoop(r,n)}function c(r,n,t){A.mustBe.objOrArr(r),A.mustBe.func(n);var e=A.in.isObj(r),u=A.in.isArr(r),i=t||(e?{}:[]);if(e)for(var o in r)i=n(i,r[o],o,r);if(u)for(var f=0,c=r.length;f<c;f++)i=n(i,r[f],f,r);return i}function s(r,n){A.mustBe.arr(r),A.mustBe.func(n);for(var t=!1,e=0,u=r.length;e<u&&!t;e++)n(r[e],e)&&(t=!0);return t}function E(r,n,t){return A.mustBe.arr(r),A.mustBe.funcOrStr(n),t=t||1,"function"==typeof n?r.sort(function(r,e){return n(r)<n(e)?-t:t}):r.sort(function(r,e){return r[n]<e[n]?-t:t})}function a(r,n,t){A.mustBe.num(r),A.mustBe.func(n),r=r||0,t=t||null;var e=[],u=0;for(null;u<r;u++)e[u]=n.call(t,u);return e}function _(r){var n={},t=0,e=r.length,u=[];for(null;t<e;t++)n[r[t]]=r[t];for(var i in n)u.push(n[i]);return u}var A={};return A.errors={INVALID_ARGUMENT_ARRAY_EXPECTED:"Invalid argument, array expected",INVALID_ARGUMENT_OBJECT_EXPECTED:"Invalid argument, object expected",INVALID_ARGUMENT_INTEGER_EXPECTED:"Invalid argument, integer expected",INVALID_ARGUMENT_FUNCTION_EXPECTED:"Invalid argument, function expected",INVALID_ARGUMENT_STRING_EXPECTED:"Invalid argument, string expected",INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED:"Invalid argument, string or function expected",INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED:"Invalid argument, object or array expected",MISSING_EXPECTED_ARGUMENT:"Missing expected argument"},function(){function r(r){return[].slice.call(r,0)}function n(r){return function(n,t){A.mustBe.obj(n);var e={};A.mustBe.arr(t);for(var u in n)n.hasOwnProperty(u)&&r(t.indexOf(u))&&(e[u]=n[u]);return e}}function t(r,n){var t={};for(var e in r)r.hasOwnProperty(e)&&(t[e]=n(r[e],e));return t}function e(r,n){var t=[],e=0,u=r.length;for(null;e<u;e++)t[e]=n(r[e],e);return t}A.ut={args2arr:r,arrLoop:e,objLoop:t,pick_omit:n}}(),function(){function r(r){var n=String(r)!==r,t=r===Object(r),e="function"!=typeof r,u={}.toString.call(r).match(/\[object\sObject\]/);return n&&t&&e&&!(!u||!u.length)}function n(r){if(Array.isArray&&Array.isArray(r))return!0;var n=String(r)!==r,t={}.toString.call(r).match(/\[object\sArray\]/);return n&&!(!t||!t.length)}function t(r){return"function"==typeof r}function e(r){return"string"==typeof r}function u(r){return"number"==typeof r}function i(r){return void 0===r}A.in={isArr:n,isFunc:t,isNum:u,isObj:r,isStr:e,isUndef:i}}(),function(){function r(r){if(!A.in.isArr(r))throw new Error(A.errors.INVALID_ARGUMENT_ARRAY_EXPECTED);return!0}function n(r){if(A.in.isUndef(r))throw new Error(A.errors.MISSING_EXPECTED_ARGUMENT);return!0}function t(r){if(!A.in.isFunc(r))throw new Error(A.errors.INVALID_ARGUMENT_FUNCTION_EXPECTED);return!0}function e(r){if(!A.in.isNum(r))throw new Error(A.errors.INVALID_ARGUMENT_INTEGER_EXPECTED);return!0}function u(r){if(!A.in.isObj(r))throw new Error(A.errors.INVALID_ARGUMENT_OBJECT_EXPECTED);return!0}function i(r){if(!A.in.isStr(r)&&!A.in.isFunc(r))throw new Error(A.errors.INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED);return!0}function o(r){if(!A.in.isObj(r)&&!A.in.isArr(r))throw new Error(A.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);return!0}A.mustBe={arr:r,defined:n,func:t,funcOrStr:i,num:e,obj:u,objOrArr:o}}(),{assign:r,filter:n,forEach:t,get:e,id:new function(){var r=0,n=this;this.prefix="id_",this.toString=function(){return r+=1,n.prefix+r}},includes:u,isEmpty:i,keyBy:o,map:f,omit:A.ut.pick_omit(function(r){return r<0}),pick:A.ut.pick_omit(function(r){return r>=0}),reduce:c,some:s,sortBy:E,times:a,uniq:_}});