import db from "../drizzle/db";
import { eq } from "drizzle-orm";

import { menuItemsTable, TIMenuItems, TSMenusItems } from "../drizzle/schema";

export const getAllMenuItemsService = async ():Promise<TSMenusItems[] | null>=> {
    return await db.query.menuItemsTable.findMany();
}

export const getMenuItemsByIdService = async (id:number):Promise<TSMenusItems | undefined> => {
    return await db.query.menuItemsTable.findFirst({
        where:eq(menuItemsTable.id, id)
    });
}

export const createMenuItemsService = async (menuItems:TIMenuItems) => {
    await db.insert(menuItemsTable).values(menuItems)
    return "Menu Items created successfully 🎉";
}

export const updateMenuItemsService = async (id:number, menuItems:TIMenuItems) => {
    await db.update(menuItemsTable).set(menuItems).where(eq(menuItemsTable.id, id))
    return "Menu Items updated successfully 🎉";
}

export const deleteMenuItemsService = async (id:number, menuItems : TIMenuItems) => {
    await db.delete(menuItemsTable).where(eq(menuItemsTable.id, id))
    return "Menu Items deleted successfully 🎉";
}


