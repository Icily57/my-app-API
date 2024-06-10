import db from "../drizzle/db";
import { eq } from "drizzle-orm";

import { driversTable, TSDrivers, TIDrivers } from "../drizzle/schema";

export const getAllDriversService = async ():Promise<TSDrivers[] | null>=> {
    return await db.query.driversTable.findMany();
}

export const getDriversByIdService = async (id:number):Promise<TSDrivers | undefined> => {
    return await db.query.driversTable.findFirst({
        where:eq(driversTable.id, id)
    });
}

export const createDriversService = async (drivers:TIDrivers) => {
    await db.insert(driversTable).values(drivers)
    return "Drivers created successfully 🎉";
}

export const updateDriversService = async (id:number, drivers:TIDrivers) => {
    await db.update(driversTable).set(drivers).where(eq(driversTable.id, id))
    return "Drivers updated successfully 🎉";
}

export const deleteDriversService = async (id:number, drivers : TIDrivers) => {
    await db.delete(driversTable).where(eq(driversTable.id, id))
    return "Drivers deleted successfully 🎉";
}
