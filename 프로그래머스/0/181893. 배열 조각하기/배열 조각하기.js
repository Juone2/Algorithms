function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        const cur = query[i]
        i % 2 === 0 ? arr.splice(cur + 1, arr.length - (cur + 1)) : arr.splice(0, cur)
    }
    return arr;
}

 // 이 코드 좀 쩌는 듯
function solution(arr, query) {
    let [left, right] = [0, arr.length - 1];

    query.forEach((item, idx) => {
        (idx % 2) ? left += item : right = left + v;
    })

    const res = arr.slice(lt, rt);

    if (!res.length) {
        return [-1];
    }

    return res;
}
