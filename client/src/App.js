import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/random-cat"); // Express sunucu adresini buraya ekleyin
        setCatImages(response.data);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <div className="App">
      <h1>Random Cat Images</h1>
      <div className="image-container">
        {catImages.map((image, index) => (
          <img key={index} src={image.url} alt={`Cat ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
