import { fbPost } from '../../../../src/utils/template'

describe('template', () => {
  it('should return string', () => {
    const mockSelected = ['John', 'Doe']
    const mockUnselected = ['David']
    expect(typeof fbPost(mockSelected, mockUnselected)).toEqual('string')
  })
})
