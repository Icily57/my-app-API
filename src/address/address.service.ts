import db from "../drizzle/db";
import { eq } from "drizzle-orm";

import { addressTable, TSAddress, TIAddress } from "../drizzle/schema";

export const getAllAddressesService = async ():Promise<TSAddress[] | null>=> {
    return await db.query.addressTable.findMany();
}

export const getAddressByIdService = async (id:number):Promise<TSAddress | undefined> => {
    return await db.query.addressTable.findFirst({
        where:eq(addressTable.id, id)
    });
}

export const createAddressService = async (address:TIAddress) => {
    await db.insert(addressTable).values(address)
    return "Address created successfully 🎉";
}

export const updateAddressService = async (id:number, address:TIAddress) => {
    await db.update(addressTable).set(address).where(eq(addressTable.id, id))
    return "Address updated successfully 🎉";
}

export const deleteAddressService = async (id:number) => {
    await db.delete(addressTable).where(eq(addressTable.id, id))
    return "Address deleted successfully 🎉";
}