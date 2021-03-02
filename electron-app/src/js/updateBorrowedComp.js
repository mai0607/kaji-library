import GoogleBooksApi from "./GoogleBooksApi.js";
const $ = require('jquery');

import {
    getState,
    setState,
    resetState,
} from "./stateManager.js";

let bookId = "";


$(document).ready(async () => {
    // ページ読み込み時に実行したい処理
    const state = await getState();

    // ISBNを基にGoogleAPIからJSONファイルを持ってくる
    const googleBookData = await GoogleBooksApi().books.getByIsbn(
        state.book.isbn
    );

    $("#title").text(state.book.title);
    $('#thumbnail').html(`<img src="${googleBookData.items[0].volumeInfo.imageLinks.thumbnail}">`)

    setTimeout(() => {
        window.location.href = './index.html';
    }, 3000);
});