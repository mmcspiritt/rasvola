import React, { useEffect, useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  useEffect(() => {
    if (isLoaded && !loadError) {
      const service = new google.maps.places.PlacesService(document.createElement('div'));
      service.getDetails(
        {
          placeId: 'YOUR_PLACE_ID', // Replace with your Google Place ID
          fields: ['reviews'],
        },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place.reviews) {
            setReviews(place.reviews);
          }
        }
      );
    }
  }, [isLoaded, loadError]);

  if (loadError) return <div>Error loading reviews</div>;
  if (!isLoaded) return <div>Loading reviews...</div>;

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="mb-4 p-4 bg-white rounded shadow">
          <p className="font-bold">{review.author_name}</p>
          <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviews;
