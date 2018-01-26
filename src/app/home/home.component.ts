import { Component, OnInit } from '@angular/core';
import { AngularProvider} from '../providers/angularProvider';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public novaMensagem: string;
  public mensagens: Observable<any[]>;

  constructor(public angularProvider: AngularProvider) { 
    this.mensagens = this.angularProvider.mensagens.snapshotChanges().map(
      changes => {
        return changes.map(c => ({
            displayName:  c.payload.val().displayName,
            mensagem: c.payload.val().mensagem,
            timestamp: c.payload.val().timestamp

        }))
      }
    );
  }

  ngOnInit() {
  }

  isYou(email) {
    if(email == this.angularProvider.email)
      return true;
    else
      return false;
  }
  isMe(email) {
    if(email == this.angularProvider.email)
      return false;
    else
      return true;
  }

  enviarMensagem(){
    this.angularProvider.enviarMensagem(this.novaMensagem);
    this.novaMensagem = '';
  }
}
