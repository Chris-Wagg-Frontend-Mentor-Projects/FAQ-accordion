export default function Home() {
	return (
		<main>
			<div className='faq-container'>
				<div className='title-container'>
					<img src='icon-star.svg' alt='' role='none' />
					<h1>FAQs</h1>
				</div>
				<details>
					<summary>
						{`What is Frontend Mentor, and how will it help me?`}
						<img src='icon-plus.svg' alt='' role='none' />
					</summary>
					<p>
						{`Frontend Mentor offers realistic coding challenges to
						help developers improve their frontend coding skills
						with projects in HTML, CSS, and JavaScript. It's
						suitable for all levels and ideal for portfolio
						building.`}
					</p>
				</details>
				<details>
					<summary>
						{`Is Frontend Mentor free?`}
						<img src='icon-plus.svg' alt='' role='none' />
					</summary>
					<p>
						{`Yes, Frontend Mentor offers both free and premium coding
						challenges, with the free option providing access to a
						range of projects suitable for all skill levels.`}
					</p>
				</details>
				<details>
					<summary>
						{`Can I use Frontend Mentor projects in my portfolio?`}
						<img src='icon-plus.svg' alt='' role='none' />
					</summary>
					<p>
						{`Yes, you can use projects completed on Frontend Mentor
						in your portfolio. It's an excellent way to showcase
						your skills to potential employers!`}
					</p>
				</details>
				<details>
					<summary>
						{`How can I get help if I'm stuck on a challenge?`}
						<img src='icon-plus.svg' alt='' role='none' />
					</summary>
					<p>
						{`The best place to get help is inside Frontend Mentor's
						Discord community. There's a help channel where you can
						ask questions and seek support from other community
						members.`}
					</p>
				</details>
			</div>
		</main>
	)
}
