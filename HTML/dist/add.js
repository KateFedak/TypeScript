/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/js/addPage.ts ***!
  \***************************/

var form = document.getElementById("formId");
document.getElementById("addProduct").addEventListener("click", function () {
    var nameProduct = document.getElementById("pname").value;
    var categoryProduct = document.getElementById("pdescription").value;
    var priceProduct = document.getElementById("pprice").value;
    var imgProduct = document.getElementById("picture").value;
    localStorage.setItem(localStorage.length + "1", JSON.stringify([
        {
            name: nameProduct,
            img: imgProduct,
            category: categoryProduct,
            price: priceProduct,
        },
    ]));
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFvQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFDbEY7SUFDSSxJQUFJLFdBQVcsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBb0IsQ0FBQyxLQUFLLENBQUM7SUFDN0UsSUFBSSxlQUFlLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQW9CLENBQUMsS0FBSyxDQUFDO0lBQ3hGLElBQUksWUFBWSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFvQixDQUFDLEtBQUssQ0FBQztJQUMvRSxJQUFJLFVBQVUsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBb0IsQ0FBQyxLQUFLLENBQUM7SUFDOUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNiO1lBQ0UsSUFBSSxFQUFFLFdBQVc7WUFDakIsR0FBRyxFQUFFLFVBQVU7WUFDZixRQUFRLEVBQUUsZUFBZTtZQUN6QixLQUFLLEVBQUUsWUFBWTtTQUNwQjtLQUNGLENBQUMsQ0FDSCxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odG1sLy4vc3JjL2pzL2FkZFBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1JZFwiKTtcclxuKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvZHVjdFwiKWFzIEhUTUxGb3JtRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFxyXG5mdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbmFtZVByb2R1Y3QgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbmFtZVwiKWFzIEhUTUxGb3JtRWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgY2F0ZWdvcnlQcm9kdWN0ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGRlc2NyaXB0aW9uXCIpYXMgSFRNTEZvcm1FbGVtZW50KS52YWx1ZTtcclxuICAgIGxldCBwcmljZVByb2R1Y3QgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcHJpY2VcIilhcyBIVE1MRm9ybUVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IGltZ1Byb2R1Y3QgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWN0dXJlXCIpYXMgSFRNTEZvcm1FbGVtZW50KS52YWx1ZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZS5sZW5ndGggKyBcIjFcIixcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IG5hbWVQcm9kdWN0LFxyXG4gICAgICAgICAgaW1nOiBpbWdQcm9kdWN0LFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5UHJvZHVjdCxcclxuICAgICAgICAgIHByaWNlOiBwcmljZVByb2R1Y3QsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSlcclxuICAgICk7XHJcbiAgfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9