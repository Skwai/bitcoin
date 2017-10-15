import { expect } from 'chai'
import { btcPriceDollars, submitted } from '@/store/getters'

describe('getters.js', () => {
  describe('btcPriceDollars()', () => {
    it('returns the bitcoin price in the store', () => {
      // would test comma seperated formatting but PhantomJS doesn't
      // support i18n for toLocaleString to work
      const tests = {
        '123': 123.45,
        '321': 321.00
      }
      Object.entries(tests).forEach(([str, num]) => {
        expect(btcPriceDollars({ btcPrice: num })).to.equal(str)
      })
    })
  })

  describe('submitted()', () => {
    it('Adds returns the submitted status in the store', () => {
      expect(submitted({ submitted: false })).to.equal(false)
      expect(submitted({ submitted: true })).to.equal(true)
    })
  })
})
