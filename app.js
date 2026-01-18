const express = require('express');

const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    let blogs = [
        {title: 'Blog 1', intro: 'This is the intro for blog 1'},
        {title: 'Blog 2', intro: 'This is the intro for blog 2'},
        {title: 'Blog 3', intro: 'This is the intro for blog 3'},
    ];
    res.render('home', {
       blogs,
       title: 'Home'
    });
});

app.get('/about', (req, res) => {
   res.render('about', {
       title: 'About'
    });
});


app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact'
    });
});

app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    });
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
})
