const express = require("express");
const router = express.Router();
const Task = require("../models/Task");



router.post("/add", async (req, res) => {
  try {
    const task = new Task(req.body);
    const saved = await task.save();
    res.json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



router.get("/search/:keyword", async (req, res) => {
  try {
    const keyword = req.params.keyword;

    const tasks = await Task.find({
      title: { $regex: keyword, $options: "i" }
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



router.put("/:id", async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;