// import {IUser} from "../modules/dbModels/users.model";
//
// import {IAccount} from "../modules/dbModels/accounts.model";
// import {IProgram} from "../modules/dbModels/servicePrograms.model";
// import {ITrainer} from "../modules/dbModels/trainers.model";

import {IAccount, IProgram, ISession, ITrainer} from "../modules/dbModels/interface";

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

export const userSeedingData: Partial<ITrainer>[] = generateTrainerData(10)

//     [
//     {
//         fullName: 'nguyenduyphuoc',
//         gender: 'male',
//         phone: '0937537546',
//         email: 'john.doe@example.com',
//         birthday: new Date('1992-01-11'),
//         avatar: 'https://example.com/avatar.png',
//         account: accountSeedingData[0]._id,
//         role: 'trainer',
//         uuid: 'trainer001'
//     },
//     {
//         fullName: 'nguyenduy',
//         gender: 'male',
//         phone: '0937537548',
//         email: 'secoder39@gmail.com',
//         birthday: new Date('1990-01-01'),
//         avatar: 'https://example.com/avatar.png',
//         account: accountSeedingData[1]._id,
//         role: 'trainer',
//         uuid: 'trainer001'
//     }
// ];

export const serviceProgramsSeedingData: Partial<IProgram>[] = [
    {
        serviceName: 'Class 001',
        uuid: "serviceUUID001",
        serviceType: ["Yoga"],
        description: 'level beginner',
        avatar: 'https://example.com/avatar.png',
        responsibleEmployees: [],
    },
    {
        serviceName: 'Class 002',
        uuid: "serviceUUID002",
        serviceType: ["Yoga"],
        avatar: 'https://example.com/avatar.png',
        responsibleEmployees: [],
        description: 'level intermediate',
    },
    {
        serviceName: 'Class 003',
        uuid: "serviceUUID003",
        serviceType: ["Yoga"],
        avatar: 'https://example.com/avatar.png',
        responsibleEmployees: [],
        description: 'level intermediate',
    },
    {
        serviceName: 'Class 004',
        uuid: "serviceUUID004",
        serviceType: ["Yoga"],
        avatar: 'https://example.com/avatar.png',
        responsibleEmployees: [],
        description: 'level intermediate',
    },
    {
        serviceName: 'Class 005',
        uuid: "serviceUUID005",
        serviceType: ["Yoga"],
        avatar: 'https://example.com/avatar.png',
        responsibleEmployees: [],
        description: 'level intermediate',
    },
    {
        serviceName: 'Class 006',
        uuid: "serviceUUID006",
        serviceType: ["Yoga"],
        avatar: 'https://example.com/avatar.png',
        responsibleEmployees: [],
        description: 'level intermediate',
    },
    {
        serviceName: 'Class 007',
        uuid: "serviceUUID007",
        serviceType: ["Yoga"],
        avatar: 'https://example.com/avatar.png',
        responsibleEmployees: [],
        description: 'level intermediate',
    },
];

export const SessionsAbleMockData : Partial<ISession>[] = [{
    "trainerUUID": "61e54cf88129b74cb25f6c55",
    "customerUUID": "61e54d068129b74cb25f6c56",
    "startTime": new Date("2022-12-01T08:00:00.000Z"),
    "endTime":  new Date("2022-12-01T09:00:00.000Z"),
    "status": "confirmed",
    "createdAt": new Date("2022-11-10T10:30:00.000Z"),
    "updatedAt": new Date("2022-11-10T10:30:00.000Z")
}, {

    "trainerUUID": "61e54cf88129b74cb25f6c55",
    "customerUUID": "61e54d198129b74cb25f6c59",
    "startTime":  new Date( "2022-12-01T11:00:00.000Z"),
    "endTime":  new Date("2022-12-01T12:00:00.000Z"),
    "status": "confirmed",
    "createdAt": new Date("2022-11-10T10:45:00.000Z"),
    "updatedAt": new Date("2022-11-10T10:45:00.000Z")
}, {
    "trainerUUID": "61e54cf88129b74cb25f6c55",
    "customerUUID": "61e54d228129b74cb25f6c5b",
    "startTime":  new Date("2022-12-01T14:00:00.000Z"),
    "endTime":  new Date("2022-12-01T15:00:00.000Z"),
    "status": "confirmed",
    "createdAt": new Date("2022-11-10T11:00:00.000Z"),
    "updatedAt": new Date("2022-11-10T11:00:00.000Z")
}, {
    "trainerUUID": "61e54cf88129b74cb25f6c55",
    "customerUUID": "61e54d2d8129b74cb25f6c5d",
    "startTime":  new Date("2022-12-01T17:00:00.000Z"),
    "endTime":  new Date("2022-12-01T18:00:00.000Z"),
    "status": "confirmed",
    "createdAt": new Date("2022-11-10T11:15:00.000Z"),
    "updatedAt":new Date( "2022-11-10T11:15:00.000Z")
}]


// interface DataType {
//     key: string;
//     personId: string;
//     fullName: string;
//     phone: string;
//     birthDay: number;
//     address: string;
//     email: string;
//     rate: number;
//     certificate?: string[];
//     skills?: string[];
// }
const genTrainerID = (length: number) => {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}

//personId: `${genID(13).toString()}`,

function generateTrainerData(count: number): Partial<ITrainer>[] {
    const generateRandomSkills = (): string[] => {
        const skills = [
            'Strength',
            'Yoga',
            'Functional',
            'Pilates',
            'Weight loss',
            'Dancing',
            'Nutrutiology',
            'Stretching',
            'Cardio',
            'Running',
        ];
        const randomSkills = [];

        while (randomSkills.length < 3) {
            const randomIndex = Math.floor(Math.random() * skills.length);
            const randomSkill = skills[randomIndex];

            if (!randomSkills.includes(randomSkill)) {
                randomSkills.push(randomSkill);
            }
        }

        return randomSkills;
    }

    const data: Partial<ITrainer>[] = [];

    for (let i = 0; i < count; i++) {
        const item: Partial<ITrainer> = {
            fullName: `Full Name ${i}`,
            phone: `+1-555-555-${i}`,
            birthday: new Date(1998, 12, 1, 0, 0, 0),
            address: `Address ${i}`,
            email: `email_${i}@example.com`,
            rate: Math.floor(Math.random() * 5) + 1,
            certificates: [`Certificate ${i}_1`, `Certificate ${i}_2`],
            skills: generateRandomSkills(),
        };

        data.push(item);
    }
    return data;
}