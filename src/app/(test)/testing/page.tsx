import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { Typography } from "@mui/material";
import PDFGenerator from "@/components/misc/PDFGenerator";

const Page = async () => {
  const session = await auth();
  if (!session) return redirect("/signin");

  return (
    <main className={`p-4 flex flex-col flex-grow gap-2 h-[calc(100vh-56px)]`}>
      <Typography variant="h4" color="primary" className="">
        Testing
      </Typography>
      <div className="flex flex-col gap-4 flex-1">
        <PDFGenerator />
      </div>
    </main>
  );
};

export default Page;
