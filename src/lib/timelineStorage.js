const STORAGE_KEY = 'keenkeeper-timeline';

const seededTimeline = [
  {
    id: 'seed-1',
    friendId: 10,
    friendName: 'Tom Baker',
    type: 'meetup',
    title: 'Meetup with Tom Baker',
    date: '2026-03-29T10:00:00.000Z'
  },
  {
    id: 'seed-2',
    friendId: 5,
    friendName: 'Sarah Chen',
    type: 'text',
    title: 'Text with Sarah Chen',
    date: '2026-03-28T10:00:00.000Z'
  },
  {
    id: 'seed-3',
    friendId: 6,
    friendName: 'Olivia Martinez',
    type: 'meetup',
    title: 'Meetup with Olivia Martinez',
    date: '2026-03-26T10:00:00.000Z'
  },
  {
    id: 'seed-4',
    friendId: 8,
    friendName: 'Aisha Patel',
    type: 'video',
    title: 'Video with Aisha Patel',
    date: '2026-03-23T10:00:00.000Z'
  },
  {
    id: 'seed-5',
    friendId: 5,
    friendName: 'Sarah Chen',
    type: 'meetup',
    title: 'Meetup with Sarah Chen',
    date: '2026-03-21T10:00:00.000Z'
  },
  {
    id: 'seed-6',
    friendId: 7,
    friendName: 'Marcus Johnson',
    type: 'call',
    title: 'Call with Marcus Johnson',
    date: '2026-03-19T10:00:00.000Z'
  },
  {
    id: 'seed-7',
    friendId: 8,
    friendName: 'Aisha Patel',
    type: 'meetup',
    title: 'Meetup with Aisha Patel',
    date: '2026-03-17T10:00:00.000Z'
  },
  {
    id: 'seed-8',
    friendId: 6,
    friendName: 'Olivia Martinez',
    type: 'text',
    title: 'Text with Olivia Martinez',
    date: '2026-03-13T10:00:00.000Z'
  },
  {
    id: 'seed-9',
    friendId: 3,
    friendName: 'Lisa Nakamura',
    type: 'call',
    title: 'Call with Lisa Nakamura',
    date: '2026-03-11T10:00:00.000Z'
  },
  {
    id: 'seed-10',
    friendId: 5,
    friendName: 'Sarah Chen',
    type: 'call',
    title: 'Call with Sarah Chen',
    date: '2026-03-11T10:00:00.000Z'
  },
  {
    id: 'seed-11',
    friendId: 7,
    friendName: 'Marcus Johnson',
    type: 'video',
    title: 'Video with Marcus Johnson',
    date: '2026-03-06T10:00:00.000Z'
  },
  {
    id: 'seed-12',
    friendId: 9,
    friendName: "Ryan O'Brien",
    type: 'video',
    title: "Video with Ryan O'Brien",
    date: '2026-02-24T10:00:00.000Z'
  }
];

function normalizeEntries(entries) {
  return entries.map((entry) => {
    if (entry.type === 'meetup') return entry;
    return entry;
  });
}

export function getTimelineEntries() {
  if (typeof window === 'undefined') return seededTimeline;

  try {
    const storedEntries = window.localStorage.getItem(STORAGE_KEY);

    if (!storedEntries) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seededTimeline));
      return seededTimeline;
    }

    const parsed = JSON.parse(storedEntries);
    return parsed.length ? normalizeEntries(parsed) : seededTimeline;
  } catch {
    return seededTimeline;
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
    { name: 'Text', value: entries.filter((entry) => entry.type === 'text').length },
    { name: 'Call', value: entries.filter((entry) => entry.type === 'call').length },
    { name: 'Video', value: entries.filter((entry) => entry.type === 'video').length }
  ];
}