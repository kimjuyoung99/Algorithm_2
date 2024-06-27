function solution(num_list) {
    var answer = 0;
    if(num_list.length >= 11) return num_list.reduce((a,b)=>a+b,0);

    else return num_list.reduce((a,b)=>a*b,1);
    
    return answer;
}