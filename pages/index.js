import Meta from "../components/Meta";


import PhotoText from "../components/PhotoText/PhotoText"
import IpadText from "../components/IpadText/IpadText"
import Services from "../components/Services/Services"
import TextPhoto from "../components/TextPhoto/TextPhoto"
import PhotoTeam from "../components/PhotoTeam/PhotoTeam"

function Home() {
  return (
  
    <React.Fragment>
      <Meta/>
      <PhotoText />
      <IpadText />
      <Services />
      <TextPhoto />
      <PhotoTeam />

    </React.Fragment>

  );
}


export default Home;




