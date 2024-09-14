function solution(n) {
    let answer = 0;

    // 1부터 n까지 순회
    for (let i = 1; i <= n; i++) {
        let divisorCount = 0;  // 약수의 개수를 세기 위한 변수

        // i의 약수를 찾기 위해 1부터 i까지 순회
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {  // 약수라면
                divisorCount++;
            }
        }
        // 약수의 개수가 3개 이상일 때 합성수로 간주
        if (divisorCount >= 3)answer++;
    }

    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120846