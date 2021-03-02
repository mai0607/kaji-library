import Api from "./api.js";
import GoogleBooksApi from "./GoogleBooksApi.js";
import { getState, setState, resetState } from "./stateManager.js";
const NfcpyId = require("node-nfcpy-id").default;
const $ = require("jquery");
let state = {};
const api = new Api();
$(document).ready(async () => {
    // ページ読み込み時に実行したい処理
    state = await getState();
    $("#slackName").text(state.user.slackName);
});

// APIに貸し出し要求を投げる
const fetchData = async (borrowBooks) => {
    await Promise.all(
        borrowBooks.map(async (book) => {
            await api.createBorrowed({
                usersId: state.user.id,
                booksId: book.id,
            });
        })
    );
    console.log("OK");
    window.location.href = './borrowComp.html';
};
// ボタンがクリックされた
$("#sendDataButton").on("click", () => {
    console.log(borrowBooks);
    borrowBooks.length && fetchData(borrowBooks);
});
// サーバーへJSONデータを送信
const borrowBooks = [];
// NFCリーダの処理
const nfc = new NfcpyId().start();
nfc.on("touchstart", async (card) => {
    if (card.id.length != 8) {
        // 本が読み込まれたとき
        $("#blankCard").remove();

        if (borrowBooks.find((nowBook) => nowBook.id === card.id)) return;

        const book = await api.getBookById(card.id);
        borrowBooks.push(book);
        const state = { book: book };
        setState(state);
        const cb = await api.checkBook(card.id);
        console.log(cb);
        // ISBNを基にGoogleAPIからJSONファイルを持ってくる
        const googleBookData = await GoogleBooksApi().books.getByIsbn(
            state.book.isbn
        );
        // カードの追加表示
        $("#allCard").append(`
        <div class="card" id="${book.id}">
            <img src="${googleBookData.items[0].volumeInfo.imageLinks.thumbnail}">
            <div>
                <p>${book.title}</p>
                <p>${book.author}</p>
            </div>
        </div>`);
    }
});
nfc.on("touchend", () => {
    console.log("touchend");
});
nfc.on("error", (err) => {
    // standard error output (color is red)
    console.error("\u001b[31mNFCリーダが接続されていません\u001b[0m");
});