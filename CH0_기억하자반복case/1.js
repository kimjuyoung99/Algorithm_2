//약수 갯수 구하기
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

//floor 함수 : 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환 
//(Math 객체의 메서드로 사용)
console.log(Math.floor(5.7)); // 출력: 5
console.log(Math.floor(3.1)); // 출력: 3
console.log(Math.floor(-2.8)); // 출력: -3


//// n이 118372면 873211을 리턴
answer = n.toString().split('').sort((a,b) => b - a).join('');
answer = parseInt(answer,10);
//정수 -> 문자열 -> 배열 -> 내림차순정리 -> 문자열 
// -> 정수

//문자열 -> 배열
//배열 -> 내림차순 정리
//배열 -> 문자열
//문자열 -> 정수


//필터링된 배열의 길이, 즉 true인 요소들의 개수를 반환.
isPrime.filter(prime => prime).length
