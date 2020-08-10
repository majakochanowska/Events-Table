class OurEvent extends HTMLElement {

    /**
     * @param {{ datetime: string; name: string; description: string; }} event
     */

    set event(event) {
        const fullData = new Date(event.datetime);
        const day = fullData.getDate();
        const month = ("0" + (fullData.getMonth() + 1)).slice(-2);
        const year = fullData.getFullYear();
        const days = [
            'niedziela',
            'poniedziałek',
            'wtorek',
            'środa',
            'czwartek',
            'piątek',
            'sobota'
          ];
        const dayName = days[fullData.getDay()];
        const hours = fullData.getHours();
        const minutes = fullData.getMinutes();

        this.innerHTML = `
            <div class='event__date-container'>
                <div class='event__date'><img src='calendar.svg' alt='ikona kalendarza' class='event__calendar'/> <p>${day}/${month}/${year} ${dayName} ${hours}:${minutes}</p></div>
                <div class='event__img'><img src="./icons/${event.type}.svg" alt='ikona ${event.type}'/></div>
            </div>
            <div class='event__name-container'>
                <h3 class='event__title'>${event.name}</h3>
                <div class='event__btn'><button><a href='${event.registration_url}' target='_blank'>Zapisz się</a></button></div>
            </div>
            <div class='event__desc-container'>
                <p>${event.description}</p>
            </div>
        `
    }

}

customElements.define('our-event', OurEvent);