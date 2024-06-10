import db from "../drizzle/db";
import { eq } from "drizzle-orm";
import {  stateTable, TSState,TIState } from "../drizzle/schema";

export const getAllStatesService = async ():Promise<TSState[] | null>=> {
    return await db.query.stateTable.findMany();
}

export const createStateService = async (state:TIState) => {
    await db.insert(stateTable).values(state)
    return "State created successfully ";
}

export const getStateByIdService = async (id:number):Promise<TSState | undefined> => {
    return await db.query.stateTable.findFirst({
        where: eq(stateTable.id, id)
    })
}

export const updateStateService = async (id:number,state:TIState) => {
 await db.update(stateTable).set(state).where(eq(stateTable.id, id))
 return "State updated successfully 🎉";
}

export const deleteStateService = async (id:number) => {
    await db.delete(stateTable).where(eq(stateTable.id, id))
    return "State deleted successfully 🎉";
}

export const getStateWithCitiesService = async () => {
    return await db.query.stateTable.findMany({
        with: {
            cities: true
        }
    })
}