import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateLivroDto } from './create-livro.dto';
import { Livro } from './livros.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
constructor(private livrosServices: LivrosService){

}
@Get()
getAlllivros():Livro[]{
return this.livrosServices.getAlllivros();
}
@Get('/:id')
getLivroByid(@Param('id') id:string):Livro{
return this.livrosServices.getLivroByid(id);
}

@Delete('/:id')
deleteLivroByid(@Param('id')id:string){
this.livrosServices.deletarLivro(id);

}

@Post()
createLivro(@Body() createLivroDto:CreateLivroDto):Livro{

    return this.livrosServices.createLivro(createLivroDto);
}

}
