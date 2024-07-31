// pages/api/reviews.ts

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json`,
      {
        params: {
          place_id: "ChIJyYxTA9GxYRMRk44um9tyou0",
          fields: "reviews",
          key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
          language: "el", // Request reviews in Greek
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({
      message: "Error fetching reviews",
      error: (error as Error).message,
    });
  }
};

export default handler;
