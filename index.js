const express = require("express");

const app = express();

app.use(express.json());

//registration - POST /api/auth/register
app.post("/api/auth/register", async (req, res, next) => {
  res.status(201).json({ message: "Registration Successful" });
});

//login - POST /api/auth/login
app.post("/api/auth/login", async (req, res, next) => {
  res.status(200).json({ message: "Login Successful" });
});

//get logged in user information - GET /api/auth/me
app.get("/api/auth/me", async (req, res, next) => {
  res.status(200).json({ message: "User information retrieved successfully" });
});

//get all the items - GET /api/items
app.get("/api/items", async (req, res, next) => {
  res.status(200).json({ message: "All items retrieved successfully" });
});

//get an item by specific id - GET /api/items/:id
app.get("/api/items/:id", async (req, res, next) => {
  res.status(200).json({ message: "Specific item retrieved successfully" });
});

//get all the reviews of a specific item - GET /api/items/:id/reviews
app.get("/api/items/:id/reviews", async (req, res, next) => {
  res
    .status(200)
    .json({ message: "All reviews of a specific item retrieved sucessfully" });
});

//get a specific review for a specific item - GET /api/items/:itemId/reviews/:id
app.get("/api/items/:itemId/reviews/:id", async (req, res, next) => {
  res.status(200).json({
    message: "Specific review for a specific item retrieved successfully",
  });
});

//post a review for a specific item - POST /api/items/:id/reviews
app.post("/api/items/:id/reviews", async (req, res, next) => {
  res.status(201).json({ message: "Review posted successfully" });
});

//get all of my reviews - GET /api/reviews/me
app.get("/api/reviews/me", async (req, res, next) => {
  res.status(200).json({ message: "All my reviews retrieved successfully" });
});

//PUT /api/users/:userId/reviews/:id

//post a comment on a review - POST /api/items/:itemId/reviews/:id/comments
app.post("/api/items/:itemId/reviews/:id/comments", async (req, res, next) => {
  res.status(201).json({ message: "comment successfully posted" });
});

//get all my comments - GET /api/comments/me
app.get("/api/comments/me", async (req, res, next) => {
  res.status(200).json({ message: "All my comments retrieved successfully" });
});

//PUT /api/users/:userId/comments/:id

//delete comment - DELETE /api/users/:userId/comments/:id
app.delete("/api/users/:userId/comments/:id", async (req, res, next) => {
  res.status(200).json({ message: "Comment successfully deleted" });
});

//delete comment - DELETE /api/users/:userId/reviews/:id
app.delete("/api/users/:userId/reviews/:id", async (req, res, next) => {
  res.status(200).json({ message: "Review successfully deleted" });
});

//
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
