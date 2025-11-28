import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { propertiesData, hyderabadLocations, propertyTypes } from '../data/properties';
import './Properties.css';

const Properties = () => {
  const [properties, setProperties] = useState(propertiesData);
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: ''
  });

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filtered = properties.filter(property => {
      const matchesLocation = !filters.location || property.location === filters.location;
      const matchesType = !filters.type || property.type === filters.type;
      const matchesMinPrice = !filters.minPrice || property.price >= parseInt(filters.minPrice);
      const matchesMaxPrice = !filters.maxPrice || property.price <= parseInt(filters.maxPrice);
      const matchesBedrooms = !filters.bedrooms || property.bedrooms >= parseInt(filters.bedrooms);
      
      return matchesLocation && matchesType && matchesMinPrice && matchesMaxPrice && matchesBedrooms;
    });
    
    setFilteredProperties(filtered);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: ''
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="properties-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Premium Properties in Hyderabad</h1>
          <p className="page-subtitle">Discover your dream property with our curated collection</p>
        </div>

        {/* Filters Section */}
        <div className="filters-section">
          <div className="filters-header">
            <h3><i className="fas fa-filter"></i> Filter Properties</h3>
            <button onClick={clearFilters} className="btn btn-secondary btn-sm">
              <i className="fas fa-times"></i> Clear All
            </button>
          </div>
          
          <div className="filters-grid">
            <div className="filter-group">
              <label>Location</label>
              <select 
                value={filters.location} 
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="filter-select"
              >
                <option value="">All Locations</option>
                {hyderabadLocations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Property Type</label>
              <select 
                value={filters.type} 
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="filter-select"
              >
                <option value="">All Types</option>
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Min Price (₹)</label>
              <input 
                type="number" 
                value={filters.minPrice} 
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                placeholder="Min Price"
                className="filter-input"
              />
            </div>

            <div className="filter-group">
              <label>Max Price (₹)</label>
              <input 
                type="number" 
                value={filters.maxPrice} 
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                placeholder="Max Price"
                className="filter-input"
              />
            </div>

            <div className="filter-group">
              <label>Bedrooms</label>
              <select 
                value={filters.bedrooms} 
                onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                className="filter-select"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="results-summary">
          <p>Showing {filteredProperties.length} properties</p>
        </div>

        {/* Properties Grid */}
        <div className="properties-grid">
          {filteredProperties.map(property => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <img src={property.images[0]} alt={property.title} />
                <div className="property-badge">
                  <span className="type-badge">{property.type}</span>
                  <span className="price-badge">{formatPrice(property.price)}</span>
                </div>
                <div className="property-overlay">
                  <Link to={`/property/${property.id}`} className="btn btn-primary">
                    <i className="fas fa-eye"></i> View Details
                  </Link>
                </div>
              </div>
              
              <div className="property-content">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-location">
                  <i className="fas fa-map-marker-alt"></i> {property.location}
                </p>
                
                <div className="property-details">
                  <div className="detail-item">
                    <i className="fas fa-expand-arrows-alt"></i>
                    <span>{property.area} sq ft</span>
                  </div>
                  {property.bedrooms > 0 && (
                    <div className="detail-item">
                      <i className="fas fa-bed"></i>
                      <span>{property.bedrooms} Beds</span>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="detail-item">
                      <i className="fas fa-bath"></i>
                      <span>{property.bathrooms} Baths</span>
                    </div>
                  )}
                </div>
                
                <div className="property-pricing">
                  <div className="price-per-sqft">
                    ₹{property.pricePerSqft.toLocaleString()}/sq ft
                  </div>
                  <div className="total-price">
                    {formatPrice(property.price)}
                  </div>
                </div>
                
                <div className="property-amenities">
                  {property.amenities.slice(0, 3).map((amenity, index) => (
                    <span key={index} className="amenity-tag">{amenity}</span>
                  ))}
                  {property.amenities.length > 3 && (
                    <span className="amenity-tag">+{property.amenities.length - 3} more</span>
                  )}
                </div>
                
                <div className="property-actions">
                  <Link 
                    to={`/property/${property.id}/emi`}
                    className="btn btn-primary btn-full"
                  >
                    <i className="fas fa-calculator"></i> Calculate EMI
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No properties found</h3>
            <p>Try adjusting your filters to see more results</p>
            <button onClick={clearFilters} className="btn btn-primary">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
