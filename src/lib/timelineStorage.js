const STORAGE_KEY = 'keenkeeper-timeline';

export function getTimelineEntries() {
  if (typeof window === 'undefined') return [];

  try {
    const storedEntries = window.localStorage.getItem(STORAGE_KEY);
    return storedEntries ? JSON.parse(storedEntries) : [];
  } catch {
    return [];
  }
}

export function addTimelineEntry(entry) {
  if (typeof window === 'undefined') return;
  const entries = getTimelineEntries();
  const updatedEntries = [entry, ...entries];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
}

export function getFilteredEntries(filterType = 'all') {
  const entries = getTimelineEntries();
  if (filterType === 'all') return entries;
  return entries.filter((entry) => entry.type === filterType);
}

export function getInteractionCounts() {
  const entries = getTimelineEntries();

  return [
    { name: 'Call', value: entries.filter((entry) => entry.type === 'call').length },
    { name: 'Text', value: entries.filter((entry) => entry.type === 'text').length },
    { name: 'Video', value: entries.filter((entry) => entry.type === 'video').length }
  ];
}