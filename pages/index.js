import Image from 'next/image';
import Layout from '../components/Template/index';

export default function Home() {
  return (
    <Layout>
      <div
        className={`bg-white w-screen h-screen flex justify-center items-center`}
      >
        <h1>Hello People
        </h1>
      </div>
    </Layout>
  );
}
