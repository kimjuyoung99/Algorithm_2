function solution(people, limit) {
    console.log("지금이니?");
    var answer = 0;
    for(let i = 0 ; i < people.length ; i++){
        for(let j = 0 ; j < people.length ; j++){
            if(people[i]+people[j] <= limit){
                answer++;
                people[i]=-1;
                people[j]=-1;
            }
        }
    }
    for(let i = 0 ; i < people.length ; i++){
        if(people[i] != -1) answer++;
    }
    console.log("answer : "+ answer)
    
    return answer;
}

//1. 우선, 2중 for문을 쭉 돌면서 2명이 한 개 구명보트 탈 수 있는 경우를 찾는다.
//2.1번의 경우를 찾을 경우 answer +1 , 그리고 그 두 명에 해당하는 people 배열 자리는 '-1'처리 한다. 
//3. for문을 쭉 돌면서 -1이 아닌 모든 수일 경우 answer + 1 을 한다.
//4. return answer