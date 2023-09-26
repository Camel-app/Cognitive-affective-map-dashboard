import type { NextPage } from "next";
import { Container, Title } from "@mantine/core";
import { useStyles } from "../../public/theme";


const impressum: NextPage = () => {
    
    const { classes } = useStyles();
    return (
        <div>
			<Container>
				<div className={classes.inner}>
					<div className={classes.contentBelowImage}>
						<Title className={classes.title}>Impressum:</Title>
					</div>
				</div>
				<div className={classes.inner}>
					<div className={classes.contentNextImage}>
						<Title className={classes.subtitle}>Editor:</Title>
					</div>
					<div className={classes.contentNextImage}>
						Albert Ludwig University of Freiburg
						<br></br>
						Psychology Department
						<br></br>
						D-79085 Freiburg
						<br></br>
						Germany
					</div>
				</div>
				The website adheres to the privacy policy of the Institute of Psychology
				of the University of Freiburg, for further information see{" "}
				<a
					key="in our Slack channel"
					href="https://www.psychologie.uni-freiburg.de/impressum-en?set_language=en"
					target="_blank"
				>
					<span className={classes.internalLinks}>
						https://www.psychologie.uni-freiburg.de/impressum-en?set_language=en
					</span>
				</a>
			</Container>
		</div>
    );
};

export default impressum;

