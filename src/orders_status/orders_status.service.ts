import db from "../drizzle/db";
import { eq } from "drizzle-orm";

import { ordersStatusTable, TSOrdersStatus, TIOrdersStatus } from "../drizzle/schema";

export const getAllOrdersStatusService = async ():Promise<TSOrdersStatus[] | null>=> {
    return await db.query.ordersStatusTable.findMany();
}

export const getOrdersStatusByIdService = async (id:number):Promise<TSOrdersStatus | undefined> => {
    return await db.query.ordersStatusTable.findFirst({
        where:eq(ordersStatusTable.id, id)
    });
}

export const createOrdersStatusService = async (ordersStatus:TIOrdersStatus) => {
    await db.insert(ordersStatusTable).values(ordersStatus)
    return "Orders Status created successfully 🎉";
}

export const updateOrdersStatusService = async (id:number, ordersStatus:TIOrdersStatus) => {
    await db.update(ordersStatusTable).set(ordersStatus).where(eq(ordersStatusTable.id, id))
    return "Orders Status updated successfully 🎉";
}

export const deleteOrdersStatusService = async (id:number, ordersStatus : TIOrdersStatus) => {
    await db.delete(ordersStatusTable).where(eq(ordersStatusTable.id, id))
    return "Orders Status deleted successfully 🎉";
}
