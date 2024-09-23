import PrimaryButton from "@/components/ui-kit/button/PrimaryButton";
import ImageGallery from "@/components/ui-kit/gallery/ImageGallery";
import Heading1 from "@/components/ui-kit/heading/Heading1";
import Paragraph from "@/components/ui-kit/paragraph/Paragraph";

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
    <main className="p-5">
      <div className="flex flex-col items-center justify-center sm:flex-row">
          <div className="w-full text-center pd-1 sm:text-left sm:w-1/2 sm:max-w-96">
            <Heading1>Odd Jobz</Heading1>
            <Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae non corporis, quam voluptatum ex aliquam accusamus corrupti amet, eaque autem possimus cumque voluptas!
            </Paragraph>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
          <ImageGallery images={heroImages} interval={3}/>
        </div>
    </main>
  );
}
