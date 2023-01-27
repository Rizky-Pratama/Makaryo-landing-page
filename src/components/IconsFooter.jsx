import { Icon } from "@iconify/react";

function IconsFooter() {
  return (
    <div className="flex gap-4 text-black">
      <Icon className="rounded-lg bg-white shadow-md shadow-primary/40" icon="bxl:facebook" width="28" />
      <Icon
        className="p-1 rounded-lg bg-white shadow-md shadow-primary/40"
        icon="bxl:linkedin"
        width="28"
      />
      <Icon
        className="p-1 rounded-lg bg-white shadow-md shadow-primary/40"
        icon="bxl:instagram"
        width="28"
      />
      <Icon
        className="p-1 rounded-lg bg-white shadow-md shadow-primary/40"
        icon="bxl:youtube"
        width="28"
      />
      <Icon
        className="p-1 rounded-lg bg-white shadow-md shadow-primary/40"
        icon="bxl:twitter"
        width="28"
      />
    </div>
  );
}
export default IconsFooter;
