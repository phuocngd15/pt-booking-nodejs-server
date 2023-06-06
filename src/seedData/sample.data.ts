// import {IUser} from "../modules/dbModels/users.model";
//
// import {IAccount} from "../modules/dbModels/accounts.model";
// import {IProgram} from "../modules/dbModels/servicePrograms.model";
// import {ITrainer} from "../modules/dbModels/trainers.model";

import {
  IAccount,
  IActivity,
  IGymCenter,
  IProgram,
  ISession,
  ITrainer,
  IUser,
} from '../modules/dbModels/interface';
import mongoose from 'mongoose';
//pwd:admin123 , admin@gmail.com
const programLevelConst = {
  basic: 'Basic',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};
const programTeachingStyleConst = {
  online11: 'Online-1-1',
  offLine11: 'Offline-1-1',
};

export const accountSeedingData: Partial<IAccount>[] = [
  {
    username: 'ptbooking001@gmail.com',
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
    gender: 'Male',
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
    certificates: ['Certificate Master Yogi', 'Certificate Master Nutrition'],
    yearExperience: 3,
    skills: ['Strength', 'Nutrutiology', 'Weight loss'],
  },
  {
    fullName: 'Jacob',
    gender: 'Male',
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
    fullName: 'Rita',
    gender: 'Female',
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

export const userSeedingData: Partial<IUser>[] = [
  {
    fullName: 'Jack nguyen duy',
    gender: 'Male',
    phone: '0937536545',
    email: 'secoder7979@gmail.com',
    address: '',
    birthday: new Date('1992-01-11'),
    avatar: 'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg',
    role: 'customer',
    introduction: 'hi i am a good man',
  },
];

export const serviceProgramsSeedingData: Partial<IProgram>[] = [
  {
    serviceName: 'Yoga 001',
    category: ['Yoga'],
    programLevel: programLevelConst.basic,
    description: 'level beginner',
    teachingStyle: [programTeachingStyleConst.offLine11],
    avatar:
      'https://www.shutterstock.com/image-photo/horizontal-image-seven-multiethnic-people-260nw-1660412536.jpg',
    responsibleEmployees: [],
  },
  {
    serviceName: 'Strength 002',
    category: ['Strength'],
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hEjrE7TrX_LLJ9J-vmxe8AXdI7-wUzRt1qFY8XEQXmT3RYKZRe6e2Xhd92nZl5PIHrU&usqp=CAU',
    responsibleEmployees: [],
    programLevel: programLevelConst.intermediate,
    description: 'level intermediate',
    teachingStyle: [programTeachingStyleConst.online11, programTeachingStyleConst.offLine11],
  },
  {
    serviceName: 'Yoga 003',
    category: ['Yoga'],
    avatar:
      'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/wqjb5u7lxyjx5a7mh8fu.jpg',
    responsibleEmployees: [],
    programLevel: programLevelConst.intermediate,
    description: 'level intermediate',
    teachingStyle: [programTeachingStyleConst.offLine11],
  },
  {
    serviceName: 'Yoga 004',
    category: ['Yoga'],
    avatar:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhUYGRgYGRoZGBwYHBoZGBoZGhgZGhwaGBkcIS4lHB4tIRwYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJSs0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAIDBAUHAQj/xABJEAACAQIDBAYFCQUFBwUAAAABAhEAAwQSIQUxQVEGImFxgZEHEzKhsSNCUmJyssHR8BQkMzThFXOCkqIWJmN0s8LxQ0RTZNP/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQMCBP/EACURAAMBAAICAgICAwEAAAAAAAABAhEDIRJBMWEiUQQyE4HBI//aAAwDAQACEQMRAD8ALFWkRT1pMtSNnkU9RSipFFIDxBUi0xRTre+mA4b6kSvFFSLTEesKSU4rSVaGM9Ap6rXgWpQKEAgtOIr1RThTEROKhdatOtRMKAMrFCsPaFb+LWsTHL+FTY0SYRaNNl/wk7qD8Guhox2YPkk7q3ImWqHOn9wDA3hO9Y94ohc0DekrEEYZ47PHUVtmRmL9IqkTatRu1uHj9lTu8aF8Tt/E46/bsglrhzFFSEC6HMQZHAHUndRhs30eWEK+td7h+cB1EOnIGY8azbOz7dnb9tLShEFgnKu6Sjgn4UAP2f6OnzK128og5iEBYkjUDMYrQww66fbX4ijlqB8F7afaX40qGgypRSAr2tCK2MXqN3Ghn0XD92uduIufhRVjB1G+yfhQx6Mf5W5/f3P+2l7AMeX64VndITGFxB/4F37jVo8v1wrM6Sn9zxP/AC93/ptTAx/RsP3FPtP8RRTc3eI+IoY9HH8in2m+NE93d4r94UAPrl3pUP7xZH/DP3mrqGYc65V6T3nF2hB0trwiZd9076EJmptsfLP9qs+ru1WzXrhgjrNoYka7jBiqMVNmzeAr3jXoFIDWkM9ZactKKcq60AehacoivQte5aYDlFSBaSJUoWmI8ikBTwte5aQxKKkApoWpVWmhHgFOApRThQAxhUTVO1QsKBGdiF0rFxi1u4ndWLiqwzSJsOIFFmz/AOGndQvaGlFOAHyafZFbkTJitBPpLt/uzdpHxFHEUF+ksfu3ey/eFaZkNG9pf1wNAN0f7wp/y5+41H5HWH64UANH+0A/uP8AsO6mB0F9x7jQXgR8on2l+NGdw6HuPwoNwA+UT7S1ljQYUqdXhrQiHF+y3cfhQr6MWH7M44i/cns9mirGnqN9k/Chn0ZmcIx53rhP+mkAVsTIhTv36CND41mdKc37Fitw/d7vb/6bTyrXNZPSz+SxX9xd+41MDJ9HNs/sKSxgsxA0ECd0xNE12wpGonVTrrqGBG/trB9Ho/cbX+L7xoiu7vFfvCgB4Fct9JGuPsD6if8AUeupVyPp4zHaloGIi0qx9okg9sknuIoEzY2p/Guf3j/fNUqt7SPytz7b/fNVctTKG7bFPjWkgpzDWsgOUU8CmZalApoBCpCtILUirTA8VakivVFPK0xHkV6tKvVFAx6inRSApwrRkbSr0ClWRiNRMKmNUrmPtB8huIH+hmXP/lmaAKuKrIxIrYxArJxVYY0WLI0opwQ6ifZHwoYsDSijB+wn2R8K3ImTGgv0kicPH1l+8KNDQb6RR8iv20+8K0zIYlOsDJ8+zlQIqf7wE/8A15/0AUfHeKAbAP8AtBcn/wCAR3ZE/GaYB7d9k9x+FB2zv4ifaFGN32W7j8K59tS8UsXXUwy27hU/WyNl8ZisUNGd0k9KLLeaxgrSOUYq1x5KEjQ5ApEqDPWJ1jQcar7M6c7TzjPat3UO9VUoQJ+awOniDQJsXChAT2RPZyo16NYpA4BbLxGYET3SKnVtPotPGmuzp9rGC9h/WBWXMplXEOp1lWHMGsT0ZD9y77tz8K0cLjUdHQOpZUJKgjMNOI4cKoejX+SH94/xFVl6tJUseBYayOl38jiv7m5901r8axumJ/ccT/dP8K0ZK3QD+Rs9zfeNEF3d4r94VgdAh+42e5vvGt64w0E6yPjQBJXHumagbXtxztE95bf5RXYa4106eNrqfo+pPkAaBM3cSZdzzZj/AKjUWWn7zNKRWDZvItPZK8SpYpYMaFrP2xtuzhgPWN1m9lFEu3cOXbWqBXJOkyO2PvM59khU7FgER2az4mlT8UOV5PDpeytsW7+ih1O+HXLI+qdxrWQUI9DQ7orZ9ASGGUe0jaENwlDEUZAUop0ux8kqX0eqtOIpLQ/082u2FwN64phyAiHcQzkLmGu8Ak+FVJl7aW3MNhyBev20JMAMwB8t9W9n4+1fXPauI680YMPGNxr5bVHckgMxOpO8k8yeJow6FYnE4W6rhGAYgMDpKSJkHeKXSGtZ9ACk1eYe4rqGUyDuIr1qYj2KRFI14DWRg309222Ewjuhh3IRDyZplu8AE+Vcv6JW7ZYXbwDO50Z5J6x1JO/XnRR6a2IsYcwcvrGmOeTTxjN5UMbJvK1oKAIYLlJEECR5aViyvGkdOwlxesEcskSoYklGBKvbltSoIBE/SjgKixIq1hL6vbUZkZgATl4FlEhu0kTVbEikvgzSxliyNKKMJ7C/ZHwoasjQUTYb2F+yPhVJMMloV6bYVrttUSJDq2pjRWBNEeNxAt23c7kVmPcomuC7U6cYi45IaAToBRdNfA5lP5O/m6oIEiTQNYtkbediDBw4yngYVAYNCGx8VjXm5mzwCTLHM0UcdEMaMQVdlhgGyHsIg1hcu1mG64sW6GN72W+yfhXOtt4VrlohBLKcwHOAZ9xJ8KNdp7WsWlYXLigwRG87t0CTXLtrdJ31WyMoPVzH2yGEEgbl0Pae6qUtROXj6B3BuC7ruMj7o3eM1YxNtUZCpgzOp3mRE86oYi0yHOFLDScokjw4irWxLtq44ZyBrBLZZXXeuYHUcornw6k/R1rYmz0S1duLmLXBmOYk5cwJKid0THgKi9GrfuQEHR3E6a6jdWrgsN6vC5fqM0HSM0kLHCBA8KzvRuP3FO13PvrolYjlt7TCckyNNIPHu/rWP0wVjgsQABJtkbzxgHhW3x/XZWT0o/lL2sdQ/hTYkAlrpkuBwdtJTOoIUHMzGSxnKN2tCOM9JuKuXEcZVNuYCghGmNXWTJ0PHiaDttYkM5AGgnXiT2mqli2x3CaXofvo6NhPSfis3XaQN4VVB8CZjhzqDH7STHYk3iGVjlkFpkKAOEQO6h3Y/R29fR3WBl58TExTNjWJYAnedDuIPdS39D8f2jrIcV5NVMAjBArGSOPPlVygDftCZqcjSmW99R4/FpatPccwiKWY9gE+dAjF6T9MLGChWl7rCVRd4HBnPzR765nd27fxlxrl7KIAVQiwAskwTvbxrAvY1sRibl15zOzNB3jfC+AgeFEVpVRM0CI8iKnyVnRXjnew36M7ZtWPV2QczOGd93V1AHfxo9tuGEqQRzFcE2TcLYid2hA8oFHHRbalxMaiM3yeKt5gDwuKoMjkSAQeelLjePxHyrVp0gUB+l7APdwalBm9W4dtDmAgqSI4AMSZ4CiTau30sHLBd+IBgDvPOgbpNt/EYgMitkt5TKpvYccznXyjfVyKBHCW/VlSi6LE6aduszNHuyy1x/Utbm29vOTHBlkQ06ETwHCgxb3UgDUxXQujt12ydXQIqrJChjrAk7iQOPIVy/LOvpS+wzwSBUAAgQCBykaipoqHB4oMArDKw0jly90VPXTmHI32KKydubXTDhRGZ3kIu6Y3kngBI861qAunDn9rsDhkMd5cz8BWbbU6jUJVWMH+ndzEYhLaO4yPcByKqgAgaQfa4njUewsAqG2I0UQZ7N1Xtr3Ue9Yt/OV/dlB/KtS4chAkAzIMa1B0/FadEyteE+yrtoXcRDdd7gJEQohEUfdq/i7ZUwR/UcxQdtW+beJV3PVdCZGmqyTMb/60W2sRnso0zDEeBANal+idz1pesDSiO0wCAkwAoJPIRQ7bOlO2/tCEW0p3quYj3LVpIs92xt221t0VGfOjIfmg5gRx191cTsbAdXAuKQPmneDBG+usYDD5wJFLHbMz6gSVGg3b+FFJtGoxMH+jShHZXcrbVM5I0jKQCBxMjSKc20lQ5LAZBBVSWghTv3cT+jVLGvklMpUlgGmZgRz3ayfAVQDy89tLjhfI+W3uIvthSxjXMRoDoTzis+7gW60jUEfj/SifC2PWJEw69ZG5Hd5VZOFDqXKxnjMOR3MPBgwq/jpBPAetYX2Y/Rojw+Os2b1q2UQyssxUFlfQpB56N7qysTYKugHzHDEaw4Ovgaq7WwbohdoD3LhuwDOUKqIik89JPfXPPHSvv4Om+SXHT7Op3cSrIQDJZSF7SVJHjofKsf0eKRgkBBBDOCDoQQ0EEcDQ9sfajMhctplEd8Bj3wNP8VHmzXBU7gZlu0kak9tXa9nOmXOPn+FYnTO6qYK+WIAyRqY3sB+NBvS/0iHMbGAdSw/iX4DIv1bXBm+sQV7+HNNsftN2bly9cvZZLZ2JyjiVBJCjsEVN0l0bmW+zBxig3DDAyd43TPCt7YWCB6uhnnuqhhdnBnMAn2SOUGd/lRLh7BQFtyoMxPLnUrr0W449sI+j+zDmuWEuZWORiQNddCABAB9nzocubOaximsuOsjgTpLAkFWMcSCtEXRrbi2r9kEK/rixYjQqqIXUzvJkL2RVTpMxbahaDluNbZJ4qERT71aiF32Ll+vgJUSBXhFPFNIqhIIbe891YvTXCJdwbpcuNbSVYlYkkHqprzaBWxbNc39MW0mVbFhTAYtcaDr1YCeElj4ULsYMXbCnrQMwG/jUG08XlQpxGp8QKudFCbytm+bIPboNffQvjsYWJEbiRPcakpbrH6LVSUpr2b3R2+hcFtJgDv1rpuwNl2Ga1duSXsIzoJhRoOsRx3SO+uKYHEhWXN7PHsPOjfZ+2ndLok/wiiHmBEMO7WD2Vmpc15IJpVOMJLzPdZ33sSW7DrMd3CnX9l50BTXOhj3cu+m9FcYLuh9sDUc/rL+Vb3VGZF3IGOh4uQY+NdU41qOZ6njOb5CkEkRz7qMtlXWNgTPWT1iDsV1CRykAH/FXr7Gw2Yu9sE7wrMck79UmD3HTsqntXblq1BZ+uQw04aqRoOHVrEcbT1lL5E1iD3AqLq22LHOOtPBlmcrefuraoC2H0ltsgKGWUAKBv0015Uc2LmZVbmAabc+XXyZyvHX8Elcq6XbYS7j1VGDLZASR9PMc4njGg7wa1PSn0iewiWLbFWuAs7KYbIDAUHhJny7a5fsR815BO/f5ila2WOHlI2elVxrOODj5yW3HLcUP3TVnafS1Ha22oCqc44zOkc+NM9IqZXsE78jL4KwI+/QEzZjv0pTE1KbNVdTTwPf7fXFLcTIZyZbO728wYkknScoA7zRxsn+URuOcT4qfyrk2w9HXvFdN2HiJwxBOqxcP2ZIPxpXKnMHNOk9N1sVkA0B7DurJuXYktrxPxoOsdNFOJuC4cttiotngoWR1uU75ons4hHEqwYH6JBHuraRPQg2TjbZQsrjqgmOOvCO+m4vbFu2pZpM8OJO+hTCbQ/Z0fq5iSVUEwNDqTWbi8UbjknisADcNI/PzohtrsdpJ9Hu0se7u1xxMtqJ9kDcAe74dtK0VeGTdujcR38qp3DPHfvrT2RhQwBGh1mlV+L+gjj8l9m9s9whQnTXKZ4o5jXumf8HbWphnDWxz49p1JPmTWPtpSLVoc3M6cANx5jX3U7D4plTTWN47KtNKlqJVLl4x2NYeuUcHt+8NofM++oce+cJPCB5FfyqhitoJOZmAAkAsY0aDGvEMB5msTau22dSluVBEZtzEH6I3jv302ww1tn3siqmkBiTO6M5InsMJPYsca2emO1HtbLulHKlytstrmKu0PHIkZteRPZQd0XuEuA+pBiTqTxmef5V0Da+FW/hr+HMQ9pss6w6jMjeDAHwqT5ZXRSeKmtOJbExHXKRvE90CjrYmHDKQRoRrXPthH5UfZP4Uf5mXB32UwyoxUjeNIkVDl+cOjif46UejhtK9wEghEXf9H1lwCfAr5indIdrIll0RRF7TdqF0kignZuMa2zEDMHXKwM/SVge8FRV8W3vOGubtyruAA+ArX+Nut9Gf8yU57NTZ2ID4pXU9VVIXs9kAeU0W7bdS+DbTMbhUdolSff8AGocHsWy+Ea5kCvaGZWGmsjTTnu8qJbOMZLCqiIxZNS6yQYiVM6GlSatMU15QxxppNNSY18aVUJG/adY31yD0vXFbF2ws5lsqG5asxEdu/wB1Hr9LsMjMpzypIPUMSDB1oIxOATE3bt7FF1RjCFOs4LapA4gCnmNB8pszuhquEbICWIaAN5O4DzrWw3onusuZ8SisdSoRnE/akfCrPRn1GEuF1Nx7aDeVAfM2/qjhJoofp5ZA0s3z/hUfFqUp62O6WJfRxnH7Ge3imwqnO4uC2CAQGJiDHDfXTekGwkw62lUyVwot9rMpPXPfLfoVhdFL4u7VfF3EdUZrjWywgBmELmO6cs7uJFbXSPbNu7iXVWGa2QhE6mACSBykkeFNrRJtMxdiOQ6kb5Fax2wbbXBBJLsSfE7z5+dZGx9LpHAH3VW25igjOSYGYx267gKlxdUy3L3KI9u9KbvsIchPEbx40NWLxzSxJJ3ljJPeTvqtcuFmJPGvUNXOc6J0MxKI6aaPMjkykT5hh5V1K9t/DYYIl24qsw6q6kxJAJjcO+uJdGsQQ6DkWPnAot2r0efGXDeW7bQ5bYUXCwDAIASGAMQRxFSSS5GWrXxoFunO1P2jF3HzSoYqnLIugjsME+NZWx3+VU99bq9C8deulFsnfBckerHbn3Ed0nsroOH9HeGw2GuOZuXxach2JCqwUnqINBqN5k1Wl+LIy/yQA+kbO4w7hWyi2Q7AHKpLCAzbhMe6hHDWC0lQSFEsQJAHMxuFfRXQlw2GE/SIPkKr9P7ips/EBVWGt5TELGYgAxx1IrPH/VGuT+zOLbCtF7iqoJJPDU9tF+zVY4bEITBFq4mvDLp+FR+i7DRea8VkIuVZ3Z3HPhoD50XYdB/aFzqKQ6C4VOqmVynhxKk+NLklvH9j46S1P9HGH2Pfactp2A4opYeYrZ6G9Hwzu+IR0RIIVgyBzrObdIEe+u3Pi0QAFbSDgCwUeG6hDphtRWHqkCcC7LqDxCg/H/zVHLSJKk2C2PuAjq+zrl7p0qr6yYPH8R+hSvODVUtHd8O0UJYNvS7NaexMVlIXm1ZFrXUHwrR6O2M94A7p/Go866RfgfbCrbwHqbf2z92hTGbRW3x14KDqfDhWj04xrq6WEkZVLM32tAB/lPnQa2HjtY6nj51Ti1SifL3TPMRiGdi77+A4Afr9cBLhk3k7h7ydwqI2HBBKHLPHnwHdWpsqzmcTqqAu3aeHmfhWzAtnoUvQeye8aGj3E3iMPcdT1ltXD4i20e+KDNqqUW3cjUsc3c2Y/ECiDo7iTdS6jbmRhpyIO6ublWUdXE9g5Jse04uK2UxBkx9U10TDnPhL6f8ACf4Vo4vZ9lbThUUHI0E6kHKYMms/o0M2Guk6yMsdjCKXJjpMXH1LQMYXA6gAa1csYWHK8jB7xv8AfW6tvINEju/Os7ALr2mulNM58wIcSuTAFR8+5bXybPHklaNn+GB9WszpMMljDoTufO3eUYD8fOp9jXy9gE75I8Kjf90Wlf8AmzRqLNXpaoi1MwVtp7ALgugh95HBvyNB17MjEFSCNCIMg12BCv6mszaWzrNx8z21YxEkH9Gqy8JNaAOzrqKHDNOcCNDoYBG8dvuNMvYoZWARiYIG4cO2trH423ZuMi4JGCxDMcsyJ3FTpvHhUP8AbCH/ANjh/GD/ANlamc37Fd7n0ZGI2mEwGRQy3EjUgR1iFJBHIbqAsWxJJOpOpJ4muoPtdijJ+zYbK6lWGXgRHCgbZ+xheJUOFZQSAwkOFEkA8DE1Okp6Ny3fYQbAtBbY5gAe6nW+guIxt17xK2rbN1S4LMwAAJVR82QdSRPCoNlsSCOdEtzpFjSP4qD7KL+NT4ZbbZXmpJKQO6X9DzgUtv6/1gdipGTJlIWfpGeNC60W9Ntq3riW1uuH6zMIULEKF4b/AGqzuiWxzib4BHUSGfkROi+PwmrPoinqNHCYJ8OqM6x61MyTyM++Cp8aPdjbQuGwqpcZIJnKFM6DfmB3dnOs/pzhvk7Tx7DlT2B1/NRVjoxgVu2ZJZSrGCvaBvB0PlUpaXJrLUm+JpGkbt878Td8CB8BVHajOqEnEXmnqgF2ymeYnURNWMRs7EJqhFwdgyt5HQ+dYW1sW5CoyMrZtQykHXSdeVdNtOX4nJCapeQT9HMc1m2Ig5t4J5Hf2VD012mL2FayAVa46KNJBhwx18KzcJdRCxGbeVA7OqZ17SYrN27jLjvbyWnZUbMxETOkRrrx86lMtcf2Wqk+T6NfAYldn2kt6F2l3gwJOgnTkN3ZWZj9uu7MwIWdOrAMDcCeI/Ol0txyXnRkRkJTrBxGs6aedV8FspWRWd4LMwEFRooGhDb9T8KxLbrDVLJ8ihise4IJJIPtMSSd+7sFPvXp1nxrQXYdsprfCnjIQjwh9x76sYHo9hjAfHoo+iFE9wLMQKt4sl5L4B645/UfiRVzAdH8Vf8AYsuRzjIv+Z4B8Ca6f0f6O4Wz10AuN9NyrR9kKAoPbE9tbGPt+sRkLFcwiQSCNZ0IIIpAc+2X6N7s5rr5OYQgk+JIFYnRq7luqeZmuh3Nl3ERyty4QqOdLtzgp4M1c82AkuvfUef0dH8ftsJfSFYRcPbvKgDs+UvMkgK0CPD3VH0S6JjE4Vbr3HVnZ8oULlCqxUSI1MgmrvSnBnEWLaqWLK8gE9WCCDvOhg1pdG9nZLQtuAVUdVg++SSQVG7v7a1CrrfjDFue8+dAzpb0b/Y1RvWZw7EAZcsQJ11NUcImRAnz3IZ+wcBRJ08w1lDZChQ0s7ADUjQLJ5Tm8qHsAC75jzHxqjXZNfBa2/hS1tyB1baIzf4nVV/Hyqx0NXVu1T8KJMTs2cDi2I1dJX7NkZh/qz1gdCx11jiQK5+Zdo6eH4ZVxguBGDIYysPcao9H3yW3PDq/EV1zaOAR0cZRJRh5qa5x0Fwi3DB1GUyPARSucaQcdamU8Tj1yOew+Z0FRdH8OHYMSMq9ZjyA1rb6e7LSzh5UQzuiD3sfu1BsDYDtZzezPv5+FUTaeGPFNeRR6SYoXELcnUgdnsgeRqxsQxYHaTTtrdH3W25mYUnyE/hUeAsu2Ht5OZJ/Cp2n5I3LXizR9bUZeq7I44UzO3KtEwwF5edZ20MaqnefKk2JH0l8yazdoOSd/wAa3pjCntC6l5YIOYey0aj8x2UM3XdGysIPxHMURJZP6FMxOBV1hwewhdQeynNNCqUwfd2j2vIVALeVCfogkaLO4jfHbU2JstaMMDB3GIB/I9lMdWdN2UN1VJ0kngv0vCt34udZiPJViHbJURNagFZmHdbaGTuGadTKzBPhx7K9O0vormHAgiPOs8LWYU55rd9FfaGEbEXhaCzG4cZIBOtbez8CMN1bZKwTLagk7pM/Csfo9tcJii9xCASYJnSYgzGsfCiPFbXs3QXy5HO8AkgtMMYK6cTM60pf5PQpfgvH0T7b2q1zCXEdQTAZWGhBVlYSN3DhFa3QCP2dgd+afMUFbTx/ybKqO0kAx7IX5xOs+XbWwu2sNb+SQZWtsoDqxXNKDrg8Vz9UxqAZ50rSVp4ajXDTZ0Lqg/1puKCOuVlRhyaCPhQhgOlD/OhuwlJ8GQmfEVu4XaK3hKlhG8MrCPHcfA1Rk0/QOYno+yOzBSyZiRl68AmQIidO6o7dm3HtL4BPwFE90H6fx/OszE4NH1dVY8yJPnvrS5P2jD4/0wax6WTcAD6ZDrMwVMmeUrMVs4NLTILDkEgs6EGQdIdTG46KRO+akTZKjW25X6rDMvnvHjNWM7oJdSBxYdZPPgO8CsqZdeSZvzajxa/2eJsq19EU9dlWvoL5VPauK2oIINWEIroOckwDNaGVIVSZiNJ51pJjSfaXyJ+B/OqFup0FYaTNy2jUW6jIy66qw17RFct6MEZ9d2ldGtkUD7GsBHuDTq3CoHczCuT+ROJHZ/GrW0dGvYJHtoCokKNdx3c99Zx2bl9h2U98j36++tO3ijlA0IgfCvM6nfVp1IhTTZyvpkr28T12zl0VtNCokqFAJOnVnfzqXo+ULKCcpLD2gV3kQNdCa86W3kuY9wCSECJu4hQSAN8Sx99HGwcALa5hvYBe3STqT2n3Uk1o3LSNPOjWXRSCDbZee9SNfOgj0foOoe0fhRrtC6iW3uOBCIzSYnQaAHfJMDxoI6AAnKN2oE99R5n2i/CvxZ09WrnHo8XJiHTTqm4kcijR+FHVy1cXcFfuOVj4Np/qrmSYXF28TddbTKHd2GVHZgWctvQFW3nj8KpUt416JxSWp+yX0qbTnEW7I3Wlzt2u+7TsUD/MaLehm0bWIw6hdGTqsp576C9r7FuY3rXsPeW5lAFzI4IgmFJ4jU7xGp0WptidEsXY61q5eVuINpSG7DmdQayk98kNtJeLYf7awI9RdPK25/0HtoV6JYcGwikgnKN3jP4VvYG7ihbZb9h3JBEj1SqREGQbp38qGMLsHHI7smVMwXKZHVZI1KlmBkCDBG+d9OpbaYTUpOX7N+7s0HgffVJ9ka+zWthUxeX5RLZbkHaJ5zk3dkHvpxt4n6Fn/O//AOdb8UyTeGStscjXlxPqN+vGp1+0PdUhHbNYw0Z62/q0v2c8qulBzNOCdhp4LTNu7ODqVdAVI1BrD/2NsyCWcxul107iFkUXZPqeZFRukf0poAds9D8KIkNpMddhGbfEERPGrtnotgx8xj3u5H3q1rbKakLgbo91MTMg9G8ID/AQ96z8asWNhYQbsNb8LaflVl7o7aSXRvg++jRj2wNhR1bSDuVRVnDW0jRV91Qu8jcffT7IHBJ8qQD7vd76qEnsqyyfUHkKYUM7qAKxJqK4wq4Ub9H+lMa01AFAnvqxYukcG99SiyedP9S36ilgaVmwdt9cjIx+chCnvI9lvEGvP2S6m4hx4I/kSVY9srVk2H7K9Fhv1NUVNGXKZUTFANlMq30WGVj3A+0O0SKuJcqU4XMsMoZeTSR5Go/7Hn2GKHlOdfJjIHYCK0q/Zlz+iQ38qk8gT5CaCdgXSzgtBLnMZ75NFWMwWIRTKZ1IIJQ5jBESU9of4c1CQxyrevoiFSiL6rMmUuUgOsk73AYjNGpFQ506zDo/jtTunQ1udtQbRxvqrT3InIjPHPKpP4VgbO28jZS5yq4AAZSGR95W4CJCng2nI7ppbY2rh3R09cksCCEcFoP2TNUhtz9kuVJV9HPv7RzOWLddmLE82JknzrpnRLar37RXN103jTrKfxrk+K6Ngn5I3iOEW7rR/lStrYOE2hYdXS07EfUuoW7GDIB76k+OpeoquSaXi+gj6WbXv4hXspacJaYtecjJOSTADwYG+BJOmnObogyoAxYQ2okxu3x+NXBdxTJlfDXj1I9tZkkyMz7l3QZmsDZvRnFoGT1dwIdRme0SjDc6EXJVh2zyII0rNQ679lFyTP4/K+v+nW8Pi0dcywRE8iO8bxUOEeDQVg9j41Y6xlT7TMAxHEMVBB7wAdN9bGGXGrE+qPezk+YRatKednPTW9BPitUrzBXJEcqgDtkhl17Ij3mabh2IOg86AL989U1nrV2+Wy7h5/0qmAaEDHRTYp8dvu/rXkdtMAYQN2fGpgjEb9OylSrICFs/S+FIp9Y+dKlQA5eUn30x7Y/8g0qVAEa2wPm+6pVXspUqaA8KHlTkQ0qVMCYpNT2rZjfHlSpUgJPVnn+vKoHQDf8A18hSpUgPIXsr0IvL3UqVMD0EcvdTpHL4UqVMD0GvP1+tKVKgD1WP6Bp6uf0P615SoAsCY3+8CqGJwlu5AuIjjhnCsPeDSpUAWbWzcMo6tq2O5QPgKkVEGgjsiaVKgCN4nj5GprDDkfKlSoAe7QIiByG7yry0x3ACPL3V5SoAttPIef8ASqyzXtKgCwu7f7v61AhIPGlSoAt3j1faPu/KqWvOvaVCExQa8yUqVAz/2Q==',
    responsibleEmployees: [],
    programLevel: programLevelConst.intermediate,
    description: 'level intermediate',
    teachingStyle: [programTeachingStyleConst.offLine11],
  },
  {
    serviceName: 'Yoga 005',
    category: ['Yoga'],
    avatar: 'https://i.insider.com/6172edae4f281c001296a1e7?width=700',
    responsibleEmployees: [],
    programLevel: programLevelConst.intermediate,
    description: 'level intermediate',
    teachingStyle: [programTeachingStyleConst.offLine11],
  },
  {
    serviceName: 'Cycling 006',
    category: ['Cycling'],
    avatar: 'https://static.oprah.com/images/o2/201112-orig-soul-cycle-spinning-949x534.jpg',
    responsibleEmployees: [],
    programLevel: programLevelConst.intermediate,
    description: 'level intermediate',
    teachingStyle: [programTeachingStyleConst.online11],
  },
  {
    serviceName: 'Boxing 007',
    category: ['Boxing'],
    avatar:
      'https://media.istockphoto.com/id/618981846/photo/boxing-her-way-to-a-ripper-body.jpg?s=612x612&w=0&k=20&c=2SnDLdpS0VUHaNWmlrFlzHZReyHtezVEZhDLxWPatQs=',
    responsibleEmployees: [],
    programLevel: programLevelConst.intermediate,
    description: 'level intermediate',
    teachingStyle: [programTeachingStyleConst.online11],
  },
];

export const activitiesSeedingData: Partial<IActivity>[] = [
  {
    name: 'squat',
    des: 'basic squat',
    level: 'basic',
    sets: 2,
    reps: 12,
    imageDemo:
      'https://d31oxp44ddzkyk.cloudfront.net/source/exercise_img/0/39ce1cd8450e4e2aab7afd6be34d740e.gif',
  },
  {
    name: 'squat',
    des: 'medium squat',
    level: 'basic',
    sets: 2,
    reps: 12,
    imageDemo:
      'https://d31oxp44ddzkyk.cloudfront.net/source/exercise_img/0/39ce1cd8450e4e2aab7afd6be34d740e.gif',
  },
];

export const SessionsAbleMockData: Partial<ISession>[] = [
  {
    startTime: new Date('2022-12-01T08:00:00.000Z'),
    endTime: new Date('2022-12-01T09:00:00.000Z'),
    status: 2,
    createdAt: new Date('2022-11-10T10:30:00.000Z'),
    updatedAt: new Date('2022-11-10T10:30:00.000Z'),
  },
  {
    startTime: new Date('2022-12-01T11:00:00.000Z'),
    endTime: new Date('2022-12-01T12:00:00.000Z'),
    status: 2,
    createdAt: new Date('2022-11-10T10:45:00.000Z'),
    updatedAt: new Date('2022-11-10T10:45:00.000Z'),
  },
  {
    startTime: new Date('2022-12-01T14:00:00.000Z'),
    endTime: new Date('2022-12-01T15:00:00.000Z'),
    status: 2,
    createdAt: new Date('2022-11-10T11:00:00.000Z'),
    updatedAt: new Date('2022-11-10T11:00:00.000Z'),
  },
  {
    startTime: new Date('2022-12-01T17:00:00.000Z'),
    endTime: new Date('2022-12-01T18:00:00.000Z'),
    status: 2,
    createdAt: new Date('2022-11-10T11:15:00.000Z'),
    updatedAt: new Date('2022-11-10T11:15:00.000Z'),
  },
];

export const GymCentersSeedingData: Partial<IGymCenter>[] = [
  {
    centerAddressStr:
      'Binh Duong Square, 3rd Floor, 1 Phu Loi Street, Phu Loi Ward, Thu Dau Mot City, Binh Duong Province.',
    centerDes:
      ' Located in Binh Duong Square, a commercial center, California Fitness & Yoga Center\n' +
      '              Binh Duong is the only internationally prestigious fitness facility in Binh Duong.\n' +
      '              With a total area of up to 16,000m2, it satisfies the workout needs of gym enthusiasts\n' +
      '              in Thu Dau Mot City and the surrounding area.',
    centerImageMain: 'https://cali.vn/storage/app/media/2021/Club/Binh%20Duong/California-4365.jpg',
    centerImages: ['https://cali.vn/storage/app/media/2021/Club/Binh%20Duong/California-4207.jpg'],
    centerName: 'CALI BING DUONG SQUARE',
    centerOperatingDes: 'Monday - Sunday: 5:00 AM - 10:00 PM',
    centerGGLocation: { lat: 10.984571001127811, lng: 106.66716863206851 },
    centerGGContent: 'BING DUONG SQUARE CALI',
    centerGGLabelMaker: 'Cali',
    centerAddressProvince: 'BD',
  },
  {
    centerName: 'CALI SAIGON CENTER',
    centerDes:
      'There is a prime location on the 6th, 7th, and 8th floors of Saigon Center with a luxurious design, \n' +
      'combining California Centuryon Saigon Center gym with Hypoxi center and Eri Beauty Clinic within a 1km radius, \n' +
      'creating a high-end ecosystem to help members quickly achieve their perfect physique.',
    centerAddressStr:
      '6th Floor - Saigon Center, 65 Le Loi Street, Ben Nghe Ward, District 1, Ho Chi Minh City.',
    centerImageMain:
      'https://cali.vn/storage/app/media/2021/Club/HO%20CHI%20MINH/SCC/HCM_900x600.jpg',
    centerImages: [
      'https://cali.vn/storage/app/media/2021/Club/HO%20CHI%20MINH/SCC/Facility%20Slider/SCC_Slider_1900x800px_03.jpg',
      'https://cali.vn/storage/app/media/2021/Club/HO%20CHI%20MINH/SCC/Facility%20Slider/SCC_Slider_1900x800px_10.jpg',
    ],
    centerOperatingDes: 'Monday - Sunday: 5:00 AM - 10:00 PM',
    centerGGLocation: { lat: 10.774147099235272, lng: 106.70113266188328 },
    centerGGContent: 'CALI SAIGON CENTER',
    centerGGLabelMaker: 'Cali SG',
    centerAddressProvince: 'HCM',
  },
  {
    centerName: 'Online',
    centerAddressStr:
      "Freedom! You can use this service at home, outdoors, or while you're on the move.",
    centerImageMain:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkwla8vAoLrIoYgaLBEF5sVPB6o--6oz4Cg&usqp=CAU',
  },
];

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
