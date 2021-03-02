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
var _this = this;
var ipcRenderer = require('electron').ipcRenderer;
var NfcpyId = require('node-nfcpy-id')["default"];
var $ = require('jquery');
var Api = require('./api.js');
var api = new Api();
var getState = function () {
    ipcRenderer.send("getState");
    ipcRenderer.on('reply', function (event, arg) {
        console.log(arg);
        return arg;
    });
};
var setState = function (state) {
    ipcRenderer.send("setState", state);
};
var resetState = function () {
    ipcRenderer.send("resetState");
};
var userId = "";
try {
    var nfc = new NfcpyId().start();
    nfc.on('touchstart', function (card) { return __awaiter(_this, void 0, void 0, function () {
        var data, user, state;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('touchstart', 'id:', card.id, 'type:', card.type);
                    if (!(card.id.length != 8)) return [3 /*break*/, 2];
                    // 本
                    $("#book_id").val(card.id);
                    return [4 /*yield*/, api.getBookById(card.id)];
                case 1:
                    data = _a.sent();
                    $("#book").text(data.title);
                    return [3 /*break*/, 4];
                case 2:
                    // 学生証
                    if (card.id === userId)
                        return [2 /*return*/];
                    userId = card.id;
                    return [4 /*yield*/, api.getUserById(card.id)];
                case 3:
                    user = _a.sent();
                    state = { user: user };
                    setState(state);
                    window.location.href = './welcome.html';
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); });
    nfc.on('touchend', function () {
        console.log('touchend');
    });
    nfc.on('error', function (err) {
        // standard error output (color is red)
        console.error('\u001b[31m', err, '\u001b[0m');
    });
}
catch (error) {
    if (error instanceof IOError) {
        console.log("リーダが接続されていません。");
    }
}
// 送信用
function send_data() {
    // $("#response").html("Response Values");
    // $("#rent_button").click( function(){
    var url = "http://localhost/other/post_test/post_data_catch.php";
    var jsonData = {
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
//# sourceMappingURL=userRead copy.js.map