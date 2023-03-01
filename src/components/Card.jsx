import locationIcon from '../assets/location-icon.png'

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.imageUrl} alt="Location" />
            <div className="card-info">
                <span className='card-info-location' >
                    <img src={locationIcon} />
                    <p>{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl} target='_blank'>View on Google Maps</a>
                </span>
                <h1>{props.title}</h1>
                <p className="card-info-date"><b>{props.startDate} - {props.endDate}</b></p>
                <p className='card-info-description'>{props.description}</p>
            </div>
        </div>
    )
}