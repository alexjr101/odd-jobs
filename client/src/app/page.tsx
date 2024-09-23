import PrimaryButton from "@/components/ui-kit/button/PrimaryButton";
import ImageGallery from "@/components/ui-kit/gallery/ImageGallery";
import Heading1 from "@/components/ui-kit/heading/Heading1";

const buildHeroImages = () => {
  const images = []
  for (let i = 0; i < 7; i++) {
    images.push(`/images/hero${i}.png`);
  }
  return images;
}

export default function Home() {

  const heroImages = buildHeroImages();

  return (
    <div>
      <div className="flex flex-col items-center justify-center sm:flex-row">
          <div>
            <Heading1>Odd Jobz</Heading1>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
          <ImageGallery images={heroImages} interval={3}/>
        </div>
    </div>
  );
}
