import dummySeed from "./dummySeed";
import BrowsePage from "./browseCompound";

// Browse page - magasine for the last movies added to the website

export default function Browse() {
  return (
    <BrowsePage.Container>
      {dummySeed.map((item) => (
        <BrowsePage key={item.id}>
          <BrowsePage.Segment>
            <BrowsePage.Image src={item.image} alt={item.alt} />{" "}
            <BrowsePage.Title>{item.title}</BrowsePage.Title>
          </BrowsePage.Segment>
        </BrowsePage>
      ))}
    </BrowsePage.Container>
  );
}
