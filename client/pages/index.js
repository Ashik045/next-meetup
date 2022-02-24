import MeetupList from '../components/MeetupList/MeetupList'

 function Home({meetupList}) {
  return (
    <div>
      <MeetupList meetups={meetupList} />
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:4000/api/meetups`)
  const meetupList = await res.json()

  // Pass meetupList to the page via props
  return { props: { meetupList } }
}

export default Home