const express = require('express');
const routes = require('../routes/main');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => {
    console.log(`[app] Listening on port ${PORT}`);
});
