/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\nconsole.log(\"Testing Webpack2\")\n;\n\n\n\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n\n/*\nfunction pageLoad1() {\nlet div = document.createElement(\"div\");\ndiv.id = \"title\";\ndiv.className = \"title\";\ndiv.style = \"background-color: blue;\";\ndiv.style.width = \"300px\";\ndiv.style.height = \"200px\";\ndiv.innerHTML= \"test1\";\ndocument.body.appendChild(div);  \n\nlet h1 = document.createElement(\"h1\");\n\nh1.className = \"title\";\nh1.style = \"background-color: blue;\";\nh1.style.width = \"100px\";\nh1.style.height = \"100px\";\nh1.innerHTML= \"Almond Butter Sandwhiches testing4\"+pluse();\ndocument.getElementById(\"title\").appendChild(h1);  \n\ndiv = document.createElement(\"div\");\ndiv.id = \"promo\";\ndiv.style = \"background-color: green;\";\ndiv.style.width = \"300px\";\ndiv.style.height = \"200px\";\ndiv.innerHTML= \"test1\";\ndocument.body.appendChild(div);  \n\nlet h3 = document.createElement(\"h3\");\n\nh3.className = \"title\";\nh3.style = \"background-color: blue;\";\nh3.style.width = \"400px\";\nh3.style.height = \"100px\";\nh3.innerHTML= \"Have you ever test wondered if you could ever get too many delicious almonds?  Well, now you can find out at Traxler's Almond Emporium!\";\ndocument.getElementById(\"promo\").appendChild(h3);  \n\n\n\n\n\ndiv = document.createElement(\"div\");\ndiv.id = \"div_id\";\ndiv.className = \"div_class\";\ndiv.style = \"background-color: red;\";\ndiv.style.width = \"100px\";\ndiv.style.height = \"100px\";\ndiv.innerHTML= \"Almond Butter Sandwhiches\";\ndocument.body.appendChild(div);  \n\n}*/\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad),\n/* harmony export */   \"pluse\": () => (/* binding */ pluse)\n/* harmony export */ });\n\n\n\nfunction pluse(){\n\n    return 9;\n}\n\n\nfunction pageLoad() {\n    let div = document.createElement(\"div\");\n    div.id = \"title\";\n    div.className = \"title\";\n    div.style = \"background-color: blue;\";\n    div.style.width = \"300px\";\n    div.style.height = \"200px\";\n    div.innerHTML= \"test1\";\n    document.body.appendChild(div);  \n    \n    let h1 = document.createElement(\"h1\");\n    \n    h1.className = \"title\";\n    h1.style = \"background-color: blue;\";\n    h1.style.width = \"100px\";\n    h1.style.height = \"100px\";\n    h1.innerHTML= \"Almond Butter Sandwhiches testing3\";\n    document.getElementById(\"title\").appendChild(h1);  \n    \n    div = document.createElement(\"div\");\n    div.id = \"promo\";\n    div.style = \"background-color: green;\";\n    div.style.width = \"300px\";\n    div.style.height = \"200px\";\n    div.innerHTML= \"test1\";\n    document.body.appendChild(div);  \n    \n    let h3 = document.createElement(\"h3\");\n    \n    h3.className = \"title\";\n    h3.style = \"background-color: blue;\";\n    h3.style.width = \"400px\";\n    h3.style.height = \"100px\";\n    h3.innerHTML= \"Have you ever test wondered if you could ever get too many delicious almonds?  Well, now you can find out at Traxler's Almond Emporium!\";\n    document.getElementById(\"promo\").appendChild(h3);  \n    \n    \n    \n    \n    \n    div = document.createElement(\"div\");\n    div.id = \"div_id\";\n    div.className = \"div_class\";\n    div.style = \"background-color: red;\";\n    div.style.width = \"100px\";\n    div.style.height = \"100px\";\n    div.innerHTML= \"Almond Butter Sandwhiches\";\n    document.body.appendChild(div);  \n    \n    }\n\n//# sourceURL=webpack://restaurantpage/./src/pageLoad.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;