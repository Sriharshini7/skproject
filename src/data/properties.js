// Sample property data for Hyderabad
const basePropertiesData = [
  // Individual Houses
  {
    id: 1,
    type: 'Individual House',
    title: 'Luxury Villa in Banjara Hills',
    location: 'Banjara Hills',
    price: 25000000,
    pricePerSqft: 8500,
    area: 2941,
    bedrooms: 4,
    bathrooms: 3,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
    ],
    amenities: ['Swimming Pool', 'Garden', 'Parking', 'Security', 'Power Backup', 'Gym'],
    description: 'Spacious luxury villa with modern amenities in the heart of Banjara Hills.',
    coordinates: { lat: 17.4065, lng: 78.4772 }
  },
  {
    id: 2,
    type: 'Individual House',
    title: 'Modern Bungalow in Jubilee Hills',
    location: 'Jubilee Hills',
    price: 18000000,
    pricePerSqft: 7200,
    area: 2500,
    bedrooms: 3,
    bathrooms: 2,
    images: [
      'https://images.unsplash.com/photo-1711114378455-b1f479d94a19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
    ],
    amenities: ['Garden', 'Parking', 'Security', 'Power Backup'],
    description: 'Beautiful modern bungalow with contemporary design and premium finishes.',
    coordinates: { lat: 17.4229, lng: 78.4078 }
  },

  // Villas
  {
    id: 3,
    type: 'Villa',
    title: 'Premium Villa in Gachibowli',
    location: 'Gachibowli',
    price: 32000000,
    pricePerSqft: 9500,
    area: 3368,
    bedrooms: 5,
    bathrooms: 4,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
    ],
    amenities: ['Swimming Pool', 'Garden', 'Parking', 'Security', 'Power Backup', 'Gym', 'Home Theater'],
    description: 'Ultra-luxury villa with world-class amenities and stunning architecture.',
    coordinates: { lat: 17.4399, lng: 78.3489 }
  },
  {
    id: 4,
    type: 'Villa',
    title: 'Executive Villa in Hitec City',
    location: 'Hitec City',
    price: 28000000,
    pricePerSqft: 9000,
    area: 3111,
    bedrooms: 4,
    bathrooms: 3,
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      'https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
    ],
    amenities: ['Swimming Pool', 'Garden', 'Parking', 'Security', 'Power Backup', 'Gym'],
    description: 'Executive villa perfect for corporate executives with premium lifestyle.',
    coordinates: { lat: 17.4474, lng: 78.3562 }
  },

  // Apartments
  {
    id: 5,
    type: 'Apartment',
    title: 'Luxury Apartment in Kondapur',
    location: 'Kondapur',
    price: 12000000,
    pricePerSqft: 8000,
    area: 1500,
    bedrooms: 3,
    bathrooms: 2,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
    ],
    amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Power Backup', 'Club House'],
    description: 'Modern luxury apartment with premium amenities and city views.',
    coordinates: { lat: 17.4849, lng: 78.3896 }
  },
  {
    id: 6,
    type: 'Apartment',
    title: 'Premium Apartment in Madhapur',
    location: 'Madhapur',
    price: 9500000,
    pricePerSqft: 7500,
    area: 1267,
    bedrooms: 2,
    bathrooms: 2,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627'
    ],
    amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Power Backup'],
    description: 'Contemporary apartment with modern amenities in IT hub.',
    coordinates: { lat: 17.4481, lng: 78.3908 }
  },

  // Plots
  {
    id: 7,
    type: 'Plot',
    title: 'Residential Plot in Miyapur',
    location: 'Miyapur',
    price: 4500000,
    pricePerSqft: 15000,
    area: 300,
    bedrooms: 0,
    bathrooms: 0,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop'
    ],
    amenities: ['Road Access', 'Water Supply', 'Electricity', 'Security'],
    description: 'Prime residential plot in developing area with excellent connectivity.',
    coordinates: { lat: 17.4963, lng: 78.3576 }
  },
  {
    id: 8,
    type: 'Plot',
    title: 'Commercial Plot in Secunderabad',
    location: 'Secunderabad',
    price: 8500000,
    pricePerSqft: 25000,
    area: 340,
    bedrooms: 0,
    bathrooms: 0,
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
    ],
    amenities: ['Road Access', 'Water Supply', 'Electricity', 'Security', 'Commercial Zone'],
    description: 'High-value commercial plot in prime business district.',
    coordinates: { lat: 17.4399, lng: 78.4983 }
  }
];

// Area centers for Hyderabad localities
const areaCenters = {
  'Banjara Hills': { lat: 17.4065, lng: 78.4772 },
  'Jubilee Hills': { lat: 17.4229, lng: 78.4078 },
  'Gachibowli': { lat: 17.4401, lng: 78.3489 },
  'Hitec City': { lat: 17.4474, lng: 78.3562 },
  'Kondapur': { lat: 17.4849, lng: 78.3896 },
  'Madhapur': { lat: 17.4481, lng: 78.3908 },
  'Miyapur': { lat: 17.4963, lng: 78.3576 },
  'Secunderabad': { lat: 17.4399, lng: 78.4983 },
  'Begumpet': { lat: 17.4435, lng: 78.4691 },
  'Somajiguda': { lat: 17.4240, lng: 78.4583 },
  'Ameerpet': { lat: 17.4387, lng: 78.4483 },
  'Kukatpally': { lat: 17.4933, lng: 78.3995 }
};

// Convert a distance in meters to approx degrees for latitude/longitude offsets
const metersToDegrees = (meters) => meters / 111320; // ~111.32 km per degree

// Randomize coordinates within a radius (meters) around a base point
const randomizeCoordinates = (base, radiusMeters = 1000) => {
  const r = metersToDegrees(radiusMeters) * Math.sqrt(Math.random());
  const theta = Math.random() * 2 * Math.PI;
  const dLat = r * Math.cos(theta);
  // Adjust longitude offset by latitude scale
  const dLng = (r * Math.sin(theta)) / Math.cos((base.lat * Math.PI) / 180);
  return { lat: Number((base.lat + dLat).toFixed(6)), lng: Number((base.lng + dLng).toFixed(6)) };
};

// Export properties with randomized coordinates per area so each item stays within its location
export const propertiesData = basePropertiesData.map((p) => {
  const center = areaCenters[p.location] || p.coordinates;
  return { ...p, coordinates: center ? randomizeCoordinates(center, 1000) : p.coordinates };
});

export const hyderabadLocations = [
  'Banjara Hills',
  'Jubilee Hills',
  'Gachibowli',
  'Hitec City',
  'Kondapur',
  'Madhapur',
  'Miyapur',
  'Secunderabad',
  'Begumpet',
  'Somajiguda',
  'Ameerpet',
  'Kukatpally'
];

export const propertyTypes = [
  'Individual House',
  'Villa',
  'Apartment',
  'Plot'
];
