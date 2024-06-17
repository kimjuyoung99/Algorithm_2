function solution(numbers) {
    let answer = 0;
    let aa = new Set();


    //모든 문자열 생성 함수
    function ReturnAllArr(arr,prefix = ''){
        for(let i = 0 ; i < arr1.length ; i++){
            let newPrefix = prefix + arr[i];
            let newArr = arr.slice(0,i).concat(arr.slice(i+1));
            //앞에 0오는 애들은 제외하고 push (10은 10진수!)
            if(newPrefix[0]!== '0') primes.add(parseInt(newPrefix,10));
            ReturnAllArr(newArr,newPrefix);
        }
    }

    //소수판별함수
    function isPrime(num){
        if(num <= 1) return false;
        if(num === 2) return false;
        if(num % 2 === 0) return false;
        //2로 나눠 떨어지는건 이미 했고, i * i 로 하는건 불필요한 곱셈을 없애는 것
        for(let i = 3 ; i * i <= num ; i += 2){
            if(num%i ===0) return false
        }
        return true;
    }


    //1.배열로 바꿔주기
    let numarr = numbers.slipt('');
    ReturnAllArr(numarr);

    //최종 : 하나씩 소수 판별하면서 소수 갯수 return
    primes.forEach(num => {
        if(isPrime(num)) {
            answer++;
        }
    })

    return answer;
}