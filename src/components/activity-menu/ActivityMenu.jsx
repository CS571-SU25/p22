import { Row, Container, Col } from "react-bootstrap"
import ActivityCard from "./ActivityCard";
import { useContext, useEffect, useState } from "react";
import SavedActivitiesContext from "../../contexts/SavedActivitiesContext";
import "./ActivityMenu.css"

export default function ActivityMenu() {
    const [activityData, setActivityData] = useState([]);
    const [savedActivities, setSavedActivities] = useContext(SavedActivitiesContext);

    const handleActivityMap = () => {
        let count = 1;
        // Interval between each card appearance (ms)
        const interval = 100;
        return activityData.map((data) => (
            <Col key={data.name} sm={12} md={6} lg="auto" style={{padding: "10px"}} className="d-flex justify-content-center">
                <ActivityCard {...data} 
                    delay={(count++)*interval}
                    saveActivity={saveActivity} 
                    unsaveActivity={unsaveActivity} 
                    isSaved={savedActivities.some(act => act.name === data.name)}
                />
            </Col>
        ))
    }

    const saveActivity = (name) => {
        setSavedActivities(prev => 
            [...prev, activityData.filter(activ => activ.name === name)[0]]
        );
    }

    const unsaveActivity = (name) => {
        setSavedActivities(prev => prev.filter(activ => activ.name !== name));
    }

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("/p22/activities/activityData.json");
            const data = await res.json();
            console.log(data);
            setActivityData(data);
        }
        getData();
    }, [])

    // TODO: Make UI look a little cleaner (e.g. border, background, margin)
    return <Container fluid className="mt-4 px-4">
        <Row className="d-flex justify-content-center menu" style={{marginTop: "4rem"}}>
            {
                handleActivityMap()
            }
        </Row>
    </Container>
}