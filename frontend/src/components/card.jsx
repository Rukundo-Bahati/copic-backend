import Manzi from "../images/user.png";
export default function Cards() {
  return (
    <div
      className="flex  flex-1 flex-col text-center  bg-[#B60418] max-w-[500px] md:w-[500px] p-5 rounded-md max-h-[300px] text-white gap-5 text-wrap"
      style={{ minHeight: "100px", minWidth: "100px" }} 
    >
      <p>
        “ To be honest, Copic became the answer to all Photographers as well as
        their Clients, because it established a tremendous connection that
        didn’t exist before. ”
      </p>
      <div className="flex gap-5">
        <img src={Manzi} alt="" className="w-10 h-10 items-start" />
        <div className="flex flex-col">
            <p>Manzi Felix</p>
            <p>Photographer</p>

        </div>
      </div>
    </div>
  );
}
