const express = require('express');
const app = express();
const connectDB = require('./config/db');
connectDB(); 

app.use(express.json({ extended: false}));
app.use('/api/users', require('./routes/api/users.js'));
app.use('/api/auth', require('./routes/api/auth.js'));
app.use('/api/post', require('./routes/api/post.js'));
app.use('/api/profile', require('./routes/api/profile.js'));
app.get('/', (req, res) => res.send('api running'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server started on ${port}`));