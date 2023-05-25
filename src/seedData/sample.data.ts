// import {IUser} from "../modules/dbModels/users.model";
//
// import {IAccount} from "../modules/dbModels/accounts.model";
// import {IProgram} from "../modules/dbModels/servicePrograms.model";
// import {ITrainer} from "../modules/dbModels/trainers.model";

import {IAccount, IActivity, IProgram, ISession, ITrainer, IUser} from '../modules/dbModels/interface';
import mongoose from "mongoose";
//pwd:admin123 , admin@gmail.com
export const accountSeedingData: Partial<IAccount>[] = [
  {
    username: 'admin@gmail.com',
    power: 'admin',
    password: '$2b$10$Y.0du4qroUxZRctUIwNjs.VTBz1BS98NJQ8UItyaxVXoFQEUlzLIm',
  },
  {
    username: 'secoder79@gmail.com',
    power: 'trainer',
    password: '$2b$10$hEDgkozaTWJmz.N.nHTwxu8T745D708z2bc.L8gMUadcYKGRx3yPO',
  },
  {
    username: 'secoder7979@gmail.com',
    power: 'customer',
    password: '$2b$10$hEDgkozaTWJmz.N.nHTwxu8T745D708z2bc.L8gMUadcYKGRx3yPO',
  },
];

// export const trainerSeedingData: Partial<ITrainer>[] = generateTrainerData(1);
export const trainerSeedingData: Partial<ITrainer>[] = [
  {
    fullName: 'Jack',
    gender: 'male',
    phone: '937536543',
    email: 'secoder79@example.com',
    birthday: new Date('1992-01-11'),
    avatar:
      'https://thumb.tildacdn.com/tild6138-6631-4463-b665-616433663138/-/format/webp/Stefan.jpg',

    avatars: [
      'https://thumb.tildacdn.com/tild6138-6631-4463-b665-616433663138/-/format/webp/Stefan.jpg',
      'https://thumb.tildacdn.com/tild6538-3933-4434-a135-653364323732/-/cover/720x960/center/center/-/format/webp/20220408_115419.jpg',
      'https://thumb.tildacdn.com/tild3862-6239-4531-b638-316262643163/-/cover/720x960/center/center/-/format/webp/PHOTO-2021-10-10-07-.jpg',
    ],
    introduction: "I'll share my knowledge to help you achieve your goals, guide and motivate you.",
    role: 'trainer',
    certificates: ['Certificate 0_1', 'Certificate 0_2'],
    yearExperience: 3,
    skills: ['Strength', 'Nutrutiology', 'Weight loss'],
  },
  {
    fullName: 'Jacob',
    gender: 'male',
    phone: '0937537548',
    email: 'secoder39@gmail.com',
    birthday: new Date('1990-01-01'),
    avatar:
      'https://thumb.tildacdn.com/tild6534-6531-4535-a433-626230306530/-/cover/720x960/center/center/-/format/webp/19-min.jpg',
    avatars: [
      'https://thumb.tildacdn.com/tild6534-6531-4535-a433-626230306530/-/cover/720x960/center/center/-/format/webp/19-min.jpg',
      'https://thumb.tildacdn.com/tild3930-3434-4263-b738-666562353232/-/cover/720x960/center/center/-/format/webp/12-min.jpg',
    ],
    role: 'trainer',
    yearExperience: 2,
    skills: ['Strength', 'Nutrutiology', 'Weight loss'],
  },
  {
    fullName: 'RITa',
    gender: 'female',
    phone: '0937537542',
    email: 'secoder79@gmail.com',
    birthday: new Date('1992-01-01'),
    avatar:
      'https://thumb.tildacdn.com/tild6332-6466-4366-b962-633838346536/-/cover/720x960/center/center/-/format/webp/DSC05829.JPG',
    avatars: [
      'https://thumb.tildacdn.com/tild6332-6466-4366-b962-633838346536/-/cover/720x960/center/center/-/format/webp/DSC05829.JPG',
      'https://thumb.tildacdn.com/tild3034-3932-4435-b836-326530393136/-/cover/720x960/center/center/-/format/webp/DSC05751.JPG',
    ],
    role: 'trainer',
    yearExperience: 4,
    skills: ['Hatha Yoga', 'Vinyasa Yoga', 'Meditation', 'Yoga', 'Functional'],
  },
];

