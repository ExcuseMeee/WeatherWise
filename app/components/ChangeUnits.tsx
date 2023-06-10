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
    <div className="-mt-4 relative">
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
        className="border-[3px] border-black bg-gray-500 px-0 py-2 rounded-md select-none focus:outline-none mx-0 left-full -translate-x-full"
      >
        <div
          className={`unitSelection ${
            units === "imperial" ? "bg-black/10" : ""
          }`}
          onClick={() => {
            setUnits("imperial");
            dialogRef.current?.close();
          }}
        >
          Imperial
        </div>
        <div
          className={`unitSelection ${units === "metric" ? "bg-black/10" : ""}`}
          onClick={() => {
            setUnits("metric");
            dialogRef.current?.close();
          }}
        >
          Metric
        </div>
        <div
          className={`unitSelection ${
            units === "standard" ? "bg-black/10" : ""
          }`}
          onClick={() => {
            setUnits("standard");
            dialogRef.current?.close();
          }}
        >
          Standard
        </div>
      </dialog>
    </div>
  );
};
export default ChangeUnits;
