import Card from "components/Card.component";
import { ReactNode } from "react";

function LiveSessionsPage(): ReactNode {
  return (
    <div className="p-8 w-full">
      <Card className="w-full h-full grid place-items-center">
        <p className="font-dm text-h2 text-black opacity-50">There are no upcoming lectures</p>
      </Card>
    </div>
  );
}

export default LiveSessionsPage;
