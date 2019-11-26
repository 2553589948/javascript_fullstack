from typing import List
# python3 c.py
class Solution:
  def maxSubArray(self, nums: List[int]) -> int:
    # infinity无穷大
    maxNum = float("-inf")
    sum = 0
    for num in nums:
      if sum < 0:
        sum = 0
      sum += num
      maxNum = max(sum, maxNum)
    return maxNum

solution = Solution() # 实例化
print(solution.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))