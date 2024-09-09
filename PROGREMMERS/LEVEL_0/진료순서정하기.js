function solution(emergency) {
    let answer = [], rank = 1;
    
    for(let i = 0 ; i < emergency.length ; i++){
        for(let j = 0 ; j < emergency.length ; j++){
            if ( emergency[i] < emergency[j] ) rank++;
        }
        answer[i] = rank;
        rank = 1;
    }
    
    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120835