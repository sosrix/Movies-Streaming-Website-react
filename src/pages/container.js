import homeData from "./homeData.json";
import Homepage from "./Home";

export default function Container() {
  return (
    <Homepage.Container>
      {homeData.map((item) => (
        <Homepage key={item.id} direction={item.direction}>
          <Homepage.Pane>
            <Homepage.Title>{item.title}</Homepage.Title>
            <Homepage.SubTitle>{item.subTitle}</Homepage.SubTitle>
          </Homepage.Pane>
          <Homepage.Pane>
            <Homepage.Image src={item.image} alt={item.alt} />
          </Homepage.Pane>
        </Homepage>
      ))}
    </Homepage.Container>
  );
}
