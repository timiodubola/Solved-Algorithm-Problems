var findNumbers = function(nums) {
   let output = 0;
    for(let i = 0; i < nums.length; i++){
         let count = 0;
         while( Math.floor(nums[i]) > 0){
             count++;
            nums [i] = nums[i] / 10; 
         }
        if (count % 2 == 0){
            output++;   
        }
    }
    return output;
    
};

