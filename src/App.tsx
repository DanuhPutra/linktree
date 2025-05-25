import { Globe, Github, Linkedin, Instagram, Youtube, Facebook, Link2, } from 'lucide-react';
import ProfileCard from './components/profile-card';
import LinkItem from './components/link-item';
import ParticleBackground from './components/particle-background';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center py-10 px-4 space-y-6">
        <div className="w-full max-w-md space-y-6">
          <ProfileCard
            name="Ngurah Danuh Putra"
            username="@Nanuuu"
            avatarUrl={`${import.meta.env.BASE_URL}images/profile.png`}
          />
          <div className="space-y-4">
            <LinkItem title="Portfolio Website" url="https://danuhputra.github.io/Portfolio/" icon={Globe} />
            <LinkItem title="GitHub" url="https://github.com/DanuhPutra" icon={Github} />
            <LinkItem title="LinkedIn" url="https://www.linkedin.com/in/ngurah-danuh-putra-a3891230a/" icon={Linkedin} />
            <LinkItem title="Instagram" url="https://www.instagram.com/danuhputra/" icon={Instagram} />
            <LinkItem title="YouTube" url="https://www.youtube.com/@GladiatorsHao" icon={Youtube} />
            <LinkItem title="Facebook" url="https://www.facebook.com/ngurahdanuhputra.ngurahdanuhputra/" icon={Facebook} />
            <LinkItem title="Netlify" url="https://app.netlify.com/teams/ngurahdanuhputra/projects" icon={Link2} />
            <LinkItem title="Jobstreet" url="https://id.jobstreet.com/id/profile/ngurahdanuh-putra-pL7vVDGhvw" icon={Globe} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;