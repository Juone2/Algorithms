// let result = num_list.push(pushValue);
// return result
// 이런 식으로 return 했는데 배열의 길이가 출력 되길래 당황했다.
// push() 메소드는 배열의 length를 반환한다. -> 원본 배열 return

function solution(num_list) {
    let secondLen = num_list[num_list.length - 2];
    let firstLen = num_list[num_list.length - 1];
    let pushValue = firstLen > secondLen ? firstLen - secondLen : firstLen * 2;
    num_list.push(pushValue);
    return num_list;
}

// 다른 사람 풀이
// 구조 분해 할당으로 배열을 뒤집은 다음 a, b 가져오고 배열 풀어서 조건문으로 return... 미친놈인 거 같다 근데 성능은 안 좋아보임
function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}
