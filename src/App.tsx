import { Github, Link, Linkedin, Globe } from 'lucide-react';
import ProfileCard from './components/profile-card';
import LinkItem from './components/link-item';
import ParticleBackground from './components/particle-background';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Partikel */}
      <ParticleBackground />
      
      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col items-center py-10 px-4 space-y-6">
        <div className="w-full max-w-md space-y-6">
          <ProfileCard
            name="Ngurah Danuh Putra"
            username="@Nanuuu"
            avatarUrl="../public/images/profil.JPG"
          />

          <div className="space-y-4">
            <LinkItem title="Portfolio Website" url="https://johndoe.com" icon={Globe} />
            <LinkItem title="GitHub" url="https://github.com/johndoe" icon={Github} />
            <LinkItem title="LinkedIn" url="https://linkedin.com/in/johndoe" icon={Linkedin} />
            <LinkItem title="My Blog" url="https://johndoe.medium.com" icon={Link} />
            <LinkItem title="My Blog" url="https://johndoe.medium.com" icon={Link} />
            <LinkItem title="My Blog" url="https://johndoe.medium.com" icon={Link} />
            <LinkItem title="My Blog" url="https://johndoe.medium.com" icon={Link} />
            <LinkItem title="My Blog" url="https://johndoe.medium.com" icon={Link} />
            <LinkItem title="My Blog" url="https://johndoe.medium.com" icon={Link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;