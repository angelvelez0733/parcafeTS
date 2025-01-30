import multer from "multer";
import path from "path";
import { Request } from "express";

const storage = multer.diskStorage({
    destination: (req: Request, file, cb) => {
        cb(null, "public/storage/");
    },
    filename: (req: Request, file, cb) => {
        const userId = req.body.tokenId;
        const fileName = `cv_${userId}.pdf`;
        cb(null, fileName);
    }
});

const fileFilter = (req: Request, file: any, cb: multer.FileFilterCallback) => {
    if (file.mimetype === "application/pdf") {
        cb(null, true);
    }else {
        cb(new Error("Only pdf files are allowed!"));
    }
};

export const uploadCv = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {fileSize: 5 * 1024 * 1024} //5MB
});