class DiscountAmount {
    constructor(object) {
        const { amount, percent } = object;
        this.amount = amount;
        this.percent = percent;
    }
}

module.exports.DiscountAmount = DiscountAmount;