var App = App || {}

App.ClickCountView = (clickCounter, updateElement, triggerElement) => {
  if (!clickCounter) throw Error('invalid clickCounter module')
  if (!updateElement) throw Error('invalid updateElement module')
  if (!triggerElement) throw Error('invalid triggerElement module')

  const view = {
    updateView() {
      updateElement.innerHTML = clickCounter.getValue()
    },
    increaseAndUpdateView() {
      clickCounter.increase()
      this.updateView()
    },
  }

  triggerElement.addEventListener('click', () => {
    view.increaseAndUpdateView()
  })

  return view
}
