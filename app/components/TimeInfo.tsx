type ComponentProps = {
  timeShift: number;
};

const TimeInfo = ({ timeShift }: ComponentProps) => {
  const date = new Date();
  date.setUTCSeconds(date.getUTCSeconds() + timeShift);
  const hours = date.getUTCHours() % 12 === 0 ? 12 : date.getUTCHours() % 12;

  return (
    <div className="flex justify-center items-center select-none text-lg font-semibold">
      <time>
        {hours}
        <span>:</span>
        {date.getUTCMinutes() < 10 ? (
          <span>0{date.getUTCMinutes()}</span>
        ) : (
          <span>{date.getUTCMinutes()}</span>
        )}
        {date.getUTCHours() >= 12 ? <span> PM</span> : <span> AM</span>}
      </time>
    </div>
  );
};
export default TimeInfo;
