function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const trucks_on_bridge = [];
    let totalWeight = 0;
    while(truck_weights.length) {
        // 다리 하나씩 지나기
        if(trucks_on_bridge.length) {
            trucks_on_bridge.forEach((truck) => truck.bridge--);
            
            // 도착 트럭
            if(trucks_on_bridge[0].bridge === 0) {
                const { weight } = trucks_on_bridge.shift();
                totalWeight -= weight;
            }
        }
        
        // 새로운 트럭 올리기
        if (weight >= totalWeight + truck_weights[0]) {
            const curWeight = truck_weights.shift();
            totalWeight += curWeight;
            trucks_on_bridge.push({
               weight: curWeight,
               bridge: bridge_length,
            })
        }
        
        time++;
    }
    
    return time + bridge_length;
}