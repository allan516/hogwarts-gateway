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
function getCharactersApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://potterapi-fedeperin.vercel.app/pt/characters';
        const response = yield fetch(url);
        try {
            if (response.ok) {
                const characters = yield response.json();
                characters.forEach((element) => {
                    const span = document.createElement('span');
                    const name = document.createElement('p');
                    const img = document.createElement('img');
                    if (element.fullName !== null && element.image !== null) {
                        name.innerHTML = element.fullName;
                        img.src = element.image;
                        img.style.clipPath = 'circle()';
                        img.style.paddingTop = '60px';
                        img.style.width = '150px';
                        span.classList.add('.spanShowlist');
                        span.appendChild(img);
                        span.appendChild(name);
                    }
                    showItems.appendChild(span);
                });
            }
        }
        catch (error) {
            console.error(error);
            throw new Error(`Response status: ${response.status}`);
        }
    });
}
getCharactersApi();
