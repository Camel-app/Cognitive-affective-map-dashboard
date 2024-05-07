export interface Node extends d3.SimulationNodeDatum {
  id: string;
  group: string;
  value: number;
  x: number;
  y: number;
}

export interface Link extends d3.SimulationLinkDatum<Node> {
  source: any;
  target: any;
  value: number;
}

export type Data = {
  nodes: Node[];
  links: Link[];
};
