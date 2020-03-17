import {
    OK, getStatusText, NOT_ACCEPTABLE, NOT_FOUND
} from 'http-status-codes'
import { Response } from 'express'

class ResponseFormatter
{
    public static success(res: Response, data: any):void {
        res.status(OK)
        res.json(
            {
                code: OK,
                message: getStatusText(OK),
                data: data
            }
        )
    }
    public static failed(res: Response, data: any): void {
        res.status(NOT_ACCEPTABLE)
        res.json(
            {
                code: NOT_ACCEPTABLE,
                message: getStatusText(NOT_ACCEPTABLE),
                data: data
            }
        )
    }
    public static not_found(res: Response, data: any): void {
        res.status(NOT_FOUND)
        res.json(
            {
                code: NOT_FOUND,
                message: getStatusText(NOT_FOUND),
                data: data
            }
        )
    }
}
export default ResponseFormatter