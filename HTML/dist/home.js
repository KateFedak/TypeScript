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
    sessionStorage.setItem(id, JSON.stringify(product));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNiLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2h0bWwvLi9zcmMvanMvSW5zZXJ0SXRlbXMudHMiLCJ3ZWJwYWNrOi8vaHRtbC8uL3NyYy9qcy9hZGRUb0JhY2tldC50cyIsIndlYnBhY2s6Ly9odG1sLy4vc3JjL2pzL2Rpc3BsYXlJdGVtcy50cyIsIndlYnBhY2s6Ly9odG1sL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2h0bWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2h0bWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9odG1sL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaHRtbC8uL3NyYy9qcy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnNlcnRQcm9kdWN0KCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgXCIxXCIsXHJcbiAgICBKU09OLnN0cmluZ2lmeShbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIklQaG9uZSA4XCIsXHJcbiAgICAgICAgaW1nOiBcImlwaG9uZTgucG5nXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicGhvbmVcIixcclxuICAgICAgICBwcmljZTogMTIwMCxcclxuICAgICAgfSxcclxuICAgIF0pXHJcbiAgKTtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICBcIjJcIixcclxuICAgIEpTT04uc3RyaW5naWZ5KFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiSVBob25lIDEwXCIsXHJcbiAgICAgICAgaW1nOiBcImlwaG9uZTEwLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInBob25lXCIsXHJcbiAgICAgICAgcHJpY2U6IDEzNTAsXHJcbiAgICAgIH0sXHJcbiAgICBdKVxyXG4gICk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICBcIjNcIixcclxuICAgIEpTT04uc3RyaW5naWZ5KFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTWFjQm9vayBQcm9cIixcclxuICAgICAgICBpbWc6IFwibGFwdG9wLnBuZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImxhcHRvcFwiLFxyXG4gICAgICAgIHByaWNlOiAyMjgwMCxcclxuICAgICAgfSxcclxuICAgIF0pXHJcbiAgKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgIFwiNFwiLFxyXG4gICAgSlNPTi5zdHJpbmdpZnkoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJNYWNCb29rIEFpclwiLFxyXG4gICAgICAgIGltZzogXCJsYXB0b3AucG5nXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwibGFwdG9wXCIsXHJcbiAgICAgICAgcHJpY2U6IDE4NTAwLFxyXG4gICAgICB9LFxyXG4gICAgXSlcclxuICApO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgXCI1XCIsXHJcbiAgICBKU09OLnN0cmluZ2lmeShbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIklQaG9uZSA3XCIsXHJcbiAgICAgICAgaW1nOiBcImlwaG9uZTcucG5nXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicGhvbmVcIixcclxuICAgICAgICBwcmljZTogNzUwLFxyXG4gICAgICB9LFxyXG4gICAgXSlcclxuICApO1xyXG59IiwiXHJcbmV4cG9ydCAgZnVuY3Rpb24gQWRkVG9CdWNrZXQoaWQ6c3RyaW5nKSB7XHJcbiAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKWFzIEhUTUxGb3JtRWxlbWVudCkudGV4dENvbnRlbnQgPSBcIkFEREVEXCI7XHJcbiAgbGV0IHByb2R1Y3QgPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkKTtcclxuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGlkLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0KSk7XHJcbiAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRPZlByb2R1Y3RzXCIpYXMgSFRNTEZvcm1FbGVtZW50KS50ZXh0Q29udGVudCA9IHNlc3Npb25TdG9yYWdlLmxlbmd0aC50b1N0cmluZygpO1xyXG59IiwiaW1wb3J0IHsgVXJsIH0gZnJvbSBcInVybFwiO1xyXG5cclxuaW1wb3J0IHtJbnNlcnRQcm9kdWN0fSAgZnJvbSAgJy4vSW5zZXJ0SXRlbXMnO1xyXG5pbXBvcnQge0FkZFRvQnVja2V0fSAgZnJvbSAgJy4vYWRkVG9CYWNrZXQnO1xyXG5pbXBvcnQge0l0ZW19IGZyb20gJy4vSW50ZXJmYWNlSXRlbXMnO1xyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBkb1Nob3dBbGwoKXtcclxuICBJbnNlcnRQcm9kdWN0KCk7XHJcblxyXG5cclxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XHJcbiAgbGV0IHBhcmFtcyA9bmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbi50b1N0cmluZygpKS5zZWFyY2hQYXJhbXM7XHJcbiAgbGV0IGZpbHRlciA9IHBhcmFtcy5nZXQoXCJmaWx0ZXJcIik7XHJcbiAga2V5cy5mb3JFYWNoKChpdCkgPT4ge1xyXG4gICAgbGV0IGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdClhcyBhbnkpO1xyXG4gICAgaXRlbXNcclxuICAgICAgLmZpbHRlcigoaXRlbSA6IEl0ZW0pID0+ICFmaWx0ZXIgfHwgaXRlbS5jYXRlZ29yeSA9PSBmaWx0ZXIpXHJcbiAgICAgIC5mb3JFYWNoKChpdGVtOkl0ZW0pID0+IHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcclxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gXCIyMDBweFwiO1xyXG4gICAgICAgIGltZy5zdHlsZS53aWR0aCA9IFwiMjAwcHhcIjtcclxuICAgICAgICBpbWcuc3JjID0gXCIuL2ltZy9cIiArIGl0ZW0uaW1nO1xyXG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgICAgIGNhdGVnb3J5LnRleHRDb250ZW50ID0gaXRlbS5jYXRlZ29yeTtcclxuICAgICAgICBsZXQgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGl0KTtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgIEFkZFRvQnVja2V0KGl0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2VbaXRdID09IG51bGwpIHtcclxuICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQURERURcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmhlaWdodCA9IFwiMjBweFwiO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS53aWR0aCA9IFwiNzBweFwiO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ1dHRvblwiKTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHByaWNlKTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLWl0ZW1zXCIpYXMgSFRNTEZvcm1FbGVtZW50KS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7ZG9TaG93QWxsfSAgZnJvbSAgJy4vZGlzcGxheUl0ZW1zJztcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50T2ZQcm9kdWN0c1wiKWFzIEhUTUxGb3JtRWxlbWVudCkudGV4dENvbnRlbnQgPSBzZXNzaW9uU3RvcmFnZS5sZW5ndGgudG9TdHJpbmcoKTtcclxuXHJcbiBkb1Nob3dBbGwoKTtcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=