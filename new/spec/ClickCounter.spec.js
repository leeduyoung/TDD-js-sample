describe('App.ClickCounter', () => {
  describe('getValue()', () => {
    it('초기값이 0인 카운터 값을 반환한다.', () => {
      // 준비
      const counter = App.ClickCounter()
      // 실행
      const result = counter.getValue()
      // 단언
      expect(result).toBe(0)
    })
  })
})
