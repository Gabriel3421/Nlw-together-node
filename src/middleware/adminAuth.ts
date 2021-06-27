import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepo } from "../repositories/UsersRepo";

export async function adminAuth(request: Request, response: Response, next: NextFunction) {
  const { user_id } = request;
  const userRepo = getCustomRepository(UsersRepo)
  const { admin } = await userRepo.findOne(user_id)
  
  if(admin){
    return next();
  }
  return response.status(401).json({
    error: 'Unauthorized'
  })
}