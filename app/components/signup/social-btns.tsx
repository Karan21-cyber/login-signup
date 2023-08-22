import { IconType } from "react-icons";

interface ISocialBtns {
  icon: IconType;
  name: string;
  onClick: () => void;
}
function SocialBtns({ name, icon: IconCompnent, onClick }: ISocialBtns) {
  return (
    <div
      className="social-link p-2 md:px-6 py-3 flex gap-2 border border-[#EEEEEE] rounded-[48px] bg-[#FAFAFA]"
      onClick={onClick}
    >
      <IconCompnent size={18} />
      <h3 className="icon-text text-xs font-normal">{name}</h3>
    </div>
  );
}

export default SocialBtns;
