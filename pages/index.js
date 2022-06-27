import Image from 'next/image';
import Layout from '../components/Template/index';
import Title from '../components/Typography/Title';
import { css, cx } from '@emotion/css';
import Fullscreen from '../components/Wrapper/Fullscreen';
import SecondaryText from '../components/Typography/SecondaryTitle';
import First from './Sections/First';
import LanguageSelector from '../components/DropDown/LanguageSelector';

export default function Home() {
  return (
    <Layout>
      <LanguageSelector />
      {/* First Section for name and sub-title */}
      <First />
    </Layout>
  );
}
