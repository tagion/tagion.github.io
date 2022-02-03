const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const nextConfig = require('./next.config');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev, nextConfig });

const handle = app.getRequestHandler();

// HTTPs local certificates
const httpsOptions = {
    key: fs.readFileSync('./certificates/localhost.key'),
    cert: fs.readFileSync('./certificates/localhost.crt'),
};

app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url, true);

        handle(req, res, parsedUrl);
    }).listen(port, (error) => {
        if (error) throw error;
        console.log(`> Server started on https://localhost:${port}`);
    });
});
