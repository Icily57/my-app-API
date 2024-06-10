import db from "../drizzle/db";
import { eq } from "drizzle-orm";

import { orderMenuItemTable, TSOrderMenuItem, TIOrderMenuItem } from "../drizzle/schema";

export const getAllOrderMenuItemsService = async ():Promise<TSOrderMenuItem[] | null>=> {
    return await db.query.orderMenuItemTable.findMany();
}

export const getOrderMenuItemByIdService = async (id:number):Promise<TSOrderMenuItem | undefined> => {
    return await db.query.orderMenuItemTable.findFirst({
        where:eq(orderMenuItemTable.id, id)
    });
}

export const createOrderMenuItemService = async (orderMenuItem:TIOrderMenuItem) => {
    await db.insert(orderMenuItemTable).values(orderMenuItem)
    return "Order menu item created successfully 🎉";
}

export const updateOrderMenuItemService = async (id:number, orderMenuItem:TIOrderMenuItem) => {
    await db.update(orderMenuItemTable).set(orderMenuItem).where(eq(orderMenuItemTable.id, id))
    return "Order menu item updated successfully 🎉";
}

export const deleteOrderMenuItemService = async (id:number, orderMenuItem : TIOrderMenuItem) => {
    await db.delete(orderMenuItemTable).where(eq(orderMenuItemTable.id, id))
    return "Order menu item deleted successfully 🎉";
}
