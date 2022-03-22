import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
} from "./Styles";

import { Container, H1 } from "../../SharedStyles/SharedStyles";
const socialMediaLinks = [
	{
		id: 0,
		link: "https://www.linkedin.com/in/niranjan-kumar-m-b12a8a178/",
		icon: <FaLinkedin />,
	},
	{
		id: 1,
		link: "https://github.com/Niru-496",
		icon: <FaGithub />,
	},
	{
		id: 2,
		link: "https://www.hackerrank.com/niranjan_fw14_41",
		icon: <FaHackerrank />,
	},
];
const About = () => {
  return (
		<Container className="about">
			<br />
			<AboutDiv>
				<Column>
					<Img src="/images/pic.jpg" alt="my image" />
				</Column>
				<Column>
					<H1>About Me</H1>
					<AboutInfo>
						<AboutInfoP>
							Observant and detail-oriented aspiring full-stack
							developer with a specialization in MERN stack. Self-
							motivated and curious, with a keen interest in
							building user-friendly websites. Looking forward to
							honing my skills in a challenging work environment.
						</AboutInfoP>
						<AboutInfoP>
							Well, I'm good at listening, the flexibility to
							handle changes that occurs in both personal and
							professional life In technical Skills I'm very good
							at advanced javascript. Because of my consistent
							nature, I'm able to manage my time according to
							changes in situations. I am passionate about solving
							Algorithmic problems with a good hold on Data
							Structures.
						</AboutInfoP>
					</AboutInfo>
					<HeaderUl>
						{socialMediaLinks.map((item) => (
							<JelloHori key={item.id}>
								<a
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<HeaderLi>{item.icon}</HeaderLi>
								</a>
							</JelloHori>
						))}
					</HeaderUl>
				</Column>
			</AboutDiv>
			<br />
		</Container>
  );
};

export default About;
