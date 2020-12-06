import React from "react";
import {
    StyledButton,
    StyledSection,
    StyledText,
    ItemsWrapper,
    Container,
} from "./Home.styled";
import HeroPicture from "../../images/lumens-main.jpg";
import ImageLamp1 from "../../images/mid-century.jpg";
import ImageLamp2 from "../../images/new-traditional.jpg";
import ImageLamp3 from "../../images/industrial.jpg";
import CardItem from "../../components/CardItem";
import { RandomCard } from "../../components/CardItem.styled";
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
];

const Home = () => {
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
                {data.map(({ title, text, image, price }, idx) => (
                    <CardItem
                        title={title}
                        text={text}
                        imageSrc={image}
                        price={price}
                        id={idx}
                    />
                ))}
            </ItemsWrapper>
            <StyledButton>Show More</StyledButton>
        </Container>
    );
};

export default Home;
