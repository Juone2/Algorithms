function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        const cur = query[i]
        i % 2 === 0 ? arr.splice(cur + 1, arr.length - (cur + 1)) : arr.splice(0, cur)
    }
    return arr;
}
