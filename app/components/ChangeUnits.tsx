"use client";
import { Units } from "@/types";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { Dispatch, SetStateAction, useRef } from "react";

type ComponentProps = {
  setUnits: Dispatch<SetStateAction<Units>>;
  units: Units;
};

const ChangeUnits = ({ setUnits, units }: ComponentProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleDialog() {
    if (dialogRef.current?.open) {
      dialogRef.current?.close();
    } else {
      dialogRef.current?.show();
    }
  }

  return (
    <div className="relative top-4 -mt-4">
      <div className="flex justify-end">
        <div
          className="flex justify-center items-center rounded-full hover:bg-black/10 hover:cursor-pointer"
          onClick={toggleDialog}
        >
          <SettingsRoundedIcon />
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="mx-0 border-2 border-black left-[95%] mt-[3px] bg-transparent px-0 py-2 rounded-md select-none"
      >
        <div
          className={`unitSelection ${units === "imperial" ? "bg-black/10" : ""}`}
          onClick={() => setUnits("imperial")}
        >
          Imperial
        </div>
        <div
          className={`unitSelection ${units === "metric" ? "bg-black/10" : ""}`}
          onClick={() => setUnits("metric")}
        >
          Metric
        </div>
        <div
          className={`unitSelection ${units === "standard" ? "bg-black/10" : ""}`}
          onClick={() => setUnits("standard")}
        >
          Standard
        </div>
      </dialog>
    </div>
  );
};
export default ChangeUnits;
