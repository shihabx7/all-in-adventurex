import FaqList from "../faqComps/FaqList";
import TitleSeparator from "../util/TitleSeparator";
const GameFaq = (props) => {
  return (
    <div
      id="game-faq"
      className="all-faq relative bg-black py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px]"
      style={{
        backgroundPosition: "bottom center,center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="gift-lt max-w-[72px] md:max-w-[120px] lg:max-w-[130px] opacity-[0.4] absolute top-0 left-0">
        <img className="w-full" src="/assets/faq-q.png"></img>
      </div>
      <div className="gift-rt absolute">
        <img src="/assets/Compas-brown.png"></img>
      </div>
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-8 md:mb-12">
          <TitleSeparator
            title="HAVE QUESTIONS ABOUT HOW THE GAME SHOW WORKS? "
            color="golden-text"
            weight="font-bold"
          />
          <p className="mt-4 text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg">
            No worries. Your professional game host will explain the rules
            before each game, emcee all game questions, and enthusiastically
            guide playing contestants through a series of fun challenges until a
            winner is revealed at the end of the show. Here are the FAQs.
          </p>
        </div>
        <div className="gift-faq-box max-w-[1000px] mx-auto">
          <FaqList faqlist={props.faqlist} />
        </div>
      </div>
    </div>
  );
};

export default GameFaq;
