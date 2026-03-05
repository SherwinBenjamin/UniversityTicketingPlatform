import { useEffect, useMemo, useState } from "react";
import DayImgs from "../../DataList/dayImgs.json";
import { useTypewriter } from "react-simple-typewriter";
import { useTransition, animated, config } from "@react-spring/web";
import "./Home.css";
import { Gallery } from "@/components/Home/Gallery";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Footer from "@/components/Footer/Footer";
import InputForm from "@/components/Home/EmailForm";
function Home() {
  const imgs_name = useMemo(() => {
    return DayImgs.map((img) => img.name);
  }, []);
  const imgs_url = useMemo(() => {
    return DayImgs.map((img) => img.url);
  }, []);

  const [text, helper] = useTypewriter({
    words: imgs_name,
    loop: Infinity,
    typeSpeed: 90,
    deleteSpeed: 90,
    delaySpeed: 3000,
  });

  const { isType, isDelay } = helper;

  useEffect(() => {
    if (isType && !isDelay) {
      setIndex((i) => (i + 1) % imgs_name.length);
    }
  }, [isType, isDelay, imgs_name.length]);

  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  return (
    <div>
      <section className="h-[100svh] lg:h-screen w-screen homeHero ">
        {transitions((style, i) => {
          return (
            <animated.div
              className="bg"
              style={{
                ...style,
                backgroundImage: `url(${
                  imgs_url[(i + imgs_name.length - 1) % imgs_name.length]
                })`,
              }}
            >
              <div className="bg-black/20 w-screen h-screen absolute top-0 left-0" />
              <section className="absolute z-[3] bottom-20 right-0">
                <div className="text-white text-[6rem] lg:text-[15rem] text-right font-bold font-['Noto Sans Tamil','montserrat',sans-serif] w-screen pr-[30px]">
                  {text}
                  <h3 className="text-white text-[2rem] font-['montserrat'] font-bold text-right pt-4  lg:pr-[50px] mt-[-40px]">
                    <span className="text-[2.5rem]   ">14</span>th March -{" "}
                    <span className="text-[2.5rem]   ">17</span>th March, 2024
                  </h3>
                </div>
              </section>
            </animated.div>
          );
        })}
      </section>
      {/* 070717 */}

      <TracingBeam>
        <section className="  relative  ">
          <div className="py-[10rem] w-full dark:bg-black bg-[#070717]  dark:bg-dot-[black] bg-dot-white relative flex items-center justify-center ">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[#070717] [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
            <div>
              <h3 className='font-["montserrat",sans-serif]  font-extrabold text-[#e53a5f] text-[5rem] uppercase text-center    '>
                Excited For MILAN!!
              </h3>
              <InputForm />

              <p className="font-['montserrat'] text-white text-[1.1rem]  font-medium tracking-wider  text-justify pt-[30px] md:w-[60%] m-auto leading-[125%] aboutMilan p-4">
                The SRM Institute of Science and Technology’s Directorate of
                Student Affairs hosts Milan, a National level Cultural Festival.
                Milan is a four-day cultural fest which is a testament to the
                rich tapestry of talent we cultivate, featuring an array of
                cultural competitions that span the spectrum of music, dance,
                fashion, and the arts. This festival is not just a display of
                creativity but also a harmonious convergence of technology and
                tradition, where live concerts and DJ performances meet the zest
                of SRMIST's academic spirit. Our past festivals have seen an
                array of noted celebrities and artists, Kamal Hassan, Tamannah,
                Aditya Roy Kapoor, John Abraham, Vishal-Shekhar, Amit Trivedi,
                Nucleya, Vijay Devarakonda, Jonita Gandhi, Sruti Hassan and
                Nikhil D'Souza.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <Gallery />
        </section>
      </TracingBeam>

      <Footer />
    </div>
  );
}

export default Home;
