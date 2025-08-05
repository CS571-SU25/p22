import { Card } from "react-bootstrap";
import "./ActivityCard.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ActivityCard({ name, img, desc, delay, saveActivity, unsaveActivity, isSaved }) {
    const [show, setShow] = useState(false);
    const [saved, setSaved] = useState(isSaved);
    const nav = useNavigate();

    useEffect(() => {
        setTimeout(() => setShow(true), delay)
    }, [])

    const toggleSave = (e) => {
        e.stopPropagation(); // Prevent triggering navigation
        if (saved) {
            unsaveActivity(name);
        } else {
            saveActivity(name);
        }
        setSaved(!saved);
    };

    return <Card className={`activity-card ${show ? "show" : ""}`} style={{width: "300px", position: "relative", borderRadius: "1rem"}} onClick={() => nav(`/${name}`)}>
            <div style={{backgroundImage: `url(/p22/activities/activityImages/${img.src})`, borderRadius: "1rem 1rem 0.5rem 0.5rem"}}>
                <h2>{name}</h2>
                <div className="star-icon" onClick={toggleSave}>
                    {saved ? '★' : '☆'}
                </div>
            </div>
            <p style={{margin:"auto", padding: "20px"}}>
                {desc}
            </p>
        </Card>
}