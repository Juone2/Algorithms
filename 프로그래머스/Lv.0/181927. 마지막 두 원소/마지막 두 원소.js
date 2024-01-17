function solution(num_list) {
    let secondLen = num_list[num_list.length - 2];
    let firstLen = num_list[num_list.length - 1];
    let pushValue = firstLen > secondLen ? firstLen - secondLen : firstLen * 2;
    num_list.push(pushValue);
    return num_list;
}
