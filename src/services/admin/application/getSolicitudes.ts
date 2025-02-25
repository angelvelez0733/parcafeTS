import { getApplicationRepo } from "../../../repository/admin/application/getSolicitudes";
import { ApplicationAdmin } from "../../../interfaces/getSolicitudesAdmin";

export const getApplicationService = async(): Promise<ApplicationAdmin[]> => {
    try {
        console.log("Starting getApplicationService");
        const application = await getApplicationRepo();
        //generar cv_url a partir de aquí
        const applicationWithUrl = application.map((application: any) => ({
            id_application: application.id_solicitud,
            user: {
                id: application.user_id,
                name: application.user_nombre,
                email: application.user_correo,
            },
            vacancy: {
                id_vacancy: application.id_vacante,
                name: application.vacante_nombre,
            },
            state: application.estado,
            cv_url: `/public/storage/${application.user_id}`,
        }));
        return applicationWithUrl as ApplicationAdmin[];
    } catch (error: any) {
        console.error("Error in getApplicationService: ", error.message);
        throw error;        
    }
}