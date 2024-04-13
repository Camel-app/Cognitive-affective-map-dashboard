export type Daughter = {
    _id?: string;
    participantID: string;
    creationDate: Date;
    cam: string;
    jwt: string;
}

export type Experiment = {
  name: string;
  researcherID: string;
  creationDate: Date;
  cam: string;
  config: string;
  link: string;
  status: string;
  daughters: Daughter[];
}