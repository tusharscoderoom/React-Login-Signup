const Button = ({ name, type, value }) => {
  return (
    <div
      className="w-full mt-8 md:mt-6 btn bg-[#5052ff] text-slate-200 inline-block px-6 py-3 rounded-md mx-auto shadow-md cursor-pointer text-center md:text-[14px]"
      onClick={() => { }}
    >
      {value}
    </div>
  );
};

export default Button;
