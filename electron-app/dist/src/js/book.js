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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var api_js_1 = require("./api.js");
var GoogleBooksApi_js_1 = require("./GoogleBooksApi.js");
var stateManager_js_1 = require("./stateManager.js");
var NfcpyId = require("node-nfcpy-id")["default"];
var $ = require("jquery");
var state = {};
var api = new api_js_1["default"]();
$(document).ready(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, stateManager_js_1.getState()];
            case 1:
                // ページ読み込み時に実行したい処理
                state = _a.sent();
                console.log("aaaaa");
                $("#slackName").text(state.user.slackName);
                return [2 /*return*/];
        }
    });
}); });
// APIに貸し出し要求を投げる
var fetchData = function (borrowBooks) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all(borrowBooks.map(function (book) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, api.createBorrowed({
                                    usersId: state.user.id,
                                    booksId: book.id
                                })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }))];
            case 1:
                _a.sent();
                console.log("OK");
                window.location.href = './borrowComp.html';
                return [2 /*return*/];
        }
    });
}); };
// ボタンがクリックされた
$("#sendDataButton").on("click", function () {
    console.log(borrowBooks);
    borrowBooks.length && fetchData(borrowBooks);
});
// サーバーへJSONデータを送信
var borrowBooks = [];
// NFCリーダの処理
var nfc = new NfcpyId().start();
nfc.on("touchstart", function (card) { return __awaiter(void 0, void 0, void 0, function () {
    var book, state_1, googleBookData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(card.id.length != 8)) return [3 /*break*/, 3];
                // 本が読み込まれたとき
                $("#blankCard").remove();
                if (borrowBooks.find(function (nowBook) { return nowBook.id === card.id; }))
                    return [2 /*return*/];
                return [4 /*yield*/, api.getBookById(card.id)];
            case 1:
                book = _a.sent();
                borrowBooks.push(book);
                state_1 = { book: book };
                stateManager_js_1.setState(state_1);
                return [4 /*yield*/, GoogleBooksApi_js_1["default"]().books.getByIsbn(state_1.book.isbn)];
            case 2:
                googleBookData = _a.sent();
                // カードの追加表示
                $("#allCard").append("\n        <div class=\"card\" id=\"" + book.id + "\">\n            <img src=\"" + googleBookData.items[0].volumeInfo.imageLinks.thumbnail + "\">\n            <div>\n                <p>" + book.title + "</p>\n                <p>" + book.author + "</p>\n            </div>\n        </div>");
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
nfc.on("touchend", function () {
    console.log("touchend");
});
nfc.on("error", function (err) {
    // standard error output (color is red)
    console.error("\u001b[31mNFCリーダが接続されていません\u001b[0m");
});
//# sourceMappingURL=book.js.map