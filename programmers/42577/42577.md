## 전화번호 목록

---

### indexOf()

```
function solution(phone_book) {
  let answer = phone_book
    .sort()
    .some((value, index, self) => self[index + 1]?.indexOf(value) === 0);

  return !answer;
}
```

### startsWith()

```
function solution(phone_book) {
  let answer = phone_book
    .sort()
    .some((value, index, self) => {
        if(index === phone_book.length - 1) return false;
        return self[index + 1]?.startsWith(value)
    });

  return !answer;
}
```
