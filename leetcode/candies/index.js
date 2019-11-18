// es5
var distributeCandies = function (candies) {
  var count = 0 //种类数 unique
  // for (var i = 0; i < candies.length; i++) {
  // }
  let obj = {}
  candies.forEach(function(item) {
    //如果出现过
    if (!obj[item]) {
      obj[item] = 1 //出现过了
      count++ //加上总类数
    }
  })
  //糖果的种类数
  return count >= (candies.length / 2) ? (candies.length >> 1) : count
}

console.log(distributeCandies([1,1,2,2,3,3]))
