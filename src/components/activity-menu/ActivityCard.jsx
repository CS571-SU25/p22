import { Card } from "react-bootstrap";
import "./ActivityCard.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ActivityCard({ name, img, desc, delay }) {
    const [show, setShow] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        setTimeout(() => setShow(true), delay)
    }, [])

    return <Card className={`activity-card ${show ? "show" : ""}`} style={{width: "300px", position: "relative"}} onClick={() => nav(`/${name}`)}>
            <div style={{backgroundImage: `url(/p22/activities/activityImages/${img.src})`}}>
                <h2>{name}</h2>
            </div>
            <p style={{margin:"auto", padding: "20px"}}>
                {desc}
            </p>
        </Card>
}