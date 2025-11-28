import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { propertiesData } from '../data/properties';
import './PropertyDetail.css';

const PropertyDetail = () => {
        const { id } = useParams();
        const [property, setProperty] = useState(null);
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
        const [showMap, setShowMap] = useState(false);
        const [savedProperties, setSavedProperties] = useState([]);
        const [showContactModal, setShowContactModal] = useState(false);
        const [contactForm, setContactForm] = useState({
            name: '',
            email: '',
            phone: '',
            message: '',
            action: ''
        });

        useEffect(() => {
            const foundProperty = propertiesData.find(p => p.id === parseInt(id));
            setProperty(foundProperty);
        }, [id]);

        if (!property) {
            return ( <
                div className = "property-detail-page" >
                <
                div className = "container" >
                <
                div className = "not-found" >
                <
                h2 > Property not found < /h2> <
                Link to = "/properties"
                className = "btn btn-primary" > Back to Properties < /Link> <
                /div> <
                /div> <
                /div>
            );
        }

        const formatPrice = (price) => {
            return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 0
            }).format(price);
        };

        const nextImage = () => {
            setCurrentImageIndex((prev) =>
                prev === property.images.length - 1 ? 0 : prev + 1
            );
        };

        const prevImage = () => {
            setCurrentImageIndex((prev) =>
                prev === 0 ? property.images.length - 1 : prev - 1
            );
        };

        // Contact functionality
        const handleContactAction = (action) => {
            setContactForm(prev => ({...prev, action }));
            setShowContactModal(true);
        };

        const handleContactSubmit = (e) => {
            e.preventDefault();
            // Simulate form submission
            alert(`Thank you ${contactForm.name}! Your ${contactForm.action.toLowerCase()} request has been submitted. We'll contact you soon at ${contactForm.email} or ${contactForm.phone}.`);
            setShowContactModal(false);
            setContactForm({ name: '', email: '', phone: '', message: '', action: '' });
        };

        const handleInputChange = (e) => {
            setContactForm(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }));
        };

        // Save property functionality
        const handleSaveProperty = () => {
            const isSaved = savedProperties.includes(property.id);
            if (isSaved) {
                setSavedProperties(prev => prev.filter(id => id !== property.id));
                alert('Property removed from saved list!');
            } else {
                setSavedProperties(prev => [...prev, property.id]);
                alert('Property saved to your favorites!');
            }
        };

        // Share property functionality
        const handleShareProperty = () => {
            if (navigator.share) {
                navigator.share({
                    title: property.title,
                    text: property.description,
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                navigator.clipboard.writeText(window.location.href);
                alert('Property link copied to clipboard!');
            }
        };

        // Print functionality
        const handlePrintDetails = () => {
                const printWindow = window.open('', '_blank');
                const printContent = `
      <html>
        <head>
          <title>${property.title} - Property Details</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .property-image { width: 100%; max-width: 500px; margin: 20px auto; display: block; }
            .details { margin: 20px 0; }
            .detail-item { margin: 10px 0; padding: 10px; background: #f5f5f5; }
            .amenities { margin: 20px 0; }
            .amenity { margin: 5px 0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${property.title}</h1>
            <h2>${property.location}</h2>
            <h3>${formatPrice(property.price)}</h3>
          </div>
          <img src="${property.images[0]}" alt="${property.title}" class="property-image">
          <div class="details">
            <h3>Property Details</h3>
            <div class="detail-item"><strong>Type:</strong> ${property.type}</div>
            <div class="detail-item"><strong>Area:</strong> ${property.area} sq ft</div>
            <div class="detail-item"><strong>Price per sq ft:</strong> ₹${property.pricePerSqft.toLocaleString()}</div>
            ${property.bedrooms > 0 ? `<div class="detail-item"><strong>Bedrooms:</strong> ${property.bedrooms}</div>` : ''}
            ${property.bathrooms > 0 ? `<div class="detail-item"><strong>Bathrooms:</strong> ${property.bathrooms}</div>` : ''}
          </div>
          <div class="amenities">
            <h3>Amenities</h3>
            ${property.amenities.map(amenity => `<div class="amenity">• ${amenity}</div>`).join('')}
          </div>
          <div class="details">
            <h3>Description</h3>
            <p>${property.description}</p>
          </div>
          <div class="details">
            <h3>Contact Information</h3>
            <p><strong>Agent:</strong> Rajesh Kumar</p>
            <p><strong>Company:</strong> Swayam Krushi (SK) Estates</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> rajesh@eliteproperties.com</p>
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="property-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/properties">Properties</Link>
          <span>/</span>
          <span>{property.title}</span>
        </div>

        {/* Property Header */}
        <div className="property-header">
          <div className="property-title-section">
            <h1 className="property-title">{property.title}</h1>
            <p className="property-location">
              <i className="fas fa-map-marker-alt"></i> {property.location}
            </p>
            <div className="property-type-badge">
              <span>{property.type}</span>
            </div>
          </div>
          <div className="property-price-section">
            <div className="main-price">{formatPrice(property.price)}</div>
            <div className="price-per-sqft">₹{property.pricePerSqft.toLocaleString()}/sq ft</div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="main-image">
            <img src={property.images[currentImageIndex]} alt={property.title} />
            <button className="nav-btn prev-btn" onClick={prevImage}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="nav-btn next-btn" onClick={nextImage}>
              <i className="fas fa-chevron-right"></i>
            </button>
            <div className="image-counter">
              {currentImageIndex + 1} / {property.images.length}
            </div>
          </div>
          <div className="thumbnail-images">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${property.title} ${index + 1}`}
                className={index === currentImageIndex ? 'active' : ''}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Property Details Grid */}
        <div className="property-details-grid">
          {/* Main Content */}
          <div className="main-content">
            {/* Description */}
            <div className="description-section">
              <h3>Description</h3>
              <p>{property.description}</p>
            </div>

            {/* Property Features */}
            <div className="features-section">
              <h3>Property Features</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <i className="fas fa-expand-arrows-alt"></i>
                  <div>
                    <span className="feature-label">Area</span>
                    <span className="feature-value">{property.area} sq ft</span>
                  </div>
                </div>
                {property.bedrooms > 0 && (
                  <div className="feature-item">
                    <i className="fas fa-bed"></i>
                    <div>
                      <span className="feature-label">Bedrooms</span>
                      <span className="feature-value">{property.bedrooms}</span>
                    </div>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="feature-item">
                    <i className="fas fa-bath"></i>
                    <div>
                      <span className="feature-label">Bathrooms</span>
                      <span className="feature-value">{property.bathrooms}</span>
                    </div>
                  </div>
                )}
                <div className="feature-item">
                  <i className="fas fa-tag"></i>
                  <div>
                    <span className="feature-label">Property Type</span>
                    <span className="feature-value">{property.type}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="amenities-section">
              <h3>Amenities</h3>
              <div className="amenities-grid">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <i className="fas fa-check-circle"></i>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
              <h3>Location</h3>
              <div className="map-container">
                <div className="map-placeholder">
                  <i className="fas fa-map-marked-alt"></i>
                  <h4>Interactive Map</h4>
                  <p>Location: {property.location}</p>
                  <p>Coordinates: {property.coordinates.lat}, {property.coordinates.lng}</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setShowMap(!showMap)}
                  >
                    {showMap ? 'Hide Map' : 'Show Map'}
                  </button>
                </div>
                {showMap && (
                  <div className="map-iframe">
                    <iframe
                      src={`https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&z=15&output=embed`}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Contact Card */}
            <div className="contact-card">
              <h3>Contact Agent</h3>
              <div className="agent-info">
                <div className="agent-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="agent-details">
                  <h4>Rajesh Kumar</h4>
                  <p>Swayam Krushi (SK) Estates</p>
                  <div className="agent-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span>5.0 (50+ reviews)</span>
                  </div>
                </div>
              </div>
              <div className="contact-buttons">
                <button 
                  className="btn btn-primary btn-full"
                  onClick={() => handleContactAction('Call')}
                >
                  <i className="fas fa-phone"></i> Call Now
                </button>
                <button 
                  className="btn btn-secondary btn-full"
                  onClick={() => handleContactAction('Message')}
                >
                  <i className="fas fa-envelope"></i> Send Message
                </button>
                <button 
                  className="btn btn-secondary btn-full"
                  onClick={() => handleContactAction('Schedule Visit')}
                >
                  <i className="fas fa-calendar"></i> Schedule Visit
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="price-breakdown">
              <h3>Price Breakdown</h3>
              <div className="breakdown-item">
                <span>Price per sq ft</span>
                <span>₹{property.pricePerSqft.toLocaleString()}</span>
              </div>
              <div className="breakdown-item">
                <span>Total Area</span>
                <span>{property.area} sq ft</span>
              </div>
              <div className="breakdown-item total">
                <span>Total Price</span>
                <span>{formatPrice(property.price)}</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <h3>Quick Actions</h3>
              <button 
                className={`btn btn-full ${savedProperties.includes(property.id) ? 'btn-primary' : 'btn-secondary'}`}
                onClick={handleSaveProperty}
              >
                <i className={`fas ${savedProperties.includes(property.id) ? 'fa-heart' : 'fa-heart'}`}></i> 
                {savedProperties.includes(property.id) ? 'Saved' : 'Save Property'}
              </button>
              <button 
                className="btn btn-secondary btn-full"
                onClick={handleShareProperty}
              >
                <i className="fas fa-share"></i> Share Property
              </button>
              <button 
                className="btn btn-secondary btn-full"
                onClick={handlePrintDetails}
              >
                <i className="fas fa-print"></i> Print Details
              </button>
              <Link 
                to={`/property/${property.id}/emi`}
                className="btn btn-primary btn-full"
                style={{marginTop: '10px'}}
              >
                <i className="fas fa-calculator"></i> Calculate EMI
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Modal */}
        {showContactModal && (
          <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Contact Agent - {contactForm.action}</h3>
                <button 
                  className="modal-close"
                  onClick={() => setShowContactModal(false)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <div className="form-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowContactModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;