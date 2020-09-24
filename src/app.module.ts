import { Module } from '@nestjs/common';
import { LivrosModule } from './livros/livros.module';
import { LivrosController } from './livros/livros.controller';
import { LivrosService } from './livros/livros.service';



@Module({
  imports: [LivrosModule],
  providers:[LivrosService],
  controllers: [LivrosController],

})
export class AppModule {}
