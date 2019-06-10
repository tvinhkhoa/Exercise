var q1 = require('../src/q1');
var expect = require('chai').expect;

describe('#load()', function() {

    context('without arguments', function() {
        it('should return undefined', function() {
            expect(q1.load()).to.equal()
        })
    });

    context('array argument', function() {
        it('should return undefined', function() {
            expect(q1.load([])).to.equal()
        })
    });

    context('string empty argument', function() {
        it('should return undefined', function() {
            expect(q1.load('')).to.eql()
        })
    });

    context('string empty argument', function() {
        it('should return array empty', function() {
            expect(q1.load('abcde')).to.eql([[]])
        })
    });

    context('string empty argument', function() {
        it('should return array empty', function() {
            expect(q1.load('\n')).to.eql([])
        })
    });

    context('string is space argument', function() {
        it('should return array empty', function() {
            expect(q1.load(' ')).to.eql([[]])
        })
    });

    context('string empty argument', function() {
        it('should return array empty', function() {
            expect(q1.load(';')).to.eql([[]])
        })
    });

    context('string only item argument', function() {
        let a = new Array();
        a[0] = new Array();
        a[0]['key1'] = "value1";
        it('should return array', function() {
            expect(q1.load('key1=value1')).to.eql(a);
        })
    });

    context('string only item argument', function() {
        let a = new Array();
        a[0] = new Array();
        a[0]['key1'] = "value1";
        a[1] = '';
        it('should return array', function() {
            expect(q1.load('key1=value1\n')).to.eql(a);
        })
    });

    context('string has 2 item with key argument', function() {
        let a = new Array();
        a[0] = new Array();
        a[0]['key1'] = "value1";
        a[0]['key2'] = "value2";
        it('should return array', function() {
            expect(q1.load('key1=value1;key2=value2')).to.eql(a);
        })
    });

    context('string has more item with keys argument', function() {
        let a = new Array();
        a[0] = new Array();
        a[0]['key1'] = "value1";
        a[0]['key2'] = "value2";
        a[1] = new Array();
        a[1]['keyA'] = "valueA";
        it('should return array', function() {
            expect(q1.load('key1=value1;key2=value2\nkeyA=valueA')).to.eql(a);
        })
    });
});

describe('#store()', function() {

    context('without arguments', function() {
        it('should return undefined', function() {
            expect(q1.store()).to.equal()
        })
    });

    context('string argument', function() {
        it('should return undefined', function() {
            expect(q1.store('')).to.equal()
        })
    });

    context('array empty argument', function() {
        let a = new Array();
        it('should return string empty', function() {
            expect(q1.store(a)).to.equal('')
        })
    });

    context('array empty argument', function() {
        let a = new Array();
        a[0] = new Array();
        it('should return string empty', function() {
            expect(q1.store(a)).to.equal('')
        })
    });

    context('array only item argument', function() {
        let a = new Array();
        a[0] = new Array();
        a[0]['key1'] = "value1";
        it('should return string empty', function() {
            expect(q1.store(a)).to.equal('key1=value1');
        })
    });

    context('array has 2 item argument', function() {
        let a = new Array();
        a[0] = new Array();
        a[0]['key1'] = "value1";
        a[0]['key2'] = "value2";
        it('should return string empty', function() {
            expect(q1.store(a)).to.equal('key1=value1;key2=value2');
        })
    });

    context('array has more item with keys argument', function() {
        let a = new Array();
        a[0] = new Array();
        a[0]['key1'] = "value1";
        a[0]['key2'] = "value2";
        a[1] = new Array();
        a[1]['keyA'] = "valueA";
        it('should return string', function() {
            expect(q1.store(a)).to.equal('key1=value1;key2=value2\nkeyA=valueA');
        })
    });
});