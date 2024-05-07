
function solution(people, limit) {
    people.sort((a, b) => a - b);//오름차순 정렬
    let i = 0, j = people.length -1;
    let answer = 0;
    
    while(i <= j){
        if(people[i] + people[j] <= limit) i++;
        j--;
        answer++;
    }
    
    return answer;
}
let people = [70, 80, 50];
let limit = 100;
solution(people, limit);

// 1. people 배열을 오름차순 정렬 한다
// 2. while반복문 한 번만 사용하면서, 투 포인터를 효율적으로 이동시켜서 판별한다. 시간복잡도 => O(n log n)
