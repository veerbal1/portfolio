import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useContext, useEffect } from 'react';
import SecondaryText from '../../../components/Typography/SecondaryTitle';
import Title from '../../../components/Typography/Title';
import Fullscreen from '../../../components/Wrapper/Fullscreen';
import { PortFolioContext } from '../../../store';

const First = () => {
  const { globalState } = useContext(PortFolioContext);
  const section = globalState.content.section1[globalState.selectedLanguage];
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <Fullscreen className="flex justify-center items-center flex-col">
      <Title className="text-center" data-aos="fade-down">
        {section.name}
      </Title>
      <SecondaryText
        className="mt-2 text-xl font-bold text-center"
        data-aos="fade-down"
        data-aos-delay="50"
      >
        {section.subTitle}
      </SecondaryText>
      <SecondaryText
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-offset="200"
      >
        {section.since}
      </SecondaryText>
      <SecondaryText
        className="mt-2 text-xl text-center absolute bottom-0"
        component="div"
      >
        <h4 className="text-sm font-bold">{section.quote.first}</h4>
        <h4 className="text-lg font-bold">{section.quote.second}</h4>
      </SecondaryText>
    </Fullscreen>
  );
};

export default First;
