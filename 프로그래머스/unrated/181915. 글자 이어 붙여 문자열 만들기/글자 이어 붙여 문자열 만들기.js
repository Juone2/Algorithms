function solution(my_string, index_list) {
    return index_list.reduce((acc, idx) => acc + my_string[idx], "")
}

// 다른 사람의 좋은 풀이
// map을 통해 배열을 순회 하며 각 인덱스르루 문자열로 반환함
function solution(my_string, index_list) {
    const result = index_list.map(i => my_string[i]).join('');
    return result;
}
