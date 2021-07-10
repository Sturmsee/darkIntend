"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkIntend = void 0;
var darkIntend;
(function (darkIntend) {
    darkIntend.loggedin = false;
    function checkLogIn() {
        let divnavbar = document.querySelector("navbar");
        let link = divnavbar.lastElementChild;
        if (darkIntend.loggedin) {
            link.href = "./profile.html";
        }
        else {
            link.href = "./login.html";
        }
    }
    darkIntend.checkLogIn = checkLogIn;
})(darkIntend = exports.darkIntend || (exports.darkIntend = {}));
//# sourceMappingURL=data.js.map