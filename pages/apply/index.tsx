import type { NextPage } from "next";

import { useStyles } from "../../public/theme";
import { Container, Title } from "@mantine/core";


const getInformation: NextPage = () => {

    const { classes } = useStyles();
    return (
        <div>
            <Container>
            <div className={classes.inner}>
                <Title className={classes.title}>
                Thank you for trying out our <br></br> <span className={classes.highlight}>Cognitive Affective Map tools</span>!
                </Title>
            </div>
            
             <Title className={classes.subtitle}>
                Apply for an account:
            </Title>
            
            <div className={classes.inner}>
                If you want to register an account, please send us an E-Mail and provide the following information (copy & paste as a template):
            </div>


         <div className={classes.outerDiv}>
      <ul style={{ marginTop: "20px", marginBottom: "20px" }}>
        <li>First and second name:</li>
        <li>
          Please indicate where are you working (Researcher at University,
          Private Company, Student or Somewhere else):
        </li>
        <li>What is your aim in using Cognitive-Affective Maps:</li>
        <li>Anything to add (do you need any support, remarks, ..):</li>
      </ul>
    </div>

    <div className={classes.inner}>
        <div>
        Write an E-Mail to: <a
          href="mailto:cam.contact@drawyourminds.de"
          style={{
            color: "darkblue",
          }}
        >
          cam.contact@drawyourminds.de
        </a>
        </div>

    </div>
    </Container>
    </div>
    );	
};

export default getInformation;

