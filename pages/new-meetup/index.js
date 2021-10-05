//our domaun/meetup


import { useRouter } from "next/router"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function NewMeetupPage() {
    const router = useRouter()
    async function addMeetupHandler(enteredMeetuoData){
        //adding Meetup
        const response = await fetch('/api/new-meetups',{
            method:'POST',
            body:JSON.stringify(enteredMeetuoData),
            headers:{'Content-Type':'application/json'}
        })
        const data = await response.json()
        console.log(data)
        router.push('/')
    }
    return <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
    
}

export default NewMeetupPage
