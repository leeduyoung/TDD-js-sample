describe('App.ClickCountView', () => {
  let clickCounter
  let updateElement
  let view

  beforeEach(() => {
    clickCounter = App.ClickCounter()
    updateElement = document.createElement('span')
    view = App.ClickCountView(clickCounter, updateElement)
  })

  describe('의존성 모듈 검증', () => {
    it('clickCounter를 주입하지 않으면 에러를 던진다.', () => {
      const clickCounter = null
      const actual = () => App.ClickCountView(clickCounter, updateElement)
      expect(actual).toThrowError()
    })
    it('updateElement를 주입하지 않으면 에러를 던진다.', () => {
      const updateElement = null
      const actual = () => App.ClickCountView(clickCounter, updateElement)
      expect(actual).toThrowError()
    })
  })

  describe('updateView()', () => {
    it('ClickCounter의 counter 값을 출력한다.', () => {
      view.updateView()
      expect(updateElement.innerHTML).toBe(clickCounter.getValue().toString())
    })
  })
})
