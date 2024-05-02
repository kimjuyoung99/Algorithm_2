class NumArray {
    data = [];//처음엔 빈 배열로 초기화

    constructor(numbers) { //객체 생성 및 초기화 하는 함수
        this.data = numbers;
    }

    sumRange(l, r) { //l,r 인덱스 사이 값 합 계산. for 함수 사용해서 루프
        let sum = 0;
        for (let i = l; i <= r; i++) sum += this.data[i];
        return sum;
    }
}
