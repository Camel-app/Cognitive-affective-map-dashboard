import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<>
			<div className="mb-xl w-full whitespace-pre-line flex flex-col md:text-center md:items-center mx-auto justify-center mb-fluid-sm">
				<p className="text-dark font-bold text-4xl thd-heading-xs mb-fixed-sm">
					Cognitive Affective Maps
				</p>
				<br />
				<div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl w-9/12">
					Think of <span className="text-green">this</span>, connect{" "}
					<span className="text-red">that</span>, and let us map{" "}
					<span className="text-yellow">people's mind</span>
				</div>
				<br />
				<div className="text-2xl w-8/12">
					Uncover the hidden connections, unlock the power of emotions, and
					embark on a journey of discovery with Cognitive Affective Maps.
				</div>
			</div>
			<br></br>
			<br></br>
			<br></br>

			<div className="flex justify-center h-[600px]">
				<div className="rounded-3xl shadow-2xl shadow-orange ">
					<Image
						width={900}
						height={600}
						src="./canvas.png"
						className="rounded-3xl grid"
					/>
				</div>
			</div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<div className="mb-xl w-full whitespace-pre-line flex flex-col md:text-center md:items-center mx-auto justify-center mb-fluid-sm">
				<div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl w-9/12">
					Why using Cognitive Affective Maps?
				</div>
				<br />
				<ul>
				<li className="break-inside-avoid">
						<div>
							<div className="mb-fixed-md flex items-center">
								<span className="h-[44px] w-[44px] mr-16 inline-block flex-shrink-0 items-center justify-center rounded-full">
									<span
										className="block bg-blue rounded-full p-2"
									>
										<svg viewBox="0 0 24 24" fill="none">
											<path
												d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
											fill="green"
											></path>
										</svg>
									</span>
								</span>
								<span className="text-thd-color-green-80 thd-body-md">
									To visually map out the connections
								</span>
							</div>
						</div>
					</li>
					<li className="break-inside-avoid">
						<div>
							<div className="mb-fixed-md flex items-center">
								<span className="h-[44px] w-[44px] mr-16 inline-block flex-shrink-0 items-center justify-center rounded-full">
									<span
										className="block bg-blue rounded-full p-2"
									>
										<svg viewBox="0 0 24 24" fill="none">
											<path
												d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
											fill="green"
											></path>
										</svg>
									</span>
								</span>
								<span className="text-thd-color-green-80 thd-body-md">
								Discover how emotions impact decision-making, problem-solving, and information processing
								</span>
							</div>
						</div>
					</li>
					<li className="break-inside-avoid">
						<div>
							<div className="mb-fixed-md flex items-center">
								<span className="h-[44px] w-[44px] mr-16 inline-block flex-shrink-0 items-center justify-center rounded-full">
									<span
										className="block bg-blue rounded-full p-2"
									>
										<svg viewBox="0 0 24 24" fill="none">
											<path
												d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
											fill="green"
											></path>
										</svg>
									</span>
								</span>
								<span className="text-thd-color-green-80 thd-body-md">
								Uncover the key factors influencing perception and interpretation
								</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</>
		// <div>
		// 	<Container>
		// 		<div>
		// 			<div>
		// 				<h1 className="text-3xl font-bold">
		// 					<span className={classes.highlight}>
		// 						Cognitive Affective Map
		// 					</span>
		// 					Are you ready to unlock the hidden mysteries of the human mind?
		// 					Look no further than Cognitive Affective Maps (CAMs) – a powerful
		// 					tool revolutionizing the field of psychology.
		// 				</h1>
		// 				<Text color="dimmed" mt="md">
		// 					Build fully functional accessible Cognitive Affective Map
		// 					experiments faster than ever!
		// 				</Text>
		// 			</div>
		// 			{/* <Image src={image.src} className={classes.image} /> */}
		// 		</div>
		// 		<div className={classes.inner}>
		// 			<div>
		// 				<List
		// 					mt={30}
		// 					spacing="sm"
		// 					size="sm"
		// 					icon={
		// 						<ThemeIcon size={20} radius="xl">
		// 							<IconCheck size={12} stroke={1.5} />
		// 						</ThemeIcon>
		// 					}
		// 				>
		// 					<List.Item>
		// 						Are you looking for a powerful tool to unlock the mysteries of
		// 						the human mind? Look no further than Cognitive Affective Maps
		// 						(CAMs)! CAMs provide a comprehensive and visual representation
		// 						of the intricate cognitive and affective processes associated
		// 						with a specific concept or topic.
		// 					</List.Item>
		// 					<List.Item>
		// 						With CAMs, researchers and psychologists can gain a deeper
		// 						understanding of the complex relationships between thoughts,
		// 						emotions, and behaviors. By visually mapping out these
		// 						connections, CAMs unveil underlying patterns and structures
		// 						within the mind, allowing you to identify key factors that
		// 						influence perception and interpretation of information.
		// 					</List.Item>
		// 					<List.Item>
		// 						CAMs also highlight the influential role of emotions in
		// 						cognitive processes. By representing the connections between
		// 						thoughts and emotions, CAMs reveal how emotions shape and
		// 						influence cognitive functioning. Imagine grasping how emotions
		// 						impact decision-making, problem-solving, and information
		// 						processing!
		// 					</List.Item>
		// 					<List.Item>
		// 						But CAMs don't stop there. They serve as a powerful tool for
		// 						studying the complexities of human behavior. By mapping out
		// 						relationships between cognitive and affective components, CAMs
		// 						provide a holistic view of how thoughts, emotions, and behaviors
		// 						interact and influence one another. This comprehensive
		// 						understanding can aid in the development of effective
		// 						interventions and therapeutic approaches in psychotherapy.
		// 					</List.Item>
		// 					<List.Item>
		// 						Incorporating CAMs in your research or practice will undoubtedly
		// 						enhance your work in cognitive psychology, emotion research, and
		// 						psychotherapy. Gain a deeper understanding of human perception,
		// 						interpretation, and behavior with CAMs. Uncover the hidden
		// 						connections. Illuminate the power of emotions. Unlock the
		// 						secrets of the mind.{" "}
		// 					</List.Item>
		// 				</List>

		// 				<Group mt={30}>
		// 					<a key="More information" href="/information" target="_self">
		// 						<Button radius="xl" size="md" className={classes.control}>
		// 							More information
		// 						</Button>
		// 					</a>
		// 					<a
		// 						key="Source code"
		// 						href="https://github.com/Camel-app?tab=repositories"
		// 						target="_blank"
		// 					>
		// 						<Button
		// 							variant="default"
		// 							radius="xl"
		// 							size="md"
		// 							className={classes.control}
		// 						>
		// 							Source code
		// 						</Button>
		// 					</a>
		// 				</Group>
		// 			</div>
		// 		</div>
		// 	</Container>
		// </div>
	);
};

export default Home;
