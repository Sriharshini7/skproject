import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { propertiesData } from '../data/properties';
import './emi.css';

const EMI = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [emiInputs, setEmiInputs] = useState({
    downPaymentPercent: 20,
    interestRate: 8.5,
    tenure: 10
  });
  const [emiResults, setEmiResults] = useState({
    downPayment: 0,
    loanAmount: 0,
    totalInterest: 0,
    totalPayment: 0,
    monthlyEMI: 0
  });

  useEffect(() => {
    const foundProperty = propertiesData.find(p => p.id === parseInt(id));
    setProperty(foundProperty);
  }, [id]);

  useEffect(() => {
    if (property) {
      calculateEMI();
    }
  }, [property, emiInputs]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const calculateEMI = () => {
    if (!property) return;

    const propertyPrice = property.price;
    const downPaymentPercent = emiInputs.downPaymentPercent;
    const interestRate = emiInputs.interestRate;
    const tenureYears = emiInputs.tenure;
    const tenureMonths = tenureYears * 12;

    const downPayment = (propertyPrice * downPaymentPercent) / 100;
    const loanAmount = propertyPrice - downPayment;
    const monthlyRate = interestRate / 12 / 100;

    let monthlyEMI = 0;
    if (monthlyRate > 0) {
      monthlyEMI = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / 
                   (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    } else {
      monthlyEMI = loanAmount / tenureMonths;
    }

    const totalPayment = monthlyEMI * tenureMonths;
    const totalInterest = totalPayment - loanAmount;

    setEmiResults({
      downPayment,
      loanAmount,
      totalInterest,
      totalPayment,
      monthlyEMI
    });
  };

  const handleInputChange = (field, value) => {
    setEmiInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const calculateBankEMI = (loanAmount, interestRate, tenureMonths) => {
    const monthlyRate = interestRate / 12 / 100;
    if (monthlyRate > 0) {
      return loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / 
             (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    }
    return loanAmount / tenureMonths;
  };

  const bankOptions = [
    {
      bank: 'HDFC Bank',
      emiType: 'Reducing Balance',
      interest: 8.5,
      tenures: [12, 24, 36, 60, 120]
    },
    {
      bank: 'SBI',
      emiType: 'Reducing Balance',
      interest: 8.25,
      tenures: [12, 24, 36, 60, 120]
    },
    {
      bank: 'ICICI Bank',
      emiType: 'Flat EMI (Promotional)',
      interest: 9,
      tenures: [12, 24, 36]
    },
    {
      bank: 'Axis Bank',
      emiType: 'Zero Cost (Processing fee may apply)',
      interest: 0,
      tenures: [3, 6, 9]
    }
  ];

  if (!property) {
    return (
      <div className="emi-page">
        <div className="container">
          <div className="not-found">
            <h2>Property not found</h2>
            <Link to="/properties" className="btn btn-primary">Back to Properties</Link>
          </div>
        </div>
      </div>
    );
  }

  const loanAmount = property.price - emiResults.downPayment;
  const selectedTenureMonths = emiInputs.tenure * 12;

  return (
    <div className="emi-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/properties">Properties</Link>
          <span>/</span>
          <span>EMI Options</span>
        </div>

        {/* Page Header */}
        <div className="emi-header">
          <div className="emi-title-section">
            <h1 className="emi-title">EMI Options for: {property.title}</h1>
            <p className="emi-location">
              <i className="fas fa-map-marker-alt"></i> {property.location}
            </p>
          </div>
          <div className="emi-property-info">
            <div className="property-price-display">
              <span className="price-label">Property Price</span>
              <span className="price-value">{formatPrice(property.price)}</span>
            </div>
            <Link to={`/property/${property.id}`} className="btn btn-primary">
              View Property
            </Link>
          </div>
        </div>

        {/* EMI Calculator and Bank Options Grid */}
        <div className="emi-content-grid">
          {/* EMI Calculator Card */}
          <div className="emi-calculator-card">
            <h2 className="card-title">EMI Calculator</h2>
            <div className="calculator-inputs">
              <div className="input-group">
                <label htmlFor="downPayment">Down Payment (%)</label>
                <input
                  type="number"
                  id="downPayment"
                  min="0"
                  max="100"
                  value={emiInputs.downPaymentPercent}
                  onChange={(e) => handleInputChange('downPaymentPercent', e.target.value)}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label htmlFor="interestRate">Interest Rate (% p.a.)</label>
                <input
                  type="number"
                  id="interestRate"
                  min="0"
                  step="0.1"
                  value={emiInputs.interestRate}
                  onChange={(e) => handleInputChange('interestRate', e.target.value)}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label htmlFor="tenure">Tenure (years)</label>
                <input
                  type="number"
                  id="tenure"
                  min="1"
                  max="30"
                  value={emiInputs.tenure}
                  onChange={(e) => handleInputChange('tenure', e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
            <div className="calculator-results">
              <div className="result-item">
                <span className="result-label">Down Payment</span>
                <span className="result-value">{formatPrice(emiResults.downPayment)}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Loan Amount</span>
                <span className="result-value">{formatPrice(emiResults.loanAmount)}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Total Interest</span>
                <span className="result-value">{formatPrice(emiResults.totalInterest)}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Total Payment</span>
                <span className="result-value">{formatPrice(emiResults.totalPayment)}</span>
              </div>
              <div className="result-item highlight">
                <span className="result-label">Monthly EMI</span>
                <span className="result-value emi-highlight">{formatPrice(emiResults.monthlyEMI)}</span>
              </div>
            </div>
          </div>

          {/* Bank EMI Options Card */}
          <div className="bank-options-card">
            <h2 className="card-title">Bank EMI Options</h2>
            <p className="disclaimer">
              These are indicative offers. Actual rates/tenure depend on eligibility.
            </p>
            <div className="bank-table-container">
              <table className="bank-table">
                <thead>
                  <tr>
                    <th>Bank</th>
                    <th>EMI Type</th>
                    <th>Interest (p.a.)</th>
                    <th>Available Tenures (months)</th>
                    <th>Est. EMI</th>
                  </tr>
                </thead>
                <tbody>
                  {bankOptions.map((bank, index) => {
                    const estimatedEMI = calculateBankEMI(
                      loanAmount,
                      bank.interest,
                      selectedTenureMonths
                    );
                    return (
                      <tr key={index}>
                        <td><strong>{bank.bank}</strong></td>
                        <td>{bank.emiType}</td>
                        <td>{bank.interest}%</td>
                        <td>{bank.tenures.join(', ')}</td>
                        <td>{formatPrice(estimatedEMI)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* About EMI Types Section */}
        <div className="emi-types-card">
          <h2 className="card-title">About EMI Types</h2>
          <div className="emi-types-grid">
            <div className="emi-type-item">
              <h3>Reducing Balance</h3>
              <p>Interest is calculated on the outstanding principal; EMI remains constant but interest/principal mix changes over time.</p>
            </div>
            <div className="emi-type-item">
              <h3>Flat EMI</h3>
              <p>Interest is computed on full principal for the entire tenure; simpler but often costlier than reducing balance.</p>
            </div>
            <div className="emi-type-item">
              <h3>Zero-cost</h3>
              <p>No interest charged; often short tenure with processing or foreclose limitations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMI;

