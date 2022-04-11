const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Setting EJS as the Express app view engine
app.set('view engine', 'ejs')


const user = {
    firstName: 'Linda',
    lastName: 'Motejl',
    admin: true,
}





//Rendering on the response object. This renders the view provided pages/index and returns back the rendererd HTML to the client.
app.get('/', (req, res) => {
    res.render('pages/index', {
        user
    })
})


  app.listen(port);
  console.log('Server started at http://localhost:' + port);