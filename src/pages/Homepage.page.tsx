import { ReactNode } from "react";
import TestResultsBar from "components/TestResultsBar.component";
import { Link } from "react-router-dom";
import GlobalVars from "globals/global.variables";
import ResultSection from "components/ResultSection.component";
import Card from "components/Card.component";
import ThumbnailCard from "components/ThumbnailCard.component";

interface Props {}

function Homepage(): ReactNode {
  return (
    <main className="w-full h-full flex flex-col py-8 px-9">
      <h1 className="font-dm text-accent-1 capitalize text-h1 font-bold">dashboard</h1>
      <div className="grid grid-cols-2 grid-rows-2 p-3 gap-3 w-full h-full ">
        <Card className="grid place-items-center">
          <p className="font-dm text-h2 text-black opacity-50">There are no upcoming lectures</p>
        </Card>
        <Card className="flex flex-col">
          <h1 className="text-h1 font-dm text-center pt-8 text-black font-bold">Average test scores</h1>
          <ResultSection percent={GlobalVars.user.avgScores.overall} radius={86} frameSize={200} className="w-min self-center" strokeWidth={8} />
          <div className="flex justify-evenly pb-8">
            <ResultSection percent={GlobalVars.user.avgScores.maths} radius={39} frameSize={90} text="Maths" />
            <ResultSection percent={GlobalVars.user.avgScores.english} radius={39} frameSize={90} text="English" />
            <ResultSection percent={GlobalVars.user.avgScores.reasoning} radius={39} frameSize={90} text="Reasoning" />
            <ResultSection percent={GlobalVars.user.avgScores.computer} radius={39} frameSize={90} text="Computer" />
          </div>
          <Link to={GlobalVars.routes.pages.mockTest} className="pb-8 pr-8 text-right text-black underline hover:text-black hover:opacity-40">
            See detailed report
          </Link>
        </Card>
        <ThumbnailCard
          images={[
            { quality: "maxres", videoId: "PYkBS-R95rQ" },
            { quality: "hq", videoId: "FhxMLb4fmqo" },
            { quality: "maxres", videoId: "giZYpvfpQK4" },
          ]}
          heading="view recorded lectures"
        />
        <ThumbnailCard
          images={[
            { quality: "maxres", videoId: "PYkBS-R95rQ" },
            { quality: "hq", videoId: "FhxMLb4fmqo" },
            { quality: "maxres", videoId: "giZYpvfpQK4" },
          ]}
          heading="view recorded lectures"
        />
      </div>
    </main>
  );
}

export default Homepage;
