const Mode = {
    ONLINE: 'online',
    OFFLINE: 'offline'
}

const Type = {
    EMPLOYEE: 'Employee',
    AFFILIATE: 'Affiliate',
    CUSTOMER: 'Customer',
    OTHER: 'Other'
}

const Discount = {
    PER30: 30 / 100,
    PER10: 10 / 100,
    PER5: 5 / 100
}

class Member {
    // type = null;
    // avenue = 0;

    constructor(type, year) {
        this.type = type;
        this.avenue = year;
    }
}

class Bill {
    // mode = null;
    // member = null;

    constructor(member, mode) {
        this.mode = mode || Mode.OFFLINE;
        if (!(member instanceof Member)) throw new Error('member is not object Member');
        this.member = member;
    }

    discount(cash = 0, mode = null) {
        let result = 0;
        if (isNaN(cash)) throw new Error('Cash is not a number');
        if (Mode.ONLINE == this.mode) {
            // cash_discount = cash - (cast * %discount);
            switch (this.member.type) {
                case Type.EMPLOYEE:
                    result = cash - (cash * Discount.PER30);
                    break;
                case Type.AFFILIATE:
                    result = cash - (cash * Discount.PER10);
                    break;
                case Type.CUSTOMER:
                    if (this.member.avenue >= 2)
                        result = cash - (cash * Discount.PER5);
                    else
                        result = cash;
                    break;
                default:
                    result = cash;
            }
        } else {
            result = cash;
        }

        const cash_redue = Math.ceil(cash / 100) * 5;
        result -= cash_redue;
        return result;
    }
}

module.exports = {
    Mode: Mode,
    Type: Type,
    Discount: Discount,
    Member: Member,
    Bill: Bill
}