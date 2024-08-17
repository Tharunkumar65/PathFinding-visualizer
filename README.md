# Path Visualizer React App

[Currently live on here](https://path-finding-visualizer-silk.vercel.app/) 

## Overview

This React application is designed to demonstrate three popular graph traversal algorithms: Breadth-First Search (BFS), Depth-First Search (DFS), and Dijkstra's Algorithm. It provides a visual representation of these algorithms by allowing users to create a grid of nodes and manipulate them to simulate different scenarios.

## Tech Stack

- **React**: A JavaScript library for building user interfaces, providing a component-based architecture for easy management of UI elements and state.
- **JavaScript**: The primary programming language used in the application.
- **HTML/CSS**: Used for the structure and styling of the user interface.
- **Bootstrap**: A popular CSS framework for responsive and mobile-first design.
- **React-Bootstrap**: React components implementing Bootstrap UI components.
- **Node.js**: JavaScript runtime used for running the application.
- **npm**: Package manager for JavaScript used for installing and managing dependencies.
- **Create React App**: Tool for creating React applications with pre-configured setup and build scripts.

## Algorithms

1. **Breadth-First Search (BFS)**
   - BFS is an algorithm used to traverse or search a graph in a breadthward motion. Starting from a selected node, BFS explores all its neighbors before moving to their respective neighbors. This algorithm guarantees finding the shortest path between the starting node and any other node in an unweighted graph. In the path visualizer app, BFS is useful for finding the shortest path between two nodes on the grid.

2. **Depth-First Search (DFS)**
   - DFS is another graph traversal algorithm that explores as far as possible along each branch before backtracking. It starts from a selected node and traverses as deep as possible, exploring all the neighbors of the current node before backtracking. In the path visualizer app, DFS is helpful for exploring all possible paths on the grid

3. **Dijkstra's Algorithm**
   - Dijkstra's algorithm is used to find the shortest path between two nodes in a graph with non-negative edge weights. It starts from a selected node and iteratively finds the shortest path to all other nodes. The algorithm maintains a priority queue of nodes based on their distance from the source node and explores the nodes in a greedy manner. In the path visualizer app, Dijkstra's algorithm is utilized to find the shortest path between two nodes on the grid, considering the weights assigned to each edge.

## Usage

To run the application locally, follow these steps:

1. Make sure you have Node.js installed on your machine.
2. Clone the repository and navigate to the project directory.
3.Install the required dependencies by running: `npm install`
4.Start the development server by running: `npm start`
5.Open your web browser and visit `http://localhost:3000` to access the application.

## Credits
This Path Visualizer app was developed by Duggineni Tharun Kumar as a demonstration of graph traversal algorithms using React.


