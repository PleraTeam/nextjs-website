'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import styles from './GlobalReach.module.css';

export default function GlobalReach() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Check if API key is available
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        if (!apiKey) {
          throw new Error('Google Maps API key not found. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable.');
        }

        // Initialize the Google Maps API loader
        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
          libraries: ['maps']
        });

        // Load the Maps API
        await loader.load();
        
        if (!mapRef.current) {
          throw new Error('Map container not found');
        }

        // Dark theme map styling
        const darkMapStyles = [
          {
            "elementType": "geometry",
            "stylers": [{ "color": "#1d2c4d" }]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#8ec3b9" }]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [{ "color": "#1a3646" }]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#4b6878" }]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#4b6878" }]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#334e87" }]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{ "color": "#023e58" }]
          },
          {
            "featureType": "poi",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "road",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "transit",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#0e1626" }]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#4e6d70" }]
          }
        ];

        // Create the map
        mapInstance.current = new google.maps.Map(mapRef.current, {
          center: { lat: 20, lng: 0 }, // World center view
          zoom: 2,
          styles: darkMapStyles,
          disableDefaultUI: true,
          gestureHandling: 'cooperative',
          backgroundColor: '#0e1626'
        });

        setIsLoading(false);
      } catch (err) {
        console.error('Error initializing map:', err);
        setError(err instanceof Error ? err.message : 'Failed to load map');
        setIsLoading(false);
      }
    };

    initMap();

    // Cleanup function
    return () => {
      if (mapInstance.current) {
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Global Reach</h2>
        
        <div className={styles.mapWrapper}>
          {isLoading && (
            <div className={styles.loadingState}>
              <div className={styles.spinner}></div>
              <p>Loading map...</p>
            </div>
          )}
          
          {error && (
            <div className={styles.errorState}>
              <p>Error loading map: {error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className={styles.retryButton}
              >
                Retry
              </button>
            </div>
          )}
          
          <div 
            ref={mapRef} 
            className={`${styles.mapContainer} ${isLoading ? styles.hidden : ''}`}
          />
        </div>
      </div>
    </section>
  );
}