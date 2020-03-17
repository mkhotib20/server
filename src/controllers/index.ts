import {Controller, ClassOptions, ChildControllers, Get} from '@overnightjs/core';
import AntrianController from './AntrianController'
import { RspFormat } from '../helpers';
import { Response, Request } from 'express';

@Controller('api')
@ClassOptions({mergeParams: true})
@ChildControllers([
    new AntrianController()
])
class ApiController{
    
}

export default ApiController