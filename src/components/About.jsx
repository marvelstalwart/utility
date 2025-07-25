import Section from "./Section";
import scroll from "../assets/icons/scroll.svg"
import bonkImg from "../assets/img/dog.PNG"
const bgscroll = `url(${scroll})`
const About = () => (
  <section className="bg-black">
    <section delay={0.2} className="flex w-full flex-wrap  justify-center items-center ">
    <div>
      <h2 className="text-2xl font-bold font-designer bg-gradient-to-r from-white to-[#808080] bg-clip-text text-transparent text-center">About UTILITYCOIN</h2>
      <img className="md:w-[20rem]" src={bonkImg}/>
    </div>
    
         <div className="bg-no-repeat w-[35rem]  md:w-[20rem]  lg:w-[25rem] h-[38rem] relative" style={{backgroundImage: bgscroll}}>
          <div className="absolute top-0 px-20 py-20 md:py-12">

                      <p className="text-sm leading-6    md:leading-3.5 lg:leading-4 lg:text-lg xl:leading-5 max-w-3xl mx-auto">
       Utility Coin is what happens when a memecoin gets tired of being laughed at and starts being laughed with. We’ve embraced the chaos of crypto culture — then strapped it to a working engine. There’s still hype, still memes, still a frog in a spacesuit somewhere… but now there’s also utility you can explain to your dad (kinda). Want staking? We’ve got it. Want memes? We are the meme. Welcome to the future of ironic functionality.
      </p>
  
          </div>
    

      </div>

    </section>
  </section>
);

export default About;
