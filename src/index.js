import { store, load } from './q1';
import { Graph } from './q2';

import { Member } from './q3/member';
import { Mode, Type, DiscountType, Seller } from './q3/constant';
import { Bill } from './q3/bill';

// Question 1
function main1() {
    let a = new Array();
    a[0] = new Array();
    a[0]['key1'] = "value1";
    a[0]['key2'] = "value2";
    a[1] = new Array();
    a[1]['keyA'] = "valueA";
    const str = "key1=value1;key2=value2\nkeyA=valueA";

    const text = store(a);
    console.log(JSON.stringify(text));

    const array = load(str);
    console.log(array);
}

// Question 2
function main2() {
    const g = new Graph();
    g.addEdge("A", "B", 1);
    g.addEdge("B", "C", 2);
    g.addEdge("C", "A", 2);
    const point = "A";
    const [distances, prev] = g.pathsFrom(point);
    console.log("Begin point: " + point);
    for( const [val, key] of Object.entries(distances)) {
        console.log("Point " + val + " has total weight: " + key);
    }
}

// Question 3
function main3() {
    const cash = 990;
    const seller = Seller.WEBSITE;
    const member = new Member({
        name: 'Tester',
        type: Type.ANONYMOUS,
        joinAt: new Date('2015-05-17')
    });

    let bill = new Bill(member, cash, seller);

    const discount = bill.getDiscount();
    const cashPayable = bill.getCashPayable(discount);
    console.log('Payment: ', cashPayable);
}

main1();
console.log("\n");

// main2();
console.log("\n");

main3();