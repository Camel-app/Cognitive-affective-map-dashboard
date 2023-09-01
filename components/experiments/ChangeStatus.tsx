import { useCookies } from "react-cookie";
import { useState } from 'react';
import { Modal, Button } from '@mantine/core';
import ChangeStatusModal from "../modals/ChangeStatusModal";
import { confirmDeleteExperiment, downloadData } from "../../utils/statusFunc";


const ChangeExperimentStatus = (props) => {
    const [opened, setOpened] = useState(false);
    const [cookie, setCookie] = useCookies(["auth"]);

    return (
        <>
            <Modal title="Set the activity:" opened={opened} onClose={() => setOpened(false)}>
                <ChangeStatusModal experimentId={props.experimentId} />
            </Modal>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button variant="outline" onClick={() => setOpened(true)}>Change status</Button>
                <Button variant="outline" onClick={() => confirmDeleteExperiment(props, cookie)} style={{color: "red", borderColor: "red"}}>Delete Experiment</Button>
                <Button variant="outline" onClick={() => downloadData(props, cookie)}>Download data</Button>
            </div>
        </>
    )
}
export default ChangeExperimentStatus;