import { Patient } from './patient';

export interface Employee {
    id: number;
    username: string;
    numPatients: number;
    photoUrl: string;
    city?: string;
    country?: string;
    lastActive?: Date;
    patients?: Patient[];
}
