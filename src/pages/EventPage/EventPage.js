import EventList from "../../components/EventList/EventList";
import Headline from "../../common/Headline/Headline";
import BackToTop from "../../common/BackToTop/BackToTop";

function EventPage() {

    return (
        <div className="event-page">
            <Headline
                title="Eventos"
                supportText="Conoce los eventos que hemos realizado en el pasado y los que estamos realizando actualmente."
            />
            <section id="event-page__events" className="event-page__events container">
                <EventList />
            </section>

        </div>
    )
}

export default EventPage;
