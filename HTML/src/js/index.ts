import * as _ from 'lodash';

import {doShowAll}  from  './displayItems';
window.onload = function () {
 (document.getElementById("countOfProducts")as HTMLFormElement).textContent = sessionStorage.length.toString();

 doShowAll();
};