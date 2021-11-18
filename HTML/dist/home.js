/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/InsertItems.ts":
/*!*******************************!*\
  !*** ./src/js/InsertItems.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsertProduct": () => (/* binding */ InsertProduct)
/* harmony export */ });
function InsertProduct() {
    localStorage.setItem("1", JSON.stringify([
        {
            name: "IPhone 8",
            img: "iphone8.png",
            category: "phone",
            price: 1200,
        },
    ]));
    localStorage.setItem("2", JSON.stringify([
        {
            name: "IPhone 10",
            img: "iphone10.jpg",
            category: "phone",
            price: 1350,
        },
    ]));
    localStorage.setItem("3", JSON.stringify([
        {
            name: "MacBook Pro",
            img: "laptop.png",
            category: "laptop",
            price: 22800,
        },
    ]));
    localStorage.setItem("4", JSON.stringify([
        {
            name: "MacBook Air",
            img: "laptop.png",
            category: "laptop",
            price: 18500,
        },
    ]));
    localStorage.setItem("5", JSON.stringify([
        {
            name: "IPhone 7",
            img: "iphone7.png",
            category: "phone",
            price: 750,
        },
    ]));
}


/***/ }),

/***/ "./src/js/addToBacket.ts":
/*!*******************************!*\
  !*** ./src/js/addToBacket.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToBucket": () => (/* binding */ AddToBucket)
/* harmony export */ });
function AddToBucket(id) {
    document.getElementById(id).textContent = "ADDED";
    var product = localStorage.getItem(id);
    sessionStorage.setItem(id, product);
    document.getElementById("countOfProducts").textContent = sessionStorage.length.toString();
}


/***/ }),

/***/ "./src/js/displayItems.ts":
/*!********************************!*\
  !*** ./src/js/displayItems.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doShowAll": () => (/* binding */ doShowAll)
/* harmony export */ });
/* harmony import */ var _InsertItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsertItems */ "./src/js/InsertItems.ts");
/* harmony import */ var _addToBacket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToBacket */ "./src/js/addToBacket.ts");


function doShowAll() {
    (0,_InsertItems__WEBPACK_IMPORTED_MODULE_0__.InsertProduct)();
    var keys = Object.keys(localStorage);
    var params = new URL(document.location.toString()).searchParams;
    var filter = params.get("filter");
    keys.forEach(function (it) {
        var items = JSON.parse(localStorage.getItem(it));
        items
            .filter(function (item) { return !filter || item.category == filter; })
            .forEach(function (item) {
            var element = document.createElement("div");
            element.classList.add("item");
            var img = document.createElement("img");
            img.style.height = "200px";
            img.style.width = "200px";
            img.src = "./img/" + item.img;
            var name = document.createElement("h3");
            name.textContent = item.name;
            var category = document.createElement("h4");
            category.textContent = item.category;
            var price = document.createElement("h5");
            price.textContent = item.price.toString();
            var button = document.createElement("button");
            button.setAttribute("id", it);
            button.addEventListener("click", function (event) {
                (0,_addToBacket__WEBPACK_IMPORTED_MODULE_1__.AddToBucket)(it);
            });
            if (sessionStorage[it] == null) {
                button.textContent = "ADD";
            }
            else {
                button.textContent = "ADDED";
            }
            button.style.height = "20px";
            button.style.width = "70px";
            button.classList.add("add-button");
            element.appendChild(img);
            element.appendChild(name);
            element.appendChild(category);
            element.appendChild(price);
            element.appendChild(button);
            document.querySelector(".container-items").appendChild(element);
        });
    });
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayItems */ "./src/js/displayItems.ts");

