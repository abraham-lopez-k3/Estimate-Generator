import { redirect } from "next/navigation";
import { auth } from "../../../../../../auth";

const Page = async () => {
  const session = await auth();
  if (!session) return redirect("/signin");
  return <div>Profile</div>;
};

export default Page;
