# Excercise

## Setup

manually clone the repo and then run `npm install`.

## Source
the file main call src/index.js
- src/q1.js -> Question 1
- src/q2.js -> Question 2
- src/q3.js -> Question 3

### Run

Run the following command to run start.

```js
npm run start
```

### Test

Run the following command to run test coverage.

```js
npm run test-with-coverage
```

### Complexity of Question 1
```js
- store

19  if (item[k]) {              O(1)
20  if (!sep)                   O(1)
21  sep += k + '=' + item[k];   O(1)
23  sep += ';' + k + '=' + item[k]; O(1)
18  Object.keys(item).map( k => {   O(n)
10  if (text) text += '\n';     O(1)
9   let sep = '';               O(1)
8   arr.map((item, key) => {    O(n)

The complexity of algorithm: n.n/2 = O(n^2)
```

```js
- load

45  arrOut[k] = v;              O(1)
44  if (k && v) {               O(1)
43  const [k, v] = ele.split("="); O(1)
42  if (ele){                   O(1)
41  item = tmp.reduce((arrOut, ele) => { O(n)
40  let tmp = item.split(";");  O(1)
39  if (item) {                 O(1)
38  return arr.map((item, key) => { O(n)

The complexity of algorithm: n.n/2 = O(n^2)
```