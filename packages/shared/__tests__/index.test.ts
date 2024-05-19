import { getLocalDateTime } from '../src'

describe('shared', () => {
  it('should be shared', () => {
    expect(getLocalDateTime(new Date(0))).toMatchSnapshot()
  })
})
