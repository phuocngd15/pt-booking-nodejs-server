import {IUser} from "../modules/users/users.model";
import {IAccount} from "../modules/accounts/accounts.model";

export const accountSeedingData: Partial<IAccount>[] = [
    {
        username: 'user1',
        password: 'password1'
    },
    {
        username: 'user2',
        password: 'password2'
    },
];

export const userSeedingData : Partial<IUser>[] = [
    {
        fullName: 'nguyenduyphuoc',
        gender: 'male',
        phone: '0937537546',
        email: 'john.doe@example.com',
        birthday: new Date('1992-01-11'),
        avatar: 'https://example.com/avatar.png',
        account: accountSeedingData[0]._id,
    },
    {
        fullName: 'nguyenduy',
        gender: 'male',
        phone: '0937537548',
        email: 'secoder39@gmail.com',
        birthday: new Date('1990-01-01'),
        avatar: 'https://example.com/avatar.png',
        account: accountSeedingData[1]._id,
    }
];