import { useContext } from "react";
import ActivityCard from "../activity-menu/ActivityCard";
import { Col, Container, Row } from "react-bootstrap";
import SavedActivitiesContext from "../../contexts/SavedActivitiesContext";

export default function SavedActivities() {
    const [savedActivities, setSavedActivities] = useContext(SavedActivitiesContext);

    const saveActivity = (name) => {
        setSavedActivities(prev => 
            [...prev, activityData.filter(activ => activ.name === name)[0]]
        );
    }

    const unsaveActivity = (name) => {
        setSavedActivities(prev => prev.filter(activ => activ.name !== name));
    }

    const handleActivityMap = () => {
        let count = 1;
        // Interval between each card appearance (ms)
        const interval = 100;
        return savedActivities.map((data) => (
            <Col key={data.name} sm={12} md={6} lg="auto" style={{padding: "10px"}} className="d-flex justify-content-center">
                <ActivityCard {...data} 
                    delay={(count++)*interval} 
                    saveActivity={saveActivity} 
                    unsaveActivity={unsaveActivity}
                    isSaved={true}
                />
            </Col>
        ))
    }
    
    return (
        <Container fluid>
            <Row className="d-flex justify-content-center">
                {
                    savedActivities.length ? handleActivityMap() :
                    <h2>You have no saved activities...</h2>
                }
            </Row>
        </Container>
    )
}