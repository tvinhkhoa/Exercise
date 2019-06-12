import { Member } from './member';
import { Mode, Type, Amount, Seller } from './constant';
import { DiscountAmount } from './discount.amount';
import { DiscountPercent } from './discount.percent';
import { DiscountRules } from './discount.rules';

class Bill {
    // mode = null;
    // member = null;

    constructor(member, totalCash, seller = Seller.WEBSITE) {
        if (!(member instanceof Member)) throw new Error('member is not object Member');
        if (isNaN(totalCash)) throw new Error('cash is not a number');

        this.member = member;
        this.totalCash = totalCash;
        this.rules = (new DiscountRules()).getDiscountRules();
        this.discount = 0;
        this.seller = seller;
    }

    getDiscount() {
        if (this.seller === Type.GROCERIES) {
            if (this.totalCash >= Amount) {
                return (this.discount = this.rules[Type.AMOUNT]);
            }
            return (this.discount = this.rules[Type.GROCERIES]);
        }

        if (this.member.type === Type.EMPLOYEE) {
            (this.discount = this.rules[Type.EMPLOYEE]);
            return this.discount;
        }

        if (this.member.type === Type.AFFILLIATE) {
            return (this.discount = this.rules[Type.AFFILLIATE]);
        }

        if (this.member.type === Type.CUSTOMER) {
            if (this.member.isAnnual()) {
                return (this.discount = this.rules[Type.CUSTOMER]);
            }
        }

        if (this.totalCash >= Amount) {
            return (this.discount = this.rules[Type.AMOUNT]);
        } else {
            return (this.discount = this.rules[Type.ANONYMOUS]);
        }
    }

    getCashAmount() {
        const amount = this.discount.amount || 0;
        if (amount) {
            return Math.floor(this.totalCash / amount);
            // return (this.totalCash / amount) >> 0 || ~~(this.totalCash / amount);
        }
        return this.totalCash;
    }

    getCashPayable(discount) {
        return this.totalCash - (this.getCashAmount() * this.discount.percent);
    }
}

module.exports.Bill = Bill;