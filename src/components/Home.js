import Header from "./Navbar/Header";
import Profile from './Profile';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';

function Home() {
		return (
			<section>
				<Header />
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<About />
							<Skills />
							<Experience />
							<Education />
							<Portfolio />
						</div>
					</div>
				</div>
			</section>
		);
}
export default Home;
