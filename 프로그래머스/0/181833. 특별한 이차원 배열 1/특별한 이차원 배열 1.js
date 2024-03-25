function solution(n) {
    const arr = Array(n).fill(Array(n).fill(0));
    
    return arr.map((item, idx) => {
        return item.map((item2,idx2) => item2 = idx == idx2 ? 1 : 0);
    });

}