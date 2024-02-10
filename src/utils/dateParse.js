export default function dateParse(_date) {
  
  const date = Date.parse(_date);
  const year = new Date(date).getFullYear();
  const day = new Date(date).getDate();
  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);

  const monthName = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(date);

  return `${weekday}, ${monthName} ${day}, ${year}`;
}
