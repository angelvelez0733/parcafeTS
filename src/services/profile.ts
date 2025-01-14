import profileRepository from "../repository/profile";

class profileService {
    static async getProfileByEmail(email: string) {
        try {
            const profile = await profileRepository.getProfileByEmail(email);
            if (!profile) {
                throw new Error("Profile not found");
            }
            return profile;
        } catch (error: any) {
            console.error("Error in service", error.stack);
            throw error;
        }
    }
}
export default profileService;