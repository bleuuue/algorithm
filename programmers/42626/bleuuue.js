function solution(scoville, K) {
    let answer = 0;
    const low = scoville.filter((val) => val < K);
    
    for(let i = 0; i< low.length - 1; i += 2) {
        console.log(low);
        const newScoville = low[i] + (low[i + 1] * 2);
        if (newScoville < K) low.push(newScoville);
        answer++;
    }
    
    return answer;
}