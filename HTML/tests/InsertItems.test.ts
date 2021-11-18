/**
 * @jest-environment jsdom
 */
'use strict';

import {InsertProduct} from '../src/js/InsertItems';

describe('Add items to localstorage', () => {
    test("InsertToLocalStorage 5 items", () => {
        //arrange
        let count = 5;

        //act
        InsertProduct();

        //assert
        expect(localStorage.length).toBe(count);
    });
});


