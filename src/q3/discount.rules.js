import { DiscountPercent } from './discount.percent';
import { DiscountAmount } from './discount.amount';
import { DiscountType, Type } from './constant';

class DiscountRules {

    constructor() {
        this.rules = this.getRules();
    }

    getRules() {
        const discountForEmployee = new DiscountPercent({
            percent: DiscountType.PER30
        });

        const discountForAffilliate = new DiscountPercent({
            percent: DiscountType.PER10
        });

        const discountForCustomer = new DiscountPercent({
            percent: DiscountType.PER5
        });

        const discountForGroceries = new DiscountPercent({
            percent: DiscountType.PER0
        });

        const discountForAnonymous = new DiscountPercent({
            percent: DiscountType.PER0
        });

        const discountOnAmount = new DiscountAmount({
            amount: 100,
            percent: 5
        });

        return {
            [Type.EMPLOYEE]: discountForEmployee,
            [Type.AFFILLIATE]: discountForAffilliate,
            [Type.CUSTOMER]: discountForCustomer,
            [Type.GROCERIES]: discountForGroceries,
            [Type.AMOUNT]: discountOnAmount,
            [Type.ANONYMOUS]: discountForAnonymous
        };
    }

    getDiscountRules() {
        return this.rules;
    }
}

module.exports.DiscountRules = DiscountRules;