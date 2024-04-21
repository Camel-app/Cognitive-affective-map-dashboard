export type Daughter = {
  _id?: string;
  participantID: string;
  creationDate: Date;
  cam: Cam;
  jwt: string;
};

export type Experiment = {
  name: string;
  researcherID: string;
  creationDate: Date;
  cam: Cam;
  config: string;
  link: string;
  status: string;
  daughters: Daughter[];
};

export type Cam = {
  id: string;
  creator: string;
  date: string;
  nodes: Node[];
  connectors: string;
  [x: string]: any;
};

export type Node = {
  id: string;
  value: number;
  text: string;
  position: {
    x: number;
    y: number;
  };
  isActive: true;
  [x: string]: any;
};
