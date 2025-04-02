import { Tarefa } from "./Status.enum";

export class User {
    private email: String;
    private name: String;
    private password: String;
    private tarefas: Tarefa;

    constructor(
        email: String,
        name: String,
        password: String,
        tarefas: Tarefa
    ) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.tarefas = tarefas;
    }


}