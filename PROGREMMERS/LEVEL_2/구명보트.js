
function solution(people, limit) {
    people.sort((a, b) => a - b);//오름차순 정렬
    var answer = 0;
    for(let i = 0 ; i < people.length ; i++){
        for(let j = i ; j < people.length ; j++){
            if(i!=j && people[i]+people[j] <= limit && people[i]!=-1 && people[j]!=-1){
                answer++;
                people[i]=-1;
                people[j]=-1;
                console.log("answer : "+ answer)

            }
        }
    }
    for(let i = 0 ; i < people.length ; i++){
        if(people[i] != -1) answer++;
        console.log("answer : "+ answer)
    }
    console.log("answer : "+ answer)
    
    return answer;
}
let people = [70, 80, 50];
let limit = 100;
solution(people, limit);

//1. 우선, 2중 for문을 쭉 돌면서 2명이 한 개 구명보트 탈 수 있는 경우를 찾는다.
//2.1번의 경우를 찾을 경우 answer +1 , 그리고 그 두 명에 해당하는 people 배열 자리는 '-1'처리 한다. 
//3. for문을 쭉 돌면서 -1이 아닌 모든 수일 경우 answer + 1 을 한다.
//4. return answer