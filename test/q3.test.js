// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('babel-register')({
    presets: ['env']
});

var q3 = require('../src/q3');

const Mode = q3.Mode;
const Type = q3.Type;
const DiscountType = q3.DiscountType;
const Member = q3.Member;
const Bill = q3.Bill;
const Seller = q3.Seller;
const Annual = q3.Annual;
const Amount = q3.Amount;
const DiscountAmount = q3.DiscountAmount;
const DiscountPercent = q3.DiscountPercent;
const DiscountRules = q3.DiscountRules;

var expect = require('chai').expect;
var sinon = require('sinon');

describe('#getDiscount()', function () {
    const joinAt = new Date('2015-05-17');
    // const discountPercent = new DiscountPercent({percent: 0});
    // const discountAmount = new DiscountAmount({percent: 5, amount: 100});

    // sinon.stub(Math.prototype, 'floor').callsFake(() => 1);

    beforeEach(() => {
    //     // member = new Member({
    //     //     name: "Tester",
    //     //     type: Type.EMPLOYEE,
    //     //     joinAt: joinAt
    //     // });
    //     // bill = new Bill(
    //     //     member,
    //     //     cash,
    //     //     Seller.WEBSITE
    //     // );
        
    });

    context('without member arguments', function () {
        it('should return error', function () {
            expect(function () {
                new Bill()
            }).to.throw(Error, 'member is not object Member');
        });
    });

    context('with member arguments', function () {
        let member = new Member({
            name: "Tester",
            type: Type.ANONYMOUS
        });
        // it('discount is undefined should return error', function() {
        //     const cash = 990;
        //     let bill = new Bill(
        //         member,
        //         cash,
        //         Seller.WEBSITE
        //     );
        //     const discount = bill.getDiscount();
        //     expect(function () {
        //         bill.getCashPayable(undefined)
        //     }).to.throw(Error, 'discount is not object Discount');
        // });

        it('cash is string should return error', function() {
            const cash = 990;
            member.type = Type.CUSTOMER;
            expect(function () {
                let bill = new Bill(
                    member,
                    cash + 'a',
                    Seller.WEBSITE
                );
            }).to.throw(Error, 'cash is not a number');
        });

        // it('should return', function() {
        //     const cash = 990;
        //     member.type = Type.CUSTOMER;
        //     let bill = new Bill(
        //         member,
        //         cash,
        //         Seller.WEBSITE
        //     );
        //     const discount = new DiscountAmount(bill.getDiscount());
        //     expect(discount).to.eql({ amount: discount.getAmount(), percent: 5});
        // });
    });

    context('with member is ' + Type.EMPLOYEE + ' arguments ', function() {
        let member = new Member({
            name: "Tester",
            type: Type.EMPLOYEE,
            joinAt: joinAt
        });

        it('seller is ' +  Seller.WEBSITE + ' arguments should return discount', function() {
            const cash = 990;
            let bill = new Bill(
                member,
                cash,
                Seller.WEBSITE
            );
            const discount = bill.getDiscount();
            expect(discount).to.be.an.instanceof(DiscountPercent);
            expect(discount).to.eql({ percent: 0.3 });
            expect(bill.getCashPayable(discount)).to.eql(693);
        });

        // it('seller is ' +  Seller.WEBSITE + ' arguments should return discount', function() {
        //     const cash = 990;
        //     const discount = new DiscountPercent({percent: 0.3});
        //     let bill = new Bill(
        //         member,
        //         cash,
        //         Seller.WEBSITE
        //     );

        //     // expect(discount).to.eql({ percent: 0.3 });
        //     expect(bill.getCashPayable(discount)).to.eql(693);
        // });

        it('seller is ' +  Seller.GROCERIES + ' arguments should return discount', function() {
            const cash = 990;
            let bill = new Bill(
                member,
                cash,
                Seller.GROCERIES
            );
            const discount = bill.getDiscount();
            expect(discount).to.be.an.instanceof(DiscountAmount);
            expect(discount).to.eql({ amount: 100, percent: 5 });
            // expect(discount).to.eql({ amount: 100, percent: 0.05 });
            expect(bill.getCashPayable(discount)).to.eql(945);
        });

        it('seller is ' +  Seller.GROCERIES + ' arguments should return discount', function() {
            const cash = 50;
            let bill = new Bill(
                member,
                cash,
                Seller.GROCERIES
            );
            const discount = bill.getDiscount();
            expect(discount).to.be.an.instanceof(DiscountPercent);
            expect(discount).to.eql({ percent: 0 });
            expect(bill.getCashPayable(discount)).to.eql(50);
        });
    });

    context('with member is ' + Type.AFFILLIATE + ' arguments', function() {
        let member = new Member({
            name: "Tester",
            type: Type.AFFILLIATE,
            joinAt: joinAt
        });

        it('seller is ' +  Seller.WEBSITE + ' arguments should return discount', function() {
            const cash = 990;
            let bill = new Bill(
                member,
                cash,
                Seller.WEBSITE
            );
            const discount = bill.getDiscount();
            expect(discount).to.be.an.instanceof(DiscountPercent);
            expect(discount).to.eql({ percent: 0.1 });
            expect(bill.getCashPayable(discount)).to.eql(891);
        });

        it('seller is ' +  Seller.GROCERIES + ' arguments should return discount', function() {
            const cash = 50;
            let bill = new Bill(
                member,
                cash,
                Seller.GROCERIES
            );
            const discount = bill.getDiscount();
            expect(discount).to.be.an.instanceof(DiscountPercent);
            expect(discount).to.eql({ percent: 0 });
            expect(bill.getCashPayable(discount)).to.eql(50);
        });

        it('seller is ' +  Seller.GROCERIES + ' arguments should return discount', function() {
            const cash = 990;
            let bill = new Bill(
                member,
                cash,
                Seller.GROCERIES
            );
            const discount = bill.getDiscount();
            expect(discount).to.be.an.instanceof(DiscountAmount);
            expect(discount).to.eql({ amount: 100, percent: 5 });
            // expect(discount).to.eql({ amount: 100, percent: 0.05 });
            expect(bill.getCashPayable(discount)).to.eql(945);
        });
    });

    context('with member is ' + Type.CUSTOMER + ' arguments', function() {
        let member = new Member({
            name: "Tester",
            type: Type.CUSTOMER,
            joinAt: joinAt
        });

        it('seller is ' +  Seller.WEBSITE + ', join at '+ joinAt.getFullYear() +' arguments should return discount', function() {
            const cash = 990;
            bill = new Bill(
                member,
                cash,
                Seller.WEBSITE
            );
            const discount = bill.getDiscount();
            expect(discount).to.be.an.instanceof(DiscountPercent);
            expect(discount).to.eql({ percent: 0.05 });
            expect(bill.getCashPayable(discount)).to.eql(940.5);
        });

        it('seller is ' +  Seller.WEBSITE + ', join at '+ joinAt.getFullYear() +' arguments should return discount', function() {
            const cash = 50;
            bill = new Bill(
                member,
                cash,
                Seller.WEBSITE
            );
            const discount = bill.getDiscount();
            expect(discount).to.be.an.instanceof(DiscountPercent);
            expect(discount).to.eql({ percent: 0.05 });
            expect(bill.getCashPayable(discount)).to.eql(47.5);
        });

        it('seller is ' +  Seller.WEBSITE + ', join at '+ (new Date().getFullYear()) +' arguments should return discount', function() {
            const cash = 100;
            member.joinAt = new Date();
            bill = new Bill(
                member,
                cash,
                Seller.WEBSITE
            );
            const discount = bill.getDiscount();
            expect(discount).to.be.an.instanceof(DiscountAmount);
            expect(discount).to.eql({ amount: 100, percent: 5 });
            // expect(discount).to.eql({ amount: 100, percent: 0.05 });
            expect(bill.getCashPayable(discount)).to.eql(95);
        });

        // it('seller is ' +  Seller.WEBSITE + ', join at '+ (new Date().getFullYear()) +' arguments should return discount', function() {
        //     const cash = 50;
        //     member.joinAt = new Date();
        //     bill = new Bill(
        //         member,
        //         cash,
        //         Seller.WEBSITE
        //     );
        //     const discount = bill.getDiscount();
        //     expect(discount).to.be.an.instanceof(DiscountPercent);
        //     expect(discount).to.eql({ percent: 0 });
        //     expect(bill.getCashPayable(discount)).to.eql(50);
        // });

        // it('seller is ' +  Seller.WEBSITE + ', join at '+ (new Date().getFullYear()) +' arguments should return discount', function() {
        //     const cash = 0;
        //     member.joinAt = new Date();
        //     bill = new Bill(
        //         member,
        //         cash,
        //         Seller.WEBSITE
        //     );
        //     const discount = bill.getDiscount();
        //     expect(discount).to.be.an.instanceof(DiscountPercent);
        //     expect(discount).to.eql({ percent: 0 });
        //     expect(bill.getCashPayable(discount)).to.eql(0);
        // });

        // it('seller is ' +  Seller.WEBSITE + ', join at '+ (new Date().getFullYear()) +' arguments should return discount', function() {
        //     const cash = 100;
        //     member.joinAt = new Date();
        //     bill = new Bill(
        //         member,
        //         cash,
        //         Seller.WEBSITE
        //     );
        //     const discount = bill.getDiscount();
        //     expect(discount).to.eql({ percent: 5, amount: 100 })
        //     expect(bill.getCashPayable(discount)).to.eql(95);
        // });

        // it('seller is ' +  Seller.GROCERIES + ' arguments should return discount', function() {
        //     const cash = 990;
        //     bill = new Bill(
        //         member,
        //         cash,
        //         Seller.GROCERIES
        //     );
        //     const discount = bill.getDiscount();
        //     expect(discount).to.eql({ amount: 100, percent: 5 });
        //     expect(bill.getCashPayable(discount)).to.eql(945);
        // });

        // it('seller is ' +  Seller.GROCERIES + ' arguments should return discount', function() {
        //     const cash = 50;
        //     bill = new Bill(
        //         member,
        //         cash,
        //         Seller.GROCERIES
        //     );
        //     const discount = bill.getDiscount();
        //     expect(discount).to.eql({ percent: 0 });
        //     expect(bill.getCashPayable(discount)).to.eql(50);
        // });
    });

    context('with member is ' + Type.ANONYMOUS + ' arguments', function() {
        let member = new Member({
            name: "Tester",
            type: Type.ANONYMOUS,
            joinAt: joinAt
        });

        it('seller is ' +  Seller.WEBSITE + ', join at '+ joinAt.getFullYear() +' arguments should return discount', function() {
            const cash = 990;
            bill = new Bill(
                member,
                cash,
                Seller.WEBSITE
            );
            const discount = bill.getDiscount();
            expect(discount).to.be.an.instanceof(DiscountAmount);
            expect(discount).to.eql({ amount: 100, percent: 5 });
            // expect(discount).to.eql({ amount: 100, percent: 0.05 });
            expect(bill.getCashPayable(discount)).to.eql(945);
        });

        it('seller is ' +  Seller.WEBSITE + ', join at '+ joinAt.getFullYear() +' arguments should return discount', function() {
            const cash = 50;
            bill = new Bill(
                member,
                cash,
                Seller.WEBSITE
            );
            const discount = bill.getDiscount();
            expect(discount).to.be.an.instanceof(DiscountPercent);
            expect(discount).to.eql({ percent: 0 });
            expect(bill.getCashPayable(discount)).to.equal(50);
        });
    });
});