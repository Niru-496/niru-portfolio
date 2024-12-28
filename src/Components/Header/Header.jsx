import React from "react";
import { HeaderContent, H1, P, A, HeaderButtons } from "./Styles";
import { Container } from "../../SharedStyles/SharedStyles";
import { Link } from "react-scroll";
import "./typing.css";

const Banner = () => {
  return (
		<Container className="home">
			<HeaderContent>
				<div>
					<br />
					<H1>Hi 👋 I'm </H1>
					<span>
						<h2 data-text="Niranjan Kumar M">Niranjan Kumar M</h2>
					</span>
					<br />
					<P>An enthusiastic Cybersecurity Professional with a strong set of technical and analytical skills, dedicated to enhancing organizational security. Proficient in SOC monitoring, incident response, and optimizing SIEM tools to create effective and proactive security measures. Passionate about safeguarding digital ecosystems.
					</P>
					<HeaderButtons>
						<A
							target="_blank"
							rel="noreferrer"
							href="/resume/resume.pdf"
						>
							Resume
						</A>
						&nbsp;&nbsp;&nbsp;
						<Link
							activeClass="active"
							to="projects"
							spy={true}
							smooth={true}
							duration={300}
						>
							<A>Projects</A>
						</Link>
					</HeaderButtons>
				</div>
				<br />
			</HeaderContent>
		</Container>
  );
};

export default Banner;
