import EventList from "../../components/EventList/EventList";
import Headline from "../../common/Headline/Headline";

function EventPage() {

    return (
        <div className="event-page">
            <Headline
                title="Eventos"
                supportText="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium."
            />
            <section id="event-page__events" className="event-page__events container">
                <EventList />
            </section>
        </div>

    )
}

export default EventPage;
