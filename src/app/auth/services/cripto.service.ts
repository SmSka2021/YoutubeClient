import { Injectable } from '@angular/core';
import SimpleCrypto from 'simple-crypto-js';

@Injectable()
export class CriptoService {
  private secretKey = 'some-super-secret-key';

  private simpleCrypto = new SimpleCrypto(this.secretKey);

  public getCriptoObject(object: { [key: string]: string }): string {
    return this.simpleCrypto.encrypt(object);
  }

  public getDecryptedObject(item: string): { [key: string]: string } {
    const result =  this.simpleCrypto.decrypt(item);
    return result as { [key: string]: string };
  }

}
