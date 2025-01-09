from flask import Flask, render_template, request, jsonify
import heapq

app = Flask(__name__)

graph = {}

def add_edge(city1, city2, distance):
    if city1 not in graph:
        graph[city1] = {}
    if city2 not in graph:
        graph[city2] = {}
    graph[city1][city2] = distance
    graph[city2][city1] = distance

def dijkstra(start, end):
    queue = [(0, start)]
    distances = {start: 0}
    previous_nodes = {start: None}
    
    while queue:
        current_distance, current_node = heapq.heappop(queue)
        
        if current_node == end:
            path = []
            while previous_nodes[current_node] is not None:
                path.append(current_node)
                current_node = previous_nodes[current_node]
            path.append(start)
            path.reverse()
            return path, distances[end]

        for neighbor, weight in graph.get(current_node, {}).items():
            distance = current_distance + weight
            if neighbor not in distances or distance < distances[neighbor]:
                distances[neighbor] = distance
                previous_nodes[neighbor] = current_node
                heapq.heappush(queue, (distance, neighbor))
    
    return None, float('inf')  # No path found

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_edge', methods=['POST'])
def add_edge_route():
    city1 = request.json.get('city1')
    city2 = request.json.get('city2')
    distance = request.json.get('distance')
    add_edge(city1, city2, distance)
    return jsonify(success=True)

@app.route('/shortest_path', methods=['POST'])
def shortest_path():
    origin = request.json.get('origin')
    destination = request.json.get('destination')
    path, distance = dijkstra(origin, destination)
    
    if path:
        return jsonify(path=path, distance=distance)
    else:
        return jsonify(error="No path found between the cities")

if __name__ == '__main__':
    app.run(debug=True)
