import MeetupList from "../components/meetups/MeetupList"


const DUMY_MEETUPS = [
    {
        id:'1',
        title:"Mbabane Corporate Place",
        image:'https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_960_720.jpg',
        address:"Some address",
        description:"This is our First meet up"
    },
    {
        id:'2',
        title:"Manzini Bhunu Malll",
        image:'https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_960_720.jpg',
        address:"Some address",
        description:"This is our Second meet up"
    },
]

function HomePage(props){

    return <MeetupList meetups={props.meetups} />
    
}
export async function getStaticProps() {
    return {
        props:{
            meetups:DUMY_MEETUPS
        },
        revalidate:10
    }
}
// export async function getServerSideProps(){
//     return {
//         props:{
//             meetups:DUMY_MEETUPS
//         }
//     }
// }
export default HomePage