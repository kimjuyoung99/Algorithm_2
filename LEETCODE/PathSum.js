/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // 기저 조건: 루트가 null이면 false 반환
    if (root === null) {
        return false;
    }
    
    // 리프 노드인지 확인
    if (root.left === null && root.right === null) {
        // 리프 노드일 때, 경로의 합이 targetSum과 같은지 확인
        return root.val === targetSum;
    }
    
    // 왼쪽과 오른쪽 하위 트리에 대해 재귀적으로 호출
    const remainingSum = targetSum - root.val;
    return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
};

// 예제 테스트
const root1 = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: { val: 7, left: null, right: null },
            right: { val: 2, left: null, right: null }
        },
        right: null
    },
    right: {
        val: 8,
        left: { val: 13, left: null, right: null },
        right: { val: 4, left: null, right: { val: 1, left: null, right: null } }
    }
};
console.log(hasPathSum(root1, 22));  // true

const root2 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
};
console.log(hasPathSum(root2, 5));  // false

const root3 = null;
console.log(hasPathSum(root3, 0));  // false