
import { Mode, Type, DiscountType, Seller, Annual, Amount } from './q3/constant';
import { Member } from './q3/member';
import { DiscountAmount } from './q3/discount.amount';
import { DiscountPercent } from './q3/discount.percent';
import { DiscountRules } from './q3/discount.rules';
import { Bill } from './q3/bill';

module.exports = {
    Mode: Mode,
    Type: Type,
    DiscountType: DiscountType,
    Member: Member,
    Bill: Bill,
    Seller: Seller,
    Annual: Annual,
    Amount: Amount,
    DiscountAmount: DiscountAmount,
    DiscountPercent: DiscountPercent,
    DiscountRules: DiscountRules
}