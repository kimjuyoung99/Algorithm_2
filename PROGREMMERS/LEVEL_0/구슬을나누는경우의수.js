function solution(balls, share) {
    function factorial(n) {
        if (n == 0 || n == 1) return 1n;
        return BigInt(n) * factorial(n-1);
    }
    const 분자 = factorial(balls);
    const 분모 = factorial(share) * factorial(balls - share);
    
 return Number(분자 / 분모);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120840