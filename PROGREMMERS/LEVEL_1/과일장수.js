function solution(k, m, score) {
    var answer = 0,count =0 ;
    let box = Math.floor(score.length / m);
    let boxarr = [];
    score = score.sort((a,b) => b - a);
    
    for(let i = 0 ; i < score.length ; i++){
            boxarr.push(score[count]);
            count++;
        if((count % m) == 0){
            answer += (Math.min(...boxarr))*m;
            boxarr = [];
        }  
    }
    
    return answer;
}
//**주의 : 이중 for 문을 쓰면 대부분 runtime error가 난다. 
// 1. 우선 몇 개의 상자가 나올 수 있는지 판별한다. (box)
// 2. score를 내림차순으로 정리한다. sort(b-a)
// 3. 하나의 배열 당 Math.min(..box) 함수로 가장 작은 값을 구하고, m만큼 곱해서 더해준다.

