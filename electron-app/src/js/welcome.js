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
  $("#slackName").text(state.user.slackName);
  setTimeout(() => {
    window.location.href = './book.html';
  }, 2000);
});
