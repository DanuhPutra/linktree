type Props = {
  name: string;
  username: string;
  avatarUrl: string;
};

const ProfileCard = ({ name, username, avatarUrl }: Props) => (
  <div className="flex flex-col items-center">
    <img
      src={avatarUrl}
      alt={name}
      className="w-80 h-80 rounded-full border-4 border-white dark:border-gray-800"
    />
    <h1 className="mt-4 text-xl font-bold">{name}</h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">{username}</p>
  </div>
);

export default ProfileCard;
