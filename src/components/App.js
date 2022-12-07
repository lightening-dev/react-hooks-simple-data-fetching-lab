
import React, {useState, useEffect} from "react";



function App() {

    const [picture, setPicture] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setPicture(data.message));

        return 
    }, [])

    if (!picture) {
        return <p>Loading...</p>
    }
    return (
        <div>
        
        <img alt="A Random Dog" src={picture}></img>
        </div>
    )
}

export default App;

// This lab is missing the App component that index.js is looking for. To pass the tests in this lab:

// Create an App component from scratch
// Use the useEffect hook in the App component. Inside the callback for useEffect, send a fetch request to https://dog.ceo/api/breeds/image/random, a free API that returns a random image of a dog.
// Display a <p> tag with the text of "Loading..." when the component is first rendered
// After receiving a response from the API, show the dog image in an <img> tag, with the alt attribute set to "A Random Dog".