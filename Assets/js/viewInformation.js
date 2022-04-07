var count = 3 * 60 * 60;
var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;
    if (count == -1) {
        clearInterval(counter);
        return;
    }

    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 60;

    document.getElementById("countdown-timer").innerHTML = hours + " : " + minutes + " : " + seconds;
}

// JS for product-order from
function productOrder() {
    var arr = document.getElementsByTagName('input')
    console.log(arr);
    var phone = arr[0].value
    var name = arr[1].value
    var adr = arr[2].value
    if (phone == "" || name == "" || adr == "") {
        alert("Bạn hãy điền đầy đủ thông tin")
        return
    }
    if (isNaN(phone)) {
        alert("Số điện thoại không phù hợp")
        return
    }
    confirm("Bạn đã đặt hàng thành công")

}
