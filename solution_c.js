var sum_to_n = function(n) {
    if (n == 1) return 1;
    return n + sum_to_n (n-1);
}

alert(sum_to_n(5));