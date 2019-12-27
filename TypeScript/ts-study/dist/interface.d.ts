declare const getUsername: (user: User) => string;
declare const getUsername1: (user: User) => void;
interface User {
    name: string;
    age?: number;
    readonly isMale: boolean;
    say: (words: string) => string;
}
interface Say {
    (words: string): string;
}
interface Config {
    width?: number;
    [propName: string]: any;
}
declare function CalculateAreas(config: Config): {
    area: number;
};
declare let mySquare: {
    area: number;
};
declare let mySquare1: {
    area: number;
};
declare let mySquare2: {
    area: number;
};
interface SupperUser {
    getGrade: () => void;
}
interface VIPUser extends User, SupperUser {
    broadcast: () => void;
}
