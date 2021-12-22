import Image from "next/image";
import Layout from "./components/Template";
import Title from "./components/Typography/Title";
import myImage from "../public/images/me.jpeg";

export default function Home() {
  return (
    <Layout>
      <div
        className={`bg-white w-screen h-screen flex justify-center items-center`}
      >
        <div
          className={`bg-image w-full h-full absolute left-16`}
          style={{
            backgroundImage: `url('${myImage.src}')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </Layout>
  );
}
