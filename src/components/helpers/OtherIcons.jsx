import { other_plat_links } from "../../static_data/other_plat_links";

const OtherIcons = ({pageName}) => {
  return (
    <div className="flex justify-between items-center my-6 mt-0 sm:mb-2">
          <p className="min-w-fit text-slate-500 text-sm">or {pageName} with</p>
          <div className="sm:flex sm:flex-wrap sm:justify-end">
            {
              other_plat_links.map(item => (
                  item.src
              ))
            }
          </div>
        </div>
  );  
}

export default OtherIcons;