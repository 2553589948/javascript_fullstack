class Solution:
    # min 函数式内置函数 self相当于this的作用
    def distributeCandies(self, candies:List[int]) -> int:
    return min(len(set(candies)), len(candies)>>1)