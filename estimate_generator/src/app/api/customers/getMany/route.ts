import { NextRequest, NextResponse } from 'next/server'
import { customers } from '../../../../db/schemas/customers'
import { db } from '../../../../db'
import { getServerSession } from "next-auth/next"
import { authOptions } from '../../auth/[...nextauth]/route'
import { eq, lt, gte, ne } from "drizzle-orm"

export async function GET(request: NextRequest) {
    const data = await request.json()
    const session = await getServerSession(authOptions)
    try {
        await db.select()
                .from(customers)
                .where(eq(customers.id, data.id))
        return NextResponse.json('Customer sucsessfully created')
    } catch (error) {
        return NextResponse.json(error)
    }
}