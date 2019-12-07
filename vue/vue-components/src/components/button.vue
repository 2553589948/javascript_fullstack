<template>
  <button :class="'i-button-size'+size" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
function oneOf (value, arr) {
  for(var i = 0; i < arr.length; i++){
    if(value === arr[i]){
      return true
    }
  }
  return false
}
export default {
  props: {
    size: {
      // type: String,
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    }
  },
  data () {
    return {
      message: '我是子组件的内容'
    }
  },
  methods: {
    handleClick () {
      this.$emit('on-click')
    },
    confire() {
      // console.log('确认')
      this.$emit('setim', this.message)
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid orange;
  background-color: yellow;
  color: black;
  border-radius: 5px;
}
.i-button-sizelarge {
  padding: 10px 16px;
}
.i-button-sizedefault {
  padding: 6px 8px;
}
.i-button-sizesmall {
  padding: 2px 4px;
}
</style>