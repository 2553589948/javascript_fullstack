let dragMixin = {
  currentTarget: null,
  methods: {
    move(e) {
      const x = e.clientX
      const y = e.clientY
      this.currentTarget.style.transform = `translate(${x}px, ${y}px)`
    },
    leave () {
      document.removeEventListener('mousemove', this.move)
    },
    start(e) {
      this.currentTarget = e.currentTarget
      document.addEventListener('mousemove', this.move)
      document.addEventListener('mouseleave', this.leave)
    }
  }
}

export default dragMixin