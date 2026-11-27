import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Todo from './components/TodoList.jsx';

const todoList = 
[
  { id: 1, text: "[MULT215] Create Indoor Environment", completed: false },
  { id: 2, text: "[MULT123] Add Textures to 3D environment", completed: false},
  { id: 3, text: "[MULT123] Create 3x3x3m my space in blender", completed: true},
  { id: 4, text: "[MULT213] Do Async Javascript webpage", completed: true},
  { id: 5, text: "[MULT213] Create Static Components in Vite", completed: false},
]

function App() {
  
  return (
  <div style={{display: "flex", gap: 20, flexDirection: "column"}}>
    <Header title="Welcome to my Website!" message="Thanks for visiting my site" />
    <Todo list={todoList} />
    <Footer message="Contact me at gono@saskpolytech.ca" websiteName="Gono-Assignment2"/>
  </div>
)
}

export default App
