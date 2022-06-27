import Layout from '../components/Template/index';
import First from './Sections/First';
import LanguageSelector from '../components/DropDown/LanguageSelector';
import Context from '../store';

export default function Home() {
  return (
    <Context>
      <Layout>
        <LanguageSelector />
        {/* First Section for name and sub-title */}
        <First />
      </Layout>
    </Context>
  );
}
