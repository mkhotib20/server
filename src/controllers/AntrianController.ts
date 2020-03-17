import {Request, Response} from 'express'
import {Controller,Get, Post} from '@overnightjs/core';
import {Antrian} from '../models'
import { RspFormat } from '../helpers';
import { Logger } from '@overnightjs/logger';

@Controller('antrian')
class CobaController{
    @Post('get')
    public async index(req: Request, res: Response):Promise<void> {
        try {
            console.log(req.body);
            
            let limit = req.body.limit || null 
            let offset = req.body.offset || 0 
            let order = req.body.order || {orderBy : 'createdAt', type: "DESC"}
            let antrian = await Antrian.findAndCountAll({
                offset: offset,
                limit: limit,
                order: [[order.orderBy, order.type]]
            })
            RspFormat.success(res, antrian)
        } catch (error) {
            Logger.Err(error)
            RspFormat.failed(res, error)
        }
    }
    @Post()
    public async insert(req: Request, res: Response): Promise<void> {
        try {
            const rsp = await Antrian.create(req.body)
            RspFormat.success(res, rsp)
        } catch (error) {
            Logger.Err(error)
            RspFormat.failed(res, error)
        }
    }
    @Get('attr')
    public async attributes(req: Request, res: Response): Promise<void>{
        try {
            let rsp = Antrian.rawAttributes

            RspFormat.success(res, Object.keys(rsp))
        } catch (error) {
            RspFormat.failed(res, error)
        }
    }
}

export default CobaController