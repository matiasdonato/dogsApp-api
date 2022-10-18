let app = require("./src/server");
let { db } = require("./src/db/index.js")
let PORT = 3001;


db.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
    })
})