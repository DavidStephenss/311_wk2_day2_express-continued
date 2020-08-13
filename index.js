const express = require("express");
const bodyParser = require("body-parser");
const contactsRouter = require('./routers/routers-contacts')
const app = express();
const port = process.env.PORT || 4001;


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(contactsRouter)




app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
