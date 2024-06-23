function solution(arr)
{
    var answer = [];
    
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] != arr[i+1]) {
            answer.push(arr[i]);
            // console.log(answer);
        }
        
    }
    return answer;
}
//프로그래머스에서 통과 시키려면 효율성 검사 해야 해서 콘솔은 전부 주석처리 해야 하는듯?