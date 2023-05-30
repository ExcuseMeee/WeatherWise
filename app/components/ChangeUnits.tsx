"use client";
import { Units } from "@/types";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { Dispatch, SetStateAction, useRef } from "react";

type ComponentProps = {
  setUnits: Dispatch<SetStateAction<Units>>;
};

const ChangeUnits = ({ setUnits }: ComponentProps) => {
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
        className="mx-0 border left-[95%] mt-[2px] bg-transparent p-2 rounded-md"
      >
        <div onClick={() => setUnits("imperial")}>Imperial</div>
        <div onClick={() => setUnits("metric")}>Metric</div>
        <div onClick={() => setUnits("standard")}>Standard</div>
      </dialog>
    </div>
  );
};
export default ChangeUnits;
