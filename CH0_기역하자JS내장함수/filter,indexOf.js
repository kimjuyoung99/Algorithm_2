//filter 함수, filter, indexOf

function filterEvenNumbers(arr) {
    return arr.filter(b => b % 2 === 0);
}

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(A));

function filterNotInSecondArray(arr1, arr2) {
    // return arr1.filter(item => arr2.indexOf(item) === -1);
    return array1.filter(item => arr2.indexOf(item)===-1);
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4];
console.log(filterNotInSecondArray(array1, array2)); // [1, 3, 5]


function countUU(arr, target){
    let count = 0;
    let index = arr.indexOf(target);// 첫 번째 "apple"의 인덱스
    console.log(index);
    while (index !== -1){
        count++;
        index = arr.indexOf(target,index+1);//배열 arr에서 target 요소를 찾는데, 이전에 찾은 위치 다음 인덱스부터 다시 검색을 시작하라는 의미
    }
    return count;
}
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const targetFruit = "apple";
console.log(countUU(fruits, targetFruit)); // 3


//주어진 문자열 배열에서 길이가 5 이상인 문자열만 필터링하는 함수를 작성하세요.
const words = ["apple", "banana", "cherry", "date", "fig", "grape"];
function over_5(words){
    let over_5_words = [];
    let index = words.length, count = 0;
    while(count !== index){
       if(words.indexOf(count).length <= 5) f
    }
    return over_5_words;
}
console.log(over_5(words));










