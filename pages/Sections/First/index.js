import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import SecondaryText from '../../../components/Typography/SecondaryTitle';
import Title from '../../../components/Typography/Title';
import Fullscreen from '../../../components/Wrapper/Fullscreen';

const First = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <Fullscreen className="flex justify-center items-center flex-col">
      <Title className="text-center" data-aos="fade-down">
        Veerbal <br /> Singh
      </Title>
      <SecondaryText className="mt-4 text-center" component="div">
        <h4 className="text-xl font-bold" data-aos="fade-down" data-aos-delay="50">Ideas come from</h4>
        <h4 className="text-2xl font-bold" data-aos="fade-down" data-aos-delay="500">UNKNOWN</h4>
      </SecondaryText>
    </Fullscreen>
  );
};

export default First;
