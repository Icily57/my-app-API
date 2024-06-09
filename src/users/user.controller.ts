
import { Context } from 'hono';
import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from './user.service';
// import { createUserService } from './user.service';


export const getAllUsers = async (c:Context) => {
    try {
        const users = await getAllUsersService();
        if(users == null) return c.text('No users found', 404)
        return c.json(users, 200)
    } catch (error:any) {
        return c.text(error?.message, 500)
    }
    }

export const createUser = async (c:Context) => {
    try {
        let user = await c.req.json();
        // return c.json(user)
        let createUser = await createUserService(user)
        if(!createUser) {
            return c.json({message: 'User not created'})
        }
            return c.json({msg: createUser})
    } catch (error:any) {
        return c.text(error?.message, 500)
    }
 }

export const getUserById = async (c:Context) => {
    try {
        const id = parseInt(c.req.param("id"))
        if(isNaN(id)) return c.text('Invalid ID 😒', 400)
        const user = await getUserByIdService(id);
    if(user == undefined) return c.text('User not found 😒', 404)
    return c.json(user, 200)
    } catch (error:any) {
        return c.text(error?.message, 500)
    }
}

export const updateUser = async (c:Context) => {
    try {
        const id = Number(c.req.param("id"))
        const user = await c.req.json();
        if(isNaN(id)) return c.text('Invalid ID 😒', 400 )
        const existingUser = await getUserByIdService(id);
        if(existingUser == undefined) return c.text('User not found 😒', 404)    
        let updateUser = await updateUserService(id,user)
        if(!updateUser) {
            return c.json({message: 'User not updated'})
        }
            return c.json({msg: updateUser})
    }catch (error:any) {
        return c.text("sdfdfd", 500)
    }
}

export const deleteUser = async (c:Context) => {
    try {
        const id = Number(c.req.param("id"))
        if(isNaN(id)) return c.text('Invalid ID 😒', 400 )
        const existingUser = await getUserByIdService(id);
        if(existingUser == undefined) return c.text('User not found 😒', 404)    
        let deleteUser = await deleteUserService(id)
        if(!deleteUser) {
            return c.json({message: 'User not deleted'})
        }
            return c.json({msg: deleteUser})
    }
    catch (error:any) {
        return c.text(error?.message, 500)
    }
}