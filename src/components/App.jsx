import React, { useState } from "react";

function App() {
  // State for input text and list of items
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  // Handle input change
  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  // Handle adding new item to the list
  function addItem() {
    if (inputText.trim() !== "") {
      setItems((prevItems) => [
        ...prevItems,
        { text: inputText, completed: false }, // Add item object with completed flag
      ]);
      setInputText(""); // Clear input after adding
    }
  }

  // Toggle the completion state of an item
  function toggleComplete(index) {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  }

  // Handle removing an item from the list
  function removeItem(index) {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <span
                onClick={() => toggleComplete(index)}
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {item.text}
              </span>
              <button onClick={() => removeItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
