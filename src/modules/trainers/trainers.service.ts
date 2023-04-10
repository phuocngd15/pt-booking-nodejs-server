interface DataType {
    key: string;
    personId: string;
    fullName: string;
    phone: string;
    birthDay: number;
    address: string;
    email: string;
    rate: number;
    certificate?: string[];
    skills?: string[];
}
const  genTrainerID=(length: number)=> {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}
//personId: `${genID(13).toString()}`,

const generateRandomSkills=(): string[]=> {
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

function generateTrainerData(count: number,groupName:string): DataType[] {
    const data: DataType[] = [];

    for (let i = 0; i < count; i++) {
        const item: DataType = {
            key: `key_${genTrainerID(13).toString()}`,
            personId: `personId_${genTrainerID(13).toString()}`,
            fullName: `Full Name ${i}`,
            phone: `+1-555-555-${i}`,
            birthDay: Math.floor(Math.random() * 31) + 1,
            address: `Address ${i}`,
            email: `email_${i}@example.com`,
            rate: Math.floor(Math.random() * 5) + 1,
            certificate: [`Certificate ${i}_1`, `Certificate ${i}_2`],
            skills: generateRandomSkills(),
        };

        data.push(item);
    }
    if(groupName && groupName!=="All"){
        return data.filter(e=>e.skills.includes(groupName))
    }
    return data;
}

const getTrainersOfServices=(serviceId:string)=>{

}

export {
    generateTrainerData
};
