module.exports = {
    createDeck() {
        const suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']
        const deck = []

        for (let n = 0; n < suits.length; n++) {
            for (let m = 1; m < 14; m++) {
                deck.push({
                    suit: suits[n],
                    value: m
                })
            }
        }

        return deck
    },
    draw(deck) {
        return deck.pop()
    }
}