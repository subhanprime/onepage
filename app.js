const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const host = "0.0.0.0";

// Middleware to parse JSON requests
app.use(express.json());

// Route: Home Page
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to My Express App</h1><p>Use /about, /contact, or /api/greet routes to see different responses.</p>"
  );
});

// Route: About Page
app.get("/about", (req, res) => {
  res.send(
    "<h1>About second Page</h1><p>This is a simple Node.js application built with Express.</p>"
  );
});
app.get("/home", (req, res) => {
  res.send(
    "<h1>Home Page</h1><p>This is a simple Node.js application built with Express.</p>"
  );
});
// Route: Contact Page
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1><p>Contact us at contact@example.com</p>");
});

// Route: API - Greet User (Example of dynamic response)
app.get("/api/greet/:name", (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}! Welcome to the API.` });
});

// Route: API - Sum (Example of POST request)
app.post("/api/sum", (req, res) => {
  const { a, b } = req.body;
  const sum = a + b;
  res.json({ sum });
});

// Start the server
app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
