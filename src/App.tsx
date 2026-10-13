import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickIntakeModal } from './components/QuickIntakeModal';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';
import { HomePage } from './pages/HomePage';
import { ResidencesPage } from './pages/ResidencesPage';
import { LivingOptionsPage } from './pages/LivingOptionsPage';
import { AmenitiesPage } from './pages/AmenitiesPage';
import { ReferralsPage } from './pages/ReferralsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, CalendarCheck } from 'lucide-react';
import { businessData } from './data/businessConfig';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'availability' | 'referral'>('availability');
  const [selectedHome, setSelectedHome] = useState<string>('');

  // Photo Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState({
    src: '',
    title: '',
    subtitle: '',
  });

  // Handle URL hash changes & browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'residences', 'living', 'amenities', 'referrals', 'about', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenIntake = (type: 'availability' | 'referral' = 'availability', homeName: string = '') => {
    setModalType(type);
    setSelectedHome(homeName);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handlePreviewPhoto = (image: string, title: string, subtitle: string) => {
    setLightboxData({ src: image, title, subtitle });
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#14293A] flex flex-col font-sans selection:bg-[#8A1C36]/20 selection:text-[#14293A]">
      {/* Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenIntake={handleOpenIntake}
      />

      {/* Main Dynamic Sub-Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenIntake={handleOpenIntake}
            onPreviewPhoto={handlePreviewPhoto}
          />
        )}

        {currentPage === 'residences' && (
          <ResidencesPage
            onOpenIntake={handleOpenIntake}
            onPreviewPhoto={handlePreviewPhoto}
          />
        )}

        {currentPage === 'living' && (
          <LivingOptionsPage
            onOpenIntake={handleOpenIntake}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'amenities' && (
          <AmenitiesPage
            onPreviewPhoto={handlePreviewPhoto}
            onOpenIntake={handleOpenIntake}
          />
        )}

        {currentPage === 'referrals' && (
          <ReferralsPage
            onOpenIntake={handleOpenIntake}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenIntake={handleOpenIntake}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenIntake={handleOpenIntake}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenIntake={handleOpenIntake}
      />

      {/* Quick Intake & Bed Availability Modal */}
      <QuickIntakeModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultType={modalType}
        defaultHome={selectedHome}
      />

      {/* High-Resolution Photo Lightbox Modal */}
      <PhotoLightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={lightboxData.src}
        title={lightboxData.title}
        subtitle={lightboxData.subtitle}
        onInquire={() => handleOpenIntake('availability', lightboxData.title)}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <aside aria-label="Quick Actions" className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#0F1C2E]/95 backdrop-blur-md border-t border-[#8A1C36]/40 p-2.5 px-4 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={businessData.phone}
          className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-1.5 border border-white/20"
        >
          <Phone className="w-3.5 h-3.5 text-[#E2B6C0]" />
          <span>Call Intake</span>
        </a>
        <button
          type="button"
          onClick={() => handleOpenIntake('availability')}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#8A1C36] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-white" />
          <span>Check Beds</span>
        </button>
      </aside>
    </div>
  );
}

export default App;
