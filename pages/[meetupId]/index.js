
import MeetupDetails from '../../components/meetups/MeetupDetails'
function DetailsPage(props) {
    return (
        <MeetupDetails 
          title = {props.MeetupsData.title}
          description = {props.MeetupsData.description}
          image = {props.MeetupsData.image}
        address = {props.MeetupsData.address}
        />
    )
}

export async function getStaticPaths(){

    return {
        paths:[
            {
                params:{
                    meetupId:'1'
                }
            },
            {
                params:{
                    meetupId:'2'
                }
            }
        ],
        fallback: false
    }
}
export async function getStaticProps(context){
    const meetupId = context.params.meetupId
    console.log(meetupId)
    return{
        props:{
            MeetupsData:{
                id:meetupId,
                title : 'Zulwini',
                description : 'Next to MTN Offices',
                image : 'https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_960_720.jpg',
                address :'Zulwini 123'

            }
        }
    }
}
export default DetailsPage
