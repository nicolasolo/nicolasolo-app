import { keyFor } from '../src/networks'
import networksDb from '../src/_networks-db'

const networkKeys = Object.keys(networksDb)

describe('networks', () => {
  describe('#keyFor', () => {
    it('returns "default" for null', () => {
      keyFor(null).should.eql('sharethis')
    })

    it('returns "sharethis" for unknown network url', () => {
      keyFor('unknownUrl.com').should.eql('sharethis')
    })

    it('returns key for mailto:some email address', () => {
      keyFor('mailto:email@address.com').should.eql('mailto')
    })

    it('returns key for key.com address', () => {
      networkKeys.length.should.be.greaterThan(0)
      networkKeys.forEach(k => {
        keyFor(`http://${k}.com`).should.eql(k)
      })
    })

    it('returns key for key.com/something address', () => {
      networkKeys.length.should.be.greaterThan(0)
      networkKeys.forEach(k => {
        const path = range(random(5, 10))
          .map(randStr)
          .join('/')
        keyFor(`http://${k}.com${path}`).should.eql(k)
      })
    })
  })
})

function randStr(len) {
  const poss = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return range(len).reduce(str => str + poss.charAt(random(poss.length)), '')
}

function random(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function range(size) {
  return Array(Math.round(size)).fill(null)
}
