import fs from "fs";
import path from "path";
import { UploadCvRepository } from "../../repository/users/uploadCv";

export class UploadCvService {
    private repository = new UploadCvRepository();

    async uploadCv(userId: number, filePath: string): Promise<void> {
        try {
            const oldCvPath = await this.repository.updateCvPath(userId, filePath);

            if (oldCvPath) {
                const fullPath = path.resolve(oldCvPath);
                if (fs.existsSync(fullPath)) {
                    fs.unlinkSync(fullPath);
                }
            }

        } catch (error) {
            throw error
        }
    }
    
}