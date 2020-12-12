import React, { useState } from "react";
import {
    StyledButton,
    StyledSection,
    StyledText,
    ItemsWrapper,
    Container,
} from "./Home.styled";
import { CardItems } from "./CardItems";
import HeroPicture from "../../images/lumens-main.jpg";
import ImageLamp1 from "../../images/mid-century.jpg";
import ImageLamp2 from "../../images/new-traditional.jpg";
import ImageLamp3 from "../../images/industrial.jpg";
import ImageLamp4 from "../../images/pendants.jpg";
import ImageLamp5 from "../../images/desk-lamps.jpg";
import ImageLamp6 from "../../images/floor-lamps.jpg";
const data = [
    {
        title: "Mid-Century must haves",
        text: "This signature style never goes out of fashion.",
        image: ImageLamp1,
        price: 715,
    },
    {
        title: "The New Traditional",
        text: "Strike a balance with this blended look.",
        image: ImageLamp2,
        price: 540,
    },
    {
        title: "Industrial Modern Lighting",
        text: "Rustic restoration style with an urban edge.",
        image: ImageLamp3,
        price: 1610,
    },
    {
        title: "Pendants",
        text: "The jewels of any lighting scheme.",
        image: ImageLamp4,
        price: 610,
    },
    {
        title: "Table & Desk Lamps",
        text: "We've got every task covered.",
        image: ImageLamp5,
        price: 810,
    },
    {
        title: "Floor Lamps",
        text: "Time-tested practicality, modern style.",
        image: ImageLamp6,
        price: 1310,
    },
];

const Home = () => {
    const [showAll, setShowAll] = useState(false);
    return (
        <Container>
            <StyledSection>
                <img src={HeroPicture} alt="lamp in room" />
                <StyledText>
                    <h2>Lamp Shop is Modern Like You.</h2>
                    <p>
                        At Lamp Shop, we love to help you find the just-right
                        pieces that show off your personal style, indoors and
                        out. Discover our extensive selection of modern designs
                        that will help you find the look that makes your home as
                        modern as you are.
                    </p>
                </StyledText>
            </StyledSection>
            <ItemsWrapper>
                {showAll ? (
                    <CardItems items={data} />
                ) : (
                    <CardItems items={data.slice(0, 3)} />
                )}
            </ItemsWrapper>
            <StyledButton onClick={() => setShowAll(!showAll)}>
                {!showAll ? <>Show More</> : <>Show Less</>}
            </StyledButton>
        </Container>
    );
};

export default Home;
