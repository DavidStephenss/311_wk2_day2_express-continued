const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const contactsRouter = require('./routers/routers-contacts');
const vehicleRouter = require('./routers/routers-vehicles');
const productRouter = require('./routers/routers-product');
const commentsRouter = require('./routers/routers-comments');
const port = process.env.PORT || 4001;


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(contactsRouter)
app.use(vehicleRouter)
app.use(productRouter)
app.use(commentsRouter)




app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});