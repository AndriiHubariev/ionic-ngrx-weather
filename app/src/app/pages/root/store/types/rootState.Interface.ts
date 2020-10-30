
import { DataResponseInetrface } from 'src/app/shered/interfaces/dataResponse.inetrface';

export interface RootStateInterface {
    isLoading: boolean | null;
    isLoaded: boolean;
    weatherData: DataResponseInetrface[];
    validationErros: any | null;
}
