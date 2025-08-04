import { Card, Col } from "react-bootstrap"
import "./WeatherCard.css"

export default function WeatherCard({ title, data, unit, style }) {
    return (
        <Col sm={12} md={6}>
            <div style={style} className="weathercard-container">
                <Card className="weathercard" style={{borderRadius: 30}}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{data}{unit}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}