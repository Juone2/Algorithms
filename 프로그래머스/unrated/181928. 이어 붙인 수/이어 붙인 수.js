function solution(num_list) {
    let array1 = num_list.filter((item) => item % 2 !== 0);
    let array2 = num_list.filter((item) => item % 2 === 0);
    return Number(array1.join('')) + Number(array2.join(''));
}