import axios from "axios";

export default function handler(req, res) {
  if (req.method === "POST") {
    axios
      .post(
        "https://flowise.seelanglabs.com/api/v1/prediction/402dea8b-57bb-4be7-aed7-88cef9dc53d7",
        req.body
      )
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res
          .status(500)
          .json({ error: "Error in sending request to the endpoint" });
      });
  } else {
    res.status(405).json({ error: "Invalid request method" });
  }
}
