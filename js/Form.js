var btn_edit = document.querySelectorAll(".edit");
var btn_delete = document.querySelectorAll(".delete");
var idnhanvien_edit = document.getElementById('idnhanvien-edit');
var idnhanvien_delete = document.getElementById('idnhanvien-delete');

btn_edit.forEach(element => {
    element.onclick = function () {
        idnhanvien_edit.value = element.value;
    }
});

btn_delete.forEach(element => {
    element.onclick = function () {
        idnhanvien_delete.value = element.value;
    }
});

var btn_edit = document.querySelectorAll(".edit");
var btn_delete = document.querySelectorAll(".delete");
var idsach_edit = document.getElementById('idsach-edit');
var idsach_delete = document.getElementById('idsach-delete');

btn_edit.forEach(element => {
    element.onclick = function () {
        idsach_edit.value = element.value;
    }
});

btn_delete.forEach(element => {
    element.onclick = function () {
        idsach_delete.value = element.value;
    }
});

var btn_edit = document.querySelectorAll(".edit");
var btn_delete = document.querySelectorAll(".delete");
var iddocgia_edit = document.getElementById('iddocgia-edit');
var iddocgia_delete = document.getElementById('iddocgia-delete');

btn_edit.forEach(element => {
    element.onclick = function () {
        iddocgia_edit.value = element.value;
    }
});

btn_delete.forEach(element => {
    element.onclick = function () {
        iddocgia_delete.value = element.value;
    }
});