export const userSeedingData: Partial<IUser>[]=[
  {
    fullName: "Khach Hang A",
    gender: "male",
    phone: "0937536545",
    email: "secoder7979@gmail.com",
    address: "",
    birthday: new Date('1992-01-11'),
    avatar: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
    role: 'customer',
    introduction: 'hi i am a good man',
  }
]

export const serviceProgramsSeedingData: Partial<IProgram>[] = [
  {
    serviceName: 'Class 001',
    uuid: 'serviceUUID001',
    serviceType: ['Yoga'],
    description: 'level beginner',
    avatar: 'https://example.com/avatar.png',
    responsibleEmployees: [],
  },
  {
    serviceName: 'Class 002',
    uuid: 'serviceUUID002',
    serviceType: ['Yoga'],
    avatar: 'https://example.com/avatar.png',
    responsibleEmployees: [],
    description: 'level intermediate',
  },
  {
    serviceName: 'Class 003',
    uuid: 'serviceUUID003',
    serviceType: ['Yoga'],
    avatar: 'https://example.com/avatar.png',
    responsibleEmployees: [],
    description: 'level intermediate',
  },
  {
    serviceName: 'Class 004',
    uuid: 'serviceUUID004',
    serviceType: ['Yoga'],
    avatar: 'https://example.com/avatar.png',
    responsibleEmployees: [],
    description: 'level intermediate',
  },
  {
    serviceName: 'Class 005',
    uuid: 'serviceUUID005',
    serviceType: ['Yoga'],
    avatar: 'https://example.com/avatar.png',
    responsibleEmployees: [],
    description: 'level intermediate',
  },
  {
    serviceName: 'Class 006',
    uuid: 'serviceUUID006',
    serviceType: ['Yoga'],
    avatar: 'https://example.com/avatar.png',
    responsibleEmployees: [],
    description: 'level intermediate',
  },
  {
    serviceName: 'Class 007',
    uuid: 'serviceUUID007',
    serviceType: ['Yoga'],
    avatar: 'https://example.com/avatar.png',
    responsibleEmployees: [],
    description: 'level intermediate',
  },
];

export const activitiesSeedingData: Partial<IActivity>[] =[
  {
    name:"squat",
    des: "basic squat",
    level:"basic",
    sets:"2",
    reps:"12",
  },
  {
    name:"squat",
    des: "medium squat",
    level:"basic",
    sets:"2",
    reps:"12",
  }
];

export const SessionsAbleMockData: Partial<ISession>[] = [
  {
    trainerUUID: '61e54cf88129b74cb25f6c55',
    customerUUID: '61e54d068129b74cb25f6c56',
    startTime: new Date('2022-12-01T08:00:00.000Z'),
    endTime: new Date('2022-12-01T09:00:00.000Z'),
    status: 'confirmed',
    createdAt: new Date('2022-11-10T10:30:00.000Z'),
    updatedAt: new Date('2022-11-10T10:30:00.000Z'),
  },
  {
    trainerUUID: '61e54cf88129b74cb25f6c55',
    customerUUID: '61e54d198129b74cb25f6c59',
    startTime: new Date('2022-12-01T11:00:00.000Z'),
    endTime: new Date('2022-12-01T12:00:00.000Z'),
    status: 'confirmed',
    createdAt: new Date('2022-11-10T10:45:00.000Z'),
    updatedAt: new Date('2022-11-10T10:45:00.000Z'),
  },
  {
    trainerUUID: '61e54cf88129b74cb25f6c55',
    customerUUID: '61e54d228129b74cb25f6c5b',
    startTime: new Date('2022-12-01T14:00:00.000Z'),
    endTime: new Date('2022-12-01T15:00:00.000Z'),
    status: 'confirmed',
    createdAt: new Date('2022-11-10T11:00:00.000Z'),
    updatedAt: new Date('2022-11-10T11:00:00.000Z'),
  },
  {
    trainerUUID: '61e54cf88129b74cb25f6c55',
    customerUUID: '61e54d2d8129b74cb25f6c5d',
    startTime: new Date('2022-12-01T17:00:00.000Z'),
    endTime: new Date('2022-12-01T18:00:00.000Z'),
    status: 'confirmed',
    createdAt: new Date('2022-11-10T11:15:00.000Z'),
    updatedAt: new Date('2022-11-10T11:15:00.000Z'),
  },
];

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
};

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
  };

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
      avatar:
        'https://thumb.tildacdn.com/tild6138-6631-4463-b665-616433663138/-/format/webp/Stefan.jpg',
    };

    data.push(item);
  }
  return data;
}
