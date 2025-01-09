let cities = new Set();
let graphData = {};

// Initialize the graph data (nodes and edges) for vis-network
let nodes = new Set();
let edges = [];

// Initialize network visualization
const container = document.getElementById('graph');
const networkOptions = {
    nodes: {
        shape: 'dot',
        size: 16
    },
    edges: {
        width: 2,
        smooth: {
            type: 'continuous'
        }
    }
};
const data = {
    nodes: [],
    edges: []
};
const network = new vis.Network(container, data, networkOptions);

// Add edge to the graph
function addEdge() {
    const city1 = document.getElementById('city1').value.trim();
    const city2 = document.getElementById('city2').value.trim();
    const distance = parseInt(document.getElementById('distance').value);

    if (city1 && city2 && !isNaN(distance) && distance > 0) {
        // Add edge via API call
        fetch('/add_edge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ city1, city2, distance })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                cities.add(city1);
                cities.add(city2);
                graphData[city1] = graphData[city1] || [];
                graphData[city2] = graphData[city2] || [];
                graphData[city1].push({ city: city2, distance });
                graphData[city2].push({ city: city1, distance });

                // Update the nodes and edges for visualization
                nodes.add(city1);
                nodes.add(city2);
                edges.push({ from: city1, to: city2, label: distance.toString() });

                // Update the graph visualization
                updateGraphVisualization();
                updateCitySelectors();
            }
        });
    }
}

// Update the graph visualization
function updateGraphVisualization() {
    const data = {
        nodes: Array.from(nodes).map(city => ({ id: city, label: city })),
        edges: edges
    };
    network.setData(data);
}

// Update origin and destination selectors
function updateCitySelectors() {
    const originSelect = document.getElementById('origin');
    const destinationSelect = document.getElementById('destination');
    originSelect.innerHTML = '';
    destinationSelect.innerHTML = '';

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.text = city;
        originSelect.appendChild(option);

        const option2 = document.createElement('option');
        option2.value = city;
        option2.text = city;
        destinationSelect.appendChild(option2);
    });
}

// Calculate shortest path between origin and destination
function calculateShortestPath() {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;

    fetch('/shortest_path', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ origin, destination })
    })
    .then(response => response.json())
    .then(data => {
        const resultContainer = document.getElementById('results');
        if (data.error) {
            resultContainer.innerHTML = `<p>${data.error}</p>`;
        } else {
            resultContainer.innerHTML = `<h2>Shortest Path from ${origin} to ${destination}</h2>
                                         <p>Distance: ${data.distance}</p>
                                         <p>Path: ${data.path.join(" → ")}</p>`;
        }
    });
}
