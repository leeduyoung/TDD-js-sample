var App = App || {}

App.ClickCountView = (clickCounter, updateElement) => {
  return {
    updateView() {
      updateElement.innerHTML = clickCounter.getValue()
    },
  }
}
