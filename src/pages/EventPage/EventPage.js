import Headline from "../../components/common/Headline/Headline";
import eventsJSON from "../../data/events.json";
import CardList from "../../components/common/CardList/CardList";
import "./EventPage.css"

function EventPage() {

    return (
        <div className="event-page">
            <Headline
                title="Eventos"
                supportText="Conoce los eventos que hemos realizado en el pasado y los que estamos realizando actualmente."
            />
            <section id="event-page__events" className="event-page__events container" data-aos="fade-up">
                <CardList cards={eventsJSON.events} />
            </section>

        </div>
    )
}

export default EventPage;
