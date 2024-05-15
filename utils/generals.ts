export function getStatusColor(status: string): string {
  const mapColor = {
    ACTIVE: 'orange',
    COMPLETE: 'green',
    ARCHIVED: 'yellow',
    INACTIVE: 'red',
  };
  return mapColor[status];
}

export function copyToClipboard(experimentId: string, link: string) {
  const url =
    'SOURCE-URL' + link + 'participants/getOneExperiment?id=' + experimentId + '&participantID=';
  console.log(url);
  navigator.clipboard.writeText(url);
}
