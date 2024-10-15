import React from 'react';

const LocationMap = () => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Nuestra Ubicación</h3>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Rasvola,Roma+Norte,Mexico+City+Mexico`}
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
