import express from "express";
import Alert from "../models/Alert.js";
import { validateAlert } from "../middleware/validateAlert.js";

const router = express.Router();

// GET
router.get("/", async (req, res, next) => {
  try {
    const { country, status } = req.query;
    const filter = {};
    if (country) filter.country = country;
    if (status) filter.status = status;

    const alerts = await Alert.find(filter);
    res.status(200).json(alerts);
  } catch (err) {
    next(err);
  }
});

// POST
router.post("/", validateAlert, async (req, res, next) => {
  try {
    const alert = await Alert.create(req.body);
    res.status(201).json(alert);
  } catch (err) {
    next(err);
  }
});

// PUT
router.put("/:id", validateAlert, async (req, res, next) => {
  try {
    const alert = await Alert.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!alert) return res.status(404).json({ message: "Alert not found" });

    res.status(200).json(alert);
  } catch (err) {
    next(err);
  }
});

// DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    const alert = await Alert.findByIdAndDelete(req.params.id);

    if (!alert) return res.status(404).json({ message: "Alert not found" });

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    next(err);
  }
});

export default router;
