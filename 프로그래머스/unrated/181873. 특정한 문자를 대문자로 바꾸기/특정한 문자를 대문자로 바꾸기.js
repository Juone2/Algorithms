function solution(my_string, alp) {
    const result = my_string.split('').map(a => a === alp ? a.toUpperCase() : a).join("");
    return result;
}

// 다른 사람의 좋은 풀이
// my_string 문자열 중 alp를 찾아 대문자로 만든 후 return
const solution = (my_string, alp) => my_string.replaceAll(alp, alp.toUpperCase());
