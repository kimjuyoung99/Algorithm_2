let str = "123";
let paddedStr = str.padStart(5, "0");
console.log(paddedStr); // "00123"

//프로그래머스 '비밀지도'에서 
function factorization(arr, n) {
    return arr.map(num => {
        let binary = num.toString(2); // 2진수 문자열로 변환
        return binary.padStart(n, '0'); // n 길이에 맞게 0으로 패딩
    });
}