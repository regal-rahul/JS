function mySort(a ,b) {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

// [6, -2, -7, 2].sort(); execute in console to find out the result
// [6, -2, -7, 2].sort(mySort);