import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeController } from '@nestjs/swagger';

@Controller()
@ApiExcludeController()
export class AppController {
  constructor(
    private readonly _service: AppService
  ) { }

  @Get()
  @Redirect('/swagger')
  public getHello(): void { }
}
