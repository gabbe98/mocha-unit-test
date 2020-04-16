const assert = require('assert'),
    {
        createDeck,
        draw
    } = require('../index')

describe('blackjack.js', function () {
    it('produces a deck with a length of 52', function () {
        assert.strictEqual(createDeck().length, 52)
    })

    it('has a draw function which reduces the array length by 1', function () {
        const deck = createDeck()
        draw(deck)
        assert.strictEqual(deck.length, 51)
    })
})