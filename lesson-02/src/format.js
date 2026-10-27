const GB = 1024 ** 3;

export function formatBytes(bytes) {
  return `${(bytes / GB).toFixed(1)} GB`;
}

export function formatUptime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}
