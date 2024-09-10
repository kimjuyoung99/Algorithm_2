function solution(n) {
    var answer = 0;

    for(let i = 1 ; i <= Math.sqrt(n) ; i++){
        if(n%i === 0){
            if(i*i===n) answer++;
            else answer+=2;
        }
    }    
    return answer;
}
//시간초과 안나게 Math.sqrt(n) 사용하자 

// https://school.programmers.co.kr/learn/courses/30/lessons/120836