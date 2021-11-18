/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/displayBasket.ts":
/*!*********************************!*\
  !*** ./src/js/displayBasket.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doShowBasket": () => (/* binding */ doShowBasket)
/* harmony export */ });
/* harmony import */ var _removeFromBasket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeFromBasket */ "./src/js/removeFromBasket.ts");

function doShowBasket() {
    var keys = Object.keys(sessionStorage);
    keys.forEach(function (it) {
        if (it != "IsThisFirstTime_Log_From_LiveServer") {
            var items = JSON.parse(sessionStorage.getItem(it));
            items.forEach(function (item) {
                var element = document.createElement("div");
                element.classList.add("item-Basket");
                element.setAttribute("id", it);
                var deleteSpan = document.createElement("span");
                deleteSpan.classList.add("delete-btn");
                deleteSpan.setAttribute("id", it);
                deleteSpan.addEventListener("click", function (event) {
                    (0,_removeFromBasket__WEBPACK_IMPORTED_MODULE_0__.RemoveFromBasket)(it);
                });
                var img = document.createElement("img");
                img.style.height = "200px";
                img.style.width = "200px";
                img.src = "./img/" + item.img;
                var name = document.createElement("h3");
                name.textContent = item.name;
                var category = document.createElement("h4");
                category.textContent = item.category;
                var divInfo = document.createElement("div");
                divInfo.appendChild(name);
                divInfo.appendChild(category);
                var price = document.createElement("h5");
                price.textContent = item.price.toString();
                var divPrice = document.createElement("div");
                divPrice.classList.add("total-price");
                divPrice.appendChild(price);
                element.appendChild(deleteSpan);
                element.appendChild(img);
                element.appendChild(divInfo);
                element.appendChild(divPrice);
                document.querySelector(".shopping-cart").appendChild(element);
            });
        }
    });
}


/***/ }),

/***/ "./src/js/removeFromBasket.ts":
/*!************************************!*\
  !*** ./src/js/removeFromBasket.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveFromBasket": () => (/* binding */ RemoveFromBasket)
/* harmony export */ });
function RemoveFromBasket(id) {
    sessionStorage.removeItem(id);
    document.getElementById(id).setAttribute("style", "display:none");
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
/*!******************************!*\
  !*** ./src/js/basketPage.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayBasket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayBasket */ "./src/js/displayBasket.ts");

window.onload = function () {
    (0,_displayBasket__WEBPACK_IMPORTED_MODULE_0__.doShowBasket)();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQyxDQUFDO1lBQ3JGLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFDTyxTQUFTLGdCQUFnQixDQUFDLEVBQVM7SUFDekMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBcUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZGLENBQUM7Ozs7Ozs7VUNIRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTitDO0FBQy9DLE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFDZCw0REFBWSxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHRtbC8uL3NyYy9qcy9kaXNwbGF5QmFza2V0LnRzIiwid2VicGFjazovL2h0bWwvLi9zcmMvanMvcmVtb3ZlRnJvbUJhc2tldC50cyIsIndlYnBhY2s6Ly9odG1sL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2h0bWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2h0bWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9odG1sL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaHRtbC8uL3NyYy9qcy9iYXNrZXRQYWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVtb3ZlRnJvbUJhc2tldH0gIGZyb20gICcuL3JlbW92ZUZyb21CYXNrZXQnO1xyXG5pbXBvcnQge0l0ZW19IGZyb20gJy4vSW50ZXJmYWNlSXRlbXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvU2hvd0Jhc2tldCgpIHtcclxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHNlc3Npb25TdG9yYWdlKTtcclxuICBrZXlzLmZvckVhY2goKGl0KSA9PiB7XHJcbiAgICBpZiAoaXQgIT0gXCJJc1RoaXNGaXJzdFRpbWVfTG9nX0Zyb21fTGl2ZVNlcnZlclwiKSB7XHJcbiAgICAgIGxldCBpdGVtcyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShpdCkgYXMgYW55KTtcclxuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbTpJdGVtKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIml0ZW0tQmFza2V0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaXQpO1xyXG4gICAgICAgIGxldCBkZWxldGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgZGVsZXRlU3Bhbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcclxuICAgICAgICBkZWxldGVTcGFuLnNldEF0dHJpYnV0ZShcImlkXCIsIGl0KTtcclxuICAgICAgICBkZWxldGVTcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIFJlbW92ZUZyb21CYXNrZXQoaXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBcIjIwMHB4XCI7XHJcbiAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gXCIyMDBweFwiO1xyXG4gICAgICAgIGltZy5zcmMgPSBcIi4vaW1nL1wiICsgaXRlbS5pbWc7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICAgICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSBpdGVtLmNhdGVnb3J5O1xyXG4gICAgICAgIGxldCBkaXZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXZJbmZvLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgICAgIGRpdkluZm8uYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gICAgICAgIGxldCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2UudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgZGl2UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdlByaWNlLmNsYXNzTGlzdC5hZGQoXCJ0b3RhbC1wcmljZVwiKTtcclxuICAgICAgICBkaXZQcmljZS5hcHBlbmRDaGlsZChwcmljZSk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVTcGFuKTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXZJbmZvKTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdlByaWNlKTtcclxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG9wcGluZy1jYXJ0XCIpIGFzIEhUTUxGb3JtRWxlbWVudCkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59IiwiIGV4cG9ydCBmdW5jdGlvbiBSZW1vdmVGcm9tQmFza2V0KGlkOnN0cmluZykge1xyXG4gIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oaWQpO1xyXG4gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MRm9ybUVsZW1lbnQpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJkaXNwbGF5Om5vbmVcIik7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7ZG9TaG93QmFza2V0fSAgZnJvbSAgJy4vZGlzcGxheUJhc2tldCc7XHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZG9TaG93QmFza2V0KCk7XHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9