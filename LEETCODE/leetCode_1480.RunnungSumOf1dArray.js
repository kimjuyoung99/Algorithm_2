class NumArray {
    data = [];//빈 배열 클래스 속성으로 선언

    constructor(numbers) { //생성자 constructor로 numbers를 this.data에 저장
        this.data = numbers;
    }
    //l 부터 r 인덱스 요소까지의 합을 구해서 return
    sumRange(l, r) {
        let sum = 0;
        for (let i = l; i <= r && i < this.data.length; i++) {
            sum += this.data[i];
        }
        return sum;
    }
}
