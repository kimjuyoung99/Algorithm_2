function solution(n, arr1, arr2) {
    //인수분해함수
    let arr1_n = factorization(arr1, n);
    let arr2_n = factorization(arr2, n);
    //벽통합함수
    let arr3 = Integration(arr1_n, arr2_n);
    //1 -> '#'변환 함수
    arr3 = Transformation(arr3);
    
    return arr3;
}

// 1. Factorization 함수
function factorization(arr, n) {
    return arr.map(num => {
        let binary = num.toString(2); // 2진수 문자열로 변환
        return binary.padStart(n, '0'); // n 길이에 맞게 0으로 패딩
    });
}

// 2. Integration 함수
function Integration(arr1, arr2) {
    return arr1.map((val, idx) => {
        let combined = '';
        for (let i = 0; i < val.length; i++) {
            combined += (parseInt(val[i]) | parseInt(arr2[idx][i])).toString(); // OR 연산
        }
        return combined;
    });
}

// 3. Transformation 함수
function Transformation(arr) {
    return arr.map(row => {
        return row.replace(/1/g, '#').replace(/0/g, ' ');
    });
}

//1. [인수분해 함수] -> arr을 각각 넣어서 0,1의 문자열로 저장
//2. [벽 통합 함수] -> arr1, arr2 문자열을 한개씩 AND 비교해서 arr에 0,1  최종 저장
//3. [1 -> '#'변환 함수] -> 0은 공백, 1은 '#'변환 후 문자열로 굳혀 배열 저장
//4. arr3 문자열 담긴 배열 출력