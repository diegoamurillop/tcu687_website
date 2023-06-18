import ProjectCard from "../../common/CustomCard/CustomCard";
import { Row, Col } from "react-bootstrap";
import SocialNetworksJPG from "../../assets/img/social_networks.jpg"

function EventList() {

    const projects = [
        {
            img: SocialNetworksJPG,
            tag: "Presencia Digital",
            title: "Redes Sociales",
            description: "El proyecto de Redes Sociales en el TCU 687 tiene como objetivo utilizar las diversas herramientas digitales como lo son Instagram, Facebook, Tiktok y Spotify para poder facilitar información acerca diferentes temáticas que se abordan durante el TCU, y con ello sensibilizar y concientizar a las y los usuarios.",
        },
        {
            img: SocialNetworksJPG,
            tag: "Presencia Digital",
            title: "Redes Sociales",
            description: "El proyecto de Redes Sociales en el TCU 687 tiene como objetivo utilizar las diversas herramientas digitales como lo son Instagram, Facebook, Tiktok y Spotify para poder facilitar información acerca diferentes temáticas que se abordan durante el TCU, y con ello sensibilizar y concientizar a las y los usuarios.",
        },
        {
            img: SocialNetworksJPG,
            tag: "Presencia Digital",
            title: "Redes Sociales",
            description: "El proyecto de Redes Sociales en el TCU 687 tiene como objetivo utilizar las diversas herramientas digitales como lo son Instagram, Facebook, Tiktok y Spotify para poder facilitar información acerca diferentes temáticas que se abordan durante el TCU, y con ello sensibilizar y concientizar a las y los usuarios.",
        },
        {
            img: SocialNetworksJPG,
            tag: "Presencia Digital",
            title: "Redes Sociales",
            description: "El proyecto de Redes Sociales en el TCU 687 tiene como objetivo utilizar las diversas herramientas digitales como lo son Instagram, Facebook, Tiktok y Spotify para poder facilitar información acerca diferentes temáticas que se abordan durante el TCU, y con ello sensibilizar y concientizar a las y los usuarios.",
        },
    ];

    return (
        <Row xs={1} md={3} className="g-4">
            {projects.map((project, key) => (
                <Col key={key}>
                    <ProjectCard img={project.img}
                        tag={project.tag}
                        title={project.title}
                        description={project.description}
                    />
                </Col>
            ))}
        </Row>
    );
}


export default EventList;