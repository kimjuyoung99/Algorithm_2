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