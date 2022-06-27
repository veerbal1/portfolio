import Layout from '../components/Template/index';
import First from '../components/Sections/First';
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
