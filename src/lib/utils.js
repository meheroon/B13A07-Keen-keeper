export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function getStatusStyles(status) {
  switch (status) {
    case 'overdue':
      return 'bg-red-500 text-white border-red-500';
    case 'almost due':
      return 'bg-amber-400 text-white border-amber-400';
    default:
      return 'bg-[#255845] text-white border-[#255845]';
  }
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatDateLong(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}