window.onload = function () {
    document.getElementById("countOfProducts").textContent = sessionStorage.length.toString();
    (0,_displayItems__WEBPACK_IMPORTED_MODULE_0__.doShowAll)();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vaHRtbC8uL3NyYy9qcy9JbnNlcnRJdGVtcy50cyIsIndlYnBhY2s6Ly9odG1sLy4vc3JjL2pzL2FkZFRvQmFja2V0LnRzIiwid2VicGFjazovL2h0bWwvLi9zcmMvanMvZGlzcGxheUl0ZW1zLnRzIiwid2VicGFjazovL2h0bWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHRtbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaHRtbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2h0bWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9odG1sLy4vc3JjL2pzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEluc2VydFByb2R1Y3QoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICBcIjFcIixcclxuICAgIEpTT04uc3RyaW5naWZ5KFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiSVBob25lIDhcIixcclxuICAgICAgICBpbWc6IFwiaXBob25lOC5wbmdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJwaG9uZVwiLFxyXG4gICAgICAgIHByaWNlOiAxMjAwLFxyXG4gICAgICB9LFxyXG4gICAgXSlcclxuICApO1xyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgIFwiMlwiLFxyXG4gICAgSlNPTi5zdHJpbmdpZnkoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJJUGhvbmUgMTBcIixcclxuICAgICAgICBpbWc6IFwiaXBob25lMTAuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicGhvbmVcIixcclxuICAgICAgICBwcmljZTogMTM1MCxcclxuICAgICAgfSxcclxuICAgIF0pXHJcbiAgKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgIFwiM1wiLFxyXG4gICAgSlNPTi5zdHJpbmdpZnkoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJNYWNCb29rIFByb1wiLFxyXG4gICAgICAgIGltZzogXCJsYXB0b3AucG5nXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwibGFwdG9wXCIsXHJcbiAgICAgICAgcHJpY2U6IDIyODAwLFxyXG4gICAgICB9LFxyXG4gICAgXSlcclxuICApO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgXCI0XCIsXHJcbiAgICBKU09OLnN0cmluZ2lmeShbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIk1hY0Jvb2sgQWlyXCIsXHJcbiAgICAgICAgaW1nOiBcImxhcHRvcC5wbmdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJsYXB0b3BcIixcclxuICAgICAgICBwcmljZTogMTg1MDAsXHJcbiAgICAgIH0sXHJcbiAgICBdKVxyXG4gICk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICBcIjVcIixcclxuICAgIEpTT04uc3RyaW5naWZ5KFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiSVBob25lIDdcIixcclxuICAgICAgICBpbWc6IFwiaXBob25lNy5wbmdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJwaG9uZVwiLFxyXG4gICAgICAgIHByaWNlOiA3NTAsXHJcbiAgICAgIH0sXHJcbiAgICBdKVxyXG4gICk7XHJcbn0iLCJcclxuZXhwb3J0ICBmdW5jdGlvbiBBZGRUb0J1Y2tldChpZDpzdHJpbmcpIHtcclxuICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpYXMgSFRNTEZvcm1FbGVtZW50KS50ZXh0Q29udGVudCA9IFwiQURERURcIjtcclxuXHJcbiAgbGV0IHByb2R1Y3QgPShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCkgYXMgYW55KTtcclxuXHJcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShpZCxwcm9kdWN0KTtcclxuICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudE9mUHJvZHVjdHNcIilhcyBIVE1MRm9ybUVsZW1lbnQpLnRleHRDb250ZW50ID0gc2Vzc2lvblN0b3JhZ2UubGVuZ3RoLnRvU3RyaW5nKCk7XHJcbn0iLCJpbXBvcnQgeyBVcmwgfSBmcm9tIFwidXJsXCI7XHJcblxyXG5pbXBvcnQge0luc2VydFByb2R1Y3R9ICBmcm9tICAnLi9JbnNlcnRJdGVtcyc7XHJcbmltcG9ydCB7QWRkVG9CdWNrZXR9ICBmcm9tICAnLi9hZGRUb0JhY2tldCc7XHJcbmltcG9ydCB7SXRlbX0gZnJvbSAnLi9JbnRlcmZhY2VJdGVtcyc7XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIGRvU2hvd0FsbCgpe1xyXG4gIEluc2VydFByb2R1Y3QoKTtcclxuXHJcblxyXG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcclxuICBsZXQgcGFyYW1zID1uZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uLnRvU3RyaW5nKCkpLnNlYXJjaFBhcmFtcztcclxuICBsZXQgZmlsdGVyID0gcGFyYW1zLmdldChcImZpbHRlclwiKTtcclxuICBrZXlzLmZvckVhY2goKGl0KSA9PiB7XHJcbiAgICBsZXQgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0KWFzIGFueSk7XHJcbiAgICBpdGVtc1xyXG4gICAgICAuZmlsdGVyKChpdGVtIDogSXRlbSkgPT4gIWZpbHRlciB8fCBpdGVtLmNhdGVnb3J5ID09IGZpbHRlcilcclxuICAgICAgLmZvckVhY2goKGl0ZW06SXRlbSkgPT4ge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBcIjIwMHB4XCI7XHJcbiAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gXCIyMDBweFwiO1xyXG4gICAgICAgIGltZy5zcmMgPSBcIi4vaW1nL1wiICsgaXRlbS5pbWc7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICAgICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSBpdGVtLmNhdGVnb3J5O1xyXG4gICAgICAgIGxldCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2UudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgaXQpO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgQWRkVG9CdWNrZXQoaXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZVtpdF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBRERcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBRERFRFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24uc3R5bGUuaGVpZ2h0ID0gXCIyMHB4XCI7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLndpZHRoID0gXCI3MHB4XCI7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnV0dG9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpY2UpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItaXRlbXNcIilhcyBIVE1MRm9ybUVsZW1lbnQpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHtkb1Nob3dBbGx9ICBmcm9tICAnLi9kaXNwbGF5SXRlbXMnO1xyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRPZlByb2R1Y3RzXCIpYXMgSFRNTEZvcm1FbGVtZW50KS50ZXh0Q29udGVudCA9IHNlc3Npb25TdG9yYWdlLmxlbmd0aC50b1N0cmluZygpO1xyXG5cclxuIGRvU2hvd0FsbCgpO1xyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==