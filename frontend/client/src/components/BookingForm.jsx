import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    packageName: '',
    numberOfPersons: '',
    travelDate: '',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const packages = [
    "Nathula Pass Adventure",
    "Yumthang Valley & Lachung",
    "Gurudongmar Lake Expedition",
    "Kanchenjunga Base Camp",
    "Temi Tea Garden & Gangtok",
    "Yak Safari & Mountain Lakes"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call to backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would send this data to your backend
      console.log('Form data to be sent to backend:', formData);
      
      setSubmitMessage('Thank you! Your booking request has been submitted successfully. We will contact you soon!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        packageName: '',
        numberOfPersons: '',
        travelDate: '',
        specialRequests: ''
      });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="booking-form" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Book Your Adventure</h2>
          <p>Fill out the form below to start your journey with SamayaOdyssey</p>
        </div>
        
        <div className="form-container">
          <form onSubmit={handleSubmit} className="booking-form-content">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="packageName">Tour Package *</label>
                <select
                  id="packageName"
                  name="packageName"
                  value={formData.packageName}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a package</option>
                  {packages.map((pkg, index) => (
                    <option key={index} value={pkg}>{pkg}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="numberOfPersons">Number of Persons *</label>
                <input
                  type="number"
                  id="numberOfPersons"
                  name="numberOfPersons"
                  value={formData.numberOfPersons}
                  onChange={handleChange}
                  required
                  min="1"
                  max="20"
                  placeholder="Number of travelers"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="travelDate">Preferred Travel Date *</label>
                <input
                  type="date"
                  id="travelDate"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="specialRequests">Special Requests</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Any special requirements or requests..."
                rows="4"
              ></textarea>
            </div>

            {submitMessage && (
              <div className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
                {submitMessage}
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm; 