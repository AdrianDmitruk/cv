import { FC } from "react"
// import clever from "../assets/clever.png"
// import inno from "../assets/inno.jpg"
import { AboutMain, Contact, First, Projects, Skills } from "../components"
const Home: FC = () => {
	return (
		<>
			<First />
			{/* <div className='ser'>
				<img className='ser_img' src={clever} alt='clever' />
				<img className='ser_img' src={inno} alt='inno' />
			</div> */}
			<Projects />
			<Skills />
			<AboutMain />
			<Contact />
		</>
	)
}

export default Home
