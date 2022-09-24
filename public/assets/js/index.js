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
let titles = document.querySelectorAll(".title"), srcs = document.querySelectorAll("img"), names = document.querySelectorAll("h3"), bodies = document.querySelectorAll(".description");
const data = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const data2 = yield fetch(url);
    return yield data2.json();
});
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield data(`./content.json`);
        for (let i = 0; i < response.length; i++) {
            titles[i].textContent = response[i].title;
            srcs[i].src = response[i].src;
            srcs[i].alt = response[i].name;
            names[i].textContent = response[i].name;
            bodies[i].textContent = response[i].body;
        }
    });
})();
