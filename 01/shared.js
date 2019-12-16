function checkSpace(s) {
    return /\s/g.test(s);
}

function ft_split(s) {
    let res = [];
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        if (!checkSpace(s[i]) && i > 0 && checkSpace(s[i - 1])) {
            start = i;
        }
        if (checkSpace(s[i]) && i > 0 && !checkSpace(s[i - 1]))
            res.push(s.substring(start, i));
        if (i + 1 === s.length && !checkSpace(s[i])) {
            res.push(s.substring(start, i + 1));
        }
    }
    return res;
}

function ft_join(words) {
    return words.reduce((acc, cur) => acc + " " + cur, "");
}

module.exports = {
    ft_split,
    ft_join
};