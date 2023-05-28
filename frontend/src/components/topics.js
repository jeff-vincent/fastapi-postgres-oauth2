import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Topics = () => {
  const { id } = useParams();
  const [topics, setTopics] = useState([]);
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/topics`);
        const data = await response.json();
        console.log(data);
        setTopics(data);

        // Convert base64 image data to URL
        if (data.image) {
          const base64Image = data.image; // Replace with the property that contains your base64 encoded image data
          const imageUrl = `data:image/jpeg;base64, ${base64Image}`;
          setImageURL(imageUrl);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!topics) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="topics-grid">
        <h1>Loading...</h1>
      {imageURL && <img src={imageURL} alt="Topic" />}
      <ul className="topics-list">
          {topics.map((topic) => (
            <li key={topic.id} className="topic-item">
              {topic.title}
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default Topics;