import {Injectable} from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
@Injectable()

export class AngularProvider {
    public mensagens: AngularFireList<any>;
    public users: AngularFireList<any>;
    public nome: string;
    public email: string;

    constructor(public afAuth: AngularFireAuth, private angularDatabase: AngularFireDatabase) {
        this.mensagens = this.angularDatabase.list('mensagens');
    }

    public loginComGoogle()
    {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public logout()
    {
        this.afAuth.auth.signOut();
    }

    enviarMensagem(mensagem)
    {
        var _mensagem = {
            mensagem: mensagem,
            displayName: this.nome,
            email: this.email,
            timestamp: Date.now()
          };
          this.mensagens.push(_mensagem);
    }
}
