function solution(todo_list, finished) {
    return todo_list.filter((_, idx) => finished[idx] !== true);
}

// 다른 사람 풀이
return todo_list.filter((e,i) => !finished[i]); -> 앞에 !를 붙여서 boolean 반환..
