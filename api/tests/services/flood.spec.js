const { isInFloodZone2, isInFloodZone3 } = require('../../services/flood');

describe('Flood service', () => {
  it('isInFloodZone2 returns false when the location is not in the flood zone', async() => {
    const data = await isInFloodZone2(0,55);
    expect(data).toEqual(false);
  })
  it('isInFloodZone2 returns true when the location is in the flood zone', async() => {
   const data = await isInFloodZone2(-0.112703,51.510096);
   expect(data).toEqual(true);
  })
  it('isInFloodZone2 returns an error when the query fails', async () => {
    await expect(isInFloodZone2('test','test')).rejects.toThrow(Error)
  })
  it('isInFloodZone3 returns false when the location is not in the flood zone', async() => {
    const data = await isInFloodZone3(0,55);
    expect(data).toEqual(false);
  })
  it('isInFloodZone3 returns true when the location is in the flood zone', async() => {
    const data = await isInFloodZone3(-0.112703,51.510096);
    expect(data).toEqual(true);
  })
  it('isInFloodZone3 returns an error when the query fails', async () => {
    await expect(isInFloodZone3('test','test')).rejects.toThrow(Error)
  })
})