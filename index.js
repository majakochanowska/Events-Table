window.addEventListener('load', () => {
    fetchEvents();
});

async function fetchEvents() {
    const res = await fetch('https://dev.bfund.ovh/api/events/1197');
    const json = await res.json();

    const eventSection = document.getElementById('events');

    json.forEach(event => {
        const el = document.createElement('our-event');
        el.event = event;
        eventSection.appendChild(el);
    })
}
