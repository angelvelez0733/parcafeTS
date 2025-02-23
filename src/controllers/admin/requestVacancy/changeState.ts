import { Request, Response } from "express";
import sendEmail from "../../../helpers/sendEmail";
import { changeStateService } from "../../../services/requestVacancy/changeState";

export const changeStateController = async (req: Request, res: Response): Promise<any> => {
    try {
        const idSolicitud = Number(req.params.idSolicitud);
        const { estado, email } = req.body;

        const result = await changeStateService(idSolicitud, estado);

        if (result) {
            let subject = "Actualización de tu solicitud";
            let message = `Tu solicitud ha sido ${estado}.`;

            await sendEmail.sendEmail(email, subject, message); 

            return res.status(200).json({
                message: "Change state successfully"
            });
        }
    } catch (error) {
        console.error("Error trying to change state", error);
        return res.status(400).json({ message: "Error" });
    }
};
