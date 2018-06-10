
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Events } from "ionic-angular";

export enum ConnectionStatusEnum {
    Online,
    Offline
}

@Injectable()
export class NetworkCheckProvider {

  private previousStatus;

    constructor(private eventCtrl: Events,
                private netWork:Network) {
        this.previousStatus = ConnectionStatusEnum.Online;
    }

    public initializeNetworkEvents(): void {
        this.netWork.onDisconnect().subscribe(() => {
            if (this.previousStatus === ConnectionStatusEnum.Online) {
                this.eventCtrl.publish('network:offline');
            }
            this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.netWork.onConnect().subscribe(() => {
            if (this.previousStatus === ConnectionStatusEnum.Offline) {
                this.eventCtrl.publish('network:online');
            }
            this.previousStatus = ConnectionStatusEnum.Online;
        });
    }
  

}
