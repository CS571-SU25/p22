import { Card, Col } from "react-bootstrap"
import "./WeatherCard.css"

export default function WeatherCard({ title, data, unit, style }) {
    return (
        <Col sm={12} md={6} style={{display: "flex", justifyContent: "center"}}>
            <div style={style} className="weathercard-container">
                <Card className="weathercard" style={{borderRadius: "3rem", minWidth: "400px"}}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{data}{unit}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}