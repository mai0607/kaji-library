const {ipcRenderer} = require('electron')
const NfcpyId = require('node-nfcpy-id').default;
const $ = require('jquery');
const Api = require('./api.js')

const api = new Api();


const AsyncMessage = () => {
  ipcRenderer.send('message', 'ping')
  ipcRenderer.on('reply', (event, arg) => {
    console.log(arg)
  })
}

const noti = () => {
  new Notification('Title', {
  body: 'Lorem Ipsum Dolor Sit Amet'
})
}

const nfc = new NfcpyId().start();

nfc.on('touchstart', async (card) => {
  console.log('touchstart', 'id:', card.id, 'type:', card.type);
  if (card.id.length != 8) {
    // 本
    $("#book_id") . val(card.id);
    const data = await api.getBookById(card.id);
    $("#book").text(data.title);
  } else {
    // 学生証
    $("#user_id") . val(card.id);
    const data = await api.getUserById(card.id);
    $("#user").text(data.slackName);
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


// 送信用
function send_data() {
  // $("#response").html("Response Values");
  
  $("#rent_button").click( function(){
  var url = "http://localhost/other/post_test/post_data_catch.php";

          var JSONdata = {
              user_id: $("#user_id").val(),
              book_id: $("#book_id").val()      
          };
      // alert(url);
      // alert(JSON.stringify(JSONdata));
  
      $.ajax({
          type : 'POST',
          url : url,
          data : JSON.stringify(JSONdata),
          contentType: 'application/JSON',
          dataType : 'JSON',
          scriptCharset: 'utf-8',
          success : function(data) {
            console.log("ふぁんくしょん");
              // Success
              alert("success");
              alert(JSON.stringify(data));
              // $("#response").html(JSON.stringify(data));
          },
          error : function(data) {

              // Error
              alert("error");
              alert(JSON.stringify(data));
              // $("#response").html(JSON.stringify(data));
          }
      });
  })
}

// Jsonファイル送信
