import db from "../drizzle/db";
import { eq } from "drizzle-orm";

import { cityTable, TSCity, TICity } from "../drizzle/schema";

export const getAllCitiesService = async ():Promise<TSCity[] | null>=> {
    return await db.query.cityTable.findMany();
}

export const getCityByIdService = async (id:number):Promise<TSCity | undefined> => {
    return await db.query.cityTable.findFirst({
        where:eq(cityTable.id, id)
    });
}

export const createCityService = async (city:TICity) => {
    await db.insert(cityTable).values(city)
    return "City created successfully 🎉";
}

export const updateCityService = async (id:number, city:TICity) => {
    await db.update(cityTable).set(city).where(eq(cityTable.id, id))
    return "City updated successfully 🎉";
}

export const deleteCityService = async (id:number, city : TICity) => {
    await db.delete(cityTable).where(eq(cityTable.id, id))
    return "City deleted successfully 🎉";
}