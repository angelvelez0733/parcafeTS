export interface CreateVacancyItf {
    name: string;
    description: string;
    publication_date: string;
    deadline: string;
    fk_id_area: number;
}