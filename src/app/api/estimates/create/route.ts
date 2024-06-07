import { NextRequest, NextResponse } from "next/server";
import { estimates, lineItems } from "../../../../db/schemas/estimates";
import { db } from "../../../../db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../utils/authOptions";
import { Estimates, LineItems } from "@/types/estimates";
import { Session } from "next-auth";

export async function POST(request: NextRequest) {
  const data = (await request.json()) as Estimates;
  const session = (await getServerSession(authOptions)) as Session;
  const estimateId = Math.floor(Math.random() * 100000000);

  try {
    await db.insert(estimates).values({
      id: estimateId,
      contractor_user_id: session.user.id,
      customer_id: data.customer_id,
      customer_user_id: data.customer_user_id,
      contractorAddress: data.contractorAddress,
      contractorName: data.contractorName,
      contractorPhone: data.contractorPhone,
      customerEmail: data.customerEmail,
      customerName: data.customerName,
      estimateName: data.estimateName,
      message: data.message,
      projectAddress: data.projectAddress,
      status: data.status,
      subtotal: data.subtotal,
      tax: data.tax,
      taxRate: data.taxRate,
      total: data.total,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await db.insert(lineItems).values(
      data.lineItems.map((item: LineItems) => {
        return {
          id: Math.floor(Math.random() * 100000000),
          estimate_id: estimateId,
          amount: item.amount,
          description: item.description,
          item: item.item,
          price: item.price,
          quantity: item.quantity,
          rateType: item.rateType,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }),
    );
    return NextResponse.json("Estimate sucsessfully created");
  } catch (error) {
    return NextResponse.json(error);
  }
}
