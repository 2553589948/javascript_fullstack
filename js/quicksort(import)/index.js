var a = [12, 23, 53, 32, 156, 67, 98, 9]
// 1. 选择一个元素作为基准32
// 2. 所有小于基准的元素都移动到基准左边,大的放右边
// 3. 对基准左右两边的子集,重复1,2步骤

var quickSort = function (arr) {
  if (arr.length <= 1) {return arr}

  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot] ,quickSort(right))
}

console.log(quickSort(a))