const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/authroutes');

const app = express();

/* ---------- Middleware ---------- */
app.use(cors());
app.use(bodyParser.json());

/* ---------- Routes ---------- */
app.use('/auth', authRoutes);

/* ---------- MongoDB Connection ---------- */
const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
  console.error('❌ MONGODB_URI is not defined in .env file');
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    console.log(process.env.MONGODB_URI);

  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB', err);

  });

/* ---------- Start Server ---------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
