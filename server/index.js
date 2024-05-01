const express = require("express");
const cors = require("cors");
const { TheCatAPI } = require("@thatapicompany/thecatapi");

const theCatAPI = new TheCatAPI(
  "live_f6vqM4LRA9Pk2ggqAXGjfjH4JBkez27iaXVGEKhxriiXWCe9ZTLahcnGr2Rezga8"
); // API anahtarınızı buraya ekleyin

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST",
    credentials: true,
  })
);

app.get("/random-cat", async (req, res) => {
  try {
    const images = await theCatAPI.images.searchImages({
      limit: 6,
    });
    res.json(images);
  } catch (error) {
    console.error("Error fetching cat images:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
