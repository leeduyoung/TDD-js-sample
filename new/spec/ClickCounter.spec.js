describe('App.ClickCounter', () => {
  let counter

  beforeEach(() => {
    // 준비
    counter = App.ClickCounter()
  })

  describe('getValue()', () => {
    it('초기값이 0인 카운터 값을 반환한다.', () => {
      // 실행
      const result = counter.getValue()
      // 단언
      expect(result).toBe(0)
    })
  })

  describe('increase()', () => {
    it('counter 값을 1만큼 증가시킨다.', () => {
      const initialValue = counter.getValue()
      counter.increase()
      expect(counter.getValue()).toBe(initialValue + 1)
    })
  })
})
