import Greeting from '../component/Greeting'
const Profile = () => {
  return (
    <div>
      <Greeting name="PARN" msg="Hello" isLoggedIn={true} />
    </div>
  )
}

export default Profile
