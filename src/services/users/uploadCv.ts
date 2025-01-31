import fs from "fs";
import path from "path";
import { UploadCvRepository } from "../../repository/users/uploadCv";

export class UploadCvService {
    private repository = new UploadCvRepository();

    async uploadCv(userId: number, filePath: string): Promise<void> {
        try {
            console.log("Verificando que el archivo existe:", filePath);
            
            // Asegurar que el nuevo archivo se ha guardado antes de eliminar el viejo
            if (!fs.existsSync(filePath)) {
                throw new Error("El nuevo archivo no se guardó correctamente.");
            }

            // Obtener el path antiguo antes de actualizar en la BD
            const oldCvPath = await this.repository.updateCvPath(userId, filePath);

            // Si hay un CV viejo, eliminarlo
            if (oldCvPath) {
                const fullPath = path.resolve(oldCvPath);
                if (fs.existsSync(fullPath)) {
                    console.log("Eliminando archivo anterior:", fullPath);
                    fs.unlinkSync(fullPath);
                }
            }

            console.log("Nuevo archivo guardado correctamente:", filePath);

        } catch (error) {
            throw error;
        }
    }
}
