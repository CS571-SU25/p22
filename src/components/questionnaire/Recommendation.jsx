import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";

export default function Recommendation({ responses }) {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from public folder
    fetch("/p22/activities/activityData.json")
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        console.log("success");
      })
      .catch((err) => console.error("Error fetching activities:", err));
  }, []);

  useEffect(() => {
    if (activities.length > 0 && responses.length > 0) {
      // Extract keywords from responses
      const userKeywords = responses.map((r) => r.answer.toLowerCase());

      // Filter activities by matching keywords
      const matched = activities.filter((activity) =>
        activity.keywords.some((keyword) =>
          userKeywords.includes(keyword.toLowerCase())
        )
      );

      setFilteredActivities(matched);
    }
  }, [activities, responses]);

  return (
    <Container>
      <h2>Recommendations</h2>
      {filteredActivities.length > 0 ? (
        filteredActivities.map((activity, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>{activity.name}</Card.Title>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No matching activities found based on your answers.</p>
      )}
    </Container>
  );
}