import React, { useState, useEffect } from "react";


const Temp = ({ newsId }) => {

  /*
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/latest?apikey=pub_47103f76a4ef2872c4fa6d5df6c6515fcc3bb&id=${newsId}`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setArticle(data.results[0]);
        } else {
          setError("Article not found");
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [newsId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading article: {error}</div>;
  }

  const { title, link, creator, description, pubDate, image_url } = article;

  const formattedDate = new Date(pubDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
*/
  return (
    <>
      <div className="bg-gray-100 p-4 rounded-md shadow-md max-w-xl mx-auto my-4">
        <p className="text-gray-700 mb-4">
          Sorry for Inconvience because i am free version of NewsData so i
          haven&apos;t a full access of article so i can&apos;t show you full
          Article{" "}
        </p>
      </div>
    </>
  );
};

export default Temp;
