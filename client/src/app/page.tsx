import PrimaryButton from "@/components/ui-kit/button/PrimaryButton";

export default function Home() {
  return (
    <div>
      <div className="bg-contain h-screen">
          <h1 className="font-extrabold text-6xl">Odd Jobz</h1>
          <PrimaryButton>Get Started</PrimaryButton>
          <img src="/images/hero0.png" className="rounded"/>
        </div>
    </div>
  );
}
