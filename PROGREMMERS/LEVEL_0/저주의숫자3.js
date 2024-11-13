// https://school.programmers.co.kr/learn/courses/30/lessons/120871
function solution(n) {
    var a = 0;
    
    for(let i = 0 ; i < n ; i++){
        a++;
        while (a%3 === 0 || String(a).includes('3')) a++;
        //while 문으로 묶어서 두 번 이상 a++경우도 챙기기
    }

    return a;
}