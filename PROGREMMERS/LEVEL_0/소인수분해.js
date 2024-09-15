function solution(n) {
    let answer = [];
    
    for (let i = 2; i <= n; i++) {
        //if X while O -> 8 == 2*2*2인데 if를 사용하면 나머지가 남게 되어버린다.

        while (n % i === 0) {
            answer.push(i);
            n = Math.floor(n / i);
        }
        if (n === 1) break;
    }
    
    return [...new Set(answer)];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120852