import type { LucideIcon } from 'lucide-react';

type Props = {
  title: string;
  url: string;
  icon: LucideIcon;
};

const LinkItem = ({ title, url, icon: Icon }: Props) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between w-full px-5 py-4 border border-black dark:border-white rounded-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300 ease-in-out group"
  >
    <div className="flex items-center space-x-3">
      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
      <span className="font-medium">{title}</span>
    </div>
    <span className="text-xs opacity-50 group-hover:opacity-100 transition">↗</span>
  </a>
);

export default LinkItem;
