var isSymmetric = function(root){
    if(!root) return true;

    function isMirror(t1,t2){
        if(!t1 && !t2) return true;
        if(!t1 || !t2) return false;
        return(t1.val == t2.val) && isMirror(t1.right, t2.left)&& isMirror(t1.left, t2.right);
    }

    return isMirror(root.left, root.right);
};
//1. 트리가 비어 있으면 대칭
// 2. isMirror함수로 대칭인지 확인
// 3. !t1 && !t2 둘 다 null 이면 대칭(True)
// 4. !t1 || !t2 한 쪽만 null 이면 대칭 아님(False)
// 5. return (t1.val === t2.val) && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right);
// 현재 노드 값 동일, 각각 자식 노드가 대칭인지 확인
