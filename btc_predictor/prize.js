function output_prize() {
    var iframe = document.getElementById("frame");
    var amount = iframe.contentWindow.document.getElementsByName('price');
    var amount_l = amount.length;
    document.getElementById("cumulation").innerHTML = 100000 + ((amount_l) * 27) / 100;
    document.getElementById("submissions").innerHTML = (amount_l) + 1;
}
setTimeout(output_prize, 1500);

function find_bull() {
    var iframe = document.getElementById("frame");
    var pre = iframe.contentWindow.document.getElementsByName('price');
    var arr = [];
    arr.push(pre);
    var bull = (arr);
    document.getElementById("bullish").innerHTML = bull;
}
setTimeout(find_bull, 5500);

