import $ from 'jquery';
import { request } from 'https';
import { CoinPredictor } from "./predictor";
$(document).ready(function () {
var predict = new CoinPredictor();
predict.Call();
var pagethread = setInterval(() => {
    $("#bitcoinrate").html(predict.bitcoinprice);
console.log(predict.bitcoinprice);
}, 50);

$("#buybitcoin").click(function(){
    var pagethread = setInterval(() => {
        $("#bitcoinrate").html("$"+predict.bitcoinprice);
    console.log(predict.bitcoinprice);
    predict.Kill();
    }, 50);
    
predict.collapse=true;
});
});