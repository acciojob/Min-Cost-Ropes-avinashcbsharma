function mincost(arr)
{ 
function mincost(arr) {
    // Convert the input array to a min-heap
    const heapify = (array) => {
      for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapifyDown(array, i);
      }
    };
  
    const heapifyDown = (array, i) => {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;
  
      if (left < array.length && array[left] < array[smallest]) {
        smallest = left;
      }
  
      if (right < array.length && array[right] < array[smallest]) {
        smallest = right;
      }
  
      if (smallest !== i) {
        [array[i], array[smallest]] = [array[smallest], array[i]];
        heapifyDown(array, smallest);
      }
    };
  
    heapify(arr);
  
   
    let totalCost = 0;  
   
    while (arr.length > 1) {
     
      const rope1 = arr.shift();
      const rope2 = arr.shift();
       
      const cost = rope1 + rope2;
       
      totalCost += cost;
       
      arr.push(cost);
      heapifyDown(arr, 0);
    }
  
    return totalCost;
  }
  
  
}

module.exports=mincost;
