describe('App.ClickCountView', () => {
  let clickCounter
  let updateElement
  let view

  beforeEach(() => {
    clickCounter = App.ClickCounter()
    updateElement = document.createElement('span')
    view = App.ClickCountView(clickCounter, updateElement)
  })

  describe('updateView()', () => {
    it('ClickCounter의 counter 값을 출력한다.', () => {
      view.updateView()
      expect(updateElement.innerHTML).toBe(clickCounter.getValue().toString())
    })
  })
})
