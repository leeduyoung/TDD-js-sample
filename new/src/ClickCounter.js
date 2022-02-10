var App = App || {}

App.ClickCounter = () => {
  let counter = 0

  return {
    getValue() {
      return counter
    },
    increase() {
      ++counter
    },
  }
}
