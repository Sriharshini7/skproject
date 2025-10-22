// Sample property data for Hyderabad
export const propertiesData = [
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
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
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
      'https://images.unsplash.com/photo-1600566753086-5f52d1c8c8b5?w=800&h=600&fit=crop'
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
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop'
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
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
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
      'https://images.unsplash.com/photo-1600566753086-5f52d1c8c8b5?w=800&h=600&fit=crop'
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
