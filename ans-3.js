adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return null;
    } else {
      for (let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacentVertex);
      }

      delete this.adjacencyList[vertex];
    }
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " --> " + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();

graph.addVertex("A");

graph.addEdge("C", "B");
graph.addEdge("B", "A");
graph.display();
