function divisor(num){
    let count =0;
    for(let i = 1 ; i*i <= num ; i++){
         if(num % i === 0) {
            if(i * i === num) count += 1;
            else count += 2;
        }
    }
    return count;
}
//쌩으로 쭉 돌리면 시간초과 뜸
//'에라토스테네스의 체' 방법을 써 줘야 함
//제곱으로 돌려주고, 저렇게 해야 루트 값만큼 돌릴 수 있다.
// i * i === num -> i가 n의 제곱근이라면, 중복을 피하기 위해 한 번만 카운트
//else count += 2; -> i와 n/i 둘 다 약수이므로 두 번 카운트