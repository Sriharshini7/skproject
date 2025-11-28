require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/realEstateDB';

mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// EMI Calculation Model
const emiSchema = new mongoose.Schema({
    principal: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    loanTerm: { type: Number, required: true },
    emi: { type: Number, required: true },
    totalInterest: { type: Number, required: true },
    totalPayment: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

const EMICalculation = mongoose.model('EMICalculation', emiSchema);

// API Routes
app.post('/api/emi/calculate', async(req, res) => {
    try {
        const { principal, interestRate, loanTerm } = req.body;

        // Calculate EMI
        const monthlyRate = interestRate / 12 / 100;
        const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, loanTerm) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
        const totalPayment = emi * loanTerm;
        const totalInterest = totalPayment - principal;

        // Save to database
        const emiRecord = new EMICalculation({
            principal,
            interestRate,
            loanTerm,
            emi,
            totalInterest,
            totalPayment
        });

        await emiRecord.save();

        res.json({
            emi: emi.toFixed(2),
            totalInterest: totalInterest.toFixed(2),
            totalPayment: totalPayment.toFixed(2)
        });
    } catch (error) {
        console.error('Error calculating EMI:', error);
        res.status(500).json({ error: 'Error calculating EMI' });
    }
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});