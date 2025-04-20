import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimeDetail = () => {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await response.json();
        setAnimeData(data.data);
      } catch (err) {
        console.error("Failed to fetch anime data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading anime details.</div>;
  }

  if (!animeData) {
    return <div>No data found.</div>;
  }

  return (
    <div>
      <h1>{animeData.title}</h1>
      <img src={animeData.images.jpg.large_image_url} alt={animeData.title} />
      <p>{animeData.synopsis}</p>
    </div>
  );
};

export default AnimeDetail;
