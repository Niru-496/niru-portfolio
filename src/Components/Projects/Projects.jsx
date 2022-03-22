import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
	ProjectDiv,
	Row,
	ServiceBox,
	ServiceBoxHeader,
	ServiceBoxP,
	A,
	BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
const Projects = () => {
	const projects = [
		{
			id: 2,
			project_name: "tata-Mg1-clone",
			image: "/project_images/tata1.jpg",
			project_desc:
				"This is the clone of TATA 1mg website. A web application to buy medicines and health products. This is our team collaboration project at Full Stack-development bootcamp in Masai School.",
			deploy_link: "https://tata-mg1-clone-amber.vercel.app/",
			repo_link: "https://github.com/rohan688/tata-Mg1-clone",
			tech_stack: [
				<SiMongodb />,
				<FaNodeJs />,
				<FaJs />,
				<FaHtml5 />,
				<FaCss3 />,
			],
		},
		{
			id: 4,
			project_name: "JIO-Mart- Clone",
			image: "/project_images/jio1.jpg",
			project_desc:
				"In this project we have tried to make a look alike clone of Jio-Mart Website. With our efforts and the technology stack like JS, CSS and HTML, we were able to clone the front end with similar looks and features.",
			deploy_link: "https://jio-mart-clone.vercel.app/",
			repo_link: "https://github.com/jibi966/JioMart-clone",
			tech_stack: [
				<SiMongodb />,
				<FaNodeJs />,
				<FaHtml5 />,
				<FaCss3 />,
				<FaJs />,
			],
		},
	];

	return (
		<Container className="projects">
			<ProjectDiv>
				<Common>
					<H1>Projects</H1>
				</Common>
				<Row>
					{projects.map((item) => (
						<BoxDiv key={item.id}>
							<ServiceBox>
								<img
									src={item.image}
									alt="icon"
									style={{ width: "100%" }}
								/>
								<div style={{ margin: "15px" }}>
									<ServiceBoxHeader
										style={{ textAlign: "center" }}
									>
										{item.project_name}
									</ServiceBoxHeader>
									<ServiceBoxP>
										{item.project_desc}
									</ServiceBoxP>
									{/* <a href="">Read more</a> */}
									<div
										style={{
											margin: "15px 20px",
											display: "flex",
											justifyContent: "center",
										}}
									>
										{item.tech_stack.map((item) => (
											<div className="iconsTechStack">
												{item}
											</div>
										))}
									</div>
									<A
										href={item.repo_link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaGithub /> Code
									</A>
									<A
										href={item.deploy_link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaLink /> Demo
									</A>
								</div>
							</ServiceBox>
						</BoxDiv>
					))}
				</Row>
			</ProjectDiv>
		</Container>
	);
};

export default Projects;
