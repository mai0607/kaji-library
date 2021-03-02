const NfcpyId = require('node-nfcpy-id').default;
import Api from './api.js';
import {
  getState,
  setState,
  resetState,
} from "./stateManager.js";
const api = new Api();
let userId = "";
let bookId = "";

const nfc = new NfcpyId().start();
nfc.on('touchstart', async (card) => {
  if (card.id.length == 8) {
    // 学生証
    if (card.id === userId) return;
    userId = card.id;
    const user = await api.getUserById(card.id);
    const state = { user: user }
    setState(state);
    window.location.href = './welcome.html';
  } else {
    // 本
    bookId = card.id;
    const data = await api.getReturningBookById(card.id);
    api.updateBorrowed(data[0].id);
    window.location.href = './updateBorrowedComp.html';
  }
});

nfc.on('touchend', () => {
  console.log('touchend');
});

nfc.on('error', (err) => {
  // standard error output (color is red)
  console.error('\u001b[31mNFCリーダが接続されていません\u001b[0m');
});
