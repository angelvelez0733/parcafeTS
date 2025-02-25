export interface ApplicationAdmin {
    id_application: number;
    user: {
        id: number;
        name: string;
        email: string;
    };
    vacancy: {
        id_vacancy: number;
        name: string; 
    };
    state: string;
    cv_url: string; //URL for cv_path
}