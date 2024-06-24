//효율화 한 코드
function solution(array, commands) {
    var answer = [];
    let len = commands.length
    for(let i = 0 ; i < len ; i++){
        let start = commands[i][0]-1;
        let end = commands[i][1];
        let k = commands[i][2]-1;
         // 주어진 범위 내의 부분 배열을 자르고 정렬
        let slicedArray = array.slice(start, end).sort((a,b)=>a-b);
        // k번째 숫자를 결과 배열에 추가
        answer.push(slicedArray[k]);
    }
    return answer;
}
// slicedArray에다가 한 먼에 slice, sort 함수로 배열을 잘라서 넣으면 됨..(천재?)
//그리고 index 번호도 slide 함수에서 start, end에 간단하게 넣어서 구현...

//기존에 작성한 코드
function solution(array, commands) {
    var answer = [];
    var pull = [];
    let len = commands.length
    for(let i = 0 ; i < len ; i++){
        pull = pushArray(commands[i], array);
        // console.log("pull :", pull);
        answer.push(pull[commands[i][2]-1]);
        // console.log("answer : ", answer);
        pull = [];
    }
    function pushArray(commands,array){
        // console.log("처음 commands : ",commands);
       
        let answer2 = [];
        for(let i = commands[0]-1 ; i < commands[1] ; i++){
            answer2.push(array[i]);
            // console.log(answer2);
        }
        // console.log("! :",answer2.sort((a,b) => a - b));
        return answer2.sort((a,b) => a - b);     
    }
    return answer;
}