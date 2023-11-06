

const FormInput = () => {
  return (
    <div className="font-bold tracking-[-0.21px] flex flex-col gap-[9px]">
      <label htmlFor="name" className="text-[1.2rem] capitalize">
        name
      </label>
      <input
        type="text"
        placeholder="insert your name"
        className="border-[1px] rounded-[8px] border-customGray py-[1.8rem] px-[2.4rem] text-[1.4rem] focus:border-primary placeholder:text-customGray caret-primary outline-none"
        required
      />
    </div>
  );
};

export default FormInput;
