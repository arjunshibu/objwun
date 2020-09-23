'use strict';
/*
objwun v. 1.1.2
fedeghe <fedeghe@gmail.com>

Isomorphic ES3 library to common stuff on object literals and arrays
~6KB on 23/9/2020
*/
var objwun=function(){function r(){var r=N.ut.args2arr(arguments),n={};if(r.length){for(var t,i=0,e=r.length;i<e;i++){N.mustBe.obj(r[i]);for(t in r[i]){if(!r[i].hasOwnProperty(t))continue;n[t]=JSON.parse(JSON.stringify(r[i][t]))}}return n}return n}function n(r,n){N.mustBe.arr(r),N.mustBe.func(n);for(var t=[],i=0,e=r.length;i<e;i++)n(r[i],i)&&t.push(r[i]);return t}function t(r,n){N.mustBe.arr(r),N.mustBe.func(n);for(var t=-1,i=0,e=r.length;-1===t&&i<e;i++)n(r[i],i)&&(t=i);return t}function i(r,n){N.mustBe.objOrArr(r),n=n||function(r,n){return r};var t;return N.in.isObj(r)&&(t=N.ut.objLoop(r,n)),N.in.isArr(r)&&(t=N.ut.arrLoop(r,n)),t}function e(r,n,t){if(N.mustBe.objOrArr(r),N.mustBe.defined(n),o(r)||o(n))return t||null;n=n.replace(/\[(\d+)\]/g,function(r,n){return"."+n});var i=n.split("."),e=r,u=0,f=i.length;for(null;u<f;u++){if(!(i[u]in e))return t||null;e=e[i[u]]}return e}function u(r,n){N.mustBe.arr(r),N.mustBe.defined(n);for(var t=0,i=r.length;t<i;t++){if(r[t]===n)return!0;continue}return!1}function o(r){return N.mustBe.defined(r),""===r||null===r||N.in.isStr(r)&&0===r.length||N.in.isArr(r)&&0===r.length||N.in.isObj(r)&&function(){for(var n in r)if(r.hasOwnProperty(n))return!1;return!0}()}function f(r,n){N.mustBe.arr(r),N.mustBe.funcOrStr(n);var t={},i=0,e=r.length;if("function"==typeof n)for(;i<e;i++)t[n(r[i])]=r[i];else for(;i<e;i++)t[r[i][n]]=r[i];return t}function s(r,n){return N.mustBe.objOrArr(r),n=n||function(r){return r},N.in.isObj(r)?N.ut.objLoop(r,n):N.ut.arrLoop(r,n)}function c(r,n,t){N.mustBe.objOrArr(r),N.mustBe.func(n);var i=N.in.isObj(r),e=N.in.isArr(r),u=t||(i?{}:[]);if(i)for(var o in r)u=n(u,r[o],o,r);if(e)for(var f=0,s=r.length;f<s;f++)u=n(u,r[f],f,r);return u}function a(r,n){N.mustBe.arr(r);var t,i=N.mustBe.funcOrArr(n),e=[].concat(r);if(i.isFunc)for(var u=0;u<e.length;null)n(e[u],u)?e=e.slice(0,u).concat(e.slice(u+1)):u++;else{t=[].concat(n).sort(function(r,n){return r>n?-1:1});for(var u=0,o=t.length;u<o;u++)e=e.slice(0,t[u]).concat(e.slice(t[u]+1))}return e}function E(r,n){N.mustBe.arr(r),N.mustBe.func(n);for(var t=0,i=r.length;t<i;t++)if(n(r[t],t))return!0;return!1}function l(r,n,t){N.mustBe.objOrArr(r),N.mustBe.str(n),N.mustBe.defined(t),n=n.replace(/\[(\d+)\]/g,function(r,n){return"."+n});var i=n.split("."),e=N.ut.clone(r),u=0,o=i.length,f=e;for(null;u<o-1;u++)i[u]in f&&!N.in.isPrim(f[i[u]])||(f[i[u]]=i[u+1].match(/\d+/)?[]:{}),f=f[i[u]];return f[i[u]]=N.in.isPrim(t)?t:N.ut.clone(t),e}function _(r,n,t){N.mustBe.arr(r),N.mustBe.funcOrStr(n);var i=[].concat(r);return t=t||1,"function"==typeof n?i.sort(function(r,i){return n(r)<n(i)?-t:t}):i.sort(function(r,i){return r[n]<i[n]?-t:t})}function A(r,n,t){N.mustBe.num(r),N.mustBe.func(n),t=t||null;var i=[],e=0;for(null;e<r;e++)i[e]=n.call(t,e);return i}function m(r){var n={},t=0,i=r.length,e=[];for(null;t<i;t++)n[r[t]]=r[t];for(var u in n)e.push(n[u]);return e}var N={};return N.errors={INVALID_ARGUMENT_ARRAY_EXPECTED:"Invalid argument, array expected",INVALID_ARGUMENT_OBJECT_EXPECTED:"Invalid argument, object expected",INVALID_ARGUMENT_INTEGER_EXPECTED:"Invalid argument, integer expected",INVALID_ARGUMENT_FUNCTION_EXPECTED:"Invalid argument, function expected",INVALID_ARGUMENT_STRING_EXPECTED:"Invalid argument, string expected",INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED:"Invalid argument, string or function expected",INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED:"Invalid argument, array or function expected",INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED:"Invalid argument, object or array expected",MISSING_EXPECTED_ARGUMENT:"Missing expected argument"},function(){function r(r){return[].slice.call(r,0)}function n(r){return function(n,t){N.mustBe.obj(n),N.mustBe.arr(t);var i={};for(var e in n)n.hasOwnProperty(e)&&r(t.indexOf(e))&&(i[e]=n[e]);return i}}function t(r,n){var t={};for(var i in r)r.hasOwnProperty(i)&&(t[i]=n(r[i],i));return t}function i(r,n){var t=[],i=0,e=r.length;for(null;i<e;i++)t[i]=n(r[i],i);return t}function e(r){return JSON.parse(JSON.stringify(r))}N.ut={args2arr:r,arrLoop:i,clone:e,objLoop:t,pick_omit:n}}(),function(){function r(r){var n=String(r)!==r,t=r===Object(r),i="function"!=typeof r,e={}.toString.call(r).match(/\[object\sObject\]/);return n&&t&&i&&!(!e||!e.length)}function n(r){var n={}.toString.call(r).match(/\[object\sArray\]/);return String(r)!==r&&!(!n||!n.length)}function t(r){return"function"==typeof r}function i(r){return"string"==typeof r}function e(r){return"boolean"==typeof r}function u(r){return"number"==typeof r}function o(r){return void 0===r}function f(r){return void 0!==r}function s(r){return u(r)||i(r)||e(r)}N.in={isArr:n,isBool:e,isDef:f,isFunc:t,isNum:u,isObj:r,isPrim:s,isStr:i,isUndef:o}}(),function(){function r(r){if(!N.in.isArr(r))throw new Error(N.errors.INVALID_ARGUMENT_ARRAY_EXPECTED);return!0}function n(r){if(N.in.isUndef(r))throw new Error(N.errors.MISSING_EXPECTED_ARGUMENT);return!0}function t(r){if(!N.in.isFunc(r))throw new Error(N.errors.INVALID_ARGUMENT_FUNCTION_EXPECTED);return!0}function i(r){if(!N.in.isNum(r))throw new Error(N.errors.INVALID_ARGUMENT_INTEGER_EXPECTED);return!0}function e(r){if(!N.in.isObj(r))throw new Error(N.errors.INVALID_ARGUMENT_OBJECT_EXPECTED);return!0}function u(r){if(!N.in.isStr(r))throw new Error(N.errors.INVALID_ARGUMENT_STRING_EXPECTED);return!0}function o(r){var n=N.in.isStr(r),t=N.in.isFunc(r);if(!n&&!t)throw new Error(N.errors.INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED);return{isFunc:t,isStr:n}}function f(r){var n=N.in.isArr(r),t=N.in.isFunc(r);if(!n&&!t)throw new Error(N.errors.INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED);return{isFunc:t,isArr:n}}function s(r){var n=N.in.isArr(r),t=N.in.isObj(r);if(!t&&!n)throw new Error(N.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);return{isObj:t,isArr:n}}N.mustBe={arr:r,defined:n,func:t,funcOrStr:o,funcOrArr:f,num:i,obj:e,objOrArr:s,str:u}}(),{assign:r,filter:n,find:t,forEach:i,get:e,id:new function(){var r=0,n=this;this.prefix="id_",this.toString=function(){return r+=1,n.prefix+r}},includes:u,isEmpty:o,keyBy:f,map:s,omit:N.ut.pick_omit(function(r){return r<0}),pick:N.ut.pick_omit(function(r){return r>=0}),reduce:c,remove:a,set:l,some:E,sortBy:_,times:A,uniq:m,isArray:N.in.isArr,isFunction:N.in.isFunc,isObject:N.in.isObj,isString:N.in.isStr,isBoolean:N.in.isBool,isNumber:N.in.isNum,isUndefined:N.in.isUndef,isDefined:N.in.isDef,isPrimitive:N.in.isPrim}}();"object"==typeof exports&&(module.exports=objwun);