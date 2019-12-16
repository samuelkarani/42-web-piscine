var todoArr = [];

$(document).ready(function() {
    selectFunc();
});

function selectFunc() {
    $.ajax({
        url: "/ex04/api/select",
        method: "get",
        success: function(result) {
            if (result === "") {
                todoArr = [];
            } else {
                todoArr = result.split(",");
            }
            rendering();
        }
    });
}

function insertFunc() {
    var text = prompt("What do you have to do?");

    $.ajax({
        url: "/ex04/api/insert",
        method: "post",
        data: { text: text },
        success: function(result) {
            selectFunc();
        }
    });
}

function deleteFunc(obj) {
    if (confirm("Are you sure?")) {
        $.ajax({
            url: "/ex04/api/delete",
            method: "post",
            data: { index: obj.dataset.index },
            success: function(result) {
                selectFunc();
            }
        });
    }
}

function rendering() {
    $("#ft_list").html(
        '<button class="ft_list_btn" onclick="insertFunc()">New</button>'
    );
    for (var i = todoArr.length - 1; i >= 0; i--) {
        $("#ft_list").html(
            $("#ft_list").html() +
            '<div class="ft_list_element" onclick="deleteFunc(this)" data-index="' +
            todoArr[i].split(";")[0] +
            '">' +
            todoArr[i].split(";")[1] +
            "</div>"
        );
    }
}