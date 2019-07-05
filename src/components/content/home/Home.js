import React, { Component} from "react";
import './Home.css';


class Home extends Component {
	render() {
		return(
			<div>
			 	{/*<!-- Banner Section Start -->*/}
			 	<section className="banner_section py-5">
			 		<div className="container">
				 		<div className="row">
				 			<div className="col-12 col-sm-6 mt-5">
							 <img className="img-fluid mb-5" src="assets/images/home_image1.png" alt="Our Main Services" />
							 </div>
				 			<div className="col-12 col-sm-6">
				 				<h1 className="main_heading mb-3 text-primary">We Create <br />Web Interfaces <br />Development</h1>
				 				<p className="mb-4">We seek out like-minded companies that share our hunger for success and empower them with cutting-edge technology.</p>
				 				<p className="mb-4">Talk to us today and together we’ll build the technology of your tomorrow.</p>
				 				<a href="#contactus" className="btn btn-primary btn-lg rounded-pill py-3 px-5 mb-5">Get in touch</a>
				 			</div>
				 		</div>
			 		</div>
			 	</section>
			 	{/*<!-- Banner Section End -->*/}

			 	{/*<!-- Section 2 Start-->*/}
			 	<section className="section_2 bg-light py-5">
			 		<div className="container">
			 			<div className="row">
				 			<div className="col text-center mb-5">
				 			  <h5 className="section_heading">About Us</h5>
				 			  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
				 			</div>
				 		</div>
				 		<div className="row">
				 			<div className="col">

								{/*<!-- Card With Right Icon --*>*/}
								<div className="card mb-3 card_with_icon1 right_icon position-relative py-4 border-0 rounded rounded-2">
								    <div className="card-icon position-absolute rounded-circle text-white text-center py-3">
								      <i className="fas fa-cloud"></i>
								    </div>
								      <div className="card-body">
								        <h5 className="card-title font-weight-bold">Super Fast Services</h5>
								        <p className="card-text mb-0">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								      </div>
								</div>

								{/*<!-- Card With Right Icon -->*/}
								<div className="card mb-3 card_with_icon1 right_icon position-relative py-4 border-0 rounded rounded-2">
								    <div className="card-icon position-absolute rounded-circle text-white text-center py-3">
								      <i className="fas fa-cloud"></i>
								    </div>
								      <div className="card-body">
								        <h5 className="card-title font-weight-bold">Super Fast Services</h5>
								        <p className="card-text mb-0">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								      </div>
								</div>					
				 			</div>
				 			<div className="col">
				 					 			 	
				 			 	{/*<!-- Card With Left Icon -->*/}
								<div className="card mb-3 card_with_icon1 position-relative py-4 border-0 rounded rounded-2">
								    <div className="card-icon position-absolute rounded-circle text-white text-center py-3">
								      <i className="fas fa-cloud"></i>
								    </div>
								      <div className="card-body">
								        <h5 className="card-title font-weight-bold">Super Fast Services</h5>
								        <p className="card-text mb-0">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								      </div>
								</div>

				 			 	{/*<!-- Card With Left Icon -->*/}
								<div className="card mb-3 card_with_icon1 position-relative py-4 border-0 rounded rounded-2">
								    <div className="card-icon position-absolute rounded-circle text-white text-center py-3">
								      <i className="fas fa-cloud"></i>
								    </div>
								      <div className="card-body">
								        <h5 className="card-title font-weight-bold">Super Fast Services</h5>
								        <p className="card-text mb-0">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								      </div>
								</div>

				 			</div>
				 		</div>
				 	</div>
			 	</section>
			 	{/*<!-- Section 2 end -->*/}
			 
			 	{/*<!-- Section 3 Start -->*/}
			 	<section className="section_3 bg-secondary text-center text-white py-5">
			 		<div className="container">
			 			<div className="row">
				 			<div className="col mb-5">
				 			  <h5 className="section_heading2">MORE THAN 12,000 WEBSITES TRUSTED HOSTED</h5>
				 			</div>
				 		</div>
				 		<div className="row">
				 			<div className="col-12 col-sm-6 col-md-3">
				 				<div className="counts_number text-bold">12,000</div>
				 				<div className="counts_text">CMS Installation</div>		 				
				 			</div>
				 			<div className="col-12 col-sm-6 col-md-3">
				 				<div className="counts_number text-bold">12,000</div>
				 				<div className="counts_text">CMS Installation</div>		 				
				 			</div>
				 			<div className="col-12 col-sm-6 col-md-3">
				 				<div className="counts_number text-bold">12,000</div>
				 				<div className="counts_text">CMS Installation</div>		 				
				 			</div>
				 			<div className="col-12 col-sm-6 col-md-3">
				 				<div className="counts_number text-bold">12,000</div>
				 				<div className="counts_text">CMS Installation</div>		 				
				 			</div>
				 		</div>
				 	</div>
			 	</section>
			 	{/*<!-- Section 3 End -->*/}


			 	{/*<!-- Section 4 Start -->*/}
			 	<section className="section_4 py-5">
			 		<div className="container">
			 			<div className="row">
				 			<div className="col-12 col-md-6 mb-5">
				 				<img className="img-fluid mb-5" src="assets/images/hww_img1.png" alt="Our Main Services" />
				 			  <h5 className="section_heading">What We Can Do</h5>
				 			  <p>We are a passionate, results-oriented website design, app development, graphics designer and blockchain user in India . We deliver end-to-end website design, app development, graphic design solutions that are focused on client goals and objectives. From strategy and design to graphic design and app development, our team of specialists delivers client success on every project assigned. We will help you exceed your expectations.</p>
				 			</div>
				 			<div className="col-12 col-md-6">
				 				 <div className="row">
				 				 	<div className="col-12 col-sm-6">
			 				 			{/*<!-- Card code start here -->*/}
										<div className="card mb-5 card_with_icon2 pt-3">
											<div className="card-icon rounded-circle mx-auto text-center text-white py-3">
										 		<i className="fab fa-php"></i>
											</div>
											<div className="card-body text-center">
												<h5 className="card-title font-weight-bold">Web Develpoment</h5>
												<p className="card-text mb-0">We provide Fast turnaround time with Best quality at reasonable price. We create static websites, WordPress, Joomla, Drupal, CMS, Custom Programming etc. Professional creative web design at affordable price.</p>
									      	</div>
										</div>
										{/*<!-- Card code start End Here -->*/}
				 				 	</div>
				 				 	<div className="col-12 col-sm-6">
			 				 			{/*<!-- Card code start here -->*/}
										<div className="card mb-4 card_with_icon2 pt-3">
											<div className="card-icon rounded-circle mx-auto text-center text-white py-3">
										 		<i className="fab fa-php"></i>
											</div>
											<div className="card-body text-center">
												<h5 className="card-title font-weight-bold">App Develpoment</h5>
												<p className="card-text mb-0">Android or iOS (Iphone, Ipad, Ipod ) Custom application development with high quality and low cost. We have made apps that are featured in many popular review websites. LET'S TALK Contact us to discuss your ideas and concept, and we would love to give you a no obligation free quote for bringing your need to reality.</p>
									      	</div>
										</div>
										{/*<!-- Card code start End Here -->*/}
				 				 	</div>
				 				 		 				 	<div className="col-12 col-sm-6">
			 				 			{/*<!-- Card code start here -->*/}
										<div className="card mb-4 card_with_icon2 pt-3">
											<div className="card-icon rounded-circle mx-auto text-center text-white py-3">
										 		<i className="fab fa-php"></i>
											</div>
											<div className="card-body text-center">
												<h5 className="card-title font-weight-bold">Graphics Design</h5>
												<p className="card-text mb-0">Graphic design is more than just pictures and drawings. It is the art of communication, and problem solving through imagery. Our proven creative graphic design services speak of your brand, thus establishing an instant connection with your customers. Realize your vision for your next design with a digital platform that’s built to perform.</p>
									      	</div>
										</div>
										{/*<!-- Card code start End Here -->*/}
				 				 	</div>
				 				 	<div className="col-12 col-sm-6">
			 				 			{/*<!-- Card code start here -->*/}
										<div className="card mb-4 card_with_icon2 pt-3">
											<div className="card-icon rounded-circle mx-auto text-center text-white py-3">
										 		<i className="fab fa-php"></i>
											</div>
											<div className="card-body text-center">
												<h5 className="card-title font-weight-bold">Blockchain</h5>
												<p className="card-text mb-0">The fever of blockchain seems to take on most of the current industries as we know of, Bitcoin showed us a glimpse of a world without banks and financial institutions. We work with blockchain to provide our customers with more security and new technology.</p>
									      	</div>
										</div>
										 {/*Card code start End Here*/}
				 				 	</div>
				 				 </div>				
				 			</div>
				 		</div>
				 	</div>
			 	</section>
			 	{/* Section 4 End */}
			</div>
		);
	}
}

export default Home;