describe('App.ClickCountView', () => {
  let clickCounter
  let updateElement
  let triggerElement
  let view

  beforeEach(() => {
    clickCounter = App.ClickCounter()
    updateElement = document.createElement('span')
    triggerElement = document.createElement('button')
    view = App.ClickCountView(clickCounter, updateElement, triggerElement)
  })

  describe('의존성 모듈 검증', () => {
    it('clickCounter를 주입하지 않으면 에러를 던진다.', () => {
      const clickCounter = null
      const actual = () => App.ClickCountView(clickCounter, updateElement, triggerElement)
      expect(actual).toThrowError()
    })
    it('updateElement를 주입하지 않으면 에러를 던진다.', () => {
      const updateElement = null
      const actual = () => App.ClickCountView(clickCounter, updateElement, triggerElement)
      expect(actual).toThrowError()
    })
  })

  describe('updateView()', () => {
    it('ClickCounter의 counter 값을 출력한다.', () => {
      view.updateView()
      expect(updateElement.innerHTML).toBe(clickCounter.getValue().toString())
    })
  })

  describe('increaseAndUpdateView()', () => {
    it('ClickCounter의 increase()를 실행한다.', () => {
      spyOn(clickCounter, 'increase')
      view.increaseAndUpdateView()
      expect(clickCounter.increase).toHaveBeenCalled()
    })

    it('updateView를 실행한다.', () => {
      spyOn(view, 'updateView')
      view.increaseAndUpdateView()
      expect(view.updateView).toHaveBeenCalled()
    })
  })

  it('클릭 이벤트가 발생하면 increaseAndUpdateView를 실행한다', () => {
    spyOn(view, 'increaseAndUpdateView')
    triggerElement.click()
    expect(view.increaseAndUpdateView).toHaveBeenCalled()
  })
})
