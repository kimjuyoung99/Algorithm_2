// https://school.programmers.co.kr/learn/courses/30/lessons/120878
function solution(a, b) {
    // 최대공약수(GCD) 계산 함수
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // a와 b의 최대공약수로 약분
    let divisor = gcd(a, b);
    b /= divisor;

    // b가 1이면 바로 유한소수
    if (b === 1) return 1;

    // b의 소인수가 2와 5만 있는지 확인
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;

    // b가 1이면 유한소수, 아니면 무한소수
    return b === 1 ? 1 : 2;
}