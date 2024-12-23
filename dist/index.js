"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const showItems = document.querySelector('.show-items');
const showItem2 = document.querySelector('.show-item2');
const showItem3 = document.querySelector('.show-item3');
const getBook = document.querySelector('.books');
class DomElement {
    create(element) {
        const span = document.createElement('span');
        const name = document.createElement('p');
        const img = document.createElement('img');
        if (element.fullName !== null && element.image !== null) {
            name.innerHTML = element.fullName;
            name.style.padding = '15px';
            img.src = element.image;
            img.style.borderRadius = '5px';
            img.style.border = '1px solid white';
            img.style.width = '150px';
            img.classList.add('img-hover');
            span.style.padding = '10px';
            span.appendChild(img);
            span.appendChild(name);
            return span;
        }
    }
}
const dom = new DomElement();
function getCharactersApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://potterapi-fedeperin.vercel.app/pt/characters';
        const response = yield fetch(url);
        try {
            if (response.ok) {
                const characters = yield response.json();
                characters.forEach((element) => {
                    console.log(element);
                    if (element.index !== null && element.index <= 7) {
                        const span = dom.create(element);
                        showItems.appendChild(span);
                    }
                    else if (element.index !== null && element.index <= 15) {
                        const span = dom.create(element);
                        showItem2.appendChild(span);
                    }
                    else if (element.index !== null && element.index > 15) {
                        if (element.fullName !== null && element.image !== null) {
                            const span = dom.create(element);
                            showItem3.appendChild(span);
                        }
                    }
                });
            }
        }
        catch (error) {
            console.error(error);
            throw new Error(`Response status: ${response.status} deu erro`);
        }
    });
}
function getBooksApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://potterapi-fedeperin.vercel.app/pt/books';
        const response = yield fetch(url);
        try {
            if (response.ok) {
                const books = yield response.json();
                books.forEach((element) => {
                    const name = document.createElement('p');
                    const img = document.createElement('img');
                    const description = document.createElement('p');
                    const divDescription = document.createElement('div');
                    const divImg = document.createElement('div');
                    const div = document.createElement('div');
                    if (element.title !== null &&
                        element.cover !== null &&
                        element.description !== null) {
                        name.innerHTML = element.title;
                        description.innerHTML = element.description;
                        img.src = element.cover;
                        img.style.height = '250px';
                        img.style.paddingTop = '60px';
                        divImg.appendChild(img);
                        divDescription.appendChild(name);
                        divDescription.appendChild(description);
                        div.appendChild(divImg);
                        div.appendChild(divDescription);
                        getBook.appendChild(div);
                    }
                });
            }
        }
        catch (error) {
            console.error(error);
            throw new Error(`Response status: ${response.status} deu erro`);
        }
    });
}
getCharactersApi();
getBooksApi();
