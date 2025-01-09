# Dijkstra's Algorithm Project

## 1. Problem Domain
In real-world scenarios, finding the shortest path between two locations is a common problem. This could apply to:
- Navigating between cities using the shortest route.
- Optimizing delivery routes to save time and cost.
- Network routing to find the quickest path for data transmission.

Given a set of cities and distances between them, the challenge is to calculate the shortest path from a start city to a destination city. Visualizing this solution makes it easier to understand and apply Dijkstra's algorithm in practical applications.

---

## 2. Solution Domain
This project implements a web-based tool to visualize Dijkstra's algorithm. It allows users to:
- Add cities and define the distances between them dynamically.
- Visualize the city network as a graph.
- Calculate and display the shortest path between a selected start city and destination city using Dijkstra's algorithm.

By combining interactive visualization with algorithmic computation, the project provides a clear demonstration of how shortest-path algorithms work in practical scenarios.

---

## 3. Requirement Software
To run this project, the following software is required:
- **Python 3.9+** (for backend logic)
- **Flask** (for web server and API handling)
- **HTML, CSS, and JavaScript** (for frontend development)
- **NetworkX** (optional for graph computations in Python)
- **A web browser** (to interact with the frontend interface)

Ensure these dependencies are installed before running the project.

---

## 4. Data Structure Used
The project uses the following data structures:
- **Graph (Adjacency List)**: Represents the city network. Each city is a node, and the distance between cities is an edge with a weight.
- **Priority Queue (Min-Heap)**: Used in Dijkstra's algorithm to efficiently fetch the next node with the smallest distance.
- **Dictionary**:
  - To store distances of nodes from the source.
  - To track the shortest path by maintaining parent references.

---

## 5. Methodology

### Working of the Project:
1. **Frontend**:
   - Users input cities and their distances.
   - The graph is visualized dynamically using JavaScript.
   - Inputs are sent to the backend via API calls.

2. **Backend**:
   - Flask handles the received data.
   - Dijkstra's algorithm processes the graph to compute the shortest path.
   - Results are sent back to the frontend.

3. **Graph Visualization**:
   - Cities and connections are displayed on the frontend.
   - The shortest path is highlighted once computed.

### Steps:
1. Launch the project in a web browser.
2. Input the cities and distances via the interface.
3. Click "Calculate Shortest Path."
4. View the graph with the shortest path highlighted.

### Screenshots:
**Graph Input Interface:**
![Graph Input Interface](./static/SC/Screenshot%20from%202025-01-09%2015-48-09.png)

**Graph Visualization:**
![Graph Visualization](./static/SC/Screenshot%20from%202025-01-09%2015-49-31.png)

**Shortest Path Highlighted:**
![Graph Input Interface](./static/SC/Screenshot%20from%202025-01-09%2015-49-51.png)

---

## 6. Conclusion
This mini project demonstrates the power of Dijkstra's algorithm through an interactive web application. By integrating frontend visualization with backend logic, users gain a practical understanding of shortest-path computations. This project is a stepping stone for further applications in navigation systems, network routing, and optimization problems. Future enhancements could include:
- Adding support for undirected and weighted graphs.
- Allowing real-time updates to the graph.
- Extending to other algorithms like A* or Bellman-Ford.

---

This project serves as a practical example of combining algorithms with web development for educational and practical purposes.

