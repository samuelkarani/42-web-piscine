#!/usr/bin/env node

const ft_is_sort = require("./ft_is_sort");

function tester(arr) {
    if (ft_is_sort(arr)) {
        console.log("The array is sorted");
    } else {
        console.log("The array is not sorted");
    }
}

tester(["a", "b", "c"]);
tester(["c", "b", "a"]);
tester(["a", "A", "b", "b"]);
tester(["a", "b", "A", "B"]);
tester(["A", "B", "a", "b"]);
tester([1, 2, 3]);
tester([3, 2, 1]);
tester(["!/@#;^", "42", "Hello World", "hi", "zZzZzZz"]);