import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const filename = req.body.name || file.originalname;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json("File upload failed");
  }
});

export default router;
