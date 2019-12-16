function ft_is_sort(arr) {
    if (arr.length > 1) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                return false;
            }
        }
    }
    return true;
}

module.exports = ft_is_sort;