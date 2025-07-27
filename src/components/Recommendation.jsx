import { useNavigate } from "react-router";
import { Container, Button, Card } from "react-bootstrap"
import { useState } from "react";


export default function Recommendation({responses}) {
    const activities = [
        {
          name: "Go for a hike",
          traits: {
            location: "Outside",
            group: "With Friends",
            season: "Summer",
            rain: "No",
          },
        },
        {
          name: "Read a book",
          traits: {
            location: "Inside",
            group: "Alone",
          },
        },
        {
          name: "Board game night",
          traits: {
            location: "Inside",
            group: "With Friends",
          },
        },
        {
          name: "Visit a museum",
          traits: {
            location: "Inside",
            group: "Alone",
            rain: "Yes",
          },
        },
      ];
      const userTraits = {};
      for (const res of responses) {
        if (res.question.includes("inside or outside")) {
          userTraits.location = res.answer;
        }
        if (res.question.includes("alone or with friends")) {
          userTraits.group = res.answer;
        }
        if (res.question.includes("season")) {
          userTraits.season = res.answer;
        }
        if (res.question.includes("raining")) {
          userTraits.rain = res.answer;
        }
      }
    
      // Score each activity based on how many traits match
      const scoredActivities = activities.map((activity) => {
        let score = 0;
        for (const trait in activity.traits) {
          if (activity.traits[trait] === userTraits[trait]) {
            score++;
          }
        }
        return { ...activity, score };
      });
    
      // Sort by best match
      const sortedActivities = scoredActivities.sort((a, b) => b.score - a.score);
      const bestMatches = sortedActivities.filter((a) => a.score === sortedActivities[0].score);
    
      return (
        <Container>
            <h2 className="text-xl font-bold mb-2">We recommend:</h2>
            <ul className="list-disc list-inside">
                {bestMatches.map((activity) => (
                    <ul key={activity.name}>{activity.name}</ul>
                ))}
            </ul>
        </Container>
      );
    
}