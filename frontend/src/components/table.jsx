import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Full names", "Role", "Date", "Status"];

const TABLE_ROWS = [
  {
    name: "Andy Melvin",
    job: "Client",
    date: "21th, March",
    status: "Accepted",
  },
  {
    name: "Kagabo Jean Damas",
    job: "Client",
    date: "21th, March",
    status: "Pending",
  },
  {
    name: "Ange Vanesa",
    job: "Client",
    date: "20th, March",
    status: "Pending",
  },
  {
    name: "Rudasaswa Thierry",
    job: "Client",
    date: "18th, March",
    status: "Declined",
  },
  {
    name: "Nelly Sunny",
    job: "Client",
    date: "03th, February",
    status: "Declined",
  },
];

export function ProgressTable() {
  return (
    <Card className="h-full w-[96%]  bg-[#0A0B0C] text-white rounded-lg pt-4">
      <div className="flex justify-between items-center px-4 mb-4">
        <Typography variant="h6" color="white">
          Track your Progress
        </Typography>
        <button className="bg-[#850506] flex items-center justify-center text-white py-2 px-4 h-[36px] w-[148px] rounded-[10px]">
          See all
        </button>
      </div>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b pl-4 border-gray-700 bg-[#101011] text-white h-[36px]"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date, status }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast
              ? "pl-4 h-[40px] leading-none"
              : "pl-4 h-[40px] leading-none";

            const statusColor =
              status === "Accepted"
                ? "text-green-500"
                : status === "Pending"
                ? "text-yellow-500"
                : "text-red-500";

            return (
              <tr
                key={name}
                className={`h-[20px] ${index % 2 === 0 ? 'bg-[#141415]' : 'bg-[#101011]'}`}
              >
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal text-[12px]"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal text-[12px]"
                  >
                    {job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal text-[12px]"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className={`font-medium flex items-center gap-2 text-[12px] ${statusColor}`}
                  >
                    {/* Status indicator */}
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${status === "Accepted"
                        ? "bg-green-500"
                        : status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                      }`}
                    ></span>
                    {status}
                  </Typography>
                </td>
              </tr>
              
            );
          })}
          <tr className="h-[10px]">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}
