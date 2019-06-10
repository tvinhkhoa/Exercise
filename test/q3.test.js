var q3 = require('../src/q3');
var expect = require('chai').expect;

const Bill = q3.Bill;
const Member = q3.Member;
const Type = q3.Type;
const Mode = q3.Mode;

describe('#discount()', function() {
    const cash = 990;

    context('without arguments', function() {
        const member = new Member();
        let bill = new Bill(member);

        it('should return 0', function() {
            expect(bill.discount()).to.equal(0)
        });
    });

    context('without arguments, member is not object Member', function() {
        const member = null;

        it('should return error', function() {
            expect( function() {
                let bill = new Bill(member);
            }).to.throw(Error, 'member is not object Member')
        });
    });

    context('with member is ' + Type.EMPLOYEE + ' arguments, mode is ' + Mode.OFFLINE, function() {
        const member = new Member(Type.EMPLOYEE);
        const mode = Mode.OFFLINE;
        let bill = new Bill(member, mode);

        it('without arguments should return 0', function() {
            expect(bill.discount()).to.equal(0)
        });

        it('with cash argument should return number', function() {
            expect(bill.discount(cash)).to.equal(940)
        });

        it('with cash argument should return number', function() {
            expect( function() {
                bill.discount('940a')
            }).to.throw(Error, 'Cash is not a number');
        });
    });

    context('with member ' + Type.EMPLOYEE + ' arguments, mode is ' + Mode.ONLINE, function() {
        const member = new Member(Type.EMPLOYEE);
        const mode = Mode.ONLINE;
        let bill = new Bill(member, mode);

        it('without arguments should return 0', function() {
            expect(bill.discount()).to.equal(0);
        });

        it('with cash is number argument should return number', function() {
            expect(bill.discount(cash)).to.equal(643);
        });

        it('with cash is string argument should return error', function() {
            expect( function() {
                bill.discount(cash + 'a')
            }).to.throw(Error, 'Cash is not a number');
        });
    });

    context('with member is ' + Type.AFFILIATE + ' arguments, mode is ' + Mode.OFFLINE, function() {
        const member = new Member(Type.AFFILIATE);
        const mode = Mode.OFFLINE;
        let bill = new Bill(member, mode);

        it('without arguments should return 0', function() {
            expect(bill.discount()).to.equal(0)
        });

        it('with cash is number argument should return number', function() {
            expect(bill.discount(cash)).to.equal(940)
        });

        it('with cash is string argument should return error', function() {
            expect( function() {
                bill.discount(cash + 'a')
            }).to.throw(Error, 'Cash is not a number')
        });
    });

    context('with member is ' + Type.AFFILIATE + ' arguments, mode is ' + Mode.ONLINE, function() {
        const member = new Member(Type.AFFILIATE);
        const mode = Mode.ONLINE;
        const bill = new Bill(member, mode);

        it('without arguments should return 0', function() {
            expect(bill.discount()).to.equal(0)
        });

        it('with cash is number argument should return number', function() {
            expect(bill.discount(cash)).to.equal(841)
        });

        it('with cash is string argument should return error', function() {
            expect( function() {
                bill.discount(cash + 'a')
            }).to.throw(Error, 'Cash is not a number')
        });
    });

    context('with member is ' + Type.CUSTOMER + ', avenue greater than equal 2, mode is ' + Mode.OFFLINE + ' arguments', function() {
        const member = new Member(Type.CUSTOMER, 3);
        const mode = Mode.OFFLINE;
        let bill = new Bill(member, mode);

        it('without arguments should return 0', function() {
            expect(bill.discount()).to.equal(0)
        });

        it('with cash is number argument should return number', function() {
            expect(bill.discount(cash)).to.equal(940)
        });

        it('with cash is string argument should return error', function() {
            expect( function() {
                bill.discount(cash + 'a')
            }).to.throw(Error, 'Cash is not a number')
        });
    });

    context('with member is ' + Type.CUSTOMER + ', avenue greater than equal 2, mode is ' + Mode.ONLINE + ' arguments', function() {
        const member = new Member(Type.CUSTOMER, 3);
        const mode = Mode.ONLINE;
        const bill = new Bill(member, mode);

        it('without arguments should return 0', function() {
            expect(bill.discount()).to.equal(0)
        });

        it('with cash is number argument should return number', function() {
            expect(bill.discount(cash)).to.equal(890.5)
        });

        it('with cash is string argument should return error', function() {
            expect( function() {
                bill.discount(cash + 'a')
            }).to.throw(Error, 'Cash is not a number')
        });
    });

    context('with member is ' + Type.CUSTOMER + ', avenue less than 2, mode is ' + Mode.OFFLINE + ' arguments', function() {
        const member = new Member(Type.CUSTOMER, 1);
        const mode = Mode.OFFLINE;
        let bill = new Bill(member, mode);

        it('without arguments should return 0', function() {
            expect(bill.discount()).to.equal(0)
        });

        it('with cash is number argument should return number', function() {
            expect(bill.discount(cash)).to.equal(940)
        });

        it('with cash is string argument should return error', function() {
            expect( function() {
                bill.discount(cash + 'a')
            }).to.throw(Error, 'Cash is not a number')
        });
    });

    context('with member is ' + Type.CUSTOMER + ', avenue less than 2, mode is ' + Mode.ONLINE + ' arguments', function() {
        const member = new Member(Type.CUSTOMER, 1);
        const mode = Mode.ONLINE;
        const bill = new Bill(member, mode);

        it('without arguments should return 0', function() {
            expect(bill.discount()).to.equal(0)
        });

        it('with cash is number argument should return number', function() {
            expect(bill.discount(cash)).to.equal(940)
        });

        it('with cash is string argument should return error', function() {
            expect( function() {
                bill.discount(cash + 'a')
            }).to.throw(Error, 'Cash is not a number')
        });
    });

    context('with member is ' + Type.OTHER + ' arguments, mode is ' + Mode.OFFLINE, function() {
        const member = new Member(Type.OTHER);
        const mode = Mode.OFFLINE;
        let bill = new Bill(member, mode);

        it('without arguments should return 0', function() {
            expect(bill.discount()).to.equal(0)
        });

        it('with cash is number argument should return number', function() {
            expect(bill.discount(cash)).to.equal(940)
        });

        it('with cash is string argument should return error', function() {
            expect( function() {
                bill.discount(cash + 'a')
            }).to.throw(Error, 'Cash is not a number')
        });
    });

    context('with member is ' + Type.OTHER + ' arguments, mode is ' + Mode.ONLINE, function() {
        const member = new Member(Type.OTHER);
        const mode = Mode.ONLINE;
        const bill = new Bill(member, mode);

        it('without arguments should return 0', function() {
            expect(bill.discount()).to.equal(0)
        });

        it('with cash is number argument should return number', function() {
            expect(bill.discount(cash)).to.equal(940)
        });

        it('with cash is string argument should return error', function() {
            expect( function() {
                bill.discount(cash + 'a')
            }).to.throw(Error, 'Cash is not a number')
        });
    });
});