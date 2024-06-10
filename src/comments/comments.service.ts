import db from "../drizzle/db";
import { eq } from "drizzle-orm";

import { commentsTable, TSComments, TIComments } from "../drizzle/schema";

export const getAllCommentsService = async ():Promise<TSComments[] | null>=> {
    return await db.query.commentsTable.findMany();
}

export const getCommentsByIdService = async (id:number):Promise<TSComments | undefined> => {
    return await db.query.commentsTable.findFirst({
        where:eq(commentsTable.id, id)
    });
}

export const createCommentsService = async (comments:TIComments) => {
    await db.insert(commentsTable).values(comments)
    return "Comments created successfully 🎉";
}

export const updateCommentsService = async (id:number, comments:TIComments) => {
    await db.update(commentsTable).set(comments).where(eq(commentsTable.id, id))
    return "Comments updated successfully 🎉";
}

export const deleteCommentsService = async (id:number, comments : TIComments) => {
    await db.delete(commentsTable).where(eq(commentsTable.id, id))
    return "Comments deleted successfully 🎉";
}

