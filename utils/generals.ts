export function getStatusColor(status: string): string {
  const mapColor = {
    ACTIVE: 'orange',
    COMPLETE: 'green',
    ARCHIVED: 'yellow',
    INACTIVE: 'red',
  };
  return mapColor[status];
}
