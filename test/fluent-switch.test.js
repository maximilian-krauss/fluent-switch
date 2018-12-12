const FluentSwitch = require('./../')

describe('FluentSwitch', () => {
  it('should hit the correct test case', () => {
    expect.assertions(1)

    FluentSwitch.createFrom(true)
      .case(b => !b, () => {})
      .case(b => b, b => expect(b).toBe(true))
      .execute()
  })

  it('should trigger the else condition if none condition is matched', () => {
    expect.assertions(1)

    FluentSwitch.createFrom(true)
      .case(b => b === 1, () => {})
      .case(b => b === 2, () => {})
      .else(b => expect(b).toBe(true))
      .execute()
  })

  it('should return undefined if none condition is matched and no fallback is defined', () => {
    const result = FluentSwitch.createFrom(true)
      .case(b => b === 1, () => {})
      .case(b => b === 2, () => {})
      .execute()

    expect(result).toBeUndefined()
  })
})
