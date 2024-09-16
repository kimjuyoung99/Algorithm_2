// https://school.programmers.co.kr/learn/courses/30/lessons/120853
function solution(s) {
    let answer = 0;
    let array = s.split(' ').map(i => isNaN(i) ? i : Number(i));
    for(let i = 0 ; i < array.length ; i++){
        if(array[i]==='Z'||array[i+1] === 'Z') continue;
        else answer+=array[i];
    }
    
    return answer;
}
//1. 문자열 단어별로 잘라서 배열에 저장
//2. length 만큼 for문 돌리면서 다음 인덱스값이 Z라면 continue
//3. 아니라면 더하기