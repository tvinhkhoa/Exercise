import { store, load } from './q1';
import { Graph } from './q2';
import { Type, Mode, Member, Bill } from './q3';

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
    const member = new Member(Type.AFFILIATE, 5);

    if (member instanceof Object) {
        let bill = new Bill(member, Mode.ONLINE);
        
        let bill_dis = bill.discount(cash);
        console.log("Cash has discounted: " + bill_dis);
    }
}

main1();
console.log("\n");

main2();
console.log("\n");

main3();