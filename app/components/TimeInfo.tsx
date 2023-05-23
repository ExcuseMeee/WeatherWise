type ComponentProps = {
  timeShift: number;
};

const TimeInfo = ({ timeShift }: ComponentProps) => {
  const date = new Date();
  date.setUTCSeconds(date.getUTCSeconds() + timeShift);

  return (
    <div className="flex justify-center items-center">
      <time>
        {date.getUTCHours()} : {date.getUTCMinutes()}
      </time>
    </div>
  );
};
export default TimeInfo;
