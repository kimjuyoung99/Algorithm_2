function solution(numbers) {
    let answer = 0;
    //Set() => 중복 자동으로 제거해주는 함수!
    let primes = new Set();
    //숫자 배열로 되어 있는 모든 순열 생성
    function getPermutations(arr, prefix = '') {
        for (let i = 0; i < arr.length; i++) {
            let newPrefix = prefix + arr[i];
            let newArr = arr.slice(0, i).concat(arr.slice(i + 1));
            //앞에 '0'이 오지 않는 함수만 primes 에 add 
            if (newPrefix[0] !== '0') {
                primes.add(parseInt(newPrefix, 10));
            }
            getPermutations(newArr, newPrefix);
        }
    }
    //소수인지 판별해주는 함수
    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    //배열로 바꿔주고~
    let numArr = numbers.split('');
    //숫자 배열로 되어 있는 모든 순열 생성함수 호출
    getPermutations(numArr);

    //소수인지 하나씩 판별 해가면서 소수일 경우(true == answer++)
    primes.forEach(num => {
        if (isPrime(num)) {
            answer++;
        }
    });

    return answer;
}