var sum_to_n = function(n) {
    let sum = 0;
    for (let i = 1, i <= n; i++){
        sum += i;
    }
    return sum;
}

alert(sum_to_n(5) );