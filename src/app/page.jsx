import Image from "next/image";
import { Raleway } from "next/font/google";
import Bounded from "./components/bounded";




const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose the weights you need
});
export default function Home() {
  return (
    <Bounded>
    <div className="flex justify-center items-center" >
      <div>
        <h1 className={`${raleway.className} text-4xl flex justify-center items-center h-screen `}>there is no place like home</h1>

      </div>
      <Image >

      </Image>
    </div>
    </Bounded>
  );
}
