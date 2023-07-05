import React from 'react'
import "../styles/about.css"
import { Link } from 'react-router-dom'

const About = () => {
	return (
		<>
			<section className='about'>
				<Link to="/"><button>Back to Shopping</button></Link>
				<h1 className='heading_about'>Welcome to <span>MakeOver Sutdio</span>!</h1>
				<div className='content'>
					<h2>Our Story</h2>
					<p>
						MakeOver Studio was founded with a passion for beauty and a vision to create a space where everyone can find the perfect makeup products to enhance their unique features. We understand that every person has their own individual style and preferences, and our goal is to cater to the diverse needs of our customers.
					</p>
				</div>
				<div className='content'>
					<h2>Quality and Innovation</h2>
					<p>We take pride in offering products that are of the highest quality, carefully curated to meet the demands of beauty enthusiasts. We work closely with renowned makeup artists, industry experts, and cosmetic laboratories to ensure that our products meet the highest standards of excellence. Our commitment to innovation means that we are constantly researching and developing new formulas, colors, and textures to bring you the latest trends and breakthroughs in the world of cosmetics.</p>
				</div>
				<div className='content'>
					<p>Thank you for choosing MakeOver Sutdio as your beauty destination. We are dedicated to providing you with exceptional products, expert guidance, and a delightful shopping experience. Get ready to embrace your beauty and unleash your confidence with MakeOver Sutdio!</p>

					<h1><span>MakeOver Sutdio</span> - Unleash Your Inner Glamour!</h1>
				</div>
			</section>
		</>

	)
}

export default About