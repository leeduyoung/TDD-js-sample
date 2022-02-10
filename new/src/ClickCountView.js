var App = App || {}

App.ClickCountView = (clickCounter, updateElement) => {
  if (!clickCounter) throw Error('invalid clickCounter module')
  if (!updateElement) throw Error('invalid updateElement module')

  return {
    updateView() {
      updateElement.innerHTML = clickCounter.getValue()
    },
    increaseAndUpdateView() {
      clickCounter.increase()
      this.updateView()
    },
  }
}
