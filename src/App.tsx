import { Accommodation } from './components/Accommodation';
import { BeautySalons } from './components/BeautySalons';
import { Ceremony } from './components/Ceremony';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { Transport } from './components/Transport';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Ceremony />
      <Accommodation />

      <section className="scroll-mt-20 bg-gray-50 p-8 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <BeautySalons />
            <Transport />
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
