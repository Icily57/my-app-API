import db from "../drizzle/db";
import { eq } from "drizzle-orm";

import { statusCatalogTable, TSStatusCatalog, TIStatusCatalog } from "../drizzle/schema";

export const getAllStatusCatalogsService = async ():Promise<TSStatusCatalog[] | null>=> {
    return await db.query.statusCatalogTable.findMany();
}

export const getStatusCatalogByIdService = async (id:number):Promise<TSStatusCatalog | undefined> => {
    return await db.query.statusCatalogTable.findFirst({
        where:eq(statusCatalogTable.id, id)
    });
}

export const createStatusCatalogService = async (statusCatalog:TIStatusCatalog) => {
    await db.insert(statusCatalogTable).values(statusCatalog)
    return "StatusCatalog created successfully 🎉";
}

export const updateStatusCatalogService = async (id:number, statusCatalog:TIStatusCatalog) => {
    await db.update(statusCatalogTable).set(statusCatalog).where(eq(statusCatalogTable.id, id))
    return "StatusCatalog updated successfully 🎉";
}

export const deleteStatusCatalogService = async (id:number) => {
    await db.delete(statusCatalogTable).where(eq(statusCatalogTable.id, id))
    return "StatusCatalog deleted successfully 🎉";
}