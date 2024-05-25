function solution(numbers) {
    var answer = [];
    for(let i = 0 ; i < numbers.length ; i++){
        for(let j = i+1 ; j < numbers.length ; j++){
            answer.push(numbers[i] + numbers[j]);
        }
    }
    answer = Remove(answer);
    answer = answer.sort((a,b)=> a-b);
    console.log("After sorting: ", answer); // 정렬 후 출력
    return answer;
}
function Remove(answer){
    return answer.filter((item,index)=>answer.indexOf(item)===index);
}
console.log(solution([2,1,3,4,1]));

//일단 이중 반복문을 써서 모든 합을 배열이 넣는다(중복 포함)
//중복 검사 반복문 한 번 실행해서 중복제거
//return