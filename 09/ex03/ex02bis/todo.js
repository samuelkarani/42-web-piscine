var taskList = $("#ft_list");
var addTaskButton = $("#new_task_btn");

var allCookies = Object.keys($.cookie());

for (var i in allCookies) {
    console.log(allCookies[i]);
    appendNewTask(allCookies[i]);
}

addTaskButton.on("mouseover", () => {
    addTaskButton.css("background", `#0000000a`);
});

addTaskButton.on("mouseleave", () => {
    addTaskButton.css("background", `#ffffff`);
});

addTaskButton.on("click", () => {
    var newTask = window.prompt("Add task");
    if (newTask != null && newTask != "") appendNewTask(newTask);
});

function appendNewTask(newTask) {
    var newAddedTask = $(
        `<div id="task_element"><p id="task_text">${newTask}</p><div id="remove_task_element">x</div></div>`
    );
    var removeBtn = newAddedTask.children("#remove_task_element");
    newAddedTask.prependTo("#ft_list");

    removeBtn.on("mouseover", () => {
        removeBtn.css("background", `#0000000a`);
    });

    removeBtn.on("mouseleave", () => {
        removeBtn.css("background", `#ffffff`);
    });

    removeBtn.on("click", e => {
        if (window.confirm("Are you sure?") == true) {
            $.removeCookie(e.target.previousSibling.innerHTML, { expires: 0 });
            e.target.parentNode.remove();
        }
    });

    $.cookie(newTask.toString(), "task", { expires: 1 });
}