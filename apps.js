const express= require('express')
const apps=express()
const path = require('path');
const port=process.env.PORT || 1000;

apps.use(express.json());
apps.use(express.urlencoded({ extended: true }));
apps.use(express.static(path.join(__dirname, 'public')));

apps.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

apps.post('/tweet', (req, res) => {
    const handleInput = req.body.handleInput;
    const tweetInput = req.body.tweetInput;

    console.log('Received handle:', handleInput);
    console.log('Received tweet:', tweetInput);

     //response back
    res.send('Tweet -ed');
});

apps.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});