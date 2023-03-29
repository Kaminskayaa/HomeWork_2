// 1
function convertElements(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = String(arr[i]);
    }
    console.log(arr);
}
convertElements([1, 2, "x", "z"]);
convertElements(["pdf", 123, "def", 456]);
convertElements([1, 2, 3, 17, 24, 3, "a", "123b"]);
convertElements([]);

// 2
function numericTrue(arr) {
    var arrResult = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == true) {
            arrResult.push(arr[i]);
        }
    }
    console.log(arrResult.length);
}
numericTrue([true, false, false, true, false]);
numericTrue([false, false, false, false]);
numericTrue([]);

// 3
function highLow(arr) {
    var min = arr[0];
    var max = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max, min);
}

highLow([1, 2, 3, 4, 5]);
highLow([1, 2, -3, 4, 5]);
highLow([1, 9, 3, 4, -5]);
highLow([13]);


