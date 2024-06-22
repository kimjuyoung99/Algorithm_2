//다시 해 본 버전(킹치만 지피티 도움 받음..하지만 이해는 더 했음)
function solution(sequence, k) {
    let start = 0; // 슬라이딩 윈도우의 시작 인덱스
    let end = 0;   // 슬라이딩 윈도우의 끝 인덱스
    let current_sum = 0; // 현재 슬라이딩 윈도우의 합
    let best_range = [0, sequence.length - 1]; // 가장 짧은 부분 수열의 시작과 끝 인덱스
    
    while(end < sequence.length ){
        current_sum += sequence[end];
        
        while(start <= end && current_sum > k){
            current_sum -= sequence[start];
            start++;
        }
        
        if(current_sum === k){
            if((end-start) < (best_range[1] - best_range[0])){
                best_range = [start, end];
            }
        }
        
        end++;
        
    }
    
    
    return best_range;
}


//옜날 버전
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
} console.lpg