import { db } from "@/db";
import { changeOrders } from "@/db/schemas/changeOrders";
import { Card } from "@mui/material";

async function getData() {
  try {
    const res = await db.select().from(changeOrders);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default async function TotalChangeOrders() {
  const data = await getData();

  return (
    <Card className="flex justify-between items-center rounded-lg p-4">
      <h1>Total Change Orders</h1>
      <h2>{data?.length}</h2>
    </Card>
  );
}
