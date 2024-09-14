function solution(n) {
    let answer = 1;
    
    for(let i = 1 ; i <= n ; i++){
        answer *= i;
        if(answer > n ) return i-1;
        if(answer == n) return i;
    }
    
    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120848