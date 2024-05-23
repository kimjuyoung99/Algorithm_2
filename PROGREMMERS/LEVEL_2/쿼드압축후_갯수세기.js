function solution(arr) {
    const n = arr.length;

    // 주어진 영역 (x, y)에서 크기 size인 부분 배열을 압축하는 함수
    function compress(x, y, size) {
        const initial = arr[x][y];
        let allSame = true;
        
        // 현재 영역의 모든 요소가 동일한지 확인
        for (let i = x; i < x + size; i++) {
            //여기서 initial는 검사하는 구역의 첫 번째 값이다!
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== initial) {
                    allSame = false;
                    break;
                }
            }
            if (!allSame) {
                break;
            }
        }

        // 모든 요소가 동일하면 해당 값을 반환
        if (allSame) {
            if (initial === 0) {
                return [1, 0];  // 영역이 전부 0으로 이루어져 있으면 [0의 개수, 1의 개수]
            } else {
                return [0, 1];  // 영역이 전부 1으로 이루어져 있으면 [0의 개수, 1의 개수]
            }
        }

        // 동일하지 않으면 영역을 4개의 하위 영역으로 분할하여 재귀적으로 압축
        const half = size / 2;
        const topLeft = compress(x, y, half);
        const topRight = compress(x, y + half, half);
        const bottomLeft = compress(x + half, y, half);
        const bottomRight = compress(x + half, y + half, half);

        // 4개의 하위 영역에서 반환된 결과를 합산하여 반환
        return [
            topLeft[0] + topRight[0] + bottomLeft[0] + bottomRight[0],  // 0의 총 개수
            topLeft[1] + topRight[1] + bottomLeft[1] + bottomRight[1]   // 1의 총 개수
        ];
    }

    return compress(0, 0, n);  // 전체 배열에 대해 압축 함수 호출
}

// 예제 사용
const arr1 = [
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1]
];
console.log(solution(arr1)); // 출력: [4, 9]

const arr2 = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1]
];
console.log(solution(arr2)); // 출력: [10, 15]
