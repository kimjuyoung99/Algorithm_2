function solution(sequence, k) {
    let answer = null;
    let sum = sequence[0]; //수열의 합 인덱스 0으로 초기화
    let i = 0,j = 0;//시작과 끝 인덱스
    
    while(i < sequence.length && j < sequence.length){
        if(sum == k){//합이 K와 같을 경우
            //answer가 비어 있음 or 수열 길이 더 짦으면 해당 i,j 저장
            if(answer == null || j - i < answer[1] - answer[0]) answer = [i,j];
        }
        if(sum < k || i == j){
            // 합이 k보다 작거나 시작 끝 인덱스 같으면
            j+=1;
            if(j < sequence.length) sum+= sequence[j];
        }
        else{// 합이 k보다 크면 시작 원소를 합에서 빼고 인덱스 1증가
            sum -= sequence[i];
            i += 1;
        }        
    }    
    
    return answer;
}