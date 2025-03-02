




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

document.addEventListener("DOMContentLoaded", () => {
    const dist = [
        "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore",
        "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram",
        "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam",
        "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram",
        "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni",
        "Thiruvallur", "Thiruvarur", "Thoothukudi", "Tiruchirappalli",
        "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvannamalai", "Vellore",
        "Viluppuram", "Virudhunagar", "Mayiladuthurai"
    ];
    
    const kms = [
        [1, 18, 30], [1, 25, 44], [1, 30, 74], [1, 5, 127], [5, 38, 84],
        [5, 18, 130], [5, 9, 100], [5, 36, 45], [2, 36, 105], [27, 3, 45],
        [27, 10, 53], [27, 21, 95], [3, 10, 75], [3, 2, 63], [10, 21, 49],
        [10, 2, 40], [10, 34, 117], [2, 34, 134], [2, 36, 105], [21, 34, 97],
        [21, 35, 30], [35, 34, 87], [35, 32, 90], [32, 34, 94], [32, 13, 46],
        [13, 6, 50], [34, 36, 61], [34, 6, 119], [34, 9, 69], [36, 9, 77],
        [9, 22, 101], [9, 6, 172], [6, 22, 66], [22, 16, 52], [22, 8, 68],
        [22, 18, 116], [8, 16, 60], [8, 33, 54], [8, 17, 165], [8, 4, 100],
        [8, 12, 65], [17, 4, 101], [16, 12, 33], [16, 30, 90], [18, 30, 59],
        [38, 25, 76], [38, 28, 41], [15, 28, 27], [28, 25, 60], [25, 30, 59],
        [25, 19, 62], [30, 19, 56], [30, 12, 82], [12, 7, 78], [12, 33, 88],
        [33, 4, 55], [33, 7, 117], [19, 23, 82], [7, 26, 74], [7, 14, 62],
        [26, 14, 76], [14, 23, 47], [14, 37, 58], [23, 37, 99], [23, 20, 84],
        [20, 37, 118], [20, 29, 135], [37, 29, 113], [37, 24, 127], [24, 29, 104],
        [24, 31, 59], [29, 31, 45], [11, 31, 82]
    ];
    
    const n_vert = dist.length;
    const vertices = Array.from({ length: n_vert }, () => Array(n_vert).fill(0));

    for (const km of kms) {
        vertices[km[0] - 1][km[1] - 1] = km[2];
        vertices[km[1] - 1][km[0] - 1] = km[2];
    }

    const g1 = new Graph(n_vert);

    for (const km of kms) {
        g1.addEdge(km[0], km[1], km[2]);
    }

    document.getElementById("findButton").addEventListener("click", () => {
        const start = document.getElementById("start").value;
        const end = document.getElementById("end").value;

        const i1 = dist.indexOf(start);
        const i2 = dist.indexOf(end);

        if (i1 === -1 || i2 === -1) {
            document.getElementById("result").innerHTML = "Invalid districts.";
            return;
        }

        const { minDist, path } = g1.dijkstra(dist, i1, i2);

        let resultHtml = `
            <p>Shortest distance from ${start} to ${end} is: ${minDist[i2]} Kms.</p>
            <p>Path from ${start} to ${end}:</p>
            <ul>
        `;

        for (const vertexIndex of path) {
            resultHtml += `<li>${dist[vertexIndex]}</li>`;
        }

        resultHtml += "</ul>";

        document.getElementById("result").innerHTML = resultHtml;
    });
});
