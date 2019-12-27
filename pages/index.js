import Meta from "../components/Meta";


import PhotoText from "../components/PhotoText/PhotoText"
import WorkGallery from "../components/WorkGallery/WorkGallery"
import IpadText from "../components/IpadText/IpadText"
import Services from "../components/Services/Services"
import TextPhoto from "../components/TextPhoto/TextPhoto"
import PhotoTeam from "../components/PhotoTeam/PhotoTeam"
import VideoGallery from "../components/VideoGallery/VideoGallery"
import Footer from "../components/Footer/Footer"

function Home() {
  return (
  
    <React.Fragment>
      <Meta/>
      <PhotoText />
      <WorkGallery />
      <IpadText />
      <Services />
      <TextPhoto />
      <PhotoTeam />
      <VideoGallery />
      <Footer />

    </React.Fragment>

  );
}


export default Home;




