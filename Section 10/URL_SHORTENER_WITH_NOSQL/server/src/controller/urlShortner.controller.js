import { nanoid } from "nanoid";
import Url from "../model/url.model.js";
import { urlPostCreate } from "../validations/url.validations.js";

const createShortURL = async (req, res) => {
  // const { targetUrl, shortCode } = req.body ?? {};

  const validationsResult = await urlPostCreate.safeParseAsync(req.body);
  if (!validationsResult.success) {
    return res.status(400).json({ error: validationsResult.error.format() });
  }
  const { targetUrl,shortCode }=validationsResult.data
  if (!targetUrl) {
    return res.status(400).json({ message: "targetUrl is required" });
  }

  const code = shortCode ?? nanoid(6);

  const shortUrl = await Url.create({ targetUrl, shortCode: code });

  if (!shortUrl) {
    return res.status(500).json({ message: "Failed to create short URL" });
  }

  res.status(201).json({
    shortCode: code,
    targetUrl,
    message: "Short URL created successfully",
  });
};

const getShortURL = async (req, res) => {
  try {
    const { code } = req.params;

    const result = await Url.findOne({ shortCode: code });

    if (!result) {
      return res.status(404).json({ message: "Short URL not found" });
    }

    let redirectUrl = result.targetUrl;

    // Ensure the URL starts with http:// or https://
    if (!/^https?:\/\//i.test(redirectUrl)) {
      redirectUrl = `https://${redirectUrl}`;
    }

    return res.redirect(redirectUrl);
  } catch (error) {
    console.error("Redirect error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getAllShortURL = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const urls = await Url.find({ userId: user._id });

    res.status(200).json({ urls });
  } catch (error) {
    console.error("Error fetching URLs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteShortURL = async (req, res) => {
  try {
    const user = req.user;
    const { code } = req.params;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const deleted = await Url.findOneAndDelete({
      shortCode: code,
      userId: user._id,
    });

    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Short URL not found or not owned by user" });
    }

    res.status(200).json({ message: "Short URL deleted successfully" });
  } catch (error) {
    console.error("Error deleting URL:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createShortURL, getShortURL, getAllShortURL, deleteShortURL };
