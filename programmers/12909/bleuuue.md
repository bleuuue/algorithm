```
function solution(s){
    let answer = true;
    const stack = [];
    for(let val of s) {
        if (val === '(') stack.push(val);
        else {
            if(!stack.length) return false;
            stack.pop()
        };
    }

    // 비교 구문
    if(stack.length) return false;
    return answer;
}
```

```
function solution(s){
    let answer = true;
    const stack = [];
    for(let val of s) {
        if (val === '(') stack.push(val);
        else {
            if(!stack.length) return false;
            stack.pop()
        };
    }

    // 비교 구문
    return !stack.length;
}
```

아래 코드는 시간 초과
