var $input = $('#input').val()
var val = {
  isEmpty: function() {
    return false
  },
  isTel: function() {
    return true
  }
}

var ise = val.isEmpty($input)
var isTel = val.isTel($input)

if (!ise && isTel) {
  alert('通过审核')
} else if () {

}
// $.fn.val
$.input.val({
  isEmpty: false,
  isTel: true
})

// $('div').animate({width: 100 + 'px'}, 1000, '策略')
