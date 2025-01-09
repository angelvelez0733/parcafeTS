import bcrypt from "bcryptjs";

const compareHash = async(
    data: string,
    dataCompare: string,
): Promise<boolean> => {
    const isPasswordValid = await bcrypt.compare(data, dataCompare);
    return isPasswordValid;
};
export default compareHash;