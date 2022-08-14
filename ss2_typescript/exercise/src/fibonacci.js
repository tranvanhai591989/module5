function fibonacci(num) {
    if (num == 0)
        return 0;
    if (num <= 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

var sum = 0;
for (var i = 0; i < 10; i++) {
    console.log("The Number Of  " + (i + 1) + " Is :" + fibonacci(i));
    sum += fibonacci(i);
}
console.log("Total  : " + sum);
