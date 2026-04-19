import HeroContent from '../sub/HeroContent'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <HeroContent />
    </section>
  )
}

export default Hero
