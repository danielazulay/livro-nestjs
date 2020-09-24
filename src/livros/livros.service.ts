import { Get, Injectable } from '@nestjs/common';
import { Livro } from './livros.model';
import {v1} from 'uuid';
import { CreateLivroDto } from './create-livro.dto';

@Injectable()
export class LivrosService {

    private livros: Livro[] =[];

getAlllivros():Livro[]{
    return this.livros;
}

getLivroByid(id:string):Livro{
return this.livros.find(livro=>livro.id==id);

}

deletarLivro(id:string){
 this.livros =   this.livros.filter(livro=>livro.id!==id);
}

createLivro(createLivroDto:CreateLivroDto):Livro{
const{titulo,autor}=createLivroDto;
    const livro:Livro={
    id:v1(),
    titulo,
    autor,

};

this.livros.push(livro);
return livro;

}
}
