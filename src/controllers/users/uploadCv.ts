import { Request, Response } from "express";
import { UploadCvService } from "../../services/users/uploadCv";
import { UploadCvResponseDto } from "../../DTO/uploadCv";

export class UploadCvController {
    private service = new UploadCvService();

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const userId = Number(req.headers.tokenId);

            if (!userId) {
                res.status(400).json(new UploadCvResponseDto("Usuario no autenticado"));
                return;
            }
            const filePath = req.file?.path;

            if (!filePath || !req.file) {
                res.status(400).json(
                    new UploadCvResponseDto("No se subió ningún archivo")
                );
                return;
            }

            await this.service.uploadCv(userId, filePath);

            res.status(200).json(
                new UploadCvResponseDto("Cv subido correctamente", filePath)
            );

        } catch (error: any) {
            res.status(500).json(
                new UploadCvResponseDto("Error al subir CV: " + error.message)
            );
        }
    }
}