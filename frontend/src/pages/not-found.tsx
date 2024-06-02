import { Card } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Card>
        <div className="flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl font-semibold uppercase my-5 text-center">
            Hey, you should not be here!
          </h1>
          <p className="text-2xl text-center">
            Sorry, we couldn't find this <span className="underline">page</span>
          </p>
          <p className="text-xl ">You lost?</p>
          <ArrowDown className="my-4 animate-bounce" />
          <Button>
            <Link className="text-xl font-semibold" to={"/"}>
              Let's cook !
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
