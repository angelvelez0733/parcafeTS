export class UploadCvResponseDto {
    constructor(
        public readonly status: string,
        public readonly cvUrl?: string,
    ){}
}