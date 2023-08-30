import {
  Destinations,
  ImageCarousel,
  TestimonialCarousel,
  ContactUsBanner,
  Safaris,
} from "@/components";
import FlightSafaris from "@/components/FlightSafaris";
import MombasaSafaris from "@/components/MombasaSafaris";

const Home = () => {
  return (
    <div className="bg-slate-50">
      <ImageCarousel />
      <ContactUsBanner />
      <Safaris />
      <MombasaSafaris />
      <FlightSafaris />
      <Destinations />
      {/* <TestimonialCarousel /> */}
    </div>
  );
};

export default Home;
