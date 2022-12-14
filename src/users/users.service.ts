import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    async createUser(name: string, email: string, password: string) {
        await this.checkUserExists(email);

        const signupVerifyToken = uuid.v1();
        console.log(signupVerifyToken);

        await this.saveUser(name, email, password, signupVerifyToken);
        await this.sendMemberJoinEmail(email, signupVerifyToken);
    }

    private checkUserExists(email: string) {
        return false;
    }

    private saveUser(name: string, email: string, password: string, signupVerifyToken: string) {
        return;   
    }

    private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
        return;
    }
}
