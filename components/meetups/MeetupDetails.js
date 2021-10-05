
import classes from "./MeetupDetails.module.css"
function MeetupDetails({image,title,description,address}) {
    return (
        <div className = {classes.detail}>
            <img src = {image} altr = {title} />
            <h1>{title}</h1>
            <address>{address}</address>
            <p>{description}</p>
        </div>
    )
}

export default MeetupDetails