import { achievements } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Achievements = () => {
  return (
    <section id="achievements" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-6">
        <TitleHeader
          title="Achievements & Recognition"
          sub="Milestones that shaped my journey"
        />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-16">
          {achievements.map((item, index) => (
            <GlowCard card={item} key={index} index={index}>
              <div className="flex items-start gap-5 p-6">
                <img
                  src={item.imgPath}
                  alt={item.title}
                  className="w-20 h-20 object-contain rounded-xl"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-white-50 mt-2">{item.detail}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
