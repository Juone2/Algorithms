function solution(my_string, alp) {
    const result = my_string.split('').map(a => a === alp ? a.toUpperCase() : a).join("");
    return result;
}