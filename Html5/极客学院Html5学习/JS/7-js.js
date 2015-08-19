/**
 * Created by kingsweet on 15/7/3.
 */
function saveStorageWithSession(id) {
    var target = document.getElementById(id);
    var str = target.value;

    //保存数据方法 k-v
    sessionStorage.setItem("message", str);
}

function loadStrorageWithSession(id) {
    var target = document.getElementById(id);
    var msg = sessionStorage.getItem("message");
    target.innerHTML = msg;
}

function saveStorageWithLocal(id) {
    var target = document.getElementById(id);
    var str = target.value;

    //保存数据方法 k-v
    localStorage.setItem("message", str);
}

function loadStrorageWithLocal(id) {
    var target = document.getElementById(id);
    var msg = localStorage.getItem("message");
    target.innerHTML = msg;
}