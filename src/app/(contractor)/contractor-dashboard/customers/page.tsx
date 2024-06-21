import CustomersTable from "@/components/tables/contractorTables/customersTable/CustomersTable";
import { columns } from "@/components/tables/contractorTables/customersTable/columns";
import { customers } from "../../../../db/schemas/customers";
import { db } from "../../../../db";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { Customers } from "@/types/customers";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";

async function getData(session: Session) {
  const res = await db
    .select()
    .from(customers)
    .where(eq(customers.contractor_user_id, session.user?.id));
  return res;
}

const Page = async () => {
  const session = await auth();
  if (!session) return redirect("/signin");
  const data = (await getData(session!)) as Customers[];

  return (
    <main className="flex-grow p-4 flex flex-col gap-4 bg-neutral400">
      <h1 className="text-xl desktop:text-[42px] font-bold text-black">
        Customers
      </h1>
      <Link href={`${process.env.HOST}/contractor-dashboard/customers/form`}>
        <Button
          id="new-change-order-button"
          className="flex-1 bg-blue-500 text-secondary500"
          variant={"outline"}
        >
          New Customer
        </Button>
      </Link>
      <CustomersTable columns={columns} data={data} />
    </main>
  );
};

export default Page;
