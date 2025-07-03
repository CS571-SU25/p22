import { Row, Container, Col } from "react-bootstrap"
import ActivityCard from "./ActivityCard";
import { useEffect, useState } from "react";

export default function ActivityMenu() {
    const [activityData, setActivityData] = useState([]);

    const handleActivityMap = () => {
        let count = 1;
        let interval = 100;
        return activityData.map((data) => (
            <Col key={data.name} sm={12} md={6} lg={4}>
                <ActivityCard {...data} delay={(count++)*interval}/>
            </Col>
            
        ))
    }

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("/p22/activityData.json");
            const data = await res.json();
            console.log(data);
            setActivityData(data);
        }
        getData();
    }, [])

    return <Container>
        <Row>
            {
                activityData.length === 0 ? <p>Nothing here...</p> :
                handleActivityMap()
            }
        </Row>
    </Container>
}