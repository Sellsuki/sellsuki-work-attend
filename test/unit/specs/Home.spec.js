import Home from '../../../src/pages/Home'

describe('Home.vue', () => {
  it('should selectedIdList is an empty array', () => {
    const homeData = Home.data()
    expect(Array.isArray(homeData.selectedIdList)).toEqual(true)
    expect(homeData.selectedIdList.length).toEqual(0)
  })
})
