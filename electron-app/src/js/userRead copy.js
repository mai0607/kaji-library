const { ipcRenderer } = require('electron')
const NfcpyId = require('node-nfcpy-id').default;
const $ = require('jquery');
const Api = require('./api.js')

const api = new Api();

const getState = () => {
  ipcRenderer.send("getState")
  ipcRenderer.on('reply', (event, arg) => {
    console.log(arg)
    return arg;
  })
}

const setState = (state) => {
  ipcRenderer.send("setState", state)
}

const resetState = () => {
  ipcRenderer.send("resetState")
}



let userId = "";

try {
  const nfc = new NfcpyId().start();

  nfc.on('touchstart', async (card) => {
    console.log('touchstart', 'id:', card.id, 'type:', card.type);

    if (card.id.length != 8) {
      // 本
      $("#book_id").val(card.id);
      const data = await api.getBookById(card.id);
      $("#book").text(data.title);
    } else {
      // 学生証
      if (card.id === userId) return;
      userId = card.id;
      const user = await api.getUserById(card.id);
      const state = { user: user }
      setState(state);
      window.location.href = './welcome.html';
    }

    //const data = await getBookById(card.id);

  });

  nfc.on('touchend', () => {
    console.log('touchend');
  });

  nfc.on('error', (err) => {
    // standard error output (color is red)
    console.error('\u001b[31m', err, '\u001b[0m');
  });
} catch (error) {
  if (error instanceof IOError) {
    console.log("リーダが接続されていません。")
  }
}


// 送信用
function send_data() {
  // $("#response").html("Response Values");

  // $("#rent_button").click( function(){
  const url = "http://localhost/other/post_test/post_data_catch.php";

  const jsonData = {
    user_id: $("#user_id").val(),
    book_id: $("#book_id").val()
  };
  // alert(url);
  // alert(JSON.stringify(JSONdata));

  $.ajax({
    type: 'POST',
    url: url,
    data: JSON.stringify(jsonData),
    contentType: 'application/JSON',
    dataType: 'JSON',
    scriptCharset: 'utf-8',

    success: function (data) {

      // Success
      alert("success");
      alert(JSON.stringify(JSONdata));
      // alert(data);
      // $("#response").html(JSON.stringify(data));
    },
    error: function (data) {

      // Error
      alert("error");
      alert(JSON.stringify(data));
      // $("#response").html(JSON.stringify(data));
    }
  });
  // })
}

