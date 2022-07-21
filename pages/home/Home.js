import dummyData from "./dummyData.json";
import SimplePage from "./SimplePage";

export default function Home() {
  return (
    <SimplePage.Container>
      {dummyData.map((item) => (
        <SimplePage key={item.id} direction={item.direction}>
          <SimplePage.Segment>
            <SimplePage.Title>{item.title}</SimplePage.Title>
            <SimplePage.SubTitle>{item.subTitle}</SimplePage.SubTitle>
          </SimplePage.Segment>
          <SimplePage.Segment>
            <SimplePage.Image src={item.image} alt={item.alt} />
          </SimplePage.Segment>
        </SimplePage>
      ))}
    </SimplePage.Container>
  );
}
