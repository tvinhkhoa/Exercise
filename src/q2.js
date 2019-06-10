class List {
    // protected data = null;
    // next = null;

    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

class Queue {
    // size = null;
    // liststart = null;
    // comparator = null;

    constructor(comparator) {
        this.size = 0;
        this.liststart = null;
        this.listend = null;
        this.comparator = comparator;
    }

    add(x) {
        this.size = this.size + 1;

        if (this.liststart === null) {
            this.liststart = new List(x);
        } else {
            let node = this.liststart;
            let comparator = this.comparator;
            let newnode = new List(x);
            let lastnode = null;
            let added = false;

            while(node) {
                if (comparator(newnode, node) < 0) {
                    newnode.next = node;
                    if (lastnode === null) {
                        this.liststart = newnode;
                    } else {
                        lastnode.next = newnode;
                    }

                    added = true;
                    break;
                }

                lastnode = node;
                node = node.next;
            }

            if (!added) {
                lastnode.next = newnode;
            }
        }
    }

    getSize() {
        return this.size;
    }

    peak() {
        return this.liststart.data;
    }

    remove() {
        let x = this.peak();
        this.size = this.size - 1;
        this.liststart = this.liststart.next;

        return x;
    }
}

class Edge {
    // start = null;
    // end = null;
    // weight = 0;

    constructor(start, end, weight) {
        this.start = start;
        this.end = end;
        this.weight = weight;
    }
}

class Graph {

    constructor() {
        this.nodes = [];
    }

    addEdge(start, end, weight = 0) {
        if (!this.nodes[start]) {
            this.nodes[start] = [];
        }

        this.nodes[start] = new Edge(start, end, weight);
    }

    removeNode(index) {
        if (this.nodes.length && this.nodes[index]) {
            this.nodes.slice(index, 1);
        }
    }

    pathsFrom(from) {
        let dist = [],
        visited = [],
        previous = [],
        queue = [];

        dist[from] = 0;
        let Q = new Queue(compareWeight);
        Q.add([dist[from], from]);

        let nodes = this.nodes;

        while (Q.getSize() > 0) {
            let [distance, u] = Q.remove();

            if (visited[u]) {
                continue;
            }
            visited[u] = true;

            if (!nodes[u]) {
                console.log(`WANNING: ${u} is not found in the node list`);
                break;
            }

            if (nodes[u]) {
                let edge = nodes[u];
                let alt = dist[u] + edge.weight; 
                let end = edge.end;

                if (!dist[end] || alt < dist[end]) {
                    previous[end] = u;
                    dist[end] = alt;
                    Q.add([dist[end], end]);
                }
            }
        }

        return [dist, previous];
    }
}

function compareWeight(a, b) {
    return a.data[0] - b.data[0];
}

module.exports.Graph = Graph;