import { Card } from "react-bootstrap";
import "./ActivityCard.css"
import { useEffect, useState } from "react";

export default function ActivityCard({name, img, desc, delay}) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), delay)
    }, [])

    return <div style={{padding: "10px"}}>
        <Card className={`activity-card ${show ? "show" : ""}`} style={{width: "300px", position: "relative"}} onClick={() => {location.href = `/p22/${name}`}}>
            <div style={{backgroundImage: `url(${img.src})`}}>
                <h2>{name}</h2>
            </div>
            <p style={{margin:"auto", padding: "20px"}}>
                {desc}
            </p>
        </Card>
    </div>
        
}