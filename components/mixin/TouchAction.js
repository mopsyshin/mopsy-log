const touchAction = {
  methods: {
    touchAction(target) {
      target.addEventListener('touchstart', () => {
        this.isTouch = true;
      });
      target.addEventListener('touchend', () => {
        this.isTouch = false;
      });
    },
  }
}

export default touchAction;
