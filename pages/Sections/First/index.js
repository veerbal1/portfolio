import Aos from 'aos';
import 'aos/dist/aos.css';
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
      <SecondaryText
        className="mt-2 text-xl font-bold text-center"
        data-aos="fade-down"
        data-aos-delay="50"
      >
        Front-End UI/UX Developer
      </SecondaryText>
      <SecondaryText data-aos="fade-down" data-aos-delay="100"  data-aos-offset="200">
        Since Dec, 2019
      </SecondaryText>
      <SecondaryText
        className="mt-2 text-xl text-center absolute bottom-0"
        component="div"
      >
        <h4 className="text-sm font-bold">Ideas come from</h4>
        <h4 className="text-lg font-bold">UNKNOWN</h4>
      </SecondaryText>
    </Fullscreen>
  );
};

export default First;
