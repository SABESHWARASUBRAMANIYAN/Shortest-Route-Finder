class Graph {
    constructor(v) {
      this.n_vert = v;
      this.vertices = Array.from({ length: v }, () => Array(v).fill(0));
    }
  
    addEdge(source, dest, weight) {
      source -= 1;
      dest -= 1;
      this.vertices[source][dest] = weight;
      this.vertices[dest][source] = weight;
    }
  
    dijkstra(dist, src, dest) {
        const path = [];
        const map = new Map();
        const min_dist = new Array(this.n_vert).fill(Number.MAX_SAFE_INTEGER);
        const visited = new Array(this.n_vert).fill(false);
        min_dist[src] = 0;

        for (let count = 0; count < this.n_vert - 1; count++) {
            let min = Number.MAX_SAFE_INTEGER;
            let min_index = -1;

            // Find the vertex with the minimum distance
            for (let v = 0; v < this.n_vert; v++) {
                if (!visited[v] && min_dist[v] <= min) {
                    min = min_dist[v];
                    min_index = v;
                }
            }

            if (min_index === -1)
                break;

            visited[min_index] = true;

            // Update the distances of the adjacent vertices
            for (let k = 0; k < this.n_vert; k++) {
                if (this.vertices[min_index][k] > 0) {
                    const temp = min_dist[min_index] + this.vertices[min_index][k];
                    if (temp < min_dist[k]) {
                        min_dist[k] = temp;
                        map.set(k, min_index);
                    }
                }
            }
        }

        // ... Rest of the dijkstra function ...

        // Print the shortest distance from source to destination
        console.log(`\n\nShortest distance from ${dist[src]} to ${dist[dest]} is: ${min_dist[dest]} Kms.`);
    
        let a = dest;
        path.push(a);
        while (a !== src) {
            path.push(map.get(a));
            a = map.get(a);
        }
    
        path.reverse();
        let count = 0;
        console.log(`\nPath from ${dist[src]} to ${dist[dest]}:\n`);
        for (let i = 0; i < path.length; i++) {
            console.log(' '.repeat(count) + dist[path[i]]);
            if (i !== path.length - 1) {
                console.log('\n'.repeat(2));
            }
            count += dist[path[i]].length + 5;
        }
        console.log("\n\nHave a Nice Travel !\n");
    
        return { minDist: min_dist, path: path };
    }
  }
  
  export default Graph;
  