var merge = function(nums1, m, nums2, n) {
      for(let i = nums1.length; i>m ; i--){

        nums1.pop();
      }
      for(let i = 0; i <n; i++){
        nums1.push(nums2[i]);
      }

      nums1.sort((a,b) => a-b);


      return nums1;   
}
