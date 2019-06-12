const Mode = {
    ONLINE: 'online',
    OFFLINE: 'offline'
}

const Type = {
    EMPLOYEE: 'Employee',
    AFFILLIATE: 'Affiliate',
    CUSTOMER: 'Customer',
    GROCERIES: 'Groceries',
    ANONYMOUS: 'Anonymous',
    AMOUNT: 'Amount'
}

const DiscountType = {
    PER30: 30 / 100,
    PER10: 10 / 100,
    PER5: 5 / 100,
    PER0: 0
}

const Seller = {
    WEBSITE: 'Website',
    GROCERIES: 'Groceries'
}

const Annual = 2;
const Amount = 100;

module.exports = {
    Mode: Mode,
    Type: Type,
    DiscountType: DiscountType,
    Annual: Annual,
    Amount: Amount,
    Seller: Seller